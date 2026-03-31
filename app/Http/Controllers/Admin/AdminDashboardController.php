<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Delivery;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\Seller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminDashboardController extends Controller
{
    /**
     * Return key statistics for the admin dashboard.
     */
    public function stats()
    {
        $stats = \Illuminate\Support\Facades\Cache::remember('admin_dashboard_stats', 60, function () {
            $totalUsers    = User::where('role', 'customer')->count();
            $totalSellers  = Seller::count();
            $totalProducts = Product::count();
            $totalOrders   = Order::count();

            $revenueToday     = Order::where('payment_status', 'paid')
                ->whereDate('created_at', today())->sum('total');
            $revenueThisWeek  = Order::where('payment_status', 'paid')
                ->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->sum('total');
            $revenueThisMonth = Order::where('payment_status', 'paid')
                ->whereMonth('created_at', now()->month)
                ->whereYear('created_at', now()->year)->sum('total');
            $revenueTotal     = Order::where('payment_status', 'paid')->sum('total');

            $ordersByStatus = Order::select('status', DB::raw('count(*) as count'))
                ->groupBy('status')
                ->pluck('count', 'status');

            $topSellingProducts = OrderItem::select('product_id', DB::raw('SUM(quantity) as total_sold'))
                ->with('product:id,name,price,images')
                ->groupBy('product_id')
                ->orderByDesc('total_sold')
                ->limit(5)
                ->get();

            $lowStockAlerts = Product::lowStock()->count();

            return [
                'total_users'           => $totalUsers,
                'total_sellers'         => $totalSellers,
                'total_products'        => $totalProducts,
                'total_orders'          => $totalOrders,
                'revenue_today'         => (float) $revenueToday,
                'revenue_this_week'     => (float) $revenueThisWeek,
                'revenue_this_month'    => (float) $revenueThisMonth,
                'revenue_total'         => (float) $revenueTotal,
                'orders_by_status'      => $ordersByStatus,
                'top_selling_products'  => $topSellingProducts,
                'low_stock_alerts'      => $lowStockAlerts,
            ];
        });

        return response()->json($stats);
    }

    /**
     * Return sales chart data.
     * Query param: period = 7d | 30d | 90d | 1y
     */
    public function salesChart(Request $request)
    {
        $period = $request->query('period', '30d');
        
        $cacheKey = 'admin_sales_chart_' . $period;
        
        $data = \Illuminate\Support\Facades\Cache::remember($cacheKey, 60, function () use ($period) {
            $days = 30;
            switch ($period) {
                case '7d':
                    $days = 7;
                    break;
                case '90d':
                    $days = 90;
                    break;
                case '1y':
                    $days = 365;
                    break;
            }

            return Order::where('payment_status', 'paid')
                ->where('created_at', '>=', now()->subDays($days))
                ->select(
                    DB::raw('DATE(created_at) as date'),
                    DB::raw('SUM(total) as total_revenue'),
                    DB::raw('COUNT(*) as order_count')
                )
                ->groupBy('date')
                ->orderBy('date')
                ->get();
        });

        return response()->json($data);
    }

    /**
     * Return recent orders.
     */
    public function recentOrders()
    {
        $orders = \Illuminate\Support\Facades\Cache::remember('admin_recent_orders', 60, function () {
            return Order::with(['user:id,name,email'])
                ->orderByDesc('created_at')
                ->limit(10)
                ->get();
        });

        return response()->json($orders);
    }
}

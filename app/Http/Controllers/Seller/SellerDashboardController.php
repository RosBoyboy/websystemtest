<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SellerDashboardController extends Controller
{
    /**
     * Return key statistics scoped to the authenticated seller.
     */
    public function stats(Request $request)
    {
        $seller = $request->user()->seller;

        if (! $seller) {
            return response()->json(['message' => 'Seller profile not found.'], 404);
        }

        $sellerId = $seller->id;

        $stats = \Illuminate\Support\Facades\Cache::remember("seller_dashboard_stats_{$sellerId}", 30, function () use ($sellerId) {
            $totalProducts = Product::where('seller_id', $sellerId)->count();       
            $activeProducts = Product::where('seller_id', $sellerId)->where('status', 'active')->count();
            $lowStockCount  = Product::where('seller_id', $sellerId)->lowStock()->count();

            $earningsTotal = OrderItem::where('seller_id', $sellerId)
                ->whereHas('order', fn ($q) => $q->where('payment_status', 'paid')) 
                ->sum('total_price');

            $earningsThisMonth = OrderItem::where('seller_id', $sellerId)
                ->whereHas('order', fn ($q) => $q->where('payment_status', 'paid')  
                    ->whereMonth('created_at', now()->month)
                    ->whereYear('created_at', now()->year))
                ->sum('total_price');

            $totalOrders = OrderItem::where('seller_id', $sellerId)
                ->distinct('order_id')
                ->count('order_id');

            $pendingFulfillment = OrderItem::where('seller_id', $sellerId)
                ->whereHas('order', fn ($q) => $q->whereIn('status', ['pending', 'confirmed', 'processing']))
                ->count();

            $topProducts = OrderItem::where('seller_id', $sellerId)
                ->select('product_id', DB::raw('SUM(quantity) as total_sold'), DB::raw('SUM(total_price) as revenue'))
                ->with('product:id,name,price,images,stock_quantity')
                ->groupBy('product_id')
                ->orderByDesc('total_sold')
                ->limit(5)
                ->get();

            return [
                'total_products'      => $totalProducts,
                'active_products'     => $activeProducts,
                'low_stock_count'     => $lowStockCount,
                'earnings_total'      => (float) $earningsTotal,
                'earnings_this_month' => (float) $earningsThisMonth,
                'total_orders'        => $totalOrders,
                'pending_fulfillment' => $pendingFulfillment,
                'top_products'        => $topProducts,
            ];
        });

        return response()->json($stats);
    }

    /**
     * Return earnings chart data for the seller.
     * Query param: period = 7d | 30d | 90d | 1y
     */
    public function earningsChart(Request $request)
    {
        $seller = $request->user()->seller;

        if (! $seller) {
            return response()->json(['message' => 'Seller profile not found.'], 404);
        }

        $period = $request->query('period', '30d');
        
        $cacheKey = "seller_earnings_chart_{$seller->id}_{$period}";
        
        $data = \Illuminate\Support\Facades\Cache::remember($cacheKey, 60, function () use ($seller, $period) {
            if ($period === '7d') {
                $days = 7;
            } elseif ($period === '90d') {
                $days = 90;
            } elseif ($period === '1y') {
                $days = 365;
            } else {
                $days = 30;
            }

            return OrderItem::where('seller_id', $seller->id)
                ->whereHas('order', fn ($q) => $q->where('payment_status', 'paid')  
                    ->where('created_at', '>=', now()->subDays($days)))
                ->select(
                    DB::raw('DATE(order_items.created_at) as date'),
                    DB::raw('SUM(total_price) as earnings'),
                    DB::raw('SUM(quantity) as units_sold')
                )
                ->groupBy('date')
                ->orderBy('date')
                ->get();
        });

        return response()->json($data);
    }

    /**
     * Return recent orders containing items from this seller.
     */
    public function recentOrders(Request $request)
    {
        $seller = $request->user()->seller;

        if (! $seller) {
            return response()->json(['message' => 'Seller profile not found.'], 404);
        }

        $orders = \Illuminate\Support\Facades\Cache::remember("seller_recent_orders_{$seller->id}", 30, function () use ($seller) {
            return \App\Models\Order::whereHas('items', fn ($q) => $q->where('seller_id', $seller->id))
                ->with([
                    'user:id,name,email',
                    'items' => fn ($q) => $q->where('seller_id', $seller->id)->with('product:id,name,images'),
                ])
                ->orderByDesc('created_at')
                ->limit(10)
                ->get();
        });

        return response()->json($orders);
    }
}

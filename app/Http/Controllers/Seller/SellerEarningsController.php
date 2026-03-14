<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class SellerEarningsController extends Controller
{
    /**
     * Summary of earnings totals.
     */
    public function summary(Request $request)
    {
        $seller   = $request->user()->seller;
        $sellerId = $seller->id;

        $cacheKey = "seller_{$sellerId}_earnings_summary";
        
        $data = Cache::remember($cacheKey, now()->addHour(), function () use ($sellerId) {
            $all = OrderItem::where('seller_id', $sellerId)
                ->whereHas('order', fn ($q) => $q->where('payment_status', 'paid'));

            $total       = (float) (clone $all)->sum('total_price');
            $thisMonth   = (float) (clone $all)->whereMonth('order_items.created_at', now()->month)
                                ->whereYear('order_items.created_at', now()->year)->sum('total_price');
            $lastMonth   = (float) (clone $all)->whereMonth('order_items.created_at', now()->subMonth()->month)
                                ->whereYear('order_items.created_at', now()->subMonth()->year)->sum('total_price');
            $thisWeek    = (float) (clone $all)->whereBetween('order_items.created_at', [now()->startOfWeek(), now()->endOfWeek()])->sum('total_price');
            $unitsSold   = (int)   (clone $all)->sum('quantity');

            return [
                'total'       => $total,
                'this_month'  => $thisMonth,
                'last_month'  => $lastMonth,
                'this_week'   => $thisWeek,
                'units_sold'  => $unitsSold,
            ];
        });

        return response()->json($data);
    }

    /**
     * Chart data — earnings per day over a given period.
     * Query param: period = 7d | 30d | 90d | 1y
     */
    public function chart(Request $request)
    {
        $seller = $request->user()->seller;
        $period = $request->query('period', '30d');
        $periodMap = [
            '7d'  => 7,
            '30d' => 30,
            '90d' => 90,
            '1y'  => 365,
    ];
    $days = $periodMap[$period] ?? 30;

        $data = OrderItem::where('seller_id', $seller->id)
            ->whereHas('order', fn ($q) => $q->where('payment_status', 'paid')
                ->where('created_at', '>=', now()->subDays($days)))
            ->select(
                DB::raw('DATE(order_items.created_at) as date'),
                DB::raw('SUM(total_price) as earnings'),
                DB::raw('SUM(quantity) as units')
            )
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        return response()->json($data);
    }

    /**
     * Earnings breakdown per product.
     */
    public function byProduct(Request $request)
    {
        $seller = $request->user()->seller;

        $data = OrderItem::where('seller_id', $seller->id)
            ->whereHas('order', fn ($q) => $q->where('payment_status', 'paid'))
            ->select(
                'product_id',
                DB::raw('SUM(quantity) as units_sold'),
                DB::raw('SUM(total_price) as earnings')
            )
            ->with('product:id,name,images,price,sku')
            ->groupBy('product_id')
            ->orderByDesc('earnings')
            ->paginate(20);

        return response()->json($data);
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class AdminOrderController extends Controller
{
    public function index(Request $request)
    {
        $query = Order::with(['user:id,name,email']);

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('payment_status')) {
            $query->where('payment_status', $request->payment_status);
        }

        if ($request->filled('search')) {
            $query->where('order_number', 'like', "%{$request->search}%");
        }

        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }

        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }

        $orders = $query->latest()->paginate(20);

        return response()->json($orders);
    }

    public function show($id)
    {
        $order = Order::with([
            'user:id,name,email',
            'items' => fn ($q) => $q->select('id', 'order_id', 'product_id', 'seller_id', 'quantity', 'size', 'color', 'unit_price', 'total_price', 'status')
                ->with('product:id,name,images', 'seller:id,store_name'),
            'delivery',
        ])->findOrFail($id);

        return response()->json($order);
    }
}

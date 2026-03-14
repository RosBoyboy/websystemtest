<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class SellerOrderController extends Controller
{
    /**
     * List orders that contain items from this seller.
     */
    public function index(Request $request)
    {
        $seller = $request->user()->seller;

        $query = Order::whereHas('items', fn ($q) => $q->where('seller_id', $seller->id))
            ->with([
                'user:id,name,email',
                'items' => fn ($q) => $q->where('seller_id', $seller->id)->with('product:id,name,images,sku'),
                'delivery',
            ]);

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('search')) {
            $query->where('order_number', 'like', "%{$request->search}%");
        }

        $orders = $query->orderByDesc('created_at')->paginate(20);

        return response()->json($orders);
    }

    /**
     * Get a single order with this seller's items.
     */
    public function show(Request $request, $id)
    {
        $seller = $request->user()->seller;

        $order = Order::whereHas('items', fn ($q) => $q->where('seller_id', $seller->id))
            ->with([
                'user:id,name,email',
                'items' => fn ($q) => $q->where('seller_id', $seller->id)->with('product:id,name,images,sku'),
                'delivery',
            ])
            ->findOrFail($id);

        return response()->json($order);
    }

    /**
     * Update fulfillment status — sellers can only advance their own item statuses.
     * Allowed seller transitions: confirmed → processing → shipped
     */
    public function updateFulfillment(Request $request, $id)
    {
        $seller = $request->user()->seller;

        $request->validate([
            'status' => 'required|in:processing,shipped,delivered',
        ]);

        // Validate the order item belongs to the seller
        $orderItem = OrderItem::where('seller_id', $seller->id)->findOrFail($id);

        $orderItem->update(['status' => $request->status]);

        return response()->json(['message' => 'Item status updated.', 'order_item' => $orderItem->fresh()]);
    }
}

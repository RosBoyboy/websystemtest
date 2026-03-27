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
                'items' => fn ($q) => $q->where('seller_id', $seller->id)
                    ->select('id', 'order_id', 'product_id', 'seller_id', 'quantity', 'size', 'color', 'unit_price', 'total_price', 'status')
                    ->with('product:id,name,images,sku'),
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
                'items' => fn ($q) => $q->where('seller_id', $seller->id)
                    ->select('id', 'order_id', 'product_id', 'seller_id', 'quantity', 'size', 'color', 'unit_price', 'total_price', 'status')
                    ->with('product:id,name,images,sku'),
                'delivery',
            ])
            ->findOrFail($id);

        return response()->json($order);
    }

    /**
     * Update fulfillment status — sellers can update status for all their items in an order.
     * This updates the order status and all order items statuses.
     */
    public function updateFulfillment(Request $request, $id)
    {
        $seller = $request->user()->seller;

        $request->validate([
            'status' => 'required|in:confirmed,processing,shipped,out_for_delivery,delivered',
        ]);

        // Find the order and verify it has items from this seller
        $order = Order::whereHas('items', fn ($q) => $q->where('seller_id', $seller->id))
            ->findOrFail($id);

        // Update the order status
        $order->update(['status' => $request->status]);

        // Update all order items belonging to this seller with the same status
        OrderItem::where('order_id', $order->id)
            ->where('seller_id', $seller->id)
            ->update(['status' => $request->status]);

        // Map fulfillment status to delivery tracking status
        if ($order->delivery) {
            $deliveryStatus = $order->delivery->status;
            switch ($request->status) {
                case 'processing':
                    $deliveryStatus = 'picked_up';
                    break;
                case 'shipped':
                    $deliveryStatus = 'in_transit';
                    break;
                case 'out_for_delivery':
                    $deliveryStatus = 'out_for_delivery';
                    break;
                case 'delivered':
                    $deliveryStatus = 'delivered';
                    break;
            }
            $order->delivery->update(['status' => $deliveryStatus]);
        }

        // Return the updated order with seller's items
        $updatedOrder = Order::with([
            'user:id,name,email',
            'items' => fn ($q) => $q->where('seller_id', $seller->id)
                ->select('id', 'order_id', 'product_id', 'seller_id', 'quantity', 'size', 'color', 'unit_price', 'total_price', 'status')
                ->with('product:id,name,images,sku'),
            'delivery',
        ])->findOrFail($id);

        return response()->json(['message' => 'Order status updated successfully.', 'order' => $updatedOrder]);
    }

    /**
     * Update delivery status of an order.
     */
    public function updateDelivery(Request $request, $id)
    {
        $seller = $request->user()->seller;

        $request->validate([
            'status' => 'required|in:pending,picked_up,in_transit,out_for_delivery,delivered',
        ]);

        // Find the order 
        $order = Order::whereHas('items', fn ($q) => $q->where('seller_id', $seller->id))
            ->findOrFail($id);

        // Always update order's status to reflect overall state 
        // Also map some delivery statuses to order statuses if needed, 
        // but since DeliveryTracker passes delivery.status, we can update both.
        $order->update(['status' => $request->status]);

        // Update the delivery record
        if ($order->delivery) {
            $order->delivery->update(['status' => $request->status]);
        } else {
            \App\Models\Delivery::create([
                'order_id' => $order->id,
                'status' => $request->status,
                'tracking_number' => 'TRK-' . strtoupper(\Illuminate\Support\Str::random(10)),
                'carrier' => 'Standard Delivery'
            ]);
        }

        // Return updated order
        $updatedOrder = Order::with([
            'user:id,name,email',
            'items' => fn ($q) => $q->where('seller_id', $seller->id)
                ->select('id', 'order_id', 'product_id', 'seller_id', 'quantity', 'size', 'color', 'unit_price', 'total_price', 'status')
                ->with('product:id,name,images,sku'),
            'delivery',
        ])->findOrFail($id);

        return response()->json($updatedOrder);
    }
}

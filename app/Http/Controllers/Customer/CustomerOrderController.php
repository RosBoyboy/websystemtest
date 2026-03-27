<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Delivery;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class CustomerOrderController extends Controller
{
    public function index(Request $request)
    {
        $query = Order::with([
                'items' => fn ($q) => $q->select('id', 'order_id', 'product_id', 'seller_id', 'quantity', 'size', 'color', 'unit_price', 'total_price', 'status')->with('product:id,name,images,slug', 'seller:id,store_name'),
            ])
            ->where('user_id', $request->user()->id);

        if ($request->filled('filter')) {
            $filter = $request->filter;
            if ($filter === 'pending') {
                $query->whereIn('status', ['pending', 'confirmed']);
            } elseif ($filter === 'shipping') {
                $query->whereIn('status', ['processing', 'shipped', 'out_for_delivery', 'delivered']);
            } elseif ($filter === 'completed') {
                $query->where('status', 'completed');
            } elseif ($filter === 'cancelled') {
                $query->whereIn('status', ['cancelled', 'refunded']);
            }
        }

        if ($request->filled('search')) {
            $query->where('order_number', 'like', '%' . $request->search . '%');
        }

        $orders = $query->latest()->paginate(10);

        return response()->json($orders);
    }

    public function show(Request $request, $id)
    {
        $order = Order::with([
                'items' => fn ($q) => $q->select('id', 'order_id', 'product_id', 'seller_id', 'quantity', 'size', 'color', 'unit_price', 'total_price', 'status')->with('product:id,name,images,slug', 'seller:id,store_name'),
                'delivery',
            ])
            ->where('user_id', $request->user()->id)
            ->findOrFail($id);

        return response()->json($order);
    }

    public function store(Request $request)
    {
        $request->validate([
            'items'                        => 'required|array|min:1',
            'items.*.product_id'           => 'required|integer|exists:products,id',
            'items.*.quantity'             => 'required|integer|min:1',
            'items.*.size'                 => 'nullable|string',
            'items.*.color'                => 'nullable|string',
            'shipping_address'             => 'required|array',
            'shipping_address.name'        => 'required|string',
            'shipping_address.phone'       => 'required|string',
            'shipping_address.address'     => 'required|string',
            'shipping_address.city'        => 'required|string',
            'shipping_address.state'       => 'required|string',
            'shipping_address.postal_code' => 'required|string',
            'shipping_address.country'     => 'required|string',
            'payment_method'               => 'required|string|in:cod,card,bank_transfer',
            'notes'                        => 'nullable|string|max:500',
        ]);

        // Validate stock and calculate totals
        $subtotal = 0;
        $lineItems = [];

        foreach ($request->items as $item) {
            $product = Product::find($item['product_id']);

            if (!$product || $product->status !== 'active') {
                $name = $product ? $product->name : 'Unknown Product';
                return response()->json(['message' => "Product '{$name}' is no longer available."], 422);
            }

            if ($product->stock_quantity < $item['quantity']) {
                return response()->json(['message' => "Not enough stock for '{$product->name}'. Only {$product->stock_quantity} left."], 422);
            }

            $lineTotal = $product->price * $item['quantity'];
            $subtotal += $lineTotal;

            $lineItems[] = [
                'product'    => $product,
                'quantity'   => $item['quantity'],
                'size'       => $item['size'] ?? null,
                'color'      => $item['color'] ?? null,
                'unit_price' => $product->price,
                'total_price'=> $lineTotal,
            ];
        }

        // Fetch shipping fee from settings
        $shippingFee = \App\Models\Setting::where('key', 'shipping_fee')->value('value') ?? 0;
        $total       = $subtotal + $shippingFee;

        $order = DB::transaction(function () use ($request, $subtotal, $shippingFee, $total, $lineItems) {
            $paymentStatus = $request->payment_method === 'cod' ? 'pending' : 'paid';

            $order = Order::create([
                'user_id'          => $request->user()->id,
                'order_number'     => 'NN-' . strtoupper(Str::random(8)),
                'status'           => 'pending',
                'subtotal'         => $subtotal,
                'shipping_fee'     => $shippingFee,
                'discount'         => 0,
                'total'            => $total,
                'payment_method'   => $request->payment_method,
                'payment_status'   => $paymentStatus,
                'notes'            => $request->notes,
            ]);

            foreach ($lineItems as $line) {
                OrderItem::create([
                    'order_id'    => $order->id,
                    'product_id'  => $line['product']->id,
                    'seller_id'   => $line['product']->seller_id,
                    'quantity'    => $line['quantity'],
                    'size'        => $line['size'],
                    'color'       => $line['color'],
                    'unit_price'  => $line['unit_price'],
                    'total_price' => $line['total_price'],
                    'status'      => 'pending',
                ]);

                // Reduce stock
                $line['product']->decrement('stock_quantity', $line['quantity']);
            }

            // Create delivery record
            Delivery::create([
                'order_id'         => $order->id,
                'tracking_number'  => 'TRK-' . strtoupper(Str::random(10)),
                'carrier'          => 'Standard Delivery',
                'status'           => 'pending',
                'estimated_delivery' => now()->addDays(5)->toDateString(),
                'shipping_address' => $request->shipping_address,
            ]);

            return $order;
        });

        return response()->json([
            'message' => 'Order placed successfully!',
            'order'   => $order,
        ], 201);
    }

    public function markReceived(Request $request, $id)
    {
        $order = Order::where('user_id', $request->user()->id)->findOrFail($id);
        
        $order->update([
            'status' => 'completed',
            'payment_status' => 'paid'
        ]);
        
        // Also update items
        \App\Models\OrderItem::where('order_id', $order->id)->update([
            'status' => 'completed'
        ]);

        return response()->json(['message' => 'Order marked as received.']);
    }
}

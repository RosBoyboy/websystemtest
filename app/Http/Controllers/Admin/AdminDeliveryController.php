<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Delivery;
use Illuminate\Http\Request;

class AdminDeliveryController extends Controller
{
    public function index(Request $request)
    {
        $query = Delivery::with(['order.user:id,name,email']);

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('search')) {
            $query->where('tracking_number', 'like', "%{$request->search}%");
        }

        $deliveries = $query->latest()->paginate(20);

        return response()->json($deliveries);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'status'              => 'sometimes|in:pending,picked_up,in_transit,out_for_delivery,delivered,failed',
            'carrier'             => 'sometimes|string|max:100',
            'estimated_delivery'  => 'sometimes|date',
            'actual_delivery'     => 'sometimes|nullable|date',
            'tracking_number'     => 'sometimes|string|max:100',
        ]);

        $delivery = Delivery::findOrFail($id);
        $delivery->update($request->only([
            'status', 'carrier', 'estimated_delivery', 'actual_delivery', 'tracking_number',
        ]));

        // If delivered, set actual_delivery timestamp
        if ($request->status === 'delivered' && ! $delivery->actual_delivery) {
            $delivery->update(['actual_delivery' => now()]);
        }

        return response()->json(['message' => 'Delivery updated.', 'delivery' => $delivery]);
    }
}

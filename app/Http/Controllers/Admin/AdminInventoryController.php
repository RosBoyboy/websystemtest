<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class AdminInventoryController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::with(['seller:id,store_name', 'category:id,name'])
            ->select(['id', 'name', 'sku', 'stock_quantity', 'low_stock_threshold', 'status', 'seller_id', 'category_id', 'price']);

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', "%{$request->search}%")
                  ->orWhere('sku', 'like', "%{$request->search}%");
            });
        }

        if ($request->filled('seller_id')) {
            $query->where('seller_id', $request->seller_id);
        }

        $products = $query->latest()->paginate(30);

        return response()->json($products);
    }

    public function lowStock(Request $request)
    {
        $products = Product::lowStock()
            ->with(['seller:id,store_name'])
            ->select(['id', 'name', 'sku', 'stock_quantity', 'low_stock_threshold', 'seller_id'])
            ->latest()
            ->paginate(30);

        return response()->json($products);
    }

    public function update(Request $request, $productId)
    {
        $request->validate([
            'stock_quantity'    => 'sometimes|integer|min:0',
            'low_stock_threshold' => 'sometimes|integer|min:0',
        ]);

        $product = Product::findOrFail($productId);
        $product->update($request->only(['stock_quantity', 'low_stock_threshold']));

        return response()->json(['message' => 'Inventory updated.', 'product' => $product]);
    }
}

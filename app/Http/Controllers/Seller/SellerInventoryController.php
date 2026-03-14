<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class SellerInventoryController extends Controller
{
    /**
     * List all products for this seller with stock info.
     */
    public function index(Request $request)
    {
        $seller = $request->user()->seller;

        $query = Product::where('seller_id', $seller->id)
            ->with('category:id,name')
            ->select('id', 'name', 'sku', 'stock_quantity', 'low_stock_threshold', 'status', 'category_id', 'images', 'price');

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', "%{$request->search}%")
                  ->orWhere('sku', 'like', "%{$request->search}%");
            });
        }

        if ($request->boolean('low_stock')) {
            $query->lowStock();
        }

        $products = $query->orderBy('stock_quantity')->paginate(25);

        return response()->json($products);
    }

    /**
     * Products below low_stock_threshold for this seller.
     */
    public function lowStock(Request $request)
    {
        $seller = $request->user()->seller;

        $products = Product::where('seller_id', $seller->id)
            ->lowStock()
            ->select('id', 'name', 'sku', 'stock_quantity', 'low_stock_threshold', 'status', 'images')
            ->get();

        return response()->json($products);
    }

    /**
     * Update stock quantity / threshold for a product owned by this seller.
     */
    public function update(Request $request, $productId)
    {
        $seller  = $request->user()->seller;
        $product = Product::where('seller_id', $seller->id)->findOrFail($productId);

        $request->validate([
            'stock_quantity'      => 'sometimes|required|integer|min:0',
            'low_stock_threshold' => 'sometimes|required|integer|min:0',
        ]);

        $product->update($request->only('stock_quantity', 'low_stock_threshold'));

        return response()->json(['message' => 'Stock updated.', 'product' => $product]);
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class AdminProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::with(['seller:id,store_name', 'category:id,name']);

        if ($request->filled('search') && is_string($request->search)) {
            $query->where('name', 'like', "%{$request->search}%");
        }

        if ($request->filled('status')) {
            if (is_array($request->status)) {
                $query->whereIn('status', $request->status);
            } else {
                $query->where('status', $request->status);
            }
        }

        if ($request->filled('category_id')) {
            if (is_array($request->category_id)) {
                $query->whereIn('category_id', $request->category_id);
            } else {
                $query->where('category_id', $request->category_id);
            }
        }

        if ($request->filled('seller_id')) {
             if (is_array($request->seller_id)) {
                $query->whereIn('seller_id', $request->seller_id);
            } else {
                $query->where('seller_id', $request->seller_id);
            }
        }

        $products = $query->latest()->paginate(20);

        return response()->json($products);
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate(['status' => 'required|in:active,inactive,draft']);

        $product = Product::findOrFail($id);
        $product->update(['status' => $request->status]);

        return response()->json(['message' => 'Product status updated.', 'product' => $product]);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json(['message' => 'Product deleted.']);
    }
}

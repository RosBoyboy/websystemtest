<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class SellerProductController extends Controller
{
    /**
     * List only this seller's products.
     */
    public function index(Request $request)
    {
        $seller = $request->user()->seller;

        $cacheKey = 'seller_products_' . $seller->id . '_' . md5(json_encode($request->all()));

        $products = \Illuminate\Support\Facades\Cache::remember($cacheKey, 30, function () use ($request, $seller) {
            $query = Product::where('seller_id', $seller->id)
                ->with('category:id,name');

            if ($request->filled('search')) {
                $query->where('name', 'like', "%{$request->search}%");
            }

            if ($request->filled('status')) {
                $query->where('status', $request->status);
            }

            if ($request->filled('category_id')) {
                $query->where('category_id', $request->category_id);
            }

            return $query->latest()->paginate(20);
        });

        return response()->json($products);
    }

    /**
     * Get a single product (must belong to this seller).
     */
    public function show(Request $request, $id)
    {
        $seller  = $request->user()->seller;
        $product = Product::where('seller_id', $seller->id)
            ->with('category:id,name')
            ->findOrFail($id);

        return response()->json($product);
    }

    /**
     * Create a new product for this seller.
     */
    public function store(Request $request)
    {
        $seller = $request->user()->seller;

        $validated = $request->validate([
            'name'                => 'required|string|max:255',
            'description'         => 'nullable|string',
            'category_id'         => 'required|exists:categories,id',
            'price'               => 'required|numeric|min:0',
            'compare_price'       => 'nullable|numeric|min:0',
            'sku'                 => 'nullable|string|max:100|unique:products,sku',
            'stock_quantity'      => 'required|integer|min:0',
            'low_stock_threshold' => 'nullable|integer|min:0',
            'images'              => 'nullable|array',
            'images.*'            => 'nullable|string',
            'sizes'               => 'nullable|array',
            'colors'              => 'nullable|array',
            'status'              => 'required|in:active,inactive,draft',
        ]);

        $validated['seller_id'] = $seller->id;
        $validated['slug']      = Str::slug($validated['name']) . '-' . uniqid();
        $validated['is_featured'] = false; // Prevent sellers from marking products as featured

        $product = Product::create($validated);
        $product->load('category:id,name');

        return response()->json(['message' => 'Product created.', 'product' => $product], 201);
    }

    /**
     * Update a product owned by this seller.
     */
    public function update(Request $request, $id)
    {
        $seller  = $request->user()->seller;
        $product = Product::where('seller_id', $seller->id)->findOrFail($id);

        $validated = $request->validate([
            'name'                => 'sometimes|required|string|max:255',
            'description'         => 'nullable|string',
            'category_id'         => 'sometimes|required|exists:categories,id',
            'price'               => 'sometimes|required|numeric|min:0',
            'compare_price'       => 'nullable|numeric|min:0',
            'sku'                 => 'nullable|string|max:100|unique:products,sku,' . $id,
            'stock_quantity'      => 'sometimes|required|integer|min:0',
            'low_stock_threshold' => 'nullable|integer|min:0',
            'images'              => 'nullable|array',
            'images.*'            => 'nullable|string',
            'sizes'               => 'nullable|array',
            'colors'              => 'nullable|array',
            'status'              => 'sometimes|required|in:active,inactive,draft',
        ]);

        if (isset($validated['name'])) {
            $validated['slug'] = Str::slug($validated['name']) . '-' . $product->id;
        }

        $product->update($validated);
        $product->load('category:id,name');

        return response()->json(['message' => 'Product updated.', 'product' => $product]);
    }

    /**
     * Delete a product owned by this seller.
     */
    public function destroy(Request $request, $id)
    {
        $seller  = $request->user()->seller;
        $product = Product::where('seller_id', $seller->id)->findOrFail($id);
        $product->delete();

        return response()->json(['message' => 'Product deleted.']);
    }

    /**
     * Return all active categories for the product form.
     */
    public function categories()
    {
        $categories = Category::where('is_active', true)
            ->orderBy('parent_id')
            ->orderBy('name')
            ->get(['id', 'name', 'parent_id']);

        if ($categories->isEmpty()) {
            $categories = Category::orderBy('parent_id')
                ->orderBy('name')
                ->get(['id', 'name', 'parent_id']);
        }

        return response()->json($categories);
    }

    /**
     * Upload a single product image and return its public URL.
     */
    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,jpg,png,gif,webp|max:5120',
        ]);

        $path = $request->file('image')->store('products', 'public');

        return response()->json([
            'url' => asset('storage/' . $path),
        ], 201);
    }
}

<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class CustomerProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::with(['seller:id,store_name', 'category:id,name,slug'])
            ->where('status', 'active')
            ->where('stock_quantity', '>', 0);

        if ($request->filled('category')) {
            $query->whereHas('category', fn($q) => $q->where('slug', $request->category));
        }

        if ($request->filled('q')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->q . '%')
                  ->orWhere('description', 'like', '%' . $request->q . '%');
            });
        }

        if ($request->filled('min_price')) {
            $query->where('price', '>=', $request->min_price);
        }

        if ($request->filled('max_price')) {
            $query->where('price', '<=', $request->max_price);
        }

        if ($request->filled('size')) {
            $query->whereJsonContains('sizes', $request->size);
        }

        if ($request->filled('color')) {
            $query->whereJsonContains('colors', $request->color);
        }

        $sort = $request->get('sort', 'latest');
        switch ($sort) {
            case 'price_asc':
                $query->orderBy('price', 'asc');
                break;
            case 'price_desc':
                $query->orderBy('price', 'desc');
                break;
            case 'featured':
                $query->orderBy('is_featured', 'desc')->latest();
                break;
            default:
                $query->latest();
        }

        $products = $query->paginate($request->get('per_page', 16));

        return response()->json($products);
    }

    public function show($slug)
    {
        $product = Product::with(['seller:id,store_name', 'category:id,name,slug'])
            ->where('slug', $slug)
            ->where('status', 'active')
            ->firstOrFail();

        return response()->json($product);
    }

    public function featured()
    {
        $products = \Illuminate\Support\Facades\Cache::remember('featured_products', 3600, function () {
            return Product::with(['seller:id,store_name', 'category:id,name,slug'])
                ->where('status', 'active')
                ->where('is_featured', true)
                ->latest()
                ->take(8)
                ->get();
        });

        return response()->json($products);
    }

    public function categories()
    {
        $categories = \Illuminate\Support\Facades\Cache::remember('active_categories', 3600, function () {
            return Category::where('is_active', true)
                ->whereNull('parent_id')
                ->with(['children' => fn($q) => $q->where('is_active', true)])
                ->orderBy('name')
                ->get();
        });

        return response()->json($categories);
    }

    public function byCategory($slug)
    {
        $category = Category::where('slug', $slug)->where('is_active', true)->firstOrFail();

        $products = Product::with(['seller:id,store_name'])
            ->where('category_id', $category->id)
            ->where('status', 'active')
            ->latest()
            ->paginate(16);

        return response()->json([
            'category' => $category,
            'products' => $products,
        ]);
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Seller;
use Illuminate\Http\Request;

class AdminSellerController extends Controller
{
    public function index(Request $request)
    {
        $query = Seller::with('user:id,name,email');

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('search')) {
            $query->where('store_name', 'like', "%{$request->search}%");
        }

        $sellers = $query->latest()->paginate(20);

        return response()->json($sellers);
    }

    public function show($id)
    {
        $seller = Seller::with(['user', 'products'])->findOrFail($id);
        return response()->json($seller);
    }

    public function approve($id)
    {
        $seller = Seller::findOrFail($id);
        $seller->update(['status' => 'approved']);

        // Ensure user role is set safely
        if ($seller->user) {
            $seller->user->update(['role' => 'seller']);
        }

        return response()->json(['message' => 'Seller approved.', 'seller' => $seller]);
    }

    public function reject($id)
    {
        $seller = Seller::findOrFail($id);
        $seller->update(['status' => 'rejected']);

        return response()->json(['message' => 'Seller rejected.', 'seller' => $seller]);
    }
}

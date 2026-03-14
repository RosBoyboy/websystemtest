<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SellerProfileController extends Controller
{
    /**
     * Get the authenticated seller's profile.
     */
    public function show(Request $request)
    {
        $user   = $request->user()->load('seller');
        $seller = $user->seller;

        if (! $seller) {
            return response()->json(['message' => 'Seller profile not found.'], 404);
        }

        return response()->json([
            'user'   => $user->only('id', 'name', 'email', 'created_at'),
            'seller' => $seller,
        ]);
    }

    /**
     * Update the seller's store profile.
     */
    public function update(Request $request)
    {
        $user   = $request->user();
        $seller = $user->seller;

        if (! $seller) {
            return response()->json(['message' => 'Seller profile not found.'], 404);
        }

        $validated = $request->validate([
            'store_name'        => 'sometimes|required|string|max:255',
            'store_description' => 'nullable|string|max:1000',
            'logo'              => 'nullable|string',
            // user name update
            'name'              => 'sometimes|required|string|max:255',
        ]);

        if (isset($validated['name'])) {
            $user->update(['name' => $validated['name']]);
            unset($validated['name']);
        }

        if (! empty($validated)) {
            $seller->update($validated);
        }

        return response()->json([
            'message' => 'Profile updated.',
            'user'    => $user->fresh()->only('id', 'name', 'email', 'created_at'),
            'seller'  => $seller->fresh(),
        ]);
    }
}

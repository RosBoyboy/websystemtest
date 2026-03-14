<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Seller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class SellerAuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name'              => 'required|string|max:255',
            'email'             => 'required|email|unique:users,email',
            'password'          => ['required', 'confirmed', Password::min(8)],
            'store_name'        => 'required|string|max:255',
            'store_description' => 'nullable|string|max:1000',
        ]);

        $user = User::create([
            'name'              => $request->name,
            'email'             => $request->email,
            'password'          => Hash::make($request->password),
            'role'              => 'both',
            'status'            => 'active',
            'email_verified_at' => now(),
        ]);

        Seller::create([
            'user_id'           => $user->id,
            'store_name'        => $request->store_name,
            'store_description' => $request->store_description ?? '',
            'status'            => 'pending',
        ]);

        return response()->json([
            'message' => 'Registration successful! Your account is pending admin approval. You will be able to sign in once approved.',
        ], 201);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        $user = \App\Models\User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        if ($user->status === 'banned') {
            return response()->json(['message' => 'Your account has been banned.'], 403);
        }

        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'user'  => $user,
            'token' => $token,
            'role'  => $user->role,
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
        ]);

        $user = \App\Models\User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'role'     => 'customer',
            'status'   => 'active',
        ]);

        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json(['user' => $user, 'token' => $token], 201);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully.']);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }

    /**
     * Upgrade an authenticated customer to have seller role.
     * Changes their role from 'customer' to 'both'.
     */
    public function becomeSeller(Request $request)
    {
        $request->validate([
            'shop_name'        => 'required|string|max:255',
            'shop_description' => 'nullable|string|max:1000',
        ]);

        $user = $request->user();

        // Only customers can upgrade to seller role
        if ($user->role !== 'customer') {
            return response()->json([
                'message' => 'Only customers can upgrade to seller role.',
            ], 403);
        }

        $user->update([
            'role'               => 'both',
            'shop_name'          => $request->shop_name,
            'shop_description'   => $request->shop_description,
        ]);

        // Create a Seller record if one doesn't exist
        if (!$user->seller) {
            \App\Models\Seller::create([
                'user_id'           => $user->id,
                'store_name'        => $request->shop_name,
                'store_description' => $request->shop_description,
                'status'            => 'pending',
            ]);
        }

        return response()->json([
            'message' => 'Successfully upgraded to seller!',
            'user'    => $user,
            'role'    => $user->role,
        ]);
    }
}

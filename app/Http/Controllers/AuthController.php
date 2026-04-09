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

        if (! $user->email_verified_at) {
            // Generate and send a new OTP if it is expired or missing.
            if (! $user->email_otp_expires_at || now()->greaterThan($user->email_otp_expires_at)) {
                $otp = sprintf('%06d', random_int(100000, 999999));
                $user->update(['email_otp' => $otp, 'email_otp_expires_at' => now()->addMinutes(10)]);
                $user->notify(new \App\Notifications\SendRegistrationOTP());
            }

            return response()->json([
                'message' => 'Please verify your email address to log in.',
                'email_unverified' => true,
                'email' => $user->email
            ], 403);
        }

        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'user'  => $user->load('seller'),
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

        $otp = sprintf('%06d', random_int(100000, 999999));

        $user = \App\Models\User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'role'     => 'customer',
            'status'   => 'active',
            'email_otp' => $otp,
            'email_otp_expires_at' => now()->addMinutes(10)
        ]);

        $user->notify(new \App\Notifications\SendRegistrationOTP());

        return response()->json(['message' => 'OTP sent to your email. Please verify to continue.', 'email' => $user->email], 201);     
    }

    public function verifyRegistrationOtp(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp'   => 'required|string|size:6',
        ]);

        $user = \App\Models\User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }

        if ($user->email_verified_at) {
            return response()->json(['message' => 'Email is already verified.'], 400);
        }

        if ($user->email_otp !== $request->otp || !$user->email_otp_expires_at || now()->greaterThan($user->email_otp_expires_at)) {
            return response()->json(['message' => 'Invalid or expired OTP code.'], 400);
        }

        // Verify user
        $user->update([
            'email_verified_at' => now(),
            'email_otp' => null,
            'email_otp_expires_at' => null,
        ]);

        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'message' => 'Email verified successfully!',
            'user'  => $user->load('seller'),
            'token' => $token,
            'role'  => $user->role,
        ], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully.']);
    }

    public function user(Request $request)
    {
        return response()->json($request->user()->load('seller'));
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

        if ($user->role === 'admin') {
            return response()->json([
                'message' => 'Admin account cannot become seller.',
            ], 403);
        }

        if (in_array($user->role, ['seller', 'both'], true)) {
            return response()->json([
                'message' => 'Seller mode is already active on this account.',
                'user'    => $user->load('seller'),
                'role'    => $user->role,
            ]);
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
            'user'    => $user->load('seller'),
            'role'    => $user->role,
        ]);
    }
}

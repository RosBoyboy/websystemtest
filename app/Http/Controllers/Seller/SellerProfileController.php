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
     * Submit complete onboarding data.
     */
    public function submitOnboarding(Request $request)
    {
        $user   = $request->user();
        $seller = $user->seller;

        if (! $seller) {
            return response()->json(['message' => 'Seller profile not found.'], 404);
        }

        // Conditional validation based on business type
        $baseRules = [
            'full_name'         => 'required|string|max:255',
            'contact_number'    => 'required|string|regex:/^[0-9\s\-\+\(\)]+$/',
            'shop_address'      => 'required|string|max:500',
            'business_type'     => 'required|in:individual,business',
            'bank_name'         => 'required|string|max:255',
            'account_name'      => 'required|string|max:255',
            'account_number'    => 'required|string|max:50',
            'ewallet_type'      => 'required|in:gcash,paymaya,none',
            'shipping_fee'      => 'required|numeric|min:0',
            'enable_tracking'   => 'required|boolean',
            'terms_accepted'    => 'required|accepted',
            'delivery_methods'  => 'required|array|min:1',
            'delivery_methods.*' => 'in:self-delivery,third-party',
        ];

        // Add conditional rules
        $rules = $baseRules;
        
        if ($request->input('ewallet_type') !== 'none') {
            $rules['ewallet_number'] = 'required|string|regex:/^[0-9\s\-\+\(\)]+$/';
        }

        if ($request->input('business_type') === 'business') {
            $rules['business_permit'] = 'required|file|mimes:pdf,jpg,jpeg,png|max:5120';
        }

        // File upload rules
        if ($request->hasFile('logo')) {
            $rules['logo'] = 'file|mimes:jpg,jpeg,png,gif,webp|max:5120';
        }

        if ($request->hasFile('valid_id')) {
            $rules['valid_id'] = 'file|mimes:pdf,jpg,jpeg,png|max:5120';
        }

        if ($request->hasFile('selfie')) {
            $rules['selfie'] = 'file|mimes:jpg,jpeg,png,gif,webp|max:5120';
        }

        $validated = $request->validate($rules);

        try {
            // Handle file uploads
            $filePaths = [];

            if ($request->hasFile('logo')) {
                $path = $request->file('logo')->store('sellers/logos', 'public');
                $filePaths['logo'] = $path;
            }

            if ($request->hasFile('valid_id')) {
                $path = $request->file('valid_id')->store('sellers/verification/ids', 'public');
                $filePaths['valid_id_path'] = $path;
            }

            if ($request->hasFile('selfie')) {
                $path = $request->file('selfie')->store('sellers/verification/selfies', 'public');
                $filePaths['selfie_path'] = $path;
            }

            if ($request->hasFile('business_permit')) {
                $path = $request->file('business_permit')->store('sellers/verification/permits', 'public');
                $filePaths['business_permit_path'] = $path;
            }

            // Prepare update data
            $updateData = [
                'full_name'           => $validated['full_name'],
                'contact_number'      => $validated['contact_number'],
                'shop_address'        => $validated['shop_address'],
                'business_type'       => $validated['business_type'],
                'bank_name'           => $validated['bank_name'],
                'account_name'        => $validated['account_name'],
                'account_number'      => $validated['account_number'],
                'ewallet_type'        => $validated['ewallet_type'],
                'ewallet_number'      => $validated['ewallet_number'] ?? null,
                'pickup_address'      => $request->input('pickup_address') ?? $validated['shop_address'],
                'delivery_methods'    => $validated['delivery_methods'],
                'shipping_fee'        => $validated['shipping_fee'],
                'enable_tracking'     => $validated['enable_tracking'],
                'terms_accepted'      => true,
                'terms_accepted_at'   => now(),
                'onboarding_status'   => 'completed',
                'onboarding_completed_at' => now(),
                // Keep status as pending for admin approval
                'status'              => 'pending',
            ];

            // Merge file paths
            $updateData = array_merge($updateData, $filePaths);

            $seller->update($updateData);

            return response()->json([
                'message' => 'Onboarding submitted successfully. Awaiting admin approval.',
                'seller'  => $seller->fresh(),
                'status'  => 'pending_approval',
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to submit onboarding: ' . $e->getMessage(),
            ], 422);
        }
    }
}

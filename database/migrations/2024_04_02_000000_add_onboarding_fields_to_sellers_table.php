<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOnboardingFieldsToSellersTable extends Migration
{
    public function up()
    {
        Schema::table('sellers', function (Blueprint $table) {
            // Personal Information
            if (!Schema::hasColumn('sellers', 'full_name')) {
                $table->string('full_name')->nullable();
            }
            if (!Schema::hasColumn('sellers', 'contact_number')) {
                $table->string('contact_number')->nullable();
            }
            
            // Shop Details
            if (!Schema::hasColumn('sellers', 'shop_address')) {
                $table->text('shop_address')->nullable();
            }
            if (!Schema::hasColumn('sellers', 'business_type')) {
                $table->enum('business_type', ['individual', 'business'])->default('individual');
            }
            
            // Payment Information
            if (!Schema::hasColumn('sellers', 'bank_name')) {
                $table->string('bank_name')->nullable();
            }
            if (!Schema::hasColumn('sellers', 'account_name')) {
                $table->string('account_name')->nullable();
            }
            if (!Schema::hasColumn('sellers', 'account_number')) {
                $table->string('account_number')->nullable();
            }
            if (!Schema::hasColumn('sellers', 'ewallet_type')) {
                $table->enum('ewallet_type', ['gcash', 'paymaya', 'none'])->default('none');
            }
            if (!Schema::hasColumn('sellers', 'ewallet_number')) {
                $table->string('ewallet_number')->nullable();
            }
            
            // Shipping / Delivery
            if (!Schema::hasColumn('sellers', 'pickup_address')) {
                $table->text('pickup_address')->nullable();
            }
            if (!Schema::hasColumn('sellers', 'delivery_methods')) {
                $table->json('delivery_methods')->nullable();
            }
            if (!Schema::hasColumn('sellers', 'shipping_fee')) {
                $table->decimal('shipping_fee', 8, 2)->default(0);
            }
            if (!Schema::hasColumn('sellers', 'enable_tracking')) {
                $table->boolean('enable_tracking')->default(false);
            }
            
            // Verification Documents
            if (!Schema::hasColumn('sellers', 'valid_id_path')) {
                $table->string('valid_id_path')->nullable();
            }
            if (!Schema::hasColumn('sellers', 'selfie_path')) {
                $table->string('selfie_path')->nullable();
            }
            if (!Schema::hasColumn('sellers', 'business_permit_path')) {
                $table->string('business_permit_path')->nullable();
            }
            
            // Terms & Agreements
            if (!Schema::hasColumn('sellers', 'terms_accepted')) {
                $table->boolean('terms_accepted')->default(false);
            }
            if (!Schema::hasColumn('sellers', 'terms_accepted_at')) {
                $table->timestamp('terms_accepted_at')->nullable();
            }
            
            // Onboarding Status
            if (!Schema::hasColumn('sellers', 'onboarding_status')) {
                $table->enum('onboarding_status', ['not_started', 'in_progress', 'completed'])->default('not_started');
            }
            if (!Schema::hasColumn('sellers', 'onboarding_completed_at')) {
                $table->timestamp('onboarding_completed_at')->nullable();
            }
        });
    }

    public function down()
    {
        Schema::table('sellers', function (Blueprint $table) {
            $table->dropColumn([
                'full_name',
                'contact_number',
                'shop_address',
                'business_type',
                'bank_name',
                'account_name',
                'account_number',
                'ewallet_type',
                'ewallet_number',
                'pickup_address',
                'delivery_methods',
                'shipping_fee',
                'enable_tracking',
                'valid_id_path',
                'selfie_path',
                'business_permit_path',
                'terms_accepted',
                'terms_accepted_at',
                'onboarding_status',
                'onboarding_completed_at',
            ]);
        });
    }
}

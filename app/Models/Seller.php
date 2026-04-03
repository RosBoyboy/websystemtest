<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'store_name',
        'store_description',
        'logo',
        'status',
        // Personal Information
        'full_name',
        'contact_number',
        // Shop Details
        'shop_address',
        'business_type',
        // Payment Information
        'bank_name',
        'account_name',
        'account_number',
        'ewallet_type',
        'ewallet_number',
        // Shipping / Delivery
        'pickup_address',
        'delivery_methods',
        'shipping_fee',
        'enable_tracking',
        // Verification Documents
        'valid_id_path',
        'selfie_path',
        'business_permit_path',
        // Terms & Agreements
        'terms_accepted',
        'terms_accepted_at',
        // Onboarding Status
        'onboarding_status',
        'onboarding_completed_at',
    ];

    protected $casts = [
        'delivery_methods' => 'array',
        'terms_accepted' => 'boolean',
        'enable_tracking' => 'boolean',
        'terms_accepted_at' => 'datetime',
        'onboarding_completed_at' => 'datetime',
    ];

    public function getLogoAttribute($value)
    {
        if (!$value) return null;
        if (!is_string($value)) return $value;
        
        if (preg_match('/(sellers|logos)\/[a-zA-Z0-9_-]+\.(png|jpg|jpeg|gif|webp)/i', $value, $matches)) {
            return '/api/images?path=' . $matches[0];
        }
        return preg_replace('/^(https?:\/\/[^\/]+)?(\/api)?\/storage\//', '/storage/', $value);
    }

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function orders()
    {
        return $this->hasManyThrough(Order::class, OrderItem::class, 'seller_id', 'id', 'id', 'order_id');
    }

    // Scopes
    public function scopeApproved($query)
    {
        return $query->where('status', 'approved');
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}

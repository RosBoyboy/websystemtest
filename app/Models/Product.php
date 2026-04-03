<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'seller_id',
        'category_id',
        'name',
        'slug',
        'description',
        'price',
        'compare_price',
        'sku',
        'stock_quantity',
        'low_stock_threshold',
        'images',
        'sizes',
        'colors',
        'status',
        'is_featured',
    ];

    protected $casts = [
        'images'      => 'array',
        'sizes'       => 'array',
        'colors'      => 'array',
        'price'       => 'decimal:2',
        'compare_price' => 'decimal:2',
        'is_featured' => 'boolean',
    ];

    public function getImagesAttribute($value)
    {
        if (is_string($value)) {
            $value = json_decode($value, true) ?: [];
        }

        $images = is_array($value) ? $value : [];

        return array_map(function ($url) {
            // Force dynamic image routing so Vercel does not block local/ephemeral uploads
            if (is_string($url) && preg_match('/products\/[a-zA-Z0-9_-]+\.(png|jpg|jpeg|gif|webp)/i', $url, $matches)) {
                return '/api/images?path=' . $matches[0];
            }
            return $url;
        }, $images);
    }

    // Relationships
    public function seller()
    {
        return $this->belongsTo(Seller::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeLowStock($query)
    {
        return $query->whereColumn('stock_quantity', '<=', 'low_stock_threshold');
    }
}

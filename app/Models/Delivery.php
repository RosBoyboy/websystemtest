<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'tracking_number',
        'carrier',
        'status',
        'estimated_delivery',
        'actual_delivery',
        'shipping_address',
    ];

    protected $casts = [
        'shipping_address'  => 'array',
        'estimated_delivery' => 'date',
        'actual_delivery'   => 'datetime',
    ];

    // Relationships
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}

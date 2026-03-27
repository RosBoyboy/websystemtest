<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\OrderItem;
use App\Models\Order;

$sellerId = 1;

$all = OrderItem::where('seller_id', $sellerId)
    ->whereHas('order', fn ($q) => $q->where('payment_status', 'paid'));

$total       = (float) (clone $all)->sum('total_price');
$thisMonth   = (float) (clone $all)->whereMonth('order_items.created_at', now()->month)
                    ->whereYear('order_items.created_at', now()->year)->sum('total_price');

echo "Total: $total\n";
echo "This month: $thisMonth\n";

$orders = Order::where('payment_status', 'paid')->get();
echo "Orders paid:\n";
foreach($orders as $o) {
    echo "ID: $o->id, total: $o->total, status: $o->status\n";
    $items = $o->items;
    foreach($items as $i) {
        echo "  Item: {$i->total_price}, seller: {$i->seller_id}, date: {$i->created_at}\n";
    }
}

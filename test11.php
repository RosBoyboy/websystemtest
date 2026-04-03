<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$products = App\Models\Product::all();
$huge = 0;
foreach ($products as $p) {
    $raw = (string)$p->getRawOriginal('images');
    if (strlen($raw) > 500000) { // 500KB
        echo "Product ID " . $p->id . " has large images (" . strlen($raw) . " bytes)\n";
        $huge++;
    }
}
echo "Total huge products: " . $huge . "\n";

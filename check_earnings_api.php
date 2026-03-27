<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$request = Illuminate\Http\Request::create('/api/seller/earnings/summary', 'GET');
$request->setUserResolver(function() {
    return App\Models\User::where('role', 'seller')->first();
});

$controller = new App\Http\Controllers\Seller\SellerEarningsController();
$response = $controller->summary($request);
echo "SUMMARY: " . $response->getContent() . "\n";

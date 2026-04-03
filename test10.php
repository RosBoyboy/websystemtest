<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$user = App\Models\User::where('role', 'seller')->first();
if (!$user) {
    echo "No seller user";
    exit;
}

$req = Illuminate\Http\Request::create('/api/seller/products', 'GET');
$req->headers->set('Accept', 'application/json');
$req->setUserResolver(function() use ($user) {
    return $user;
});

$res = $kernel->handle($req);
echo "Status: " . $res->getStatusCode() . "\n";
echo $res->getContent();

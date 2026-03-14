<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Customer frontend — SPA served at root
Route::get('/', function () {
    return view('shop');
});

// Explicit customer SPA routes (history mode support)
foreach (['/products', '/cart', '/checkout', '/orders', '/login', '/register', '/account'] as $path) {
    Route::get($path, function () { return view('shop'); });
}
Route::get('/products/{slug}', function () { return view('shop'); });
Route::get('/orders/{id}',     function () { return view('shop'); });
Route::get('/shop/{any?}',     function () { return view('shop'); })->where('any', '.*')->name('shop.spa');

// Admin authentication gate — shown when visiting /admin directly without being logged in
Route::get('/admin', function () {
    return view('admin-gate');
});

// Admin SPA — the actual Vue app lives here; hash router handles all sub-routes
Route::get('/admin/app/{any?}', function () {
    return view('admin');
})->where('any', '.*')->name('admin.spa');

// Seller authentication gate — shown when visiting /seller directly
Route::get('/seller', function () {
    return view('seller-gate');
});

// Seller SPA — Vue hash router handles all sub-routes
Route::get('/seller/app/{any?}', function () {
    return view('seller');
})->where('any', '.*')->name('seller.spa');


<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\AdminSellerController;
use App\Http\Controllers\Admin\AdminProductController;
use App\Http\Controllers\Admin\AdminOrderController;
use App\Http\Controllers\Admin\AdminDeliveryController;
use App\Http\Controllers\Admin\AdminInventoryController;
use App\Http\Controllers\Admin\AdminSettingsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Seller\SellerDashboardController;
use App\Http\Controllers\Seller\SellerProductController;
use App\Http\Controllers\Seller\SellerOrderController;
use App\Http\Controllers\Seller\SellerInventoryController;
use App\Http\Controllers\Seller\SellerEarningsController;
use App\Http\Controllers\Seller\SellerProfileController;
use App\Http\Controllers\Seller\SellerAuthController;
use App\Http\Controllers\Customer\CustomerProductController;
use App\Http\Controllers\Customer\CustomerOrderController;
use App\Http\Controllers\Customer\CustomerAccountController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Auth routes (public)
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/seller/register', [SellerAuthController::class, 'register']);

// -------------------------------------------------------
// CUSTOMER - public product/category browsing
// -------------------------------------------------------
Route::get('/shop/products',          [CustomerProductController::class, 'index']);
Route::get('/shop/products/featured', [CustomerProductController::class, 'featured']);
Route::get('/shop/products/{slug}',   [CustomerProductController::class, 'show']);
Route::get('/shop/categories',        [CustomerProductController::class, 'categories']);
Route::get('/shop/categories/{slug}', [CustomerProductController::class, 'byCategory']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    Route::patch('/user/become-seller', [AuthController::class, 'becomeSeller']);

    // Seller profile & onboarding - accessible by users with seller role (pending or approved)
    Route::get('/seller/profile', [SellerProfileController::class, 'show']);
    Route::post('/seller/onboarding/submit', [SellerProfileController::class, 'submitOnboarding']);

    // -------------------------------------------------------
    // ADMIN routes
    // -------------------------------------------------------
    Route::prefix('admin')->middleware('admin')->group(function () {

        // Dashboard analytics
        Route::get('/dashboard/stats',         [AdminDashboardController::class, 'stats']);
        Route::get('/dashboard/sales-chart',   [AdminDashboardController::class, 'salesChart']);
        Route::get('/dashboard/recent-orders', [AdminDashboardController::class, 'recentOrders']);

        // User management
        Route::get('/users',              [AdminUserController::class, 'index']);
        Route::get('/users/{id}',         [AdminUserController::class, 'show']);
        Route::put('/users/{id}/status',  [AdminUserController::class, 'updateStatus']);
        Route::delete('/users/{id}',      [AdminUserController::class, 'destroy']);

        // Seller management
        Route::get('/sellers',              [AdminSellerController::class, 'index']);
        Route::get('/sellers/{id}',         [AdminSellerController::class, 'show']);
        Route::put('/sellers/{id}/approve', [AdminSellerController::class, 'approve']);
        Route::put('/sellers/{id}/reject',  [AdminSellerController::class, 'reject']);

        // Product management
        Route::get('/products',              [AdminProductController::class, 'index']);
        Route::put('/products/{id}/status',  [AdminProductController::class, 'updateStatus']);
        Route::delete('/products/{id}',      [AdminProductController::class, 'destroy']);

        // Order management
        Route::get('/orders',              [AdminOrderController::class, 'index']);
        Route::get('/orders/{id}',         [AdminOrderController::class, 'show']);
        // Note: Order status updates are only allowed for sellers, not admins

        // Delivery tracking
        Route::get('/deliveries',     [AdminDeliveryController::class, 'index']);
        Route::put('/deliveries/{id}', [AdminDeliveryController::class, 'update']);

        // Inventory
        Route::get('/inventory',                     [AdminInventoryController::class, 'index']);
        Route::get('/inventory/low-stock',           [AdminInventoryController::class, 'lowStock']);
        Route::put('/inventory/{product_id}',        [AdminInventoryController::class, 'update']);

        // Settings
        Route::get('/settings', [AdminSettingsController::class, 'index']);
        Route::put('/settings', [AdminSettingsController::class, 'bulkUpdate']);
    });

    // -------------------------------------------------------
    // SELLER routes
    // -------------------------------------------------------
    Route::prefix('seller')->middleware('seller')->group(function () {

        // Profile - only update for approved sellers
        Route::put('/profile', [SellerProfileController::class, 'update']);

        // Dashboard
        Route::get('/dashboard/stats',          [SellerDashboardController::class, 'stats']);
        Route::get('/dashboard/earnings-chart', [SellerDashboardController::class, 'earningsChart']);
        Route::get('/dashboard/recent-orders',  [SellerDashboardController::class, 'recentOrders']);

        // Products (own only)
        Route::get('/products/categories',  [SellerProductController::class, 'categories']);
        Route::post('/products/upload-image', [SellerProductController::class, 'uploadImage']);
        Route::get('/products',             [SellerProductController::class, 'index']);
        Route::post('/products',            [SellerProductController::class, 'store']);
        Route::get('/products/{id}',        [SellerProductController::class, 'show']);
        Route::put('/products/{id}',        [SellerProductController::class, 'update']);
        Route::delete('/products/{id}',     [SellerProductController::class, 'destroy']);

        // Orders (own items only)
        Route::get('/orders',                  [SellerOrderController::class, 'index']);
        Route::get('/orders/{id}',             [SellerOrderController::class, 'show']);
        Route::put('/orders/{id}/fulfillment', [SellerOrderController::class, 'updateFulfillment']);

        // Inventory
        Route::get('/inventory',             [SellerInventoryController::class, 'index']);
        Route::get('/inventory/low-stock',   [SellerInventoryController::class, 'lowStock']);
        Route::put('/inventory/{productId}', [SellerInventoryController::class, 'update']);

        // Earnings analytics
        Route::get('/earnings/summary',    [SellerEarningsController::class, 'summary']);
        Route::get('/earnings/chart',      [SellerEarningsController::class, 'chart']);
        Route::get('/earnings/by-product', [SellerEarningsController::class, 'byProduct']);
        // Messages
        Route::get('/messages/customers', [\App\Http\Controllers\Seller\SellerMessageController::class, 'getCustomers']);
        Route::get('/messages/{customerId}', [\App\Http\Controllers\Seller\SellerMessageController::class, 'getMessages']);
        Route::post('/messages/{customerId}', [\App\Http\Controllers\Seller\SellerMessageController::class, 'sendMessage']);
    });

    // -------------------------------------------------------
    // CUSTOMER - protected routes (must be logged in)
    // -------------------------------------------------------
    Route::prefix('account')->group(function () {
        Route::get('/',       [CustomerAccountController::class, 'show']);
        Route::put('/',       [CustomerAccountController::class, 'update']);
        Route::get('/orders', [CustomerOrderController::class, 'index']);
        Route::get('/orders/{id}', [CustomerOrderController::class, 'show']);
        Route::post('/checkout',   [CustomerOrderController::class, 'store']);
        // Messages
        Route::get('/messages/sellers', [\App\Http\Controllers\Customer\CustomerMessageController::class, 'getSellers']);
        Route::get('/messages/{sellerId}', [\App\Http\Controllers\Customer\CustomerMessageController::class, 'getMessages']);
        Route::post('/messages/{sellerId}', [\App\Http\Controllers\Customer\CustomerMessageController::class, 'sendMessage']);
    });
});



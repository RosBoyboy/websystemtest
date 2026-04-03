<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/shrink-images', function () {
    $products = App\Models\Product::all();
    $count = 0;
    foreach ($products as $p) {
        $raw = $p->getRawOriginal('images');
        if (!$raw) continue;
        $images = json_decode($raw, true);
        if (!is_array($images)) continue;

        $changed = false;
        foreach ($images as &$url) {
            if (is_string($url) && strpos($url, 'data:image/') === 0 && strlen($url) > 100000) {
                list($type, $data) = explode(';', $url);
                list(, $data)      = explode(',', $data);
                $data = base64_decode($data);

                $img = @imagecreatefromstring($data);
                if ($img !== false) {
                    $width = imagesx($img);
                    $height = imagesy($img);
                    $maxWidth = 800;
                    $maxHeight = 800;
                    if ($width > $maxWidth || $height > $maxHeight) {
                        $ratio = min($maxWidth / $width, $maxHeight / $height);
                        $newWidth = round($width * $ratio);
                        $newHeight = round($height * $ratio);
                        $newImg = imagecreatetruecolor($newWidth, $newHeight);
                        imagealphablending($newImg, false);
                        imagesavealpha($newImg, true);
                        $transparency = imagecolorallocatealpha($newImg, 255, 255, 255, 127);
                        imagefilledrectangle($newImg, 0, 0, $newWidth, $newHeight, $transparency);
                        imagecopyresampled($newImg, $img, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
                        imagedestroy($img);
                        $img = $newImg;
                    }
                    ob_start();
                    imagejpeg($img, null, 60);
                    $compressed = ob_get_clean();
                    imagedestroy($img);
                    if ($compressed) {
                        $url = 'data:image/jpeg;base64,' . base64_encode($compressed);
                        $changed = true;
                    }
                }
            }
        }
        
        if ($changed) {
            \DB::table('products')->where('id', $p->id)->update([
                'images' => json_encode($images)
            ]);
            $count++;
        }
    }
    return "Compressed $count products with oversized images.";
});

// Customer frontend — SPA served at root
Route::get('/', function () {
    return view('shop');
});

// Explicit customer SPA routes (history mode support)
foreach (['/products', '/cart', '/checkout', '/orders', '/login', '/register', '/account'] as $path) {
    Route::get($path, function () { return view('shop'); });
}
Route::get('/products/{slug}', function () { return view('shop'); });
Route::get('/orders/{id}',     function () { return view('shop'); })->where('id', '[0-9]+');
Route::get('/orders/status/{status}', function () { return view('shop'); });
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


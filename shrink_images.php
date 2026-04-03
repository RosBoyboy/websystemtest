<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$products = App\Models\Product::all();
foreach ($products as $p) {
    $raw = $p->getRawOriginal('images');
    if (!$raw) continue;
    $images = json_decode($raw, true);
    if (!is_array($images)) continue;

    $changed = false;
    foreach ($images as &$url) {
        if (strpos($url, 'data:image/') === 0 && strlen($url) > 100000) { // >100KB
            echo "Compressing image for product {$p->id} (Before: " . strlen($url) . ")\n";
            // Extract core
            list($type, $data) = explode(';', $url);
            list(, $data)      = explode(',', $data);
            $data = base64_decode($data);

            $img = @imagecreatefromstring($data);
            if ($img !== false) {
                // Resize if needed, or just lower JPEG quality
                $width = imagesx($img);
                $height = imagesy($img);
                
                // Max 800x800 bounding box
                $maxWidth = 800;
                $maxHeight = 800;
                if ($width > $maxWidth || $height > $maxHeight) {
                    $ratio = min($maxWidth / $width, $maxHeight / $height);
                    $newWidth = round($width * $ratio);
                    $newHeight = round($height * $ratio);
                    $newImg = imagecreatetruecolor($newWidth, $newHeight);
                    // Handle transparency
                    imagealphablending($newImg, false);
                    imagesavealpha($newImg, true);
                    $transparency = imagecolorallocatealpha($newImg, 255, 255, 255, 127);
                    imagefilledrectangle($newImg, 0, 0, $newWidth, $newHeight, $transparency);
                    
                    imagecopyresampled($newImg, $img, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
                    imagedestroy($img);
                    $img = $newImg;
                }

                ob_start();
                // Compress to 60% quality jpeg to save massive space
                imagejpeg($img, null, 60);
                $compressed = ob_get_clean();
                imagedestroy($img);
                
                if ($compressed) {
                    $url = 'data:image/jpeg;base64,' . base64_encode($compressed);
                    $changed = true;
                    echo "  -> After: " . strlen($url) . "\n";
                }
            }
        }
    }
    
    if ($changed) {
        // Save raw images
        \DB::table('products')->where('id', $p->id)->update([
            'images' => json_encode($images)
        ]);
        echo "Updated product {$p->id}\n";
    }
}
echo "Done compressing images.\n";

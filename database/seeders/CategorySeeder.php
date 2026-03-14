<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run()
    {
        $categories = [
            ['name' => 'Men',         'slug' => 'men',         'description' => "Men's clothing collection"],
            ['name' => 'Women',       'slug' => 'women',       'description' => "Women's clothing collection"],
            ['name' => 'Kids',        'slug' => 'kids',        'description' => "Kids' clothing collection"],
            ['name' => 'Accessories', 'slug' => 'accessories', 'description' => 'Hats, bags, jewellery & more'],
            ['name' => 'Sale',        'slug' => 'sale',        'description' => 'Discounted items'],
        ];

        foreach ($categories as $data) {
            Category::updateOrCreate(['slug' => $data['slug']], array_merge($data, ['is_active' => true]));
        }

        // Sub-categories for Men
        $men = Category::where('slug', 'men')->first();
        if ($men) {
            $menSubs = ['T-Shirts', 'Hoodies', 'Trousers', 'Jackets', 'Sneakers'];
            foreach ($menSubs as $name) {
                Category::updateOrCreate(
                    ['slug' => 'men-' . Str::slug($name)],
                    ['name' => $name, 'slug' => 'men-' . Str::slug($name), 'parent_id' => $men->id, 'is_active' => true]
                );
            }
        }

        // Sub-categories for Women
        $women = Category::where('slug', 'women')->first();
        if ($women) {
            $womenSubs = ['Dresses', 'Tops', 'Joggers', 'Coats', 'Heels'];
            foreach ($womenSubs as $name) {
                Category::updateOrCreate(
                    ['slug' => 'women-' . Str::slug($name)],
                    ['name' => $name, 'slug' => 'women-' . Str::slug($name), 'parent_id' => $women->id, 'is_active' => true]
                );
            }
        }
    }
}

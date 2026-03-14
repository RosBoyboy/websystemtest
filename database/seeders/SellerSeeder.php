<?php

namespace Database\Seeders;

use App\Models\Seller;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class SellerSeeder extends Seeder
{
    public function run()
    {
        $user = User::updateOrCreate(
            ['email' => 'seller@nurbannxt.com'],
            [
                'name'              => 'Demo Seller',
                'email'             => 'seller@nurbannxt.com',
                'password'          => Hash::make('password'),
                'role'              => 'seller',
                'status'            => 'active',
                'email_verified_at' => now(),
            ]
        );

        Seller::updateOrCreate(
            ['user_id' => $user->id],
            [
                'store_name'        => 'Urban Threads',
                'store_description' => 'Premium urban streetwear for every style.',
                'logo'              => null,
                'status'            => 'approved',
            ]
        );
    }
}

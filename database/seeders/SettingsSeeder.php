<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    public function run()
    {
        $settings = [
            [
                'key'   => 'site_name',
                'value' => 'NurbanNxt',
                'type'  => 'text',
                'group' => 'general',
                'label' => 'Site Name',
            ],
            [
                'key'   => 'site_logo',
                'value' => null,
                'type'  => 'image',
                'group' => 'general',
                'label' => 'Site Logo',
            ],
            [
                'key'   => 'currency',
                'value' => 'USD',
                'type'  => 'text',
                'group' => 'general',
                'label' => 'Currency',
            ],
            [
                'key'   => 'currency_symbol',
                'value' => '$',
                'type'  => 'text',
                'group' => 'general',
                'label' => 'Currency Symbol',
            ],
            [
                'key'   => 'shipping_fee',
                'value' => '5.99',
                'type'  => 'number',
                'group' => 'shipping',
                'label' => 'Default Shipping Fee',
            ],
            [
                'key'   => 'free_shipping_threshold',
                'value' => '50',
                'type'  => 'number',
                'group' => 'shipping',
                'label' => 'Free Shipping Threshold',
            ],
            [
                'key'   => 'tax_rate',
                'value' => '0',
                'type'  => 'number',
                'group' => 'tax',
                'label' => 'Tax Rate (%)',
            ],
            [
                'key'   => 'maintenance_mode',
                'value' => '0',
                'type'  => 'boolean',
                'group' => 'general',
                'label' => 'Maintenance Mode',
            ],
            [
                'key'   => 'contact_email',
                'value' => 'hello@nurbannxt.com',
                'type'  => 'text',
                'group' => 'contact',
                'label' => 'Contact Email',
            ],
            [
                'key'   => 'social_instagram',
                'value' => '',
                'type'  => 'text',
                'group' => 'social',
                'label' => 'Instagram URL',
            ],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(['key' => $setting['key']], $setting);
        }
    }
}

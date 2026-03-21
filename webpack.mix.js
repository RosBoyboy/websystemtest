const mix  = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .js('resources/js/admin/app.js', 'public/js/admin.js')
    .vue()
    .js('resources/js/seller/app.js', 'public/js/seller.js')
    .vue()
    .js('resources/js/customer/app.js', 'public/js/customer.js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .postCss('resources/css/admin.css', 'public/css/admin.css', [
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .postCss('resources/css/seller.css', 'public/css/seller.css', [
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .postCss('resources/css/customer.css', 'public/css/customer.css', [
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .webpackConfig({
        resolve: {
            alias: {
                '@admin':    path.resolve(__dirname, 'resources/js/admin'),
                '@seller':   path.resolve(__dirname, 'resources/js/seller'),
                '@customer': path.resolve(__dirname, 'resources/js/customer'),
            },
        },
    }).version();

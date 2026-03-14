<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Seller Panel — NurbanNxt</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
    <style>
        body { background:#0f172a; font-family: Inter, sans-serif; }
    </style>
</head>
<body class="min-h-screen flex items-center justify-center bg-slate-950 px-4">
    <div class="text-center max-w-md w-full">

        <!-- Logo -->
        <div class="mb-8">
            <h1 class="text-4xl font-bold">
                <span class="text-orange-500">Nurban</span><span class="text-white">Nxt</span>
            </h1>
            <p class="text-slate-500 mt-1 text-sm tracking-widest uppercase">Seller Portal</p>
        </div>

        <!-- Access restricted card -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
            <!-- Animated store icon -->
            <div class="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                <div class="absolute inset-0 rounded-full bg-orange-500/10 animate-ping"></div>
                <div class="relative flex items-center justify-center w-16 h-16 bg-slate-800 rounded-full border border-slate-700">
                    <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                </div>
            </div>

            <div class="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-3 py-1 mb-4">
                <div class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                <span class="text-orange-400 text-xs font-semibold tracking-wider uppercase">Seller Access Required</span>
            </div>

            <h2 class="text-xl font-semibold text-white mb-2">Welcome to the Seller Portal</h2>
            <p class="text-slate-400 text-sm mb-8 leading-relaxed">
                Sign in with your approved seller account to manage products, view orders, track earnings, and grow your store on NurbanNxt.
            </p>

            <a href="/seller/app#/login"
               class="inline-flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-orange-500/20">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                </svg>
                Sign In to Seller Panel
            </a>

            <p class="text-slate-600 text-xs mt-4">
                Not a seller yet?
                <a href="/" class="text-orange-500 hover:text-orange-400 transition-colors">Visit the store →</a>
            </p>
        </div>
    </div>
</body>
</html>

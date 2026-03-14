<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SellerMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!auth()->check() || !auth()->user()->isSeller()) {
            if ($request->expectsJson()) {
                return response()->json(['message' => 'Forbidden. Seller access required.'], 403);
            }
            return redirect()->route('login')->with('error', 'Seller access required.');
        }

        if (auth()->user()->seller && auth()->user()->seller->status !== 'approved') {
            if ($request->expectsJson()) {
                return response()->json(['message' => 'Your seller account is not yet approved.'], 403);
            }
            return redirect('/')->with('error', 'Your seller account is pending approval.');
        }

        return $next($request);
    }
}

<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class SellerMessageController extends Controller
{
    public function getCustomers()
    {
        \ = Auth::user()->seller->id;
        
        \ = Message::where('seller_id', \)
            ->pluck('customer_id')
            ->unique();
            
        \ = User::whereIn('id', \)->get();
        return response()->json(\);
    }

    public function getMessages(\)
    {
        \ = Auth::user()->seller->id;
        
        \ = Message::where('seller_id', \)
            ->where('customer_id', \)
            ->orderBy('created_at', 'asc')
            ->get();

        // Mark as read
        Message::where('seller_id', \)
            ->where('customer_id', \)
            ->where('sender_role', 'customer')
            ->where('is_read', false)
            ->update(['is_read' => true]);

        return response()->json(\);
    }

    public function sendMessage(Request \, \)
    {
        \->validate(['message' => 'required|string']);
        \ = Auth::user()->seller->id;

        \ = Message::create([
            'customer_id' => \,
            'seller_id' => \,
            'sender_role' => 'seller',
            'message' => \->message,
        ]);

        return response()->json(\, 201);
    }
}

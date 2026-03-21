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
        $sellerId = Auth::user()->seller->id;
        
        $customerIds = Message::where('seller_id', $sellerId)
            ->pluck('customer_id')
            ->unique();
            
        $customers = User::whereIn('id', $customerIds)->get();
        return response()->json($customers);
    }

    public function getMessages($customerId)
    {
        $sellerId = Auth::user()->seller->id;
        
        $messages = Message::where('seller_id', $sellerId)
            ->where('customer_id', $customerId)
            ->orderBy('created_at', 'asc')
            ->get();

        // Mark as read
        Message::where('seller_id', $sellerId)
            ->where('customer_id', $customerId)
            ->where('sender_role', 'customer')
            ->where('is_read', false)
            ->update(['is_read' => true]);

        return response()->json($messages);
    }

    public function sendMessage(Request $request, $customerId)
    {
        $request->validate(['message' => 'required|string']);
        $sellerId = Auth::user()->seller->id;

        $message = Message::create([
            'customer_id' => $customerId,
            'seller_id' => $sellerId,
            'sender_role' => 'seller',
            'message' => $request->message,
        ]);

        return response()->json($message, 201);
    }
}

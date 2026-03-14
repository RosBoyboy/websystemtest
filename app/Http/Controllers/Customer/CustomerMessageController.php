<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\Seller;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;

class CustomerMessageController extends Controller
{
    public function getSellers()
    {
        \ = Auth::id();
        
        // Get sellers this user has ordered from OR has messages with
        \ = Message::where('customer_id', \)->pluck('seller_id')->toArray();
        \ = Order::where('user_id', \)->pluck('seller_id')->toArray();
        \ = array_unique(array_merge(\, \));
        
        // If empty, just return some active sellers to start a chat
        if (empty(\)) {
            return response()->json(Seller::where('status', 'approved')->limit(10)->get());
        }

        \ = Seller::whereIn('id', \)->get();
        return response()->json(\);
    }

    public function getMessages(\)
    {
        \ = Message::where('customer_id', Auth::id())
            ->where('seller_id', \)
            ->orderBy('created_at', 'asc')
            ->get();

        // Mark as read
        Message::where('customer_id', Auth::id())
            ->where('seller_id', \)
            ->where('sender_role', 'seller')
            ->where('is_read', false)
            ->update(['is_read' => true]);

        return response()->json(\);
    }

    public function sendMessage(Request \, \)
    {
        \->validate(['message' => 'required|string']);

        \ = Message::create([
            'customer_id' => Auth::id(),
            'seller_id' => \,
            'sender_role' => 'customer',
            'message' => \->message,
        ]);

        return response()->json(\, 201);
    }
}

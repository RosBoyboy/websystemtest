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
    public function getSellers(Request $request)
    {
        $userId = Auth::id();
        
        // Get sellers this user has ordered from OR has messages with
        $messageSellerIds = Message::where('customer_id', $userId)->pluck('seller_id')->toArray();
        $orderSellerIds = Order::where('user_id', $userId)->pluck('seller_id')->toArray();
        $sellerIds = array_unique(array_merge($messageSellerIds, $orderSellerIds));
        
        // If a specific seller_id is requested, always include it
        if ($request->has('seller_id') && !empty($request->seller_id)) {
            $requestedSellerId = $request->seller_id;
            if (!in_array($requestedSellerId, $sellerIds)) {
                $sellerIds[] = $requestedSellerId;
            }
        }

        // If empty, return approved sellers to start a chat
        if (empty($sellerIds)) {
            return response()->json(Seller::where('status', 'approved')
                ->select('id', 'store_name', 'store_description', 'status')
                ->limit(10)
                ->get());
        }

        // Return the selected sellers with full info
        $sellers = Seller::whereIn('id', $sellerIds)
            ->select('id', 'store_name', 'store_description', 'status')
            ->get();
        return response()->json($sellers);
    }

    public function getMessages($sellerId)
    {
        $messages = Message::where('customer_id', Auth::id())
            ->where('seller_id', $sellerId)
            ->orderBy('created_at', 'asc')
            ->get();

        // Mark as read
        Message::where('customer_id', Auth::id())
            ->where('seller_id', $sellerId)
            ->where('sender_role', 'seller')
            ->where('is_read', false)
            ->update(['is_read' => true]);

        return response()->json($messages);
    }

    public function sendMessage(Request $request, $sellerId)
    {
        $request->validate(['message' => 'required|string']);

        $message = Message::create([
            'customer_id' => Auth::id(),
            'seller_id' => $sellerId,
            'sender_role' => 'customer',
            'message' => $request->message,
        ]);

        return response()->json($message, 201);
    }
}

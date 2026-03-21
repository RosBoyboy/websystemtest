<template>
  <div class="bg-slate-800 rounded-2xl border border-slate-700 h-[600px] flex flex-col md:flex-row overflow-hidden">
    <!-- Seller List Sidebar (Desktop) -->
    <div class="hidden md:flex flex-col w-full md:w-1/3 border-b md:border-b-0 md:border-r border-slate-700 bg-slate-900">
      <div class="p-4 border-b border-slate-700">
        <h3 class="text-white font-bold text-lg">My Chats</h3>
      </div>
      <div class="flex-1 overflow-y-auto">
        <div v-if="loadingSellers" class="p-4 text-center text-slate-500 text-sm">Loading...</div>
        <div v-else-if="sellers.length === 0" class="p-4 text-center text-slate-500 text-sm">No chats yet.</div>
        <button 
          v-else
          v-for="seller in sellers" 
          :key="seller.id"
          @click="selectSeller(seller)"
          :class="['w-full text-left p-4 hover:bg-slate-800 transition-colors flex items-center gap-3 border-l-4', activeSeller && activeSeller.id === seller.id ? 'bg-slate-800 border-orange-500' : 'border-transparent']"
        >
          <div class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
            {{ seller.store_name.charAt(0) }}
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="text-white font-semibold truncate text-sm">{{ seller.store_name }}</h4>
            <p class="text-xs text-slate-400">Tap to chat</p>
          </div>
        </button>
      </div>
    </div>

    <!-- Chat Area -->
    <div class="w-full md:w-2/3 flex flex-col bg-slate-800 h-full">
      <template v-if="activeSeller">
        <!-- Chat Header -->
        <div class="p-4 border-b border-slate-700 bg-slate-900 flex items-center justify-between relative z-10 flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-base">
              {{ activeSeller.store_name.charAt(0) }}
            </div>
            <div class="min-w-0">
              <h3 class="text-white font-bold text-base">{{ activeSeller.store_name }}</h3>
              <p class="text-xs text-slate-400">Online</p>
            </div>
          </div>
          <button @click="activeSeller = null" class="md:hidden text-slate-400 hover:text-white text-2xl font-bold">
            ×
          </button>
        </div>

        <!-- Messages Container -->
        <div class="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col" ref="messageContainer">
          <div v-if="loadingMessages" class="text-center text-slate-400 my-4 text-sm">Loading messages...</div>
          
          <div v-else-if="messages.length === 0" class="flex items-center justify-center h-full">
            <div class="text-center">
              <svg class="w-12 h-12 mx-auto mb-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <p class="text-slate-400 text-sm">Start the conversation!</p>
              <p class="text-slate-500 text-xs mt-1">Send your first message below</p>
            </div>
          </div>
          
          <template v-else>
            <div 
              v-for="msg in messages" 
              :key="msg.id"
              :class="['flex gap-2', msg.sender_role === 'customer' ? 'justify-end' : 'justify-start']"
            >
              <div v-if="msg.sender_role === 'seller'" class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 font-bold text-xs text-white">
                {{ activeSeller.store_name.charAt(0) }}
              </div>
              
              <div :class="msg.sender_role === 'customer' ? 'text-right' : 'text-left'">
                <div 
                  :class="['rounded-2xl px-4 py-3 text-sm break-words shadow-sm', 
                    msg.sender_role === 'customer' 
                      ? 'bg-orange-500 text-white rounded-br-none' 
                      : 'bg-slate-700 text-slate-100 rounded-bl-none'
                  ]"
                  :key="msg.id"
                >
                  {{ msg.message }}
                </div>
                <div class="text-[11px] mt-1 opacity-60 px-2">
                  {{ formatTime(msg.created_at) }}
                </div>
              </div>
            </div>
          </template>
        </div>

        <!-- Input Area -->
        <div class="p-4 bg-slate-900 border-t border-slate-700 relative z-10 flex-shrink-0">
          <form @submit.prevent="sendMessage" class="flex gap-3">
            <input 
              v-model="newMessage" 
              type="text" 
              placeholder="Type a message..." 
              required
              class="flex-1 bg-slate-800 border border-slate-700 rounded-full px-5 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-sm"
            />
            <button type="submit" :disabled="sending" class="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full font-semibold transition-colors text-sm flex items-center justify-center gap-2 whitespace-nowrap">
              <span v-if="!sending">Send</span>
              <span v-else class="text-xs">Sending...</span>
            </button>
          </form>
        </div>
      </template>

      <!-- No Seller Selected -->
      <div v-else class="flex-1 flex flex-col items-center justify-center text-slate-500 p-4">
        <svg class="w-16 h-16 mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        <p class="text-center font-medium">
          <span class="hidden md:inline">Select a seller to start chatting</span>
          <span class="md:hidden">No chat selected</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CustomerChat',
  data() {
    return {
      sellers: [],
      activeSeller: null,
      messages: [],
      newMessage: '',
      loadingSellers: true,
      loadingMessages: false,
      sending: false,
      pollInterval: null
    };
  },
  created() {
    this.fetchSellers();
  },
  watch: {
    '$route.query.seller_id': function(newId) {
      if (newId) {
        this.fetchSellers();
      }
    }
  },
  unmounted() {
    if(this.pollInterval) clearInterval(this.pollInterval);
  },
  methods: {
    async fetchSellers() {
      try {
        let url = '/account/messages/sellers';
        if (this.$route.query.seller_id) {
          url += '?seller_id=' + this.$route.query.seller_id;
          console.log('Fetching sellers with seller_id:', this.$route.query.seller_id);
        }
        const { data } = await axios.get(url);
        console.log('Sellers API response:', data);
        this.sellers = data;
        
        // Auto-select seller if specified in URL
        if (this.$route.query.seller_id) {
          const requestedId = parseInt(this.$route.query.seller_id);
          console.log('Looking for seller with id:', requestedId, 'in sellers:', this.sellers);
          const targetSeller = this.sellers.find(s => parseInt(s.id) === requestedId);
          console.log('Found target seller:', targetSeller);
          if (targetSeller) {
            this.selectSeller(targetSeller);
          } else {
            console.warn('Seller not found in response');
          }
        }
      } catch (e) {
        console.error('Failed to load sellers', e);
      } finally {
        this.loadingSellers = false;
      }
    },
    async selectSeller(seller) {
      this.activeSeller = seller;
      await this.fetchMessages();
      if(this.pollInterval) clearInterval(this.pollInterval);
      this.pollInterval = setInterval(this.fetchMessagesSilently, 3000);
    },
    async fetchMessages() {
      if(!this.activeSeller) return;
      this.loadingMessages = true;
      try {
        const { data } = await axios.get('/account/messages/' + this.activeSeller.id);
        this.messages = data;
        this.$nextTick(() => this.scrollToBottom());
      } catch (e) {
        console.error('Failed to load messages', e);
      } finally {
        this.loadingMessages = false;
      }
    },
    async fetchMessagesSilently() {
      if(!this.activeSeller) return;
      try {
        const { data } = await axios.get('/account/messages/' + this.activeSeller.id);
        const oldLength = this.messages.length;
        this.messages = data;
        if(this.messages.length > oldLength) {
            this.$nextTick(() => this.scrollToBottom());
        }
      } catch (e) {
        // ignore
      }
    },
    async sendMessage() {
      if(!this.newMessage.trim() || !this.activeSeller || this.sending) return;
      this.sending = true;
      try {
        const { data } = await axios.post('/account/messages/' + this.activeSeller.id, {
          message: this.newMessage
        });
        this.messages.push(data);
        this.newMessage = '';
        this.$nextTick(() => this.scrollToBottom());
      } catch (e) {
        console.error('Failed to send', e);
        alert('Failed to send message. Please try again.');
      } finally {
        this.sending = false;
      }
    },
    scrollToBottom() {
      const container = this.$refs.messageContainer;
      if(container) {
        container.scrollTop = container.scrollHeight;
      }
    },
    formatTime(dateStr) {
      if(!dateStr) return '';
      const d = new Date(dateStr);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }
};
</script>

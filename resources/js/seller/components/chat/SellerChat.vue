<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-bold text-white">Customer Messages</h1>
      <p class="text-slate-400 text-sm mt-1">Chat directly with your buyers.</p>
    </div>

    <div class="bg-slate-900 rounded-xl border border-slate-800 h-[600px] flex overflow-hidden">
      <!-- Customer List Sidebar -->
      <div class="w-1/3 border-r border-slate-800 flex flex-col bg-slate-900">
        <div class="flex-1 overflow-y-auto">
          <div v-if="loadingCustomers" class="p-4 text-center text-slate-500 text-sm">Loading...</div>
          <div v-else-if="customers.length === 0" class="p-4 text-center text-slate-500 text-sm">No customers yet.</div>
          <button 
            v-else
            v-for="customer in customers" 
            :key="customer.id"
            @click="selectCustomer(customer)"
            :class="['w-full text-left p-4 hover:bg-slate-800 transition-colors flex items-center gap-3', activeCustomer && activeCustomer.id === customer.id ? 'bg-slate-800' : '']"
          >
            <div class="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 text-white font-bold">
              {{ customer.name.charAt(0) }}
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-white font-medium truncate text-sm">{{ customer.name }}</h4>
            </div>
          </button>
        </div>
      </div>

      <!-- Chat Area -->
      <div class="w-2/3 flex flex-col bg-slate-900 relative">
        <template v-if="activeCustomer">
          <!-- Chat Header -->
          <div class="p-4 border-b border-slate-800 bg-slate-800/50 flex items-center gap-3 relative z-10">
            <div class="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 text-white font-bold">
              {{ activeCustomer.name.charAt(0) }}
            </div>
            <div>
              <h3 class="text-white font-bold">{{ activeCustomer.name }}</h3>
            </div>
          </div>

          <!-- Messages -->
          <div class="flex-1 overflow-y-auto p-4 space-y-4" ref="messageContainer">
            <div v-if="loadingMessages" class="text-center text-slate-500 my-4">Loading messages...</div>
            <div v-else-if="messages.length === 0" class="text-center text-slate-500 my-10">Send a message to start the conversation!</div>
            
            <div 
              v-for="msg in messages" 
              :key="msg.id"
              :class="['flex', msg.sender_role === 'seller' ? 'justify-end' : 'justify-start']"
            >
              <div 
                :class="['max-w-[75%] rounded-2xl px-4 py-2 text-sm', 
                  msg.sender_role === 'seller' 
                    ? 'bg-orange-500 text-white rounded-br-none' 
                    : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-none'
                ]"
              >
                {{ msg.message }}
                <div class="text-[10px] mt-1 opacity-70 text-right">
                  {{ formatTime(msg.created_at) }}
                </div>
              </div>
            </div>
          </div>

          <!-- Input Area -->
          <div class="p-4 bg-slate-800/50 border-t border-slate-800 relative z-10">
            <form @submit.prevent="sendMessage" class="flex gap-2">
              <input 
                v-model="newMessage" 
                type="text" 
                placeholder="Type your message..." 
                required
                class="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button type="submit" :disabled="sending" class="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors disabled:opacity-50">
                Send
              </button>
            </form>
          </div>
        </template>

        <div v-else class="flex-1 flex flex-col items-center justify-center text-slate-500">
          <svg class="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          <p>Select a customer to start chatting</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SellerChat',
  data() {
    return {
      customers: [],
      activeCustomer: null,
      messages: [],
      newMessage: '',
      loadingCustomers: true,
      loadingMessages: false,
      sending: false,
      pollInterval: null
    };
  },
  created() {
    this.fetchCustomers();
  },
  unmounted() {
    if(this.pollInterval) clearInterval(this.pollInterval);
  },
  methods: {
    async fetchCustomers() {
      try {
        const { data } = await axios.get('/seller/messages/customers');
        this.customers = data;
      } catch (e) {
        console.error('Failed to load customers', e);
      } finally {
        this.loadingCustomers = false;
      }
    },
    async selectCustomer(customer) {
      this.activeCustomer = customer;
      await this.fetchMessages();
      if(this.pollInterval) clearInterval(this.pollInterval);
      this.pollInterval = setInterval(this.fetchMessagesSilently, 3000);
    },
    async fetchMessages() {
      if(!this.activeCustomer) return;
      this.loadingMessages = true;
      try {
        const { data } = await axios.get('/seller/messages/' + this.activeCustomer.id);
        this.messages = data;
        this.scrollToBottom();
      } catch (e) {
        console.error('Failed to load messages', e);
      } finally {
        this.loadingMessages = false;
      }
    },
    async fetchMessagesSilently() {
      if(!this.activeCustomer) return;
      try {
        const { data } = await axios.get('/seller/messages/' + this.activeCustomer.id);
        const oldLength = this.messages.length;
        this.messages = data;
        if(this.messages.length > oldLength) {
            this.scrollToBottom();
        }
      } catch (e) {
        // ignore
      }
    },
    async sendMessage() {
      if(!this.newMessage.trim() || !this.activeCustomer || this.sending) return;
      this.sending = true;
      try {
        const { data } = await axios.post('/seller/messages/' + this.activeCustomer.id, {
          message: this.newMessage
        });
        this.messages.push(data);
        this.newMessage = '';
        this.scrollToBottom();
      } catch (e) {
        console.error('Failed to send', e);
      } finally {
        this.sending = false;
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messageContainer;
        if(container) {
          container.scrollTop = container.scrollHeight;
        }
      });
    },
    formatTime(dateStr) {
      if(!dateStr) return '';
      const d = new Date(dateStr);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }
};
</script>

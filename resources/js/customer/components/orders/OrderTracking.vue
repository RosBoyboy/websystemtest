<template>
  <CustomerLayout>
    <div class="w-full px-4 sm:px-6 lg:px-8 py-10" style="max-width:100%">

      <!-- Order detail view -->
      <div v-if="activeOrder">
        <button @click="currentFilter === 'all' ? $router.push({ name: 'orders', query: $route.query }).catch(()=>{}) : $router.push({ name: 'orders-status', params: { status: currentFilter }, query: $route.query }).catch(()=>{})" class="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-6 font-bold uppercase tracking-wider">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to Orders
        </button>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
          <div>
            <h1 class="text-3xl font-black text-white" style="font-family:'Bebas Neue',cursive;letter-spacing:0.02em;">Order #{{ activeOrder.order_number }}</h1>
            <p class="text-slate-400 text-sm mt-0.5">Placed {{ formatDate(activeOrder.created_at) }}</p>
          </div>
          <span :class="['badge text-sm px-3 py-1.5', statusClass(activeOrder.status)]">{{ activeOrder.status }}</span>
        </div>

        <!-- Delivery tracking -->
        <div v-if="activeOrder.delivery" class="bg-slate-900 rounded-2xl border border-slate-700 p-6 mb-6">
          <h2 class="text-base font-bold text-white mb-4 uppercase tracking-wider">Delivery Tracking</h2>
          <div class="flex items-center gap-3 mb-5">
            <p class="text-sm text-slate-400">Tracking #: <span class="font-semibold text-white">{{ activeOrder.delivery.tracking_number }}</span></p>
            <span class="text-slate-600">|</span>
            <p class="text-sm text-slate-400">{{ activeOrder.delivery.carrier }}</p>
          </div>

          <!-- Progress steps -->
          <div class="flex items-center gap-1 sm:gap-2">
            <div v-for="(step, i) in trackingSteps" :key="step.key" class="flex items-center flex-1">
              <div class="flex flex-col items-center relative flex-1">
                <div :class="['w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all',
                  isStepDone(step.key) ? 'bg-orange-500 text-black' :
                  isCurrentStep(step.key) ? 'bg-orange-500 text-black ring-4 ring-orange-400/50 shadow-[0_0_20px_rgba(249,115,22,0.7)] animate-pulse' :
                  'bg-slate-800 text-slate-500']">
                  <svg v-if="isStepDone(step.key)" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span v-else>{{ i + 1 }}</span>
                </div>
                <p :class="['text-xs mt-2 text-center leading-tight hidden sm:block', isCurrentStep(step.key) ? 'text-orange-400 font-bold drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]' : 'text-slate-400']">{{ step.label }}</p>
              </div>
              <div v-if="i < trackingSteps.length - 1" :class="['h-0.5 flex-1 mx-1 transition-colors', isStepDone(step.key) ? 'bg-orange-500' : 'bg-slate-800']"></div>
            </div>
          </div>

          <p v-if="activeOrder.delivery.estimated_delivery" class="text-xs text-slate-400 mt-4">
            Estimated delivery: <span class="font-medium text-white">{{ activeOrder.delivery.estimated_delivery }}</span>
          </p>

          <div v-if="activeOrder.delivery.status === 'delivered' || activeOrder.status === 'delivered'" class="mt-6 p-5 bg-green-900/30 border border-green-800/50 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 class="text-green-400 font-bold flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Order Delivered!
              </h3>
              <p class="text-green-200/70 text-sm mt-1">Has your package arrived safely? Let us know.</p>
            </div>
            <button @click="confirmOrderReceived" :disabled="confirmingReceipt" class="px-6 py-2.5 bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap shadow-[0_0_15px_rgba(34,197,94,0.4)]">
              {{ confirmingReceipt ? 'Confirming...' : 'Order Received' }}
            </button>
          </div>
        </div>

        <!-- Order items -->
        <div class="bg-slate-900 rounded-2xl border border-slate-700 p-6 mb-6">
          <h2 class="text-base font-bold text-white mb-4 uppercase tracking-wider">Items</h2>
          <div class="space-y-4">
            <div v-for="item in activeOrder.items" :key="item.id" class="flex items-start gap-4 p-4 bg-slate-800 rounded-xl">
              <div class="w-16 h-16 bg-slate-700 rounded-xl overflow-hidden flex-shrink-0">
                <img v-if="item.product && productImage(item.product)" :src="productImage(item.product)" :alt="item.product.name" class="w-full h-full object-cover" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-semibold text-white text-sm">{{ item.product ? item.product.name : 'Product' }}</p>
                <div class="flex gap-3 text-xs text-slate-400 mt-0.5">
                  <span v-if="item.size">Size: {{ item.size }}</span>
                  <span v-if="item.color">Color: {{ item.color }}</span>
                  <span>Qty: {{ item.quantity }}</span>
                </div>
                <!-- Seller fulfillment status -->
                <div class="mt-2 flex items-center gap-2">
                  <span class="text-xs text-slate-500">Seller:</span>
                  <span :class="['text-xs px-2 py-1 rounded-full font-medium', itemStatusClass(item.status)]">
                    {{ item.status || 'pending' }}
                  </span>
                  <span v-if="item.seller" class="text-xs text-slate-500">{{ item.seller.store_name }}</span>
                </div>
              </div>
              <p class="font-bold text-orange-500 text-sm flex-shrink-0">${{ parseFloat(item.total_price).toFixed(2) }}</p>
            </div>
          </div>
        </div>

        <!-- Totals -->
        <div class="bg-slate-900 rounded-2xl border border-slate-700 p-6 max-w-sm ml-auto">
          <div class="space-y-2 text-sm">
            <div class="flex justify-between text-slate-400">
              <span>Subtotal</span>
              <span class="text-white">${{ parseFloat(activeOrder.subtotal).toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>Shipping</span>
              <span class="text-white">${{ parseFloat(activeOrder.shipping_fee || 0).toFixed(2) }}</span>
            </div>
            <div class="flex justify-between font-bold text-white text-base border-t border-slate-700 pt-3 mt-2">
              <span>Total</span>
              <span class="text-orange-500">${{ parseFloat(activeOrder.total).toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Orders list -->
      <div v-else>
        <h1 class="text-4xl font-black text-white mb-2" style="font-family:'Bebas Neue',cursive;letter-spacing:0.02em;">My Orders</h1>

        <!-- Categories Filter -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
          <div class="flex overflow-x-auto hide-scrollbar gap-2">
            <button v-for="tab in filters" :key="tab.value"
              @click="setFilter(tab.value)"
              :class="['px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap',
                currentFilter === tab.value ? 'bg-orange-500 text-black' : 'text-slate-400 hover:bg-slate-800']"
            >
              {{ tab.label }}
            </button>
          </div>
          <div class="relative w-full md:w-64 flex-shrink-0">
            <input 
              v-model="searchQuery" 
              @keyup.enter="fetchOrders(1)"
              type="text" 
              placeholder="Search Order No..." 
              class="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-orange-500 transition-colors"
            />
            <button @click="fetchOrders(1)" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-500">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>

        <div v-if="loading" class="space-y-4">
          <div v-for="n in 4" :key="n" class="h-24 bg-slate-900 rounded-2xl animate-pulse border border-slate-800"></div>
        </div>

        <div v-else-if="orders.length === 0" class="text-center py-20">
          <svg class="w-14 h-14 mx-auto text-slate-700 mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
            <rect x="9" y="3" width="6" height="4" rx="1" ry="1"/>
          </svg>
          <h2 class="text-lg font-bold text-slate-400 mb-2">No orders yet</h2>
          <p class="text-slate-500 text-sm mb-6">Your order history will appear here.</p>
          <router-link :to="{ name: 'products' }" class="bg-orange-500 hover:bg-orange-600 text-black font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg transition-colors inline-block">Start Shopping</router-link>
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="order in orders"
            :key="order.id"
            @click="$router.push({ name: 'order-detail', params: { id: order.id }, query: $route.query })"
            class="bg-slate-900 rounded-2xl border border-slate-700 p-5 cursor-pointer hover:border-orange-500 transition-colors group"
          >
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p class="font-bold text-white group-hover:text-orange-500 transition-colors">
                  Order #{{ order.order_number }}
                </p>
                <p class="text-sm text-slate-400 mt-0.5">{{ formatDate(order.created_at) }}</p>
              </div>
              <div class="flex items-center gap-3">
                <span :class="['badge', statusClass(order.status)]">{{ order.status }}</span>
                <p class="font-bold text-white group-hover:text-orange-500 transition-colors">${{ parseFloat(order.total).toFixed(2) }}</p>
                <svg class="w-4 h-4 text-slate-500 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
            </div>
            <div v-if="order.items && order.items.length" class="flex gap-2 mt-4">
              <div
                v-for="item in order.items.slice(0, 4)"
                :key="item.id"
                class="w-12 h-12 bg-slate-800 rounded-lg overflow-hidden flex-shrink-0"
              >
                <img v-if="item.product && productImage(item.product)" :src="productImage(item.product)" :alt="item.product.name" class="w-full h-full object-cover" />
              </div>
              <div v-if="order.items.length > 4" class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-xs text-slate-400 font-medium">
                +{{ order.items.length - 4 }}
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div v-if="meta.last_page > 1" class="flex justify-center gap-2 mt-8">
          <button :disabled="meta.current_page === 1" @click="fetchOrders(meta.current_page - 1)" class="border border-slate-700 hover:border-slate-500 text-slate-300 py-2 px-4 rounded-lg text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-colors uppercase tracking-wider font-bold">&larr; Prev</button>
          <span class="py-2 px-4 text-sm text-slate-400 font-bold">{{ meta.current_page }} / {{ meta.last_page }}</span>
          <button :disabled="meta.current_page === meta.last_page" @click="fetchOrders(meta.current_page + 1)" class="border border-slate-700 hover:border-slate-500 text-slate-300 py-2 px-4 rounded-lg text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-colors uppercase tracking-wider font-bold">Next &rarr;</button>
        </div>
      </div>

    </div>
  </CustomerLayout>
</template>

<script>
import axios from 'axios';
import CustomerLayout from '../layout/CustomerLayout.vue';

const TRACKING_STEPS = [
  { key: 'pending',            label: 'Ordered' },
  { key: 'picked_up',         label: 'Picked Up' },
  { key: 'in_transit',        label: 'In Transit' },
  { key: 'out_for_delivery',  label: 'Out for Delivery' },
  { key: 'delivered',         label: 'Delivered' },
];

const STEP_ORDER = TRACKING_STEPS.map(s => s.key);

export default {
  name: 'OrderTracking',
  components: { CustomerLayout },
  data() {
    return {
      orders:       [],
      activeOrder:  null,
      loading:      true,
      confirmingReceipt: false,
      meta:         { current_page: 1, last_page: 1 },
      trackingSteps: TRACKING_STEPS,
      currentFilter: 'all',
      searchQuery:  '',
      filters: [
        { label: 'All', value: 'all' },
        { label: 'To Ship', value: 'pending' },
        { label: 'To Receive', value: 'shipping' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled/Refunded', value: 'cancelled' }
      ]
    };
  },
  created() {
    this.currentFilter = this.$route.params.status || 'all';
    if (this.$route.params.id) {
      this.openOrder(this.$route.params.id);
    } else {
      this.fetchOrders();
    }
  },
  watch: {
    '$route'(to) {
      if (to.name === 'order-detail' && to.params.id) {
        this.openOrder(to.params.id);
      } else {
        this.activeOrder = null;
        this.currentFilter = to.params.status || 'all';
        this.fetchOrders();
      }
    }
  },
  methods: {
    setFilter(filter) {
      if (this.currentFilter !== filter) {
        if (filter === 'all') {
          this.$router.push({ name: 'orders', query: this.$route.query }).catch(()=>{});
        } else {
          this.$router.push({ name: 'orders-status', params: { status: filter }, query: this.$route.query }).catch(()=>{});
        }
      }
    },
    async fetchOrders(page) {
      this.loading = true;
      try {
        const { data } = await axios.get('/account/orders', { 
          params: { 
            page: page || 1,
            filter: this.currentFilter !== 'all' ? this.currentFilter : null,
            search: this.searchQuery || null
          } 
        });
        this.orders = data.data;
        this.meta   = { current_page: data.current_page, last_page: data.last_page };
      } catch (_) {}
      this.loading = false;
    },
    async openOrder(id) {
      this.loading = true;
      try {
        const { data } = await axios.get('/account/orders/' + id);
        this.activeOrder = data;
      } catch (_) {
        this.activeOrder = null;
      }
      this.loading = false;
    },
    productImage(product) {
      if (!product || !Array.isArray(product.images) || !product.images.length) return null;
      return product.images[0];
    },
    formatDate(d) {
      if (!d) return '';
      return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    },
    statusClass(status) {
      const map = {
        pending:    'bg-yellow-100 text-yellow-700',
        confirmed:  'bg-blue-100 text-blue-700',
        processing: 'bg-indigo-100 text-indigo-700',
        shipped:    'bg-purple-100 text-purple-700',
        delivered:  'bg-green-100 text-green-700',
        cancelled:  'bg-red-100 text-red-700',
        refunded:   'bg-stone-100 text-stone-600',
      };
      return map[status] || 'bg-stone-100 text-stone-600';
    },
    itemStatusClass(status) {
      const map = {
        pending:    'bg-yellow-900/40 text-yellow-400',
        processing: 'bg-indigo-900/40 text-indigo-400',
        shipped:    'bg-purple-900/40 text-purple-400',
        delivered:  'bg-green-900/40 text-green-400',
      };
      return map[status] || 'bg-slate-800 text-slate-400';
    },
    isStepDone(key) {
      if (!this.activeOrder || !this.activeOrder.delivery) return false;
      const cur = this.activeOrder.delivery.status;
      return STEP_ORDER.indexOf(key) < STEP_ORDER.indexOf(cur);
    },
    isCurrentStep(key) {
      if (!this.activeOrder || !this.activeOrder.delivery) return false;
      return this.activeOrder.delivery.status === key;
    },
    async confirmOrderReceived() {
      this.confirmingReceipt = true;
      try {
        await axios.post(`/account/orders/${this.activeOrder.id}/receive`);
        this.activeOrder.status = 'completed';
        alert('Thank you! Your order has been marked as received.');
      } catch (e) {
        alert('Could not update status. Please try again.');
      } finally {
        this.confirmingReceipt = false;
      }
    }
  },
};
</script>

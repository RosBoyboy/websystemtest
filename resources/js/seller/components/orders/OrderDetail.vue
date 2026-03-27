<template>
  <div class="max-w-3xl space-y-5">

    <!-- Back -->
    <router-link to="/orders" class="inline-flex items-center gap-1 text-slate-400 hover:text-white text-sm transition-colors">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
      Back to Orders
    </router-link>

    <div v-if="loading" class="text-slate-500 text-sm">Loading…</div>

    <template v-else-if="order">

      <!-- Header -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <div class="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h2 class="text-white text-lg font-bold">{{ order.order_number }}</h2>
            <p class="text-slate-500 text-sm mt-1">{{ formatDate(order.created_at) }}</p>
          </div>
          <span :class="statusClass(order.status)" class="px-3 py-1 rounded-full text-sm font-medium">
            {{ order.status }}
          </span>
        </div>
      </div>

      <!-- Customer info -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <h3 class="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Customer</h3>
        <p class="text-white font-medium">{{ order.user ? order.user.name : '' }}</p>
        <p class="text-slate-400 text-sm">{{ order.user ? order.user.email : '' }}</p>
      </div>

      <!-- My items in this order -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <h3 class="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">Your Items</h3>
        <div class="space-y-3">
          <div v-for="item in order.items" :key="item.id"
               class="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg">
            <img v-if="item.product && item.product.images && item.product.images[0]"
                 :src="item.product.images[0]"
                 class="w-12 h-12 rounded-lg object-cover bg-slate-800" alt="" />
            <div v-else class="w-12 h-12 rounded-lg bg-slate-800"></div>
            <div class="flex-1 min-w-0">
              <p class="text-white font-medium truncate">{{ item.product ? item.product.name : '' }}</p>
              <p class="text-slate-500 text-xs">
                Qty: {{ item.quantity }}
                <span v-if="item.size"> · Size: {{ item.size }}</span>
                <span v-if="item.color"> · Color: {{ item.color }}</span>
              </p>
            </div>
            <p class="text-white font-semibold">${{ item.total_price }}</p>
          </div>
        </div>
      </div>

      <!-- Delivery info -->
      <div v-if="order.delivery" class="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <h3 class="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Delivery</h3>
        <dl class="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt class="text-slate-500">Carrier</dt>
            <dd class="text-white">{{ order.delivery.carrier || '—' }}</dd>
          </div>
          <div>
            <dt class="text-slate-500">Tracking #</dt>
            <dd class="text-white font-mono">{{ order.delivery.tracking_number || '—' }}</dd>
          </div>
          <div>
            <dt class="text-slate-500">Status</dt>
            <dd class="text-white capitalize">{{ order.delivery.status }}</dd>
          </div>
          <div>
            <dt class="text-slate-500">Est. Delivery</dt>
            <dd class="text-white">{{ order.delivery.estimated_delivery || '—' }}</dd>
          </div>
        </dl>
      </div>

      <!-- Fulfillment status update -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <h3 class="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Update Fulfillment Status</h3>

        <div v-if="['delivered', 'completed', 'cancelled'].includes(order.status)"
             class="text-slate-500 text-sm">
          No further action required for status "{{ order.status }}".
        </div>

        <div v-else class="flex items-center gap-3 flex-wrap">
          <select v-model="newStatus"
            class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors">
            <option value="">Select new status</option>
            <option v-for="s in allowedTransitions" :key="s" :value="s" class="capitalize">{{ s }}</option>
          </select>
          <button @click="updateStatus" :disabled="!newStatus || updating"
            class="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
            {{ updating ? 'Updating…' : 'Update Status' }}
          </button>
        </div>

        <p v-if="statusError" class="mt-2 text-red-400 text-sm">{{ statusError }}</p>
        <p v-if="statusSuccess" class="mt-2 text-green-400 text-sm">{{ statusSuccess }}</p>
      </div>

    </template>
  </div>
</template>

<script>
const STATUS_RANK = {
  pending: 0, confirmed: 1, processing: 2, shipped: 3, out_for_delivery: 4,
  delivered: 5, completed: 6, cancelled: 7,
};

export default {
  name: 'OrderDetail',
  data() {
    return {
      order:         null,
      loading:       false,
      newStatus:     '',
      updating:      false,
      statusError:   null,
      statusSuccess: null,
    };
  },
  computed: {
    allowedTransitions() {
      if (!this.order) return [];
      const current = STATUS_RANK[this.order.status] ?? -1;
      return ['confirmed', 'processing', 'shipped', 'out_for_delivery', 'delivered'].filter(s => STATUS_RANK[s] > current);
    },
  },
  created() {
    this.fetchOrder();
  },
  methods: {
    async fetchOrder() {
      this.loading = true;
      try {
        const { data } = await this.$http.get(`/seller/orders/${this.$route.params.id}`);
        this.order = data;
      } catch (e) { console.error(e); }
      finally { this.loading = false; }
    },
    async updateStatus() {
      if (!this.newStatus) return;
      this.statusError   = null;
      this.statusSuccess = null;
      this.updating      = true;
      try {
        const { data } = await this.$http.put(`/seller/orders/${this.order.id}/fulfillment`, { status: this.newStatus });
        this.order         = data.order;
        this.newStatus     = '';
        this.statusSuccess = 'Status updated successfully.';
      } catch (e) {
        this.statusError = e.response?.data?.message || 'Update failed.';
      } finally {
        this.updating = false;
      }
    },
    formatDate(d) {
      return new Date(d).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    },
    statusClass(status) {
      const map = {
        pending:    'bg-yellow-900/40 text-yellow-400',
        confirmed:  'bg-blue-900/40 text-blue-400',
        processing: 'bg-purple-900/40 text-purple-400',
        shipped:    'bg-indigo-900/40 text-indigo-400',
        delivered:  'bg-green-900/40 text-green-400',
        completed:  'bg-green-900/60 text-green-300',
        cancelled:  'bg-red-900/40 text-red-400',
      };
      return map[status] || 'bg-slate-800 text-slate-400';
    },
  },
};
</script>

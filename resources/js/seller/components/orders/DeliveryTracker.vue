<template>
  <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-lg font-bold text-white">🚚 Delivery Tracking</h2>
      <span v-if="!isEditing" @click="isEditing = true" class="text-xs px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded cursor-pointer font-semibold transition-colors">
        ✏️ Update Status
      </span>
    </div>

    <!-- Tracking visual -->
    <div class="mb-6 p-6 bg-slate-800/50 rounded-lg">
      <div class="flex items-center justify-between mb-8">
        <div v-for="(step, idx) in steps" :key="idx" class="flex flex-col items-center flex-1">
          <!-- Step circle -->
          <div :class="['w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-2 transition-all', 
            idx < currentStepIndex
              ? 'bg-green-500 text-white'
              : idx === currentStepIndex
              ? 'bg-orange-500 text-white ring-2 ring-orange-400'
              : 'bg-slate-700 text-slate-400']">
            {{ idx < currentStepIndex ? '✓' : idx + 1 }}
          </div>
          <!-- Step label -->
          <p :class="['text-xs font-semibold text-center',
            idx <= currentStepIndex ? 'text-white' : 'text-slate-500']">
            {{ step.label }}
          </p>
          <!-- Step date -->
          <p v-if="step.timestamp" class="text-9px text-slate-500 mt-1">
            {{ formatDate(step.timestamp) }}
          </p>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="h-1 bg-slate-700 rounded-full overflow-hidden">
        <div :style="{ width: `${(currentStepIndex + 1) / steps.length * 100}%` }" class="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500"></div>
      </div>
    </div>

    <!-- Edit mode: Status selector -->
    <div v-if="isEditing" class="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
      <p class="text-sm font-semibold text-white mb-3">Select new status:</p>
      <div class="space-y-2 mb-4">
        <button
          v-for="(step, idx) in steps"
          :key="idx"
          @click="updateDeliveryStatus(step.status)"
          :class="['w-full px-4 py-2.5 rounded-lg font-semibold transition-colors text-left flex items-center gap-3',
            currentStatus === step.status
              ? 'bg-orange-500 text-white'
              : 'bg-slate-700 hover:bg-slate-600 text-slate-200']"
        >
          <span>{{ step.icon }}</span>
          <div>
            <p class="font-semibold">{{ step.label }}</p>
            <p class="text-xs opacity-75">{{ step.description }}</p>
          </div>
        </button>
      </div>
      <div class="flex gap-2">
        <button @click="isEditing = false" class="flex-1 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded font-semibold">Cancel</button>
        <button @click="submitUpdate" :disabled="updating" class="flex-1 px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded font-semibold disabled:opacity-50">
          {{ updating ? 'Updating…' : 'Save' }}
        </button>
      </div>
    </div>

    <!-- Tracking number -->
    <div v-if="order.tracking_number" class="mt-6 pt-4 border-t border-slate-800">
      <p class="text-xs text-slate-400 font-semibold uppercase mb-1">Tracking Number</p>
      <p class="text-sm font-mono text-slate-200">{{ order.tracking_number }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DeliveryTracker',
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  emits: ['update'],
  data() {
    return {
      isEditing: false,
      updating: false,
      currentStatus: this.order.status || 'pending',
      steps: [
        {
          status: 'pending',
          label: 'Ordered',
          icon: '📦',
          description: 'Order received',
          timestamp: null
        },
        {
          status: 'picked_up',
          label: 'Picked Up',
          icon: '🎁',
          description: 'Order packed & ready',
          timestamp: null
        },
        {
          status: 'in_transit',
          label: 'In Transit',
          icon: '🚚',
          description: 'On the way',
          timestamp: null
        },
        {
          status: 'out_for_delivery',
          label: 'Out for Delivery',
          icon: '📍',
          description: 'Driver nearby',
          timestamp: null
        },
        {
          status: 'delivered',
          label: 'Delivered',
          icon: '✅',
          description: 'Order delivered',
          timestamp: null
        }
      ]
    };
  },
  watch: {
    'order.status'(newVal) {
      this.currentStatus = newVal;
    }
  },
  computed: {
    currentStepIndex() {
      const statusOrder = ['pending', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered'];
      return Math.max(0, statusOrder.indexOf(this.currentStatus));
    }
  },
  methods: {
    async updateDeliveryStatus(status) {
      this.currentStatus = status;
    },

    async submitUpdate() {
      this.updating = true;
      try {
        const { data } = await axios.patch(`/seller/orders/${this.order.id}/delivery`, {
          status: this.currentStatus,
          updated_at: new Date().toISOString()
        });
        
        // Update local order object
        this.order.status = this.currentStatus;
        this.order.updated_at = data.updated_at || new Date().toISOString();
        
        this.isEditing = false;
        this.$emit('update', data);
        
        console.log('✓ Status updated to:', this.currentStatus);
      } catch (e) {
        console.error('Error updating status:', e);
        alert('Failed to update status. Please try again.');
      } finally {
        this.updating = false;
      }
    },

    formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }
};
</script>

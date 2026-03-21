<template>
  <div class="space-y-4">
    <div class="flex items-center gap-3">
      <router-link to="/products" class="text-slate-400 hover:text-white">← Products</router-link>
      <h1 class="text-2xl font-bold text-white">Product Detail</h1>
    </div>

    <div v-if="loading" class="text-slate-500">Loading…</div>

    <div v-else-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Left Column: Product Info & Images -->
      <div class="space-y-4">
        <!-- Product Images -->
        <div v-if="product.images && product.images.length" class="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <h3 class="text-white font-bold mb-4">Product Images</h3>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(image, idx) in product.images" :key="idx" class="aspect-square rounded-lg overflow-hidden bg-slate-800">
              <img :src="image" :alt="`Product image ${idx + 1}`" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- Product Info -->
        <div class="bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-3 text-sm">
          <h2 class="text-white text-xl font-bold">{{ product.name }}</h2>
          <p class="text-slate-400">{{ product.description }}</p>
          <div class="grid grid-cols-2 gap-2 pt-2">
            <div><span class="text-slate-500">Price</span><p class="text-white font-semibold">${{ parseFloat(product.price).toFixed(2) }}</p></div>
            <div><span class="text-slate-500">SKU</span><p class="text-white font-mono text-xs">{{ product.sku }}</p></div>
            <div><span class="text-slate-500">Stock</span>
              <p :class="product.stock_quantity <= product.low_stock_threshold ? 'text-red-400 font-semibold' : 'text-white'">
                {{ product.stock_quantity }}
              </p>
            </div>
            <div><span class="text-slate-500">Category</span><p class="text-white">{{ product.category ? product.category.name : '—' }}</p></div>
            <div><span class="text-slate-500">Seller</span><p class="text-white">{{ product.seller ? product.seller.store_name : '—' }}</p></div>
          </div>
          
          <!-- Variants section -->
          <div class="border-t border-slate-700 pt-4 mt-4 space-y-3">
            <div>
              <span class="text-slate-500 block mb-2">Sizes</span>
              <div v-if="product.sizes && product.sizes.length" class="flex flex-wrap gap-2">
                <span v-for="size in product.sizes" :key="size"
                  class="px-3 py-1 bg-blue-900/30 text-blue-300 rounded border border-blue-700 text-xs font-medium">
                  {{ size }}
                </span>
              </div>
              <p v-else class="text-slate-600">No sizes specified</p>
            </div>
            
            <div>
              <span class="text-slate-500 block mb-2">Colors</span>
              <div v-if="product.colors && product.colors.length" class="flex flex-wrap gap-3">
                <div v-for="color in product.colors" :key="color" class="flex items-center gap-2">
                  <div
                    :style="{ backgroundColor: isColorHex(color) ? color : getColorHex(color) }"
                    class="w-5 h-5 rounded border border-slate-600">
                  </div>
                  <span class="text-sm text-slate-300">{{ color }}</span>
                </div>
              </div>
              <p v-else class="text-slate-600">No colors specified</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Status & Actions -->
      <div class="bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-4">
        <h2 class="text-white text-lg font-bold">Review & Approve</h2>
        
        <!-- Status Selector -->
        <div>
          <label class="block text-slate-400 text-sm mb-2">Product Status</label>
          <select v-model="editStatus" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-600">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="draft">Draft</option>
          </select>
          <p class="text-xs text-slate-500 mt-1">Current: <span class="px-2 py-0.5 rounded text-xs font-medium"
            :class="{ 'bg-green-900/50 text-green-400': product.status === 'active', 'bg-red-900/50 text-red-400': product.status === 'inactive', 'bg-slate-700/50 text-slate-400': product.status === 'draft' }">
            {{ product.status }}</span></p>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-2 pt-4 border-t border-slate-700">
          <button 
            v-if="editStatus !== product.status"
            @click="updateStatus" 
            :disabled="updating"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed">
            {{ updating ? 'Updating...' : 'Update Status' }}
          </button>
          <button 
            v-else
            disabled
            class="w-full bg-slate-700 text-slate-400 font-semibold py-2 rounded-lg cursor-not-allowed">
            Status Unchanged
          </button>
          
          <button 
            @click="$router.back()" 
            class="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition">
            Go Back
          </button>
        </div>

        <!-- Status Info -->
        <div class="bg-slate-800/50 rounded-lg p-3 border border-slate-700 text-xs text-slate-300 space-y-1">
          <p><strong>Active:</strong> Product is visible to customers</p>
          <p><strong>Inactive:</strong> Product is hidden from customers</p>
          <p><strong>Draft:</strong> Product is still being reviewed</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() { 
    return { 
      product: null, 
      editStatus: null,
      updating: false,
      loading: false,
      colorMap: {
        'Black': '#000000', 'White': '#FFFFFF', 'Gray': '#808080', 'Grey': '#808080',
        'Red': '#EF4444', 'Blue': '#3B82F6', 'Navy': '#001F3F', 'Green': '#10B981',
        'Yellow': '#FBBF24', 'Orange': '#F97316', 'Purple': '#A855F7', 'Pink': '#EC4899',
        'Brown': '#92400E', 'Beige': '#D4A574', 'Tan': '#D2B48C', 'Gold': '#FFD700',
      }
    }; 
  },
  methods: {
    isColorHex(color) {
      return /^#[0-9A-F]{6}$/i.test(color);
    },
    getColorHex(colorName) {
      return this.colorMap[colorName] || '#808080';
    },
    async fetchProduct() {
      this.loading = true;
      try {
        const { data } = await this.$http.get('/admin/products', { params: { page: 1 } });
        this.product = data.data.find(p => p.id == this.$route.params.id) || null;
        if (this.product) {
          this.editStatus = this.product.status;
        }
      } catch (e) {
        console.error('Failed to fetch product:', e);
      } finally { 
        this.loading = false; 
      }
    },
    async updateStatus() {
      if (this.editStatus === this.product.status) {
        return;
      }
      
      this.updating = true;
      try {
        const { data } = await this.$http.post(`/admin/products/${this.product.id}/status`, {
          status: this.editStatus
        });
        
        this.product.status = this.editStatus;
        
        // Show success message (you could use a toast notification here)
        alert(`Product status updated to: ${this.editStatus}`);
      } catch (e) {
        console.error('Failed to update status:', e);
        this.editStatus = this.product.status;
        alert('Failed to update status. Please try again.');
      } finally {
        this.updating = false;
      }
    }
  },
  created() { this.fetchProduct(); },
};
</script>

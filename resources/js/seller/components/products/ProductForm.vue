<template>
  <div class="max-w-3xl">

    <!-- Loading state for edit -->
    <div v-if="fetchingProduct" class="bg-slate-900 border border-slate-800 rounded-xl p-10 text-center text-slate-500">
      Loading product…
    </div>

    <form v-else @submit.prevent="submit" class="space-y-6">

      <!-- Basic Info -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <h3 class="text-white font-semibold text-base mb-2">Product Details</h3>

        <div>
          <label class="block text-sm font-medium text-slate-400 mb-1">Name <span class="text-red-500">*</span></label>
          <input v-model="form.name" type="text" required
            class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors"
            placeholder="e.g. Urban Cargo Jogger" />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-400 mb-1">Description</label>
          <textarea v-model="form.description" rows="4"
            class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
            placeholder="Product description…" />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-400 mb-1">Category <span class="text-red-500">*</span></label>
          <select v-model="form.category_id" required
            class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors">
            <option value="" disabled>Select category</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
          </select>
        </div>
      </div>

      <!-- Pricing -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 class="text-white font-semibold text-base mb-4">Pricing</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-slate-400 mb-1">Price ($) <span class="text-red-500">*</span></label>
            <input v-model.number="form.price" type="number" step="0.01" min="0" required
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors" />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-400 mb-1">Compare Price ($)</label>
            <input v-model.number="form.compare_price" type="number" step="0.01" min="0"
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="Original price (optional)" />
          </div>
        </div>
      </div>

      <!-- Inventory -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 class="text-white font-semibold text-base mb-4">Inventory</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-slate-400 mb-1">SKU</label>
            <input v-model="form.sku" type="text"
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="AUTO-GENERATED" />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-400 mb-1">Stock Qty <span class="text-red-500">*</span></label>
            <input v-model.number="form.stock_quantity" type="number" min="0" required
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors" />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-400 mb-1">Low Stock Threshold</label>
            <input v-model.number="form.low_stock_threshold" type="number" min="0"
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="5" />
          </div>
        </div>
      </div>

      <!-- Variants -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
        <h3 class="text-white font-semibold text-base mb-4">Variants</h3>

        <!-- Sizes Selection -->
        <div>
          <label class="block text-sm font-medium text-slate-400 mb-3">
            Sizes
            <span class="text-slate-600 font-normal ml-1">{{ form.sizes.length > 0 ? `(${form.sizes.length} selected)` : '' }}</span>
          </label>
          <div class="flex flex-wrap gap-2">
            <button v-for="size in availableSizes" :key="size" type="button"
              @click="toggleSize(size)"
              :class="{
                'bg-orange-500 border-orange-500 text-white': form.sizes.includes(size),
                'bg-slate-800 border-slate-700 text-slate-400 hover:border-orange-500': !form.sizes.includes(size),
              }"
              class="px-4 py-2 border rounded-lg font-medium transition-colors cursor-pointer">
              {{ size }}
            </button>
          </div>
          <!-- Custom size input -->
          <div class="mt-4">
            <input v-model="customSizeInput" type="text" @keyup.enter="addCustomSize"
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm"
              placeholder="Add custom size (e.g., One Size)" />
            <p class="text-slate-600 text-xs mt-1">Press Enter to add custom size</p>
          </div>
        </div>

        <!-- Colors Selection -->
        <div>
          <label class="block text-sm font-medium text-slate-400 mb-3">
            Colors
            <span class="text-slate-600 font-normal ml-1">{{ form.colors.length > 0 ? `(${form.colors.length} selected)` : '' }}</span>
          </label>
          <div class="flex flex-wrap gap-2">
            <button v-for="color in availableColors" :key="color.name" type="button"
              @click="toggleColor(color.name)"
              :class="{
                'ring-2 ring-orange-400 ring-offset-2 ring-offset-slate-900': form.colors.includes(color.name),
                'opacity-75 hover:opacity-100': !form.colors.includes(color.name),
              }"
              :style="{ backgroundColor: color.hex }"
              class="w-12 h-12 rounded-lg transition-all cursor-pointer border border-slate-700 flex items-center justify-center group relative"
              :title="color.name">
              <!-- Checkmark for selected colors -->
              <svg v-if="form.colors.includes(color.name)" class="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              <!-- Tooltip on hover -->
              <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-950 text-slate-200 text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {{ color.name }}
              </span>
            </button>
          </div>
          <!-- Custom color input -->
          <div class="mt-4 flex gap-2">
            <input v-model="customColorHex" type="color"
              class="w-12 h-10 rounded-lg cursor-pointer border border-slate-700"
              title="Pick a color" />
            <input v-model="customColorName" type="text" @keyup.enter="addCustomColor"
              class="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm"
              placeholder="Color name (e.g., Navy Blue)" />
            <button type="button" @click="addCustomColor"
              class="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-400 hover:text-orange-400 hover:border-orange-500 transition-colors text-sm font-medium">
              Add
            </button>
          </div>
        </div>
      </div>

      <!-- Images -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 class="text-white font-semibold text-base mb-1">Product Images</h3>
        <p class="text-slate-500 text-xs mb-4">Upload images from your device (JPG, PNG, GIF, WebP — max 5 MB each).</p>

        <!-- Uploaded image grid -->
        <div class="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-4" v-if="imageEntries.length">
          <div v-for="(entry, idx) in imageEntries" :key="idx"
            class="relative group rounded-lg overflow-hidden border border-slate-700 bg-slate-800 aspect-square">

            <!-- Preview -->
            <img :src="entry.preview" :alt="`Image ${idx+1}`"
              class="w-full h-full object-cover" />

            <!-- Uploading spinner overlay -->
            <div v-if="entry.uploading"
              class="absolute inset-0 bg-black/60 flex items-center justify-center">
              <svg class="animate-spin w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
              </svg>
            </div>

            <!-- Error badge -->
            <div v-else-if="entry.error"
              class="absolute inset-0 bg-red-900/70 flex flex-col items-center justify-center p-2">
              <span class="text-red-300 text-xs text-center leading-tight">{{ entry.error }}</span>
              <button type="button" @click="retryUpload(idx)"
                class="mt-1 text-xs text-orange-400 underline">Retry</button>
            </div>

            <!-- Done check -->
            <div v-else
              class="absolute top-1.5 left-1.5 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
              </svg>
            </div>

            <!-- Remove button -->
            <button type="button" @click="removeImageEntry(idx)"
              class="absolute top-1.5 right-1.5 w-6 h-6 bg-black/60 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Drop/click zone -->
        <label
          class="flex flex-col items-center justify-center w-full border-2 border-dashed border-slate-700 hover:border-orange-500 rounded-xl py-8 px-4 cursor-pointer transition-colors group"
          :class="{ 'border-orange-500 bg-orange-500/5': dragging }"
          @dragover.prevent="dragging = true"
          @dragleave.prevent="dragging = false"
          @drop.prevent="onDrop">
          <input type="file" accept="image/*" multiple class="hidden" ref="fileInput" @change="onFileChange" />
          <svg class="w-10 h-10 text-slate-600 group-hover:text-orange-500 mb-3 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M8 10a2 2 0 100-4 2 2 0 000 4zm-4 8h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          <p class="text-slate-400 text-sm group-hover:text-orange-400 transition-colors font-medium">Click to browse or drag &amp; drop images here</p>
          <p class="text-slate-600 text-xs mt-1">JPG, PNG, GIF, WebP · Max 5 MB per file</p>
        </label>
      </div>

      <!-- Status -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 class="text-white font-semibold text-base mb-4">Status</h3>
        <div class="flex gap-3">
          <label v-for="s in ['active', 'inactive', 'draft']" :key="s"
            class="flex items-center gap-2 cursor-pointer">
            <input v-model="form.status" type="radio" :value="s" class="accent-orange-500" />
            <span class="text-slate-300 text-sm capitalize">{{ s }}</span>
          </label>
        </div>
      </div>

      <!-- Error -->
      <div v-if="error" class="p-3 bg-red-900/40 border border-red-700 rounded-lg text-red-400 text-sm">
        {{ error }}
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <button
          type="submit"
          :disabled="saving"
          class="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
        >
          {{ saving ? 'Saving…' : (isEdit ? 'Update Product' : 'Create Product') }}
        </button>
        <router-link to="/products"
          class="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium px-6 py-2.5 rounded-lg transition-colors">
          Cancel
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  data() {
    return {
      form: {
        name: '', description: '', category_id: '',
        price: '', compare_price: '', sku: '',
        stock_quantity: 0, low_stock_threshold: 5,
        images: [], sizes: [], colors: [],
        status: 'draft', is_featured: false,
      },
      // Each entry: { preview: <dataURL or server URL>, url: <server URL|null>, uploading: bool, error: str|null, file: File|null }
      imageEntries: [],
      dragging:        false,
      categories:      [],
      saving:          false,
      fetchingProduct: false,
      error:           null,
      
      // Predefined sizes and colors
      availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '2XL', '3XL'],
      availableColors: [
        { name: 'Black', hex: '#000000' },
        { name: 'White', hex: '#FFFFFF' },
        { name: 'Gray', hex: '#808080' },
        { name: 'Red', hex: '#EF4444' },
        { name: 'Blue', hex: '#3B82F6' },
        { name: 'Navy', hex: '#001F3F' },
        { name: 'Green', hex: '#10B981' },
        { name: 'Yellow', hex: '#FBBF24' },
        { name: 'Orange', hex: '#F97316' },
        { name: 'Purple', hex: '#A855F7' },
        { name: 'Pink', hex: '#EC4899' },
        { name: 'Brown', hex: '#92400E' },
      ],
      
      // For custom variants
      customSizeInput: '',
      customColorHex: '#000000',
      customColorName: '',
    };
  },
  computed: {
    isEdit() { return !!this.$route.params.id; },
    anyUploading() { return this.imageEntries.some(e => e.uploading); },
  },
  async created() {
    await this.loadCategories();
    if (this.isEdit) await this.loadProduct();
  },
  methods: {
    async loadCategories() {
      try {
        const { data } = await this.$http.get('/seller/products/categories');
        this.categories = Array.isArray(data) ? data : [];
      } catch (e) {
        try {
          const { data } = await this.$http.get('/shop/categories');
          this.categories = Array.isArray(data) ? data : [];
        } catch (_) {
          this.categories = [];
        }
      }
    },
    async loadProduct() {
      this.fetchingProduct = true;
      try {
        const { data } = await this.$http.get(`/seller/products/${this.$route.params.id}`);
        this.form = {
          name:                data.name,
          description:         data.description || '',
          category_id:         data.category_id,
          price:               data.price,
          compare_price:       data.compare_price || '',
          sku:                 data.sku || '',
          stock_quantity:      data.stock_quantity,
          low_stock_threshold: data.low_stock_threshold || 5,
          images:              data.images || [],
          sizes:               data.sizes  || [],
          colors:              data.colors || [],
          status:              data.status,
          is_featured:         data.is_featured || false,
        };
        // Populate imageEntries from existing server URLs
        this.imageEntries = (data.images || []).map(url => ({
          preview: url, url, uploading: false, error: null, file: null,
        }));
      } catch (e) {
        this.error = 'Failed to load product.';
      } finally {
        this.fetchingProduct = false;
      }
    },

    /* ── Variant selection helpers ── */
    toggleSize(size) {
      const idx = this.form.sizes.indexOf(size);
      if (idx > -1) {
        this.form.sizes.splice(idx, 1);
      } else {
        this.form.sizes.push(size);
      }
    },
    toggleColor(color) {
      const idx = this.form.colors.indexOf(color);
      if (idx > -1) {
        this.form.colors.splice(idx, 1);
      } else {
        this.form.colors.push(color);
      }
    },
    addCustomSize() {
      const size = this.customSizeInput.trim().toUpperCase();
      if (!size) return;
      if (!this.form.sizes.includes(size)) {
        this.form.sizes.push(size);
      }
      this.customSizeInput = '';
    },
    addCustomColor() {
      const colorName = this.customColorName.trim();
      if (!colorName) return;
      if (!this.form.colors.includes(colorName)) {
        this.form.colors.push(colorName);
        // Also add to available colors for future selections
        if (!this.availableColors.find(c => c.name === colorName)) {
          this.availableColors.push({ name: colorName, hex: this.customColorHex });
        }
      }
      this.customColorName = '';
      this.customColorHex = '#000000';
    },

    /* ── Image upload helpers ── */
    onFileChange(e) {
      this.processFiles(Array.from(e.target.files));
      e.target.value = ''; // allow re-selecting same file
    },
    onDrop(e) {
      this.dragging = false;
      const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
      this.processFiles(files);
    },
    processFiles(files) {
      files.forEach(file => {
        if (file.size > 5 * 1024 * 1024) {
          alert(`"${file.name}" exceeds 5 MB and was skipped.`);
          return;
        }
        const entry = { preview: null, url: null, uploading: true, error: null, file };
        this.imageEntries.push(entry);
        const idx = this.imageEntries.length - 1;

        // Local preview via FileReader
        const reader = new FileReader();
        reader.onload = ev => { this.imageEntries[idx].preview = ev.target.result; };
        reader.readAsDataURL(file);

        // Upload to server
        this.uploadFile(idx, file);
      });
    },
    async uploadFile(idx, file) {
      const fd = new FormData();
      fd.append('image', file);
      try {
        const { data } = await this.$http.post('/seller/products/upload-image', fd, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        this.imageEntries[idx].url       = data.url;
        this.imageEntries[idx].uploading = false;
      } catch (e) {
        const msg = e.response?.data?.message || 'Upload failed';
        this.imageEntries[idx].error     = msg;
        this.imageEntries[idx].uploading = false;
      }
    },
    async retryUpload(idx) {
      const entry = this.imageEntries[idx];
      if (!entry.file) return;
      entry.error     = null;
      entry.uploading = true;
      await this.uploadFile(idx, entry.file);
    },
    removeImageEntry(idx) {
      this.imageEntries.splice(idx, 1);
    },

    async submit() {
      if (this.anyUploading) {
        this.error = 'Please wait for all images to finish uploading.';
        return;
      }
      const failedUploads = this.imageEntries.filter(e => e.error);
      if (failedUploads.length) {
        this.error = 'Some images failed to upload. Please retry or remove them before saving.';
        return;
      }

      this.error  = null;
      this.saving = true;

      // Collect server URLs
      this.form.images = this.imageEntries.map(e => e.url).filter(Boolean);
      // Sizes and colors are already arrays from checkbox selections

      try {
        if (this.isEdit) {
          await this.$http.put(`/seller/products/${this.$route.params.id}`, this.form);
        } else {
          await this.$http.post('/seller/products', this.form);
        }
        this.$router.push({ name: 'seller.products' });
      } catch (e) {
        const err = e.response?.data;
        if (err?.errors) {
          this.error = Object.values(err.errors).flat().join(' ');
        } else {
          this.error = err?.message || 'Save failed.';
        }
      } finally {
        this.saving = false;
      }
    },
  },
};
</script>

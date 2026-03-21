import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Lazy-load components for code splitting
const AdminLayout    = () => import('../components/layout/AdminLayout.vue');
const Dashboard      = () => import('../components/dashboard/Dashboard.vue');
const UserList       = () => import('../components/users/UserList.vue');
const UserDetail     = () => import('../components/users/UserDetail.vue');
const SellerList     = () => import('../components/sellers/SellerList.vue');
const SellerDetail   = () => import('../components/sellers/SellerDetail.vue');
const ProductList    = () => import('../components/products/ProductList.vue');
const ProductDetail  = () => import('../components/products/ProductDetail.vue');
const OrderList      = () => import('../components/orders/OrderList.vue');
const OrderDetail    = () => import('../components/orders/OrderDetail.vue');
const InventoryManager = () => import('../components/inventory/InventoryManager.vue');
const DeliveryTracker  = () => import('../components/delivery/DeliveryTracker.vue');
const SiteSettings     = () => import('../components/settings/SiteSettings.vue');

const routes = [
    {
        path: '/',
        component: AdminLayout,
        meta: { requiresAuth: true },
        children: [
            { path: '',          name: 'admin.dashboard',  component: Dashboard },
            { path: 'users',     name: 'admin.users',      component: UserList },
            { path: 'users/:id', name: 'admin.user-detail', component: UserDetail },
            { path: 'sellers',     name: 'admin.sellers',       component: SellerList },
            { path: 'sellers/:id', name: 'admin.seller-detail', component: SellerDetail },
            { path: 'products',     name: 'admin.products',        component: ProductList },
            { path: 'products/:id', name: 'admin.product-detail',  component: ProductDetail },
            { path: 'orders',     name: 'admin.orders',        component: OrderList },
            { path: 'orders/:id', name: 'admin.order-detail',  component: OrderDetail },
            { path: 'inventory', name: 'admin.inventory',  component: InventoryManager },
            { path: 'delivery',  name: 'admin.delivery',   component: DeliveryTracker },
            { path: 'settings',  name: 'admin.settings',   component: SiteSettings },
        ],
    },
    { path: '*', redirect: '/' },
];

const router = new VueRouter({
    mode: 'hash',
    base: '/admin/app',
    routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('admin_token');
    
    // If route requires auth but no token, redirect to login
    if (to.meta.requiresAuth && !token) {
        window.location.href = '/login?type=admin';
        return; // Stop here, don't call next()
    }
    
    // Otherwise allow navigation
    next();
});

export default router;

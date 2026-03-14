import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const SellerLayout    = () => import('../components/layout/SellerLayout.vue');
const SellerLogin     = () => import('../components/auth/SellerLogin.vue');
const Dashboard       = () => import('../components/dashboard/Dashboard.vue');
const ProductList     = () => import('../components/products/ProductList.vue');
const ProductForm     = () => import('../components/products/ProductForm.vue');
const OrderList       = () => import('../components/orders/OrderList.vue');
const OrderDetail     = () => import('../components/orders/OrderDetail.vue');
const InventoryManager = () => import('../components/inventory/InventoryManager.vue');
const EarningsAnalytics = () => import('../components/earnings/EarningsAnalytics.vue');
const SellerProfile   = () => import('../components/profile/SellerProfile.vue');
const SellerChat      = () => import('../components/chat/SellerChat.vue');

const routes = [
    {
        path: '/login',
        name: 'seller.login',
        component: SellerLogin,
        meta: { guest: true },
    },
    {
        path: '/',
        component: SellerLayout,
        meta: { requiresAuth: true },
        children: [
            { path: '',               name: 'seller.dashboard',       component: Dashboard },
            { path: 'products',       name: 'seller.products',        component: ProductList },
            { path: 'products/new',   name: 'seller.product-new',     component: ProductForm },
            { path: 'products/:id',   name: 'seller.product-edit',    component: ProductForm },
            { path: 'orders',         name: 'seller.orders',          component: OrderList },
            { path: 'orders/:id',     name: 'seller.order-detail',    component: OrderDetail },
            { path: 'inventory',      name: 'seller.inventory',       component: InventoryManager },
            { path: 'earnings',       name: 'seller.earnings',        component: EarningsAnalytics },
            { path: 'messages',       name: 'seller.messages',        component: SellerChat },
            { path: 'profile',        name: 'seller.profile',         component: SellerProfile },
        ],
    },
    { path: '*', redirect: '/' },
];

const router = new VueRouter({
    mode: 'hash',
    base: '/seller/app',
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('seller_token');
    if (to.meta.requiresAuth && !token) {
        next({ name: 'seller.login' });
    } else if (to.meta.guest && token) {
        next({ name: 'seller.dashboard' });
    } else {
        next();
    }
});

export default router;



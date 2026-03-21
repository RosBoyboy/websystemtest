import Vue from 'vue';
import VueRouter from 'vue-router';

const HomePage        = () => import('../components/home/HomePage.vue');
const ProductListing  = () => import('../components/products/ProductListing.vue');
const ProductDetail   = () => import('../components/products/ProductDetail.vue');
const CartPage        = () => import('../components/cart/CartPage.vue');
const CheckoutPage    = () => import('../components/checkout/CheckoutPage.vue');
const OrderTracking   = () => import('../components/orders/OrderTracking.vue');
const AccountLogin    = () => import('../components/account/AccountLogin.vue');
const AccountRegister = () => import('../components/account/AccountRegister.vue');
const AccountDashboard = () => import('../components/account/AccountDashboard.vue');

Vue.use(VueRouter);

const routes = [
    { path: '/',              name: 'home',       component: HomePage },
    { path: '/products',      name: 'products',   component: ProductListing },
    { path: '/products/:slug',name: 'product',    component: ProductDetail },
    { path: '/cart',          name: 'cart',        component: CartPage },
    { path: '/checkout',      name: 'checkout',    component: CheckoutPage,    meta: { auth: true } },
    { path: '/orders',        name: 'orders',      component: OrderTracking,   meta: { auth: true } },
    { path: '/orders/:id',    name: 'order-detail',component: OrderTracking,   meta: { auth: true } },
    { path: '/login',         name: 'login',       component: AccountLogin },
    { path: '/register',      name: 'register',    component: AccountRegister },
    { path: '/account',       name: 'account',     component: AccountDashboard,meta: { auth: true } },
    { path: '*',              redirect: '/' },
];

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
    scrollBehavior() { return { x: 0, y: 0 }; },
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('customer_token') || localStorage.getItem('seller_token');
    if (to.meta.auth && !token) {
        next({ name: 'login', query: { redirect: to.fullPath } });
    } else {
        next();
    }
});

export default router;

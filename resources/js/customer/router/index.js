import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage        from '../components/home/HomePage.vue';
import ProductListing  from '../components/products/ProductListing.vue';
import ProductDetail   from '../components/products/ProductDetail.vue';
import CartPage        from '../components/cart/CartPage.vue';
import CheckoutPage    from '../components/checkout/CheckoutPage.vue';
import OrderTracking   from '../components/orders/OrderTracking.vue';
import AccountLogin    from '../components/account/AccountLogin.vue';
import AccountRegister from '../components/account/AccountRegister.vue';
import AccountDashboard from '../components/account/AccountDashboard.vue';

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
    const token = localStorage.getItem('customer_token');
    if (to.meta.auth && !token) {
        next({ name: 'login', query: { redirect: to.fullPath } });
    } else {
        next();
    }
});

export default router;

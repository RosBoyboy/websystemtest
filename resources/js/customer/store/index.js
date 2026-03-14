import Vue  from 'vue';
import Vuex from 'vuex';
import auth  from './modules/auth';
import cart  from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { auth, cart },
    strict: process.env.NODE_ENV !== 'production',
});

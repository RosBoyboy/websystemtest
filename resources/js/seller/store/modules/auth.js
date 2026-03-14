import axios from 'axios';

const state = {
    user:   JSON.parse(localStorage.getItem('seller_user')  || localStorage.getItem('customer_user') || 'null'),
    seller: JSON.parse(localStorage.getItem('seller_store') || 'null'),
    token:  localStorage.getItem('seller_token') || localStorage.getItem('customer_token') || null,
};

const getters = {
    isAuthenticated: (s) => !!s.token,
    currentUser:     (s) => s.user,
    currentSeller:   (s) => s.seller,
};

const mutations = {
    SET_AUTH(state, { user, seller, token }) {
        state.user   = user;
        state.seller = seller;
        state.token  = token;
        localStorage.setItem('seller_token',  token);
        localStorage.setItem('seller_user',   JSON.stringify(user));
        localStorage.setItem('seller_store',  JSON.stringify(seller));
        localStorage.setItem('customer_token', token);
        localStorage.setItem('customer_user', JSON.stringify(user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    CLEAR_AUTH(state) {
        state.user   = null;
        state.seller = null;
        state.token  = null;
        localStorage.removeItem('seller_token');
        localStorage.removeItem('seller_user');
        localStorage.removeItem('seller_store');
        localStorage.removeItem('customer_token');
        localStorage.removeItem('customer_user');
        delete axios.defaults.headers.common['Authorization'];
    },
    UPDATE_SELLER(state, seller) {
        state.seller = seller;
        localStorage.setItem('seller_store', JSON.stringify(seller));
    },
};

const actions = {
    async register(_, payload) {
        const { data } = await axios.post('/seller/register', payload);
        return data; // { message: '...' }
    },

    async login({ commit }, credentials) {
        const { data } = await axios.post('/login', credentials);

        if (!['seller', 'both'].includes(data.user.role)) {
            throw new Error('Access denied. Seller account required.');
        }

        // Fetch seller profile to get store info
        // We need to set token first so subsequent call is authenticated
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

        let seller = null;
        try {
            const profile = await axios.get('/seller/profile');
            seller = profile.data.seller;
        } catch (e) {
            delete axios.defaults.headers.common['Authorization'];
            const msg = e.response?.data?.message || 'Seller account not approved or not found.';
            throw new Error(msg);
        }

        commit('SET_AUTH', { user: data.user, seller, token: data.token });
        return data;
    },

    async logout({ commit }) {
        try {
            await axios.post('/logout');
        } catch (_) {
            // silently fail
        }
        commit('CLEAR_AUTH');
    },

    async refreshProfile({ commit, state: s }) {
        if (!s.token) return;
        try {
            const { data } = await axios.get('/seller/profile');
            commit('UPDATE_SELLER', data.seller);
        } catch (_) {
            // ignore
        }
    },
};

export default { namespaced: true, state, getters, mutations, actions };

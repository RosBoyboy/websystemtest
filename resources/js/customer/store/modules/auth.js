import axios from 'axios';

const state = {
    user:  JSON.parse(localStorage.getItem('customer_user') || localStorage.getItem('seller_user') || 'null'),
    token: localStorage.getItem('customer_token') || localStorage.getItem('seller_token') || null,
};

const getters = {
    isAuthenticated: s => !!s.token,
    currentUser:     s => s.user,
};

const mutations = {
    SET_AUTH(state, { user, token }) {
        state.user  = user;
        state.token = token;
        localStorage.setItem('customer_token', token);
        localStorage.setItem('customer_user',  JSON.stringify(user));
        localStorage.setItem('seller_token', token);
        localStorage.setItem('seller_user',  JSON.stringify(user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    CLEAR_AUTH(state) {
        state.user  = null;
        state.token = null;
        localStorage.removeItem('customer_token');
        localStorage.removeItem('customer_user');
        localStorage.removeItem('seller_token');
        localStorage.removeItem('seller_user');
        localStorage.removeItem('seller_store');
        delete axios.defaults.headers.common['Authorization'];
    },
    UPDATE_USER(state, user) {
        state.user = user;
        localStorage.setItem('customer_user', JSON.stringify(user));
        localStorage.setItem('seller_user', JSON.stringify(user));
    },
};

const actions = {
    async login({ commit }, credentials) {
        const { data } = await axios.post('/auth/login', credentials);
        if (data.user.role === 'admin') {
            throw new Error('Admin accounts must use the admin portal.');
        }
        commit('SET_AUTH', { user: data.user, token: data.token });
        return data;
    },

    async register({ commit }, payload) {
        const { data } = await axios.post('/register', payload);
        commit('SET_AUTH', { user: data.user, token: data.token });
        return data;
    },

    async logout({ commit }) {
        try { await axios.post('/logout'); } catch (_) {}
        commit('CLEAR_AUTH');
        
        // Redirect to home page after logout
        window.location.href = '/';
    },

    async refreshUser({ commit }) {
        try {
            const { data } = await axios.get('/user');
            commit('UPDATE_USER', data);
        } catch (_) {}
    },

    async becomeSeller({ commit }, payload) {
        const { data } = await axios.patch('/user/become-seller', payload);
        if (data.user) {
            commit('UPDATE_USER', data.user);
        }
        return data;
    },
};

export default { namespaced: true, state, getters, mutations, actions };

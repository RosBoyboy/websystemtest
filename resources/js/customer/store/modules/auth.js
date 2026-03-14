import axios from 'axios';

const state = {
    user:  JSON.parse(localStorage.getItem('customer_user') || 'null'),
    token: localStorage.getItem('customer_token') || null,
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
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    CLEAR_AUTH(state) {
        state.user  = null;
        state.token = null;
        localStorage.removeItem('customer_token');
        localStorage.removeItem('customer_user');
        delete axios.defaults.headers.common['Authorization'];
    },
    UPDATE_USER(state, user) {
        state.user = user;
        localStorage.setItem('customer_user', JSON.stringify(user));
    },
};

const actions = {
    async login({ commit }, credentials) {
        const { data } = await axios.post('/login', credentials);
        if (data.user.role !== 'customer') {
            throw new Error('This login is for customers only.');
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
    },

    async refreshUser({ commit }) {
        try {
            const { data } = await axios.get('/account');
            commit('UPDATE_USER', data);
        } catch (_) {}
    },
};

export default { namespaced: true, state, getters, mutations, actions };

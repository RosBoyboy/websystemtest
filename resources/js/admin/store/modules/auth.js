import axios from 'axios';

const state = {
    user:  JSON.parse(localStorage.getItem('admin_user') || 'null'),
    token: localStorage.getItem('admin_token') || null,
};

const getters = {
    isAuthenticated: (s) => !!s.token,
    currentUser:     (s) => s.user,
};

const mutations = {
    SET_AUTH(state, { user, token }) {
        state.user  = user;
        state.token = token;
        localStorage.setItem('admin_token', token);
        localStorage.setItem('admin_user', JSON.stringify(user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    CLEAR_AUTH(state) {
        state.user  = null;
        state.token = null;
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        delete axios.defaults.headers.common['Authorization'];
    },
};

const actions = {
    async login({ commit }, credentials) {
        const { data } = await axios.post('/auth/login', credentials);
        if (data.user.role !== 'admin') {
            throw new Error('Access denied. Admin only.');
        }
        commit('SET_AUTH', { user: data.user, token: data.token });
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
};

export default { namespaced: true, state, getters, mutations, actions };

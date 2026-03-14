import axios from 'axios';

const state = {
    stats:     null,
    chart:     [],
    recentOrders: [],
    loading:   false,
};

const mutations = {
    SET_STATS(state, stats)   { state.stats = stats; },
    SET_CHART(state, data)    { state.chart = data; },
    SET_RECENT(state, orders) { state.recentOrders = orders; },
    SET_LOADING(state, val)   { state.loading = val; },
};

const actions = {
    async fetchStats({ commit }) {
        commit('SET_LOADING', true);
        try {
            const { data } = await axios.get('/seller/dashboard/stats');
            commit('SET_STATS', data);
        } finally {
            commit('SET_LOADING', false);
        }
    },
    async fetchChart({ commit }, period = '30d') {
        const { data } = await axios.get('/seller/dashboard/earnings-chart', { params: { period } });
        commit('SET_CHART', data);
    },
    async fetchRecentOrders({ commit }) {
        const { data } = await axios.get('/seller/dashboard/recent-orders');
        commit('SET_RECENT', data);
    },
};

export default { namespaced: true, state, getters: {}, mutations, actions };

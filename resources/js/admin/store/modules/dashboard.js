import axios from 'axios';

const state = {
    stats:        null,
    salesChart:   [],
    recentOrders: [],
    loading:      false,
};

const mutations = {
    SET_STATS(state, stats)               { state.stats = stats; },
    SET_SALES_CHART(state, data)          { state.salesChart = data; },
    SET_RECENT_ORDERS(state, orders)      { state.recentOrders = orders; },
    SET_LOADING(state, val)               { state.loading = val; },
};

const actions = {
    async fetchStats({ commit }) {
        commit('SET_LOADING', true);
        try {
            const { data } = await axios.get('/admin/dashboard/stats');
            commit('SET_STATS', data);
        } finally {
            commit('SET_LOADING', false);
        }
    },
    async fetchSalesChart({ commit }, period = '30d') {
        const { data } = await axios.get('/admin/dashboard/sales-chart', { params: { period } });
        commit('SET_SALES_CHART', data);
    },
    async fetchRecentOrders({ commit }) {
        const { data } = await axios.get('/admin/dashboard/recent-orders');
        commit('SET_RECENT_ORDERS', data);
    },
};

export default { namespaced: true, state, mutations, actions };

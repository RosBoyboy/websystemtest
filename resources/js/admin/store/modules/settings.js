import axios from 'axios';

const state = {
    settings: [],
    loading:  false,
};

const getters = {
    byKey: (s) => (key) => {
        const setting = s.settings.find(s => s.key === key);
        return setting ? setting.value : null;
    },
    grouped: (s) => {
        return s.settings.reduce((acc, setting) => {
            const group = setting.group || 'general';
            if (!acc[group]) acc[group] = [];
            acc[group].push(setting);
            return acc;
        }, {});
    },
};

const mutations = {
    SET_SETTINGS(state, settings) { state.settings = settings; },
    SET_LOADING(state, val)       { state.loading = val; },
    UPDATE_SETTING(state, { key, value }) {
        const idx = state.settings.findIndex(s => s.key === key);
        if (idx !== -1) state.settings[idx].value = value;
    },
};

const actions = {
    async fetchSettings({ commit }) {
        commit('SET_LOADING', true);
        try {
            const { data } = await axios.get('/admin/settings');
            commit('SET_SETTINGS', data);
        } finally {
            commit('SET_LOADING', false);
        }
    },
    async saveSettings({ commit }, settings) {
        await axios.put('/admin/settings', { settings });
    },
};

export default { namespaced: true, state, getters, mutations, actions };

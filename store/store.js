import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import axios from 'axios';
import app from './modules'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    module: ['app'],
    reducer: state => ({
        dashboard: {
            internal_tabs: state.dashboard.internal_tabs,
            current_internal_tab_id: state.dashboard.current_internal_tab_id,
        },
    }),
});

const modules = {
    app,
};

const state = {
    permissions: [],
    axios_api: null,
};

const getters = {
};

const mutations = {
    update_permissions(state, permissions) {
        state.permissions = permissions;
    },
    update_axios_api(state, axiosApi) {
        state.axios_api = axiosApi;
    },
};

const actions = {
    init_axios({ commit }) {
        commit(
            'update_axios_api',
            axios.create(),
        );
    },

    fetch_permissions({ commit, state }) {
        return new Promise((resolve, reject) => {
            const url = '/api/core/permissions/';

            state.axios_api.get(url)
                .then((response) => {
                    commit('update_permissions', response.data);
                    resolve(response.data);
                })
                .catch((response) => {
                    commit('update_permissions', []);
                    reject(response.data);
                });
        });
    },
};

export default new Vuex.Store({
    modules,
    state,
    getters,
    mutations,
    actions,
    plugins: [vuexLocal.plugin],
});

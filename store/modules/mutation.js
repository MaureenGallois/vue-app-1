import * as MUTATIONS_TYPES from './mutations-type';

export const mutations = {
    [MUTATIONS_TYPES.SET_ANIMAL](state, payload) {
        state.user_shortcuts = payload;
    },
}
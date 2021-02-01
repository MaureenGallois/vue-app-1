//import axios from 'axios';
import * as MUTATIONS_TYPES from './mutations-type';
import * as ACTIONS_TYPES from './action-type';

function setErrorServer(error) {
    return {
        type: 'error_server',
        status: error.request.status,
        errors: error.response.data,
    };
}

export default {


    [ACTIONS_TYPES.FETCH_ANIMAL]({ commit, rootState, }, params) {
        return new Promise((resolve, reject) => {
            let url = 'http://localhost:3000/animaux';

            if (params && params.search) {
                url += `?nom=${params.search}`;
            }

            rootState.axios_api.get(url)
                .then((response) => {
                    commit(MUTATIONS_TYPES.SET_ANIMAL, response.data);
                    resolve(response.data);
                }).catch((error) => {
                    commit(MUTATIONS_TYPES.SET_ANIMAL, null);
                    reject(setErrorServer(error));
                });
        });
    },
}
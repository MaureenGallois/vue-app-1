import { action } from './action';
import { mutation } from './mutation';

const state = {
    animaux: [],
    animal: {},

};

export default {
    namespaced: true,
    state,
    action,
    mutation,
};

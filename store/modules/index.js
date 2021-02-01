import { action } from './action';
import { mutation } from './mutation';

const state = {
    animaux: [],
    animal: null,

};

export default {
    namespaced: true,
    state,
    action,
    mutation,
};

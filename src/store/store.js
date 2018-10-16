import Vue from 'vue'
import Vuex from 'vuex'

import scrums from './modules/scrums.js';
import period from './modules/period.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        members: []
    },
    getters: {
        members: state => {
            return state.members
        }
    },
    modules: {
        scrums,
        period
    }
});
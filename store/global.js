import Vue from 'vue';
import Vuex from 'vuex';

import globalStore from './globalStore';
import i18n from '../config/i18n';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        globalStore,
    },
    i18n,
});

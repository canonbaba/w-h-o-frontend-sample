// import Vue from 'vue';
// import VueGtag from 'vue-gtag';

// Vue.use(VueGtag, {
//     config: { id: 'UA-148915581-1' },
// });

import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
    Vue.use(VueGtag, {
        config: { id: 'UA-148915581-1' },
        includes: [
            { id: 'AW-706698369' },
        ],
    }, app.router);
};

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl'

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
    linkActiveClass: 'active'
});

router.map({
    '/goods': {
        component: goods
    },
    '/ratings': {
        component: ratings
    },
    '/seller': {
        component: seller
    }
});

router.start(app, '#app');

router.go('/goods');

// const routes = [
//     { path: '/goods', compo nent: goods }
// ]

// const router = new VueRouter({
//     routes
// });

// /* eslint-disable no-new */
// new Vue({
//     template: '<App />',
//     components: { App },
//     router: router
// }).$mount('#app');
// // const app = new Vue({ router }).$mount('#app');

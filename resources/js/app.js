require('./bootstrap');

import Vue from 'vue';
import ElementUI from 'element-ui';

import { store } from './store/index.js';
import 'element-ui/lib/theme-chalk/index.css';


import VueRouter from "vue-router";
import routes from './routes';

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'


// Input mask
import VueMask from 'v-mask'
// configure language
locale.use(lang)

window.Vue = require('vue').default;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueMask);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('nav-bar', require('./components/NavBarComponent.vue').default);
Vue.component('home-view', require('./views/Home.vue').default);
Vue.component('employee-form', require('./components/employee/EmployeeForm.vue').default);
Vue.component('employee-list', require('./components/employee/EmployeeList.vue').default);
Vue.component('add-new', require('./components/newpost/AddNewPostComponent.vue').default);
const app = new Vue({
    store,
    el: '#app',
    router: new VueRouter(routes),
});

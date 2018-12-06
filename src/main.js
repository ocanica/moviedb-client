import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(VueRouter); 

import Homepage from './components/Homepage.vue';
const routes = [
  { path: '/', component: Homepage }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(Homepage)
}).$mount('#app')

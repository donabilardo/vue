import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import store from './store/index.js';
//import './assets/css/_necolas.github.io_normalize.css_8.0.1_normalize.scss';
import './assets/css/project_all.min.css';

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store: new Vuex.Store(store)
}).$mount('#app');

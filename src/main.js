import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import VeeValidate from 'vee-validate';
import msg from './pt_BR'
import './directives/Transform';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/teste.css'

Vue.use(VueResource); 
Vue.use(VueRouter);
Vue.use(VeeValidate, {
  locale: 'pt_BR', 
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

Vue.http.options.root = 'http://localhost:3000/';

const router = new VueRouter({ 
  routes,
  mode: 'history' // remove o # da url
 });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
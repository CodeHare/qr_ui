import Vue from 'vue';
import App from './App.vue';
import QRUI from '../modules/index';
import '../modules/common.css';

Vue.config.productionTip = false;

Vue.use(QRUI, {
  components: [
    "Button"
  ]
});

new Vue({
  render: h => h(App),
}).$mount('#app')

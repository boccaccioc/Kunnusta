import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
// allows for graphs of data
import TrendChart from "vue-trend-chart";
//import Draggable from "vuedraggable";

import App from './App.vue'

//Vue.use(Draggable);
Vue.use(TrendChart);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

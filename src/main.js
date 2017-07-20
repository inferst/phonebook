import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(ElementUI);

import App from './App';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});

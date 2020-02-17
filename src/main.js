import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

import App from './App.vue'
import router from './router'
import '@5a/css';
Vue.config.productionTip = false
Vue.use(VueClipboard);

Vue.prototype.$copy = (text) => {
  Vue.prototype.$copyText(text).then((e) => {
      alert('复制成功!');
  });
};


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

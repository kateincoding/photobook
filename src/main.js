import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
// new headers
import '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import router from './router'

Amplify.configure(aws_exports);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import '@/assets/tailwind.css'
import config from '@/firebaseConfig.js'
import * as firebase from 'firebase/app'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

firebase.initializeApp(config)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

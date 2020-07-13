import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

// для вывода фильтра в глобальную область видимости
// для обращения к фильтру после вывода переменной ставим вертикальную черту и название фильтра "dateVueFilter"
Vue.filter('dateVueFilter', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

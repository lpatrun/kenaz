import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.filter('formatDate', function (publishedAt) {
  if (publishedAt) {
    const date = new Date(publishedAt)
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' })
    const [{ value: month },, { value: day },, { value: year }] = dateTimeFormat.formatToParts(date)
    return `${month} ${day}, ${year}`
  }
})

Vue.filter('shortenTitle', function (title) {
  if (title.length > 50) {
    return (title.slice(0, 47) + '...')
  } else {
    return title
  }
})

Vue.filter('shortenTitleForAlt', function (title) {
  if (title.length > 50) {
    return (title.slice(0, 15) + '...')
  } else {
    return title
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

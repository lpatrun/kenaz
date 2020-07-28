import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import i18n from '../i18n'

Vue.use(VueResource)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topNews: [],
    sportNews: [],
    businessNews: [],
    scienceNews: [],
    technologyNews: [],
    healthNews: [],
    featuredNews: [],
    randomSport: [],
    recentlyViewed: [],
    searchNews: [],
    selectedLanguage: 'en',
    country: 'gb'
  },
  mutations: {
    recentlyViewed (state, article) {
      const isAlreadyHere = state.recentlyViewed.find(element => element.title === article.title)
      if (!isAlreadyHere) {
        state.recentlyViewed.unshift(article)
        state.recentlyViewed.slice(0, 3)
      }
    },
    generateTopNews (state, results) {
      state.topNews = results.articles
    },
    generateSportNews (state, results) {
      state.sportNews = results.articles
    },
    generateBusinessNews (state, results) {
      state.businessNews = results.articles
    },
    generateScienceNews (state, results) {
      state.scienceNews = results.articles
    },
    generateTechnologyNews (state, results) {
      state.technologyNews = results.articles
    },
    generateHealthNews (state, results) {
      state.healthNews = results.articles
    },
    featuredNews (state, results) {
      state.featuredNews = results.articles
    },
    randomSport (state, results) {
      state.randomSport = results.articles
    },
    searchNews (state, results) {
      state.searchNews = results.articles
    },
    changeLanguage (state, activeLanguage) {
      state.selectedLanguage = activeLanguage
      i18n.locale = state.selectedLanguage
      localStorage.setItem('kenazLanguage', activeLanguage)
      activeLanguage === 'en' ? state.country = 'gb' : state.country = 'rs'
    }
  },
  actions: {
    topNews ({ commit, state }) {
      Vue.http.get('https://newsapi.org/v2/top-headlines?country=' + state.country + '&apiKey=eebb298f5af443a1b0980ba887f93607')
        .then(response => {
          commit('generateTopNews', response.body)
        })
        .catch(error => {
          console.log(error.statusText)
        })
    },
    sportNews ({ commit, state }) {
      Vue.http.get('https://newsapi.org/v2/top-headlines?country=' + state.country + '&category=sport&apiKey=eebb298f5af443a1b0980ba887f93607')
        .then(response => {
          commit('generateSportNews', response.body)
        })
        .catch(error => {
          console.log(error.statusText)
        })
    },
    businessNews ({ commit, state }) {
      Vue.http.get('https://newsapi.org/v2/top-headlines?country=' + state.country + '&category=business&apiKey=eebb298f5af443a1b0980ba887f93607')
        .then(response => {
          commit('generateBusinessNews', response.body)
        })
        .catch(error => {
          console.log(error.statusText)
        })
    },
    scienceNews ({ commit, state }) {
      Vue.http.get('https://newsapi.org/v2/top-headlines?country=' + state.country + '&category=science&apiKey=eebb298f5af443a1b0980ba887f93607')
        .then(response => {
          commit('generateScienceNews', response.body)
        })
        .catch(error => {
          console.log(error.statusText)
        })
    },
    technologyNews ({ commit, state }) {
      Vue.http.get('https://newsapi.org/v2/top-headlines?country=' + state.country + '&category=technology&apiKey=eebb298f5af443a1b0980ba887f93607')
        .then(response => {
          commit('generateTechnologyNews', response.body)
        })
        .catch(error => {
          console.log(error.statusText)
        })
    },
    healthNews ({ commit, state }) {
      Vue.http.get('https://newsapi.org/v2/top-headlines?country=' + state.country + '&category=health&apiKey=eebb298f5af443a1b0980ba887f93607')
        .then(response => {
          commit('generateHealthNews', response.body)
        })
        .catch(error => {
          console.log(error.statusText)
        })
    },
    featuredNews ({ commit }) {
      Vue.http.get('https://newsapi.org/v2/everything?q=covid&sortBy=popularity&apiKey=eebb298f5af443a1b0980ba887f93607')
        .then(response => {
          commit('featuredNews', response.body)
        })
        .catch(error => {
          console.log(error.statusText)
        })
    },
    randomSport ({ commit }) {
      Vue.http.get('https://newsapi.org/v2/everything?q=rugby&sortBy=popularity&apiKey=eebb298f5af443a1b0980ba887f93607')
        .then(response => {
          commit('randomSport', response.body)
        })
        .catch(error => {
          console.log(error.statusText)
        })
    },
    searchNews ({ commit }, term) {
      Vue.http.get('https://newsapi.org/v2/everything?apiKey=eebb298f5af443a1b0980ba887f93607&q=' + term)
        .then(response => {
          commit('searchNews', response.body)
        })
        .catch(error => {
          console.log(error.statusText)
        })
    }
  },
  modules: {
  }
})

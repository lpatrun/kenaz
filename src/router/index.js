import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/KenazHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/NewsNews.vue')
  },
  {
    path: '/news/article/:id',
    name: 'NewsArticle',
    component: () => import('../views/NewsArticle.vue')
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import('../views/BusinessNews.vue')
  },
  {
    path: '/business/article/:id',
    name: 'BusinessArticle',
    component: () => import('../views/BusinessArticle.vue')
  },
  {
    path: '/sport',
    name: 'Sport',
    component: () => import('../views/SportNews.vue')
  },
  {
    path: '/sport/article/:id',
    name: 'SportArticle',
    component: () => import('../views/SportArticle.vue')
  },
  {
    path: '/health',
    name: 'Health',
    component: () => import('../views/HealthNews.vue')
  },
  {
    path: '/health/article/:id',
    name: 'HealthArticle',
    component: () => import('../views/HealthArticle.vue')
  },
  {
    path: '/tech',
    name: 'Tech',
    component: () => import('../views/TechNews.vue')
  },
  {
    path: '/tech/article/:id',
    name: 'TechArticle',
    component: () => import('../views/TechArticle.vue')
  },
  {
    path: '/science',
    name: 'Science',
    component: () => import('../views/ScienceNews.vue')
  },
  {
    path: '/science/article/:id',
    name: 'ScienceArticle',
    component: () => import('../views/ScienceArticle.vue')
  },
  {
    path: '/featured/article/:id',
    name: 'FeaturedArticle',
    component: () => import('../views/FeaturedArticle.vue')
  },
  {
    path: '/random/article/:id',
    name: 'RandomArticle',
    component: () => import('../views/RandomArticle.vue')
  },
  {
    path: '/recent/article/:id',
    name: 'RecentArticle',
    component: () => import('../views/RecentArticle.vue')
  },
  {
    path: '/search/:term',
    name: 'SearchNews',
    component: () => import('../views/SearchNews.vue')
  },
  {
    path: '/search/:term/:id',
    name: 'SearchArticle',
    component: () => import('../views/SearchArticle.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }

    if (savedPosition) {
      return savedPosition
    }

    return { x: 0, y: 0 }
  }
})

export default router

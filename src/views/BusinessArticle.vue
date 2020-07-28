<template>
  <div>
    <div v-for="(news, index) in article" :key="index">
      <div class="main-news">
        <img :src="news.urlToImage" :alt="news.title" />
        <div class="overlay"></div>
        <div class="main-news__info">
          <p>{{ news.publishedAt | formatDate }}</p>
          <h1>{{ news.title }}</h1>
        </div>
      </div>
      <div class="article">{{ news.content }}</div>
    </div>
    <my-banner-bar></my-banner-bar>
  </div>
</template>

<script>
import BannerBar from '../components/BannerBar'
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    'my-banner-bar': BannerBar
  },
  computed: {
    article () { return this.$store.state.businessNews.slice(this.id, +this.id + 1) }
  }
}
</script>

<style lang="scss" scoped>
</style>

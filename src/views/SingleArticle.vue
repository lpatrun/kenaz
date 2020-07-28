<template>
  <div>
    <div v-for="(news, index) in article" :key="index">
      <div class="main-news">
        <img :src="news.urlToImage" :alt="news.title" />
        <div class="overlay"></div>
        <div class="main-news__info">
          <p>{{ news.publishedAt | formatDate }}</p>
          <h1>{{ news.title}}</h1>
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
  components: {
    'my-banner-bar': BannerBar
  },
  data () {
    return {
      id: this.$route.params.id,
      category: this.$route.params.cat,
      something: 'this.$store.state.' + this.$route.params.cat
    }
  },
  computed: {
    article () {
      console.log(this.something)
      return this.something
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

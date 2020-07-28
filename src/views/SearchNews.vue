<template>
  <div>
    <div class="bn">
      <h2 class="bn__bn">{{ $t('searchResults') }}</h2>
        <div class="bn__box" v-for="(news, index) in searchNews" :key="index">

          <img :src="news.urlToImage" :alt="news.title" />

          <div class="bn__box--right">
            <h2 class="bn__box--title">{{ news.title}}</h2>
            <div class="bn__box--info">
              <i class="far fa-calendar-alt"></i> {{ news.publishedAt | formatDate }}
              <i class="far fa-user"></i> {{ news.source.name }}
            </div>
            <div class="bn__box--desc">{{ news.description }}</div>
            <router-link :to="'/search/' + term + '/' + index" tag="a"
            @click.native="recentlyViewed(news)" class="bn__box--cta">{{ $t('readArticle') }}</router-link>
          </div>
      </div>
    </div>
    <my-banner-bar></my-banner-bar>
  </div>
</template>

<script>
import BannerBar from '../components/BannerBar'
export default {
  data () {
    return {
      term: this.$route.params.term
    }
  },
  components: {
    'my-banner-bar': BannerBar
  },
  computed: {
    searchNews () { return this.$store.state.searchNews.slice(0, 10) }
  },
  created () {
    this.$store.dispatch('searchNews', this.$route.params.term)
  },
  methods: {
    recentlyViewed (news) {
      this.$store.commit('recentlyViewed', news)
    }
  }

}
</script>

<style lang="scss" scoped>
</style>

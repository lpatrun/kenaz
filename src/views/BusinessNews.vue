<template>
  <div>
    <div class="bn">
      <h2 class="bn__bn">{{ $t('business') }}</h2>
        <div class="bn__box" v-for="(news, index) in businessNews" :key="index">

          <img :src="news.urlToImage" :alt="news.title" />

          <div class="bn__box--right">
            <h2 class="bn__box--title">{{ news.title}}</h2>
            <div class="bn__box--info">
              <i class="far fa-calendar-alt"></i> {{ news.publishedAt | formatDate }}
              <i class="far fa-user"></i> {{ news.source.name }}
            </div>
            <div class="bn__box--desc">{{ news.description }}</div>
            <router-link :to="'/business/article/' + (index + knifePoint)" tag="a"
            @click.native="recentlyViewed(news)" class="bn__box--cta">{{ $t('readArticle')}}</router-link>
          </div>
      </div>
      <div class="pages">
        <span v-for="n in (numOfBusinessNews / 4)" :key="n" @click="knifePoint = ((n-1) * 4)">{{ n }}</span>
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
      knifePoint: 0
    }
  },
  components: {
    'my-banner-bar': BannerBar
  },
  computed: {
    numOfBusinessNews () { return this.$store.state.businessNews.length },
    businessNews () { return this.$store.state.businessNews.slice(this.knifePoint, this.knifePoint + 4) }
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

<template>
<div class="container">
  <div class="content">
    <div class="content__box">
      <h2>{{ $t('featured') }}</h2>
        <router-link :to="'/featured/article/' + index" class="post-box" v-for="(news, index) in featuredNews" :key="index" @click.native="recentlyViewe(news)">
          <div class="post-box--date">{{ news.publishedAt | formatDate }}</div>
          <div class="post-box--title">{{ news.title | shortenTitle }}</div>
          <div class="post-box--image"><img :src="news.urlToImage" :alt="news.title | shortenTitleForAlt" /></div>
        </router-link>
    </div>
    <div class="content__box">
      <h2>{{ $t('randomSport') }}</h2>
        <router-link :to="'/random/article/' + index" class="post-box" v-for="(news, index) in randomSport" :key="index" @click.native="recentlyViewe(news)">
          <div class="post-box--date">{{ news.publishedAt | formatDate }}</div>
          <div class="post-box--title">{{ news.title | shortenTitle }}</div>
          <div class="post-box--image"><img :src="news.urlToImage" :alt="news.title | shortenTitleForAlt" /></div>
        </router-link>
    </div>
    <div class="content__box">
      <h2>{{ $t('recentlyViewed') }}</h2>
        <router-link :to="'/recent/article/' + index" class="post-box" v-for="(news, index) in recentlyViewed" :key="index">
          <div class="post-box--date">{{ news.publishedAt | formatDate }}</div>
          <div class="post-box--title">{{ news.title | shortenTitle }}</div>
          <div class="post-box--image"><img :src="news.urlToImage" :alt="news.title | shortenTitleForAlt" /></div>
        </router-link>
    </div>
  </div>
</div>

</template>

<script>
export default {
  computed: {
    featuredNews () { return this.$store.state.featuredNews.slice(0, 3) },
    randomSport () { return this.$store.state.randomSport.slice(0, 3) },
    recentlyViewed () { return this.$store.state.recentlyViewed.slice(0, 3) }
  },
  methods: {
    recentlyViewe (news) {
      this.$store.commit('recentlyViewed', news)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #252525;
  padding-bottom: 40px;
}

.content {
  width: 940px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;

  @media only screen and (max-width: 400px) {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 20px;
  }

  &__box {

    h2 {
      color: #eee;
      margin-bottom: 25px;
    }
  }
}

.post-box {
  display: grid;
  grid-template-rows: 25px 75px;
  grid-template-columns: 3fr 1fr;

  &:not(:last-child) {
    border-bottom: 1px solid #333;
    margin-bottom: 15px;
  }

  &--date {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    color: #999;
  }

  &--title {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    color: #eee;
  }

  &--image {
    grid-row: 1 / -1;
    grid-column: 2 / 3;
    margin-left: 5px;

      img {
        width: 100%;
        height: 80px;
        object-fit: cover;
        border: 3px solid white;
    }
  }
}

</style>

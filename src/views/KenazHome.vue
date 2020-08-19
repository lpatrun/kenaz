<template>
  <div>
    <div class="main-news" v-for="(news, index) in article" :key="index">
      <img :src="news.urlToImage" :alt="news.title | shortenTitleForAlt" />
      <div class="overlay"></div>
      <div class="main-news__info">
        <i class="arrow arrow__left" @click="changeNews(-1)"></i>
        <i class="arrow arrow__right" @click="changeNews(1)"></i>
        <p>{{ news.publishedAt | formatDate }}</p>
        <h1>{{ news.title}}</h1>
        <router-link tag="a" :to="'/news/article/' + newsNum" class="main-news__more" @click.native="recentlyViewed(news)" >{{ $t('readArticle') }}</router-link>
      </div>
    </div>

    <div class="category category__news">
      <div class="category__top-row">
        <h2>{{ $t('news') }}</h2>
        <router-link tag="a" to="/news">{{ $t('seeAll') }}</router-link>
      </div>
      <div class="category__articles">
        <router-link :to="'/news/article/' + index"
        @click.native="recentlyViewed(news)" class="category__article"
        v-for="(news, index) in selectedNews" :key="index">
          <img :src="news.urlToImage" :alt="news.title | shortenTitleForAlt" />
          <p>{{ news.publishedAt | formatDate }}</p>
          <h4>{{ news.title}}</h4>
        </router-link>
      </div>
    </div>

    <div class="category category__sports">
      <div class="category__top-row">
        <h2>{{ $t('sport') }}</h2>
        <p>
          <router-link tag="a" to="/sport">{{ $t('seeAll') }}</router-link>
        </p>
      </div>
      <div class="category__articles">
        <router-link :to="'/sport/article/' + index" @click.native="recentlyViewed(news)" class="category__article" v-for="(news, index) in selectedSports" :key="index">
          <img :src="news.urlToImage" :alt="news.title | shortenTitleForAlt" />
          <p>{{ news.publishedAt | formatDate }}</p>
          <h4>{{ news.title}}</h4>
        </router-link>
      </div>
    </div>

    <my-banner-bar></my-banner-bar>

    <div class="category category__business">
      <div class="category__top-row">
        <h2>{{ $t('business') }}</h2>
        <p>
          <router-link to="/business">{{ $t('seeAll') }}</router-link>
        </p>
      </div>
      <div class="category__articles">
        <router-link :to="'/business/article/' + index" @click.native="recentlyViewed(news)" class="category__article" v-for="(news, index) in selectedBusiness" :key="index">
          <img :src="news.urlToImage" :alt="news.title | shortenTitleForAlt" />
          <p>{{ news.publishedAt | formatDate }}</p>
          <h4>{{ news.title}}</h4>
        </router-link>
      </div>
    </div>

    <my-banner-bar></my-banner-bar>

    <div class="category category__science">
      <div class="category__top-row">
        <h2>{{ $t('science') }}</h2>
        <div>
          <i class="switch switch__yellow switch__left" @click="scienceNewsCarousel(-1)"></i>
          <i class="switch switch__yellow switch__right" @click="scienceNewsCarousel(1)"></i>
        </div>
      </div>
      <div class="category__articles">
        <router-link :to="'/science/article/' + (index + scienceStart)" @click.native="recentlyViewed(news)" class="category__article" v-for="(news, index) in scienceNews" :key="index">
          <img :src="news.urlToImage" :alt="news.title | shortenTitleForAlt" />
          <p>{{ news.publishedAt | formatDate }}</p>
          <h4>{{ news.title}}</h4>
        </router-link>
      </div>
    </div>

    <div class="category__split">
      <div class="category__half category__mixed">
        <div class="category__top-row">
          <h2>{{ $t('tech') }}</h2>
          <div>
            <i class="switch switch__brown switch__left" @click="techNewsCarousel(-1)"></i>
            <i class="switch switch__brown switch__right" @click="techNewsCarousel(1)"></i>
          </div>
        </div>
        <div class="category__articles--half">
          <router-link :to="'/tech/article/' + (index + technologyStart)" @click.native="recentlyViewed(news)" class="category__article" v-for="(news, index) in technologyNews" :key="index">
            <img :src="news.urlToImage" :alt="news.title | shortenTitleForAlt" />
            <p>{{ news.publishedAt | formatDate }}</p>
            <h4>{{ news.title}}</h4>
          </router-link>
        </div>
      </div>

      <div class="category__half category__mixed">
        <div class="category__top-row">
          <h2>{{ $t('health') }}</h2>
          <div>
            <i class="switch switch__brown switch__left" @click="healthNewsCarousel(-1)"></i>
            <i class="switch switch__brown switch__right" @click="healthNewsCarousel(1)"></i>
          </div>
        </div>
        <div class="category__articles--half">
          <router-link :to="'/health/article/' + (index + healthStart)" @click.native="recentlyViewed(news)" class="category__article" v-for="(news, index) in healthNews" :key="index">
            <img :src="news.urlToImage" :alt="news.title | shortenTitleForAlt" />
            <p>{{ news.publishedAt | formatDate }}</p>
            <h4>{{ news.title}}</h4>
          </router-link>
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
      newsNum: 0,
      scienceStart: 0,
      technologyStart: 0,
      healthStart: 0
    }
  },
  computed: {
    article () { return this.$store.state.topNews.slice(this.newsNum, this.newsNum + 1) },
    selectedNews () { return this.$store.state.topNews.slice(0, 4) },
    selectedSports () { return this.$store.state.sportNews.slice(0, 4) },
    selectedBusiness () { return this.$store.state.businessNews.slice(0, 4) },
    scienceNews () { return this.$store.state.scienceNews.slice(this.scienceStart, this.scienceStart + 4) },
    technologyNews () { return this.$store.state.technologyNews.slice(this.technologyStart, this.technologyStart + 2) },
    healthNews () { return this.$store.state.healthNews.slice(this.healthStart, this.healthStart + 2) }
  },
  methods: {
    recentlyViewed (news) {
      this.$store.commit('recentlyViewed', news)
    },
    changeNews (step) {
      this.newsNum += step
      if (this.newsNum > 19) { this.newsNum = 0 }
      if (this.newsNum < 0) { this.newsNum = 19 }
    },
    scienceNewsCarousel (step) {
      this.scienceStart += step
      if (this.scienceStart < 0) { this.scienceStart = 0 }
      if (this.scienceStart > 15) { this.scienceStart = 15 }
    },
    techNewsCarousel (step) {
      this.technologyStart += step
      if (this.technologyStart < 0) { this.technologyStart = 0 }
      if (this.technologyStart > 17) { this.technologyStart = 17 }
    },
    healthNewsCarousel (step) {
      this.healthStart += step
      if (this.healthStart < 0) { this.healthStart = 0 }
      if (this.healthStart > 17) { this.healthStart = 17 }
    }
  },
  components: {
    'my-banner-bar': BannerBar
  }
}
</script>

<style lang="scss" scoped>
.category {
  width: 940px;
  margin: 0 auto;
  background-color: #fff;
  margin-bottom: 25px;

  @media only screen and (max-width: 400px) {
    width: 100%;
  }

  &__split {
    width: 940px;
    margin: 0 auto;
    margin-bottom: 25px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;

    @media only screen and (max-width: 400px) {
      width: 100%;
      grid-template-columns: 1fr;
    }
  }

  &__half {
    background-color: #fff;
    width: 100%;
  }

  &__news { border-left: 7px solid #3677b5 }
  &__sports { border-left: 7px solid #84c14f }
  &__business { border-left: 7px solid #ee6151 }
  &__science { border-left: 7px solid #fcc44d }
  &__mixed { border-left: 7px solid #a99765 }

  &__top-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 15px 20px;
  }

  &__articles {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin: 0 20px;
    padding: 0 0 25px 0;

    @media only screen and (max-width: 400px) {
      grid-template-columns: 1fr;
    }

    &--half {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      margin: 0 20px;
      padding: 0 0 25px 0;

      @media only screen and (max-width: 400px) {
      grid-template-columns: 1fr;
    }
    }
  }

  &__article {
    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
  }
}

.overlay {
  z-index: 10;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.arrow {
  border: solid white;
  border-width: 0 12px 12px 0;
  display: inline-block;
  padding: 12px;
  border-radius: 3px;
  cursor: pointer;

  &__right {
    transform: rotate(-45deg);
    position: absolute;
    bottom: 200px;
    left: 865px;

    @media only screen and (max-width: 400px) {
      bottom: 115px;
      left: 85%
    }
  }

  &__left {
    transform: rotate(135deg);
    position: absolute;
    bottom: 200px;
    left: 45px;

    @media only screen and (max-width: 400px) {
      bottom: 115px;
      left: 5%
    }
  }
}

.switch {
  cursor: pointer;

  &__yellow {
    border: solid #fcc44d;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
  }

  &__brown {
    border: solid #a99765;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
  }

  &__right {
    transform: rotate(-45deg);
  }

  &__left {
    transform: rotate(135deg);
    margin-right: 10px;
  }
}

.main-news {
  width: 940px;
  height: 500px;
  margin: 0 auto;
  position: relative;
  color: white;
  margin-bottom: 25px;

  @media only screen and (max-width: 400px) {
    width: 100%;
    height: 260px;
  }

  &__info {
    z-index: 15;
    position: absolute;
    bottom: 45px;
    padding: 30px;

    @media only screen and (max-width: 400px) {
      bottom: 45px;
      padding: 15px;
    }

    h1 {
      margin-bottom: 15px;

      @media only screen and (max-width: 400px) {
        font-size: 14px;
      }
    }
  }

  &__more {
    position: absolute;
    outline: none;
    padding: 10px 25px;
    cursor: pointer;
    border: 2px solid white;
    color: white;
    font-weight: bold;
    background-color: transparent;
  }

  img {
    z-index: 2;
    width: 100%;
    height: 500px;
    object-fit: cover;
    box-shadow: inset 2px 10px 10px rgba(0, 0, 0, 0.2);

    @media only screen and (max-width: 400px) {
      height: 260px;
    }
  }
}
</style>

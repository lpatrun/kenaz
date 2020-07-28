<template>
  <div id="app">
    <my-search-bar></my-search-bar>

    <my-categories-bar></my-categories-bar>

    <my-banner-bar></my-banner-bar>

    <router-view></router-view>

    <my-purple-bar></my-purple-bar>

    <my-contact-area></my-contact-area>

    <my-posts-area></my-posts-area>

    <my-footer-bar></my-footer-bar>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import CategoriesBar from './components/CategoriesBar'
import BannerBar from './components/BannerBar'
import FooterBar from './components/FooterBar'
import PurpleBar from './components/PurpleBar'
import ContactArea from './components/ContactArea'
import PostsArea from './components/PostsArea'
export default {
  components: {
    'my-search-bar': SearchBar,
    'my-categories-bar': CategoriesBar,
    'my-banner-bar': BannerBar,
    'my-footer-bar': FooterBar,
    'my-purple-bar': PurpleBar,
    'my-contact-area': ContactArea,
    'my-posts-area': PostsArea
  },
  created () {
    if (localStorage.getItem('kenazLanguage')) {
      const storedLang = localStorage.getItem('kenazLanguage')
      this.$store.commit('changeLanguage', storedLang)
    } else {
      localStorage.setItem('kenazLanguage', 'en')
      this.$store.commit('changeLanguage', 'en')
    }
    this.$store.dispatch('topNews')
    this.$store.dispatch('sportNews')
    this.$store.dispatch('businessNews')
    this.$store.dispatch('scienceNews')
    this.$store.dispatch('technologyNews')
    this.$store.dispatch('healthNews')
    this.$store.dispatch('featuredNews')
    this.$store.dispatch('randomSport')
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

ul,
li {
  list-style-type: none;
}

html,
body {
  background-color: #eeeeee;
  font-family: Arial, Helvetica, sans-serif;
}

a:link,
a:visited,
a:active {
  color: black;
}

a:hover {
  text-decoration: underline;
}

.bn {
  width: 940px;
  margin: 0px auto;
  background-color: #fefefe;

  @media only screen and (max-width: 400px) {
    width: 100%;
  }

  &__bn {
    padding: 30px 40px;
  }

  &__box {
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-gap: 15px;

    padding: 30px 40px;
    border-bottom: 1px solid #999;

    @media only screen and (max-width: 400px) {
      grid-template-columns: 1fr;
    }

    &--title {
      margin-bottom: 15px;
      color: #333;
    }

    &--info {
      margin-bottom: 15px;

      i {
        &:not(:first-child) {
          margin-left: 25px;
        }
      }
    }

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }

    &--cta {
      margin-top: 15px;
      cursor: pointer;
      display: inline-block;
      width: 150px;
      height: 40px;
      background-color: #4d4382;
      color: #eee !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.pages {
  padding: 20px 30px;
  span {
    cursor: pointer;
    padding: 5px 10px;
    margin: 0px 5px 5px 0px;
    display: inline-block;
    color: #625796;
    background-color: #ddd;
    white-space: nowrap;

    &:hover {
      background-color: #625796;
      color: #ddd;
    }
  }
}

.overlay {
  z-index: 10;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, .9) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.main-news {
  width: 940px;
  height: 500px;
  margin: 0 auto;
  position: relative;
  color: black;

  @media only screen and (max-width: 400px) {
    width: 100%;
    height: 260px;
  }

  &__info {
    z-index: 15;
    position: absolute;
    bottom: 0px;
    padding: 15px 30px;

    @media only screen and (max-width: 400px) {
      padding: 10px 20px;
      font-size: 8px;
    }
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

.article {
  background-color: white;
  width: 940px;
  margin: 0 auto;
  padding: 30px 40px;
  margin-bottom: 25px;

  @media only screen and (max-width: 400px) {
      width: 100%;
      padding: 20px 20px;
    }
}
</style>

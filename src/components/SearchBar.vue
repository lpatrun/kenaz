<template>
  <div class="container">
    <div class="bar">
      <div class="bar__left">
        <img src="../../public/img/kenaz.png" alt />
        <router-link to="/" class="bar__title">Kenaz</router-link>
        <span @click="changeLang('en')" :class="{ activeLang: lang === 'en' }" class="lang">EN</span>
        <span @click="changeLang('hr')" :class="{ activeLang: lang === 'hr' }" class="lang">HR</span>
      </div>
      <div class="bar__right">
        <div class="background" :data-state="state" @click="state = 'close'"></div>
        <form action="#">
          <div class="center-block" :data-state="state">
            <input type="text" v-model="term" :placeholder="$t('search')"/>
              <select v-model="category">
                <option disabled value="">Category</option>
                <option value="business">{{ $t('options.business') }}</option>
                <option value="entertainment">{{ $t('options.entertainment') }}</option>
                <option value="general">{{ $t('options.general') }}</option>
                <option value="health">{{ $t('options.health') }}</option>
                <option value="science">{{ $t('options.science') }}</option>
                <option value="sports">{{ $t('options.sports') }}</option>
                <option value="technology">{{ $t('options.technology') }}</option>
              </select>
            <i class="fa fa-search" @click="sendRequest()"></i>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: 'close',
      term: '',
      category: '',
      langCache: ''
    }
  },
  computed: {
    lang () { return this.$store.state.selectedLanguage }
  },
  methods: {
    changeLang (lang) {
      if (this.langCache !== lang) {
        this.$store.commit('changeLanguage', lang)
        this.langCache = lang
        this.$store.dispatch('topNews')
        this.$store.dispatch('sportNews')
        this.$store.dispatch('businessNews')
        this.$store.dispatch('scienceNews')
        this.$store.dispatch('technologyNews')
        this.$store.dispatch('healthNews')
      } else {
        console.log('Stop selecting the same lang')
      }
    },
    sendRequest () {
      let query = ''
      if (this.state === 'close') {
        this.state = 'open'
      } else {
        if (this.term !== '' && this.category === '') {
          query = this.term
          this.term = ''
        } else if (this.term === '' && this.category !== '') {
          query = this.category
          this.category = ''
        } else if (this.term !== '' && this.category !== '') {
          query = this.term
          this.term = ''
          this.category = ''
        } else {
          this.state = 'close'
        }
      }
      if (query !== '') {
        this.$store.dispatch('searchNews', query)
        this.$router.push({ name: 'SearchNews', params: { term: query } })
        this.state = 'close'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #252525;
}

.bar {
  width: 940px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: space-between;

  @media only screen and (max-width: 400px) {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      background-color: #252525;
      height: 80px;
    }

  &__title {
    color: white;
    font-size: 30px;
    margin-left: 15px;
  }

  &__left {
    display: flex;
    align-items: center;

    img {
      height: 40px;
      padding: 5px 15px;
      background-color: #454545;
    }
  }

  &__right {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media only screen and (max-width: 400px) {
      justify-self: right;
    }
  }
}

.lang {
      display: flex;
    align-items: center;
  margin: 0px 15px 0 0;
  color: white;
  padding: 5px 10px;
  border: 1px solid white;

  &:not(:last-child) {
    margin-left: 15px;
  }

  &:hover {
    color: #454545;
    background-color: #fff;
    cursor: pointer;
  }
}

.activeLang {
  background-color: #fff;
  color: #454545;
}

.background {
  z-index: 5;
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;

  &[data-state="close"] {
    display: none;
  }
}

.center-block {
  position: relative;
  background-color: #fff;
  transition: all 1s ease;
  z-index: 10;
  grid-gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    transition: width 1s ease, opacity 0.5s ease 0.5s;
    opacity: 1;
    width: 180px;
    height: 28px;
    border: none;
    outline: none;
    padding-left: 10px;

    @media only screen and (max-width: 400px) {
      width: 140px;
    }
  }
  i {
    height: 40px;
    font-size: 22px;
    color: white;
    padding: 5px 15px;
    background-color: #454545;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  select {
    transition: width 1s ease, opacity 0.5s ease 0.5s;
    opacity: 1;
    width: 180px;
    height: 28px;
    border: none;
    outline: none;
    padding-left: 10px;

    @media only screen and (max-width: 400px) {
      width: 140px;
      font-size: 14px;
    }
  }

  &[data-state="close"] {
    grid-gap: 0px;
    transition: all 1s ease;

    i {
      font-size: 22px;
    }
    input {
      width: 0px;
      height: 28px;
      opacity: 0;
      cursor: pointer;
      transition: opacity 0.5s ease, width 1s ease;
      padding-left: 0px;
    }
    select {
      width: 0px;
      height: 28px;
      opacity: 0;
      cursor: pointer;
      transition: opacity 0.5s ease, width 1s ease;
      padding-left: 0px;
    }
  }
}

.fa {
  font-size: 22px;
}

</style>

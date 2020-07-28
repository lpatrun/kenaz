<template>
  <div class="container">
    <div class="bar">
      <ul>
        <router-link tag="a" to="/news" class="border__light-blue">
          {{ $t('news') }}
        </router-link>
        <router-link tag="a" to="/business"  class="border__red">
          {{ $t('business') }}
        </router-link>
        <router-link tag="a" to="/sport" class="border__green">
          {{ $t('sport') }}
        </router-link>
        <router-link tag="a" to="/health" class="border__blue">
          {{ $t('health') }}
        </router-link>
        <router-link tag="a" to="/tech" class="border__yellow">
          {{ $t('tech') }}
        </router-link>
        <router-link tag="a" to="/science" class="border__brown">
          {{ $t('science') }}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #4d4382;
}

.bar {
  width: 940px;
  margin: 0 auto;
  color: #f5f5f5;
  font-weight: bold;
  text-transform: uppercase;

  @media only screen and (max-width: 400px) {
    width: 100%;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 400px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  a {
    padding: 15px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 18px;
    color: #f5f5f5;

    &:hover {
      background-color: #299ec3;
    }
  }
}

.border {
  &__light-blue {
    border-bottom: 3px solid #299ec3;
  }

  &__red {
    border-bottom: 3px solid #ee6151;
  }

  &__green {
    border-bottom: 3px solid #84c14f;
  }

  &__blue {
    border-bottom: 3px solid #3677b5;
  }

  &__yellow {
    border-bottom: 3px solid #fcc44d;
  }

  &__brown {
    border-bottom: 3px solid #a99765;
  }
}

.router-link-active {
  background-color: #299ec3;
}
</style>

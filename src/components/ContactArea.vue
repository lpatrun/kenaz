<template>
  <div class="container">
    <div class="content">
      <div class="content__box">
        <h2 class="content__box__kenaz">Kenaz</h2>
        <p>{{ $t('aboutKenaz') }}</p>
        <div class="networks">
          <img src="../../public/img/rss.jpg" alt="Rss">
          <img src="../../public/img/facebook.jpg" alt="Facebook">
          <img src="../../public/img/twitter.jpg" alt="Twitter">
          <img src="../../public/img/dribble.jpg" alt="Dribble">
          <img src="../../public/img/linkedin.jpg" alt="linkedin">
          <img src="../../public/img/youtube.jpg" alt="youtube">
          <img src="../../public/img/skype.jpg" alt="skype">
        </div>
      </div>

      <div class="content__box">
        <h2 class="content__box__sub">{{ $t('newsletter') }}</h2>
        <p>{{ $t('newsletterCTA') }}</p>
         <form>
            <input type="text" name="mail" v-bind:placeholder="$t('mailPlaceholder')">
            <input type="button" :value="$t('subscribe')">
          </form>
      </div>

      <div class="content__box">
        <h2 class="content__box__sub">{{ $t('tagsWidget') }}</h2>
        <span>{{ $t('tags.a') }}</span><span>{{ $t('tags.b') }}</span>
        <span>{{ $t('tags.c') }}</span><span>{{ $t('tags.d') }}</span>
        <span>{{ $t('tags.e') }}</span><span>{{ $t('tags.f') }}</span>
        <span>{{ $t('tags.g') }}</span><span>{{ $t('tags.h') }}</span>
        <span>{{ $t('tags.i') }}</span><span>{{ $t('tags.j') }}</span>
        <span>{{ $t('tags.k') }}</span><span>{{ $t('tags.l') }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #252525;
}

.content {
  width: 940px;
  padding: 40px 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;

  @media only screen and (max-width: 400px) {
      width: 100%;
      grid-template-columns: 1fr;
      padding: 40px 20px;
    }

  &__box {

    input[type=text] {
      width: 170px;
      padding: 12px 20px;
      display: inline-block;
      border: none;
      outline: none;
      background-color: #353535;
    }

    input[type=button] {
      width: 100px;
      height: 40px;
      background-color: #4d4382;
      color: white;
      border: none;
      cursor: pointer;
    }

    input[type=button]:hover {
      background-color: #625796;
    }

    span {
      padding: 5px 5px;
      margin: 0px 5px 5px 0px;
      display: inline-block;
      color: #777;
      background-color: #353535;
      white-space: nowrap;

      &:hover {
        background-color: #625796;
        cursor: pointer;
      }
    }

    &__kenaz {
      color: #299ec3;
      margin-bottom: 15px;
    }

    &__sub {
      color: #eee;
      margin-bottom: 15px;
    }

    p {
      color: #777;
      margin-bottom: 15px;
    }
  }
}

.networks {
  display: flex;
  flex-direction: row;

  img {
    cursor: pointer;
    width: 32px;
    height: 32px;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
}
</style>

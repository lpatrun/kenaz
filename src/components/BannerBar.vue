<template>
  <div class="banner-container">
    <p>factory.hr</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.banner-container {
  width: 940px;
  height: 120px;
  margin: 25px auto;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 400px) {
    width: 100%;
  }
}
</style>

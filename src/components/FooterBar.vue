<template>
  <div class="container">
    <div class="content">
      <div>&#169; - {{ $t('kenazTemplate') }}</div>
      <div>{{ $t('kenazFooter') }}</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #252525;
  border-top: 1px solid #333;
  padding-bottom: 150px;
}

.content {
  width: 940px;
  margin: 0 auto;
  margin-top: 15px;
  display: flex;
  flex: 1 1;
  justify-content: space-between;
  color: #ddd;

  @media only screen and (max-width: 400px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px;
  }

  div {
    @media only screen and (max-width: 400px) {
      margin-bottom: 15px;
    }
  }
}
</style>

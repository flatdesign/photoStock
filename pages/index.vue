<template>
  <div class="main-page">
    <div class="main-page__content">
      <h1 class="main-page__title">Приветсвуем на Photo Stock</h1>
      <p class="main-page__descripton">Это приложения для поиска фотографий автора, заинтересовавшего вас на <a href="https://www.flickr.com" target="blank">Flicr.com</a> Чтобы начать - перейдите на страницу "Галерея" и введите ник автора</p>
      <v-btn class="main-page__button" dark outline large @click="checkoutGallery">Перейти в гелерею</v-btn>
    </div>
  </div> 
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      checkoutGallery() {
        this.$router.push("/gallery");
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-page {
    min-height: 100vh;
    position: relative;
    color: #ffffff;
    background-image: url("../static/img/mountains.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    &__content {
      position: relative;
      z-index: 2;
      width: 725px;
      display: flex;
      flex-direction: column;
    }
    &__title {
      font-size: 45px;
      line-height: 50px;
      text-align: center;
      margin-bottom: 10px;
    }
    &__descripton {
      font-size: 18px;
      line-height: 24px;
      text-align: center;
    }
    a {
      color: #ffffff;
      font-weight: 700;
    }
    &__button {
      margin: 0 auto;
    }
    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }

  }
</style>


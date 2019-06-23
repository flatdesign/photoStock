<template>
  <ul class="photo-list">
    <li 
      class="photo-list__element"
      v-for="photo in photos"
      :key="photo.id"
    >
      <div class="image-wrapper">
        <img :src="`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`" :alt="`${photo.title}`">
      </div>
      <p class="title">{{photo.title}}</p>
      
    </li>
  </ul>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    data() {
      return {

      }
    },

    computed: {
      ...mapGetters({
        photos: 'photos/getPhotos'
      }),
    }
  }
</script>

<style lang="scss" scoped>
  .photo-list {
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &__element {
      width: 55%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #ffffff;
      margin-bottom: 20px;
    }
    .image-wrapper {
      width: 100%;
    }
    .title {
      padding: 20px 20px;
      color: #000000;
    }
  }
</style>



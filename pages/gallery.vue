<template>
  <div class="gallery">
    <div class="gallery__content">
      <label class="gallery-search"><span>Псевдоним фотографа:</span>
        <v-text-field
          class="search-input"
          solo
          label="Например, FlyButtafly"
          clearable
          append-icon="search"
          v-model="search"
          @change="searchSubmit"
        ></v-text-field>
      </label>
      <PhotoList />
    </div> 
  </div>
</template>

<script>
  import PhotoList from "@/components/PhotoList.vue";
  import {mapMutations} from 'vuex';

  export default {
    components: {
      PhotoList
    },
    data() {
      return {
        search: '',
        photos: []
      }
    },
    methods: {
      ...mapMutations({
        setPhotos: 'photos/setPhotos'
      }),
      async searchSubmit() {
        const response = await this.searchPeople(this.search); 
        this.loadPhotos(response.user.id);
      }, 
      async loadPhotos(id) {
        try {
          const data = await this.$axios.$get("https://api.flickr.com/services/rest/", {
            params: {
              "method": "flickr.photos.search",
              "api_key": "0d5f3215d9d57383311437f972769367",
              "format": "json",
              "user_id": `${id}`,
            }
          });
          const response = JSON.parse(data.slice(14, data.length - 14) + "}");
          this.setPhotos(response.photos.photo);
        } catch(e) {
          console.log(e);
          alert("Не удалось загрузить фото");
        }
      },
      async searchPeople(name) {
        try {
          const data = await this.$axios.$get("https://api.flickr.com/services/rest/", {
            params: {
              "method": "flickr.people.findByUsername",
              "api_key": "0d5f3215d9d57383311437f972769367",
              "format": "json",
              "username": `${name}`,
            }
          });
          return JSON.parse(data.slice(14, data.length - 14) + "}");
        } catch(e) {
          console.log(e);
          alert("Не удалось загрузить фото");
        }
      }
    },
    async created() {
      const response = await this.searchPeople("FlyButtafly"); 
      this.loadPhotos(response.user.id);
    }
  }
</script>


<style lang="scss" scoped>
  .gallery {
    background-image: url("../static/img/mountains.jpg");
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 2;
    }
    
    .gallery-search {
      width: 55%;
      display: inline-block;
      margin-top: 20px;
      span {
        color: #ffffff;
        font-size: 24px;
      }
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





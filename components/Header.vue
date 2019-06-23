<template>
  <header class="header">
    <v-toolbar color="blue darken-1" height="50px" dark>
      <v-toolbar-side-icon @click="showSideBar"></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">
        <nuxt-link to="/" class="stock-name">Photo Stock</nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          flat
          v-for="item in menuItems"
          :key="item.label"
          @click="item.action"
          >
          {{ item.label }}
        </v-btn>
          
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<script>
  export default {
    data() {
      return {
         menuItems: [
          {
            label: 'Галерея',
            action: () => {
              //this.$router.push("/");
            }
          },
        ]
      }
    },
    methods: {
      showSideBar() {
        this.$store.commit('setSideBarStatus', true);
      }
    }
  }
</script>


<style lang="scss" scoped>
  header {
    .stock-name {
      color: #ffffff;
      text-decoration: none;
    }
  }
</style>


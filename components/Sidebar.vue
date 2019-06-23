<template>
  <div class="sidebar">
    <v-navigation-drawer
      :value="getSideBarStatus"
      absolute
      width="250px"
      temporary
      color="white"
      @input="toggleSideBar"
    >
      <v-list>
        <v-list-tile
          v-for="item in sideBarList"
          :key="item.label"
        >
          <v-list-tile-content>
            <v-list-tile-title>
              <nuxt-link :to="item.route">{{ item.label }}</nuxt-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        sideBarList: [
          {
            label: 'Главная',
            route: '/'
          },
          {
            label: 'Галерея',
            route: '/gallery'
          },
        ]
      }
    },
    methods: {
      toggleSideBar(value) {
        this.$store.commit('setSideBarStatus', value);
      }
    },
    computed: {
      ...mapGetters([
        'getSideBarStatus',
      ])
    }
  }
</script>

<style lang="scss" scoped>
  div.sidebar {
    a {
      text-decoration: none;
      color: #000000;
      width: 100%;
      display: inline-block;
      &:hover, &:focus {
        text-decoration: none;
      }
    }
    .nuxt-link-exact-active  {
      color: #0D47A1;
      font-weight: 700;
    }
  }
</style>




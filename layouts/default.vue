<template>
  <v-app>
    <Header />
    <Sidebar />
    <div class="content">
      <nuxt />
    </div>  
  </v-app>
</template>

<script>
  import Header from "@/components/Header";
  import Sidebar from "@/components/Sidebar";

  export default {
    components: {
      Header,
      Sidebar
    },
    data() {
      return {

      }
    }
  }
</script>

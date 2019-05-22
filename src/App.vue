<template>
  <v-app>
    <!-- <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app></v-toolbar>-->
    <v-content>
      <v-container fluid class="black pa-0">
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- <BottomNav/> -->
  </v-app>
</template>

<script>
// import BottomNav from "./components/BottomNav.vue";

// import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    // BottomNav
  },
  data() {
    return {
      //
    };
  }
};
</script>

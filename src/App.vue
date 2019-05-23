<template>
  <v-app>
    <v-content class="yellow darken-4">
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-content>
    <BottomNav/>
  </v-app>
</template>

<script>
import BottomNav from "./components/BottomNav.vue";
export default {
  name: "App",
  components: {
    BottomNav
  },
  data() {
    return {
      //
    };
  }
};
</script>



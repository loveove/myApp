<template>
  <v-app>
    <v-content class="orange accent-3">
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
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



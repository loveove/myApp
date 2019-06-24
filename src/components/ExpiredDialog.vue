<template>
  <v-dialog max-width="600px" v-model="show" persistent>
    <!-- <slot slot="activator">activator</slot> -->
    <v-container text-xs-center :value="show" class="red darken-4">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card-text class="px-0 white--text red darken-4" large>登陆已过期</v-card-text>
        </v-flex>
        <v-flex xs12>
          <v-btn flat @click="closeExpired" class="white--text orange darken-4" small>ok</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-dialog>
</template>
<script>
export default {
  name: "ExpiredDialog",
  components: {},
  data() {
    return {
      show: true
    };
  },
  methods: {
    closeExpired() {
      this.$router.push("/");
    }
  }
};
</script>

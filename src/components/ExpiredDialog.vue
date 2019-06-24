<template>
  <v-dialog max-width="600px" v-model="show">
    <!-- <slot slot="activator">activator</slot> -->
    <v-container grid-list-md text-xs-center :value="show">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-text class="px-0">登陆已过期</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card>
            <v-btn flat @click="closeExpired">ok</v-btn>
          </v-card>
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

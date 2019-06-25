<template>
  <v-dialog v-model="show" persistent>
    <slot slot="activator">activator</slot>
       <!-- <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template> -->
    <v-container text-xs-center :value="show" class="red darken-4">
      <v-layout xs12 row wrap>
        <v-flex xs12>
          <v-card-text class="white--text red darken-4">退出账户?</v-card-text>
        </v-flex>
        <v-flex xs6>
          <v-btn flat @click.native="show=false" class="white--text orange darken-4">否</v-btn>
        </v-flex>
        <v-flex xs6>
          <v-btn flat @click.native="confirm" class="white--text orange darken-4">是</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-dialog>
</template>
<script>
export default {
  name: 'ConfirmationDialog',
  components: {},
  data () {
    return {
      show: false
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm')
      this.show = false
    }
  }
}
</script>

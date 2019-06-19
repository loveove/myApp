<template>
  <v-card height="100" class="red darken-4">
  </v-card>
</template>

<script>
export default {
  name: 'HeaderComponent',
  components: {},
  data () {
    return {
      image: require('@/assets/logo.png')
    }
  },
  computed: {}
}
</script>

<style scoped>
.v-card {
  background: url("/img/logo.9a96801a.png") center center / auto no-repeat;
}
</style>

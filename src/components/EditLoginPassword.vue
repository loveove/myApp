<template>
  <v-card>
    <v-form ref="form" class="pa-2">
      <v-text-field label="原登陆密码" prepend-icon="lock" required></v-text-field>

      <v-text-field label="新登陆密码" prepend-icon="lock" required></v-text-field>

      <v-text-field label="确认新密码" prepend-icon="lock" required></v-text-field>

      <v-btn color="red darken-4 white--text" block>立即提交</v-btn>
    </v-form>
  </v-card>
</template>
<script>
export default {
  name: "EditLoginPassword",
  components: {},
  data: () => ({})
};
</script>
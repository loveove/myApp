<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
      </template>
      <v-card>
        <v-toolbar dark color="yellow darken-4">
          <v-btn icon dark @click="close">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title class="fontsize">快速注册</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form ref="form" class="pa-2">
          <v-text-field :counter="10" label="用户名" prepend-icon="person" required></v-text-field>
          <v-text-field :counter="10" label="用户名" prepend-icon="person" required></v-text-field>
          <v-text-field :counter="12" label="密码" prepend-icon="lock" required></v-text-field>
          <v-text-field label="邮箱" prepend-icon="email" required></v-text-field>
          <v-text-field
            :counter="11"
            label="手机号"
            prepend-icon="phone_iphone"
            type="number"
            required
          ></v-text-field>
          <v-text-field
            :counter="4"
            label="验证码"
            prepend-icon="verified_user"
            type="number"
            required
          >
            <!-- <img slot="append" alt="Code"> -->
          </v-text-field>
          <v-btn color="yellow darken-4 white--text" block>下一步</v-btn>
        </v-form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  methods: {
    close() {
      this.$router.push("/");
      this.dialog = false;
    }
  }
};
</script>
<style scoped>
.fontsize{
  font-weight: bold;
}
</style>

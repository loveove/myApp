<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <!-- <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>-->
      <v-card>
        <v-toolbar dark color="yellow darken-4">
          <v-btn icon dark @click="close">
            <v-icon>close</v-icon>
          </v-btn>
          <!-- <v-toolbar-title>Settings</v-toolbar-title> -->
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form ref="form" class="px-4 pt-5">
          <img src="@/assets/logo.png">

          <div class="text-xs-center py-3">
            <span class="fontsize">账号登录</span>
          </div>
          <v-card>
            <v-text-field label="用户名" prepend-icon="person" required></v-text-field>
          </v-card>
          <v-card>
            <v-text-field label="密码" prepend-icon="lock" required></v-text-field>
          </v-card>
          <!-- <v-container fluid> -->
          <!-- <v-layout row wrap> -->
          <v-card>
            <v-btn color="yellow darken-4 white--text" block>登陆</v-btn>
          </v-card>
          <!-- </v-layout> -->
          <!-- </v-container> -->
          <div class="text-xs-right">
            <!-- <a href="/Register">快速注册</a> -->
            <v-btn color="red white--text" @click="register">快速注册</v-btn>
          </div>
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
    },
    register() {
      this.$router.push("/register");
      this.dialog = false;
    }
  }
};
</script>
<style scoped>
.fontsize {
  font-weight: bold;
  color: chocolate;
}
</style>

<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-toolbar dark color="orange">
        <v-btn icon dark @click="navigate">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-form ref="form" v-model="valid" class="px-4">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="用户名"
          prepend-icon="person"
          required
        ></v-text-field>
        <v-text-field v-model="password" label="密码" prepend-icon="lock" required></v-text-field>
        <v-container fluid>
          <v-layout row wrap>
             <v-btn color="white" block>登陆</v-btn>
             
          </v-layout>
        </v-container>
        <div class="text-xs-right">
             <a href="/Register">快速注册</a>
             </div>
      </v-form>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  methods: {
    navigate(url) {
      this.$router.push("/");
      this.$router.push(url);
    }
  }
};
</script>
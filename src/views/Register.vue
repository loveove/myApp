<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-toolbar dark color="orange">
        <v-btn icon dark @click="navigate">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>快速注册</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-form ref="form" v-model="valid" class="white pa-2">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="用户名"
          prepend-icon="person"
          required
        ></v-text-field>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="用户名"
          prepend-icon="person"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :counter="12"
          :rules="passwordRules"
          :append-icon="show ? 'visibility' : 'visibility_off'"
          :type="show ? 'text' : 'password'"
          label="密码"
          prepend-icon="lock"
          @click:append="show = !show"
          required
        ></v-text-field>
        <v-text-field :rules="emailRules" label="邮箱" prepend-icon="email" required></v-text-field>
        <v-text-field
          v-model="phone"
          :rules="phoneRules"
          :counter="11"
          label="手机号"
          prepend-icon="phone_iphone"
          type="number"
          required
        ></v-text-field>
        <v-text-field
          v-model="code"
          :rules="codeRules"
          :counter="4"
          label="验证码"
          prepend-icon="verified_user"
          type="number"
          required
        >
          <img slot="append" alt="Code">
        </v-text-field>
        <v-btn color="orange" block>立即注册</v-btn>

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
    },
   }
};
</script>
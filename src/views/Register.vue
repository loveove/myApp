<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <!-- <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>-->
      <!-- <v-card> -->
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>快速注册</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-toolbar-items>
            <v-btn dark flat @click="dialog = false">Save</v-btn>
        </v-toolbar-items>-->
      </v-toolbar>
      <v-form ref="form" v-model="valid" class="orange lighten-5 pa-2">
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
        <v-btn color="success" block>立即注册</v-btn>
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
  }
};
</script>
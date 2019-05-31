<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="yellow darken-4">
          <v-btn icon dark @click="close">
            <v-icon>close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form ref="form" class="px-4 pt-5" v-model="valid">
          <img src="@/assets/logo.png">

          <div class="text-xs-center py-3">
            <span class="fontsize">账号登录</span>
          </div>
          <v-card>
            <v-text-field
              label="用户名"
              prepend-icon="person"
              v-model="name"
              :rules="nameRules"
              required
            ></v-text-field>
            <v-text-field
              label="密码"
              prepend-icon="lock"
              v-model="password"
              :append-icon="show ? 'visibility' : 'visibility_off'"
              :rules="[rules.required]"
              :type="show ? 'text' : 'password'"
              required
            ></v-text-field>
          </v-card>
          <v-btn color="yellow darken-4 white--text" @click="login" :disabled="!valid" block>登陆</v-btn>
          <div class="text-xs-right">
            <v-btn color="red white--text" @click="linkregister">快速注册</v-btn>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      nameRules: [v => !!v || "请填写用户名"],
      password: "",
      rules: {
        required: value => !!value || "请填写密码."
      },
      show: false,
      valid: true,
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
    linkregister() {
      this.$router.push("/register");
      this.dialog = false;
    },
    login() {
      axios
        .post(
          `${this.$store.state.apiUrl}/login`,
          qs.stringify({
            username: this.name,
            password: this.password
          })
        )
        .then(response => {
          // console.log(this)
          if (response.data.result.token != undefined) {
            this.$store.dispatch("setToken", response.data.result.token);
            this.$router.push("/");
          }
        });
    }
  },
  computed: {},
  created() {
    // this.login();
  }
};
</script>
<style scoped>
.fontsize {
  font-weight: bold;
  color: chocolate;
}
</style>

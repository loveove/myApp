<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay>
    <v-card color="yellow darken-4">
      <v-toolbar dark color="yellow darken-4">
        <v-btn icon dark @click="close">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title class="custoSize">账号登录</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-form ref="form" class="px-4 pt-5" v-model="valid">
        <img src="@/assets/logo.png">

        <div class="text-xs-center py-3">
          <span class="fontsize" color="red darken-4">账号登录</span>
        </div>

        <v-card class="border_custo">
          <v-form ref="form" v-model="valid" class="px-4">
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
            <v-layout xs12 row wrap>
              <v-flex xs12>
                <v-btn
                  color="red darken-4 white--text"
                  @click="login"
                  :disabled="!valid"
                  block
                >登陆</v-btn>
              </v-flex>
              <v-flex xs12>
                <v-alert
                  v-model="hasError"
                  :value="true"
                  color="error"
                  icon="warning"
                  outline
                  dismissible
                  error
                >{{errorMessage}}</v-alert>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card>

        <div class="text-xs-right mt-4">
          <v-btn color="red white--text" @click="linkregister">快速注册</v-btn>
        </div>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "Login",
  data() {
    return {
      errorMessage: "",
      hasError: false,
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
          } else {
            this.hasError = true;
            this.errorMessage = response.data.msg;
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
}
.border_custo{
  border-radius: 10px;
}
</style>

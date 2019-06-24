<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
      </template>
      <v-card class="yellow darken-4">
        <v-toolbar dark color="yellow darken-4">
          <v-btn icon dark @click="close">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>快速注册</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-container>
          <v-card class="border_custo py-2 px-2">
            <v-form ref="form" class="pa-2" v-model="valid" lazy-validation>
              <!-- <v-text-field :counter="10" label="用户名" prepend-icon="person" required></v-text-field> -->
              <v-text-field
                label="用户名"
                prepend-icon="person"
                :rules="nameRules"
                v-model="name"
                required
              ></v-text-field>
              <v-text-field
                label="密码"
                prepend-icon="lock"
                v-model="pass"
                :rules="passwordRules"
                :append-icon="show ? 'visibility' : 'visibility_off'"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
                required
              ></v-text-field>
              <v-text-field
                label="邮箱"
                prepend-icon="email"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                :counter="11"
                :rules="phoneRules"
                v-model="phone"
                label="+86 中国"
                prepend-icon="phone_iphone"
                type="number"
                required
              ></v-text-field>
              <v-text-field
                :counter="4"
                v-model="code"
                :rules="codeRules"
                label="验证码"
                prepend-icon="verified_user"
                type="number"
                required
              >
                <img slot="append" :src="imageSource" alt="Code" @click="changeImageCode">
              </v-text-field>
              <v-btn
                color="red darken-4 white--text"
                block
                :disabled="!valid"
                @click="userRegisteration"
              >下一步</v-btn>
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
            </v-form>
          </v-card>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Register',
  data () {
    return {
      errorMessage: '',
      hasError: false,
      dialog: true,
      valid: true,
      notifications: false,
      sound: true,
      widgets: false,
      show: false,
      timestampt: new Date().valueOf(),
      name: '',
      nameRules: [
        v => !!v || '请加入名称',
        v =>
          (v && v.toString().length >= 5 && v.toString().length <= 10) ||
          '请输入5-10位字母或数字'
      ],
      pass: '',
      passwordRules: [
        v => !!v || '请加入密码',
        v =>
          (v && v.toString().length >= 6 && v.toString().length <= 12) ||
          '必请输入6-12位数字或字母'
      ],
      email: '',
      emailRules: [
        v => !!v || '请加入邮件',
        v => /.+@.+/.test(v) || '邮件必须有效'
      ],
      phone: '',
      phoneRules: [
        v => !!v || '请加入电话号码',
        v => (v && v.toString().length === 11) || '必须是11个号码'
      ],
      code: '',
      codeRules: [
        v => !!v || '请加入验证码',
        v => (v && v.length == 4) || '验证码必须是4个字'
      ]
    }
  },
  methods: {
    close () {
      this.$router.push('/')
      this.dialog = false
    },
    changeImageCode () {
      this.timestampt = new Date().valueOf()
    },
    userRegisteration () {
      axios({
        method: 'post',
        url: 'http://47.90.100.229:20000/api/user/register',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({
          username: this.name,
          password: this.pass,
          imgcode: this.code,
          mobile: this.phone,
          email: this.email
        })
      })
        .then(response => {
          // console.log(response);
          if (response.data.msg === '注册成功') {
            this.$store.dispatch('setToken', response.data.result.token)
            this.$store.dispatch('isLoginTrue')
            this.$router.push('/')
          } else {
            this.hasError = true
            this.errorMessage = response.data.msg
          }
        })
        .catch(function (error) {
          // console.log(error)
        })
    }
  },
  computed: {
    imageSource: function () {
      return (
        `${this.$store.state.apiUrl}/validateCode?timesp` + this.timestampt
      )
    }
  }
}
</script>
<style scoped>
.border_custo {
  border-radius: 10px;
}
</style>

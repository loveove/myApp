<template>
  <div>
    <v-container>
      <v-card class="border_custo">
        <v-form ref="form" v-model="valid" class="pa-2">
          <v-text-field
            v-model="oldPassword"
            :append-icon="showOld ? 'visibility' : 'visibility_off'"
            :rules="[rules.required]"
            :type="showOld ? 'text' : 'password'"
            @click:append="showOld = !showOld"
            label="原登陆密码"
            prepend-icon="lock"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :rules="newPasswordRules"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            label="新登陆密码"
            prepend-icon="lock"
            required
          ></v-text-field>

          <v-text-field
            v-model="confirmPassword"
            :append-icon="showConfirm ? 'visibility' : 'visibility_off'"
            :rules="newPasswordConfirmationRules"
            :type="showConfirm ? 'text' : 'password'"
            label="确认新密码"
            @click:append="showConfirm = !showConfirm"
            prepend-icon="lock"
            required
          ></v-text-field>

          <v-btn
            color="red darken-4 white--text"
            @click="UpdateLoginPassword"
            block
            :disabled="isDisabled"
          >立即提交</v-btn>
          <v-alert
            v-model="hasAlert"
            :value="true"
            icon="warning"
            outline
            dismissible
            type="info"
          >{{alertMessage}}</v-alert>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'
const qs = require('qs')
export default {
  name: 'EditLoginPassword',
  components: {},
  data: () => ({
    isLoading: false,
    alertMessage: '',
    hasAlert: false,
    password: '',
    oldPassword: '',
    confirmPassword: '',
    showConfirm: false,
    valid: false,
    show: false, // show password
    showOld: false,

    rules: {
      required: value => !!value || '请输入原登陆密码'
    }
  }),
  computed: {
    isDisabled () {
      if (this.valid === false || this.isLoading === true) {
        return true
      } else {
        return false
      }
    },
    newPasswordRules () {
      return [
        v => !!v || '请输入新密码',
        v => (v && v == this.confirmPassword) || '确认密码不符合'
      ]
    },
    newPasswordConfirmationRules () {
      return [
        v => !!v || '请确认新密码',
        v => (v && v == this.password) || '确认密码不符合'
      ]
    }
  },
  watch: {
    confirmPassword: function () {
      this.$refs.form.validate()
    }
  },
  methods: {
    UpdateLoginPassword () {
      // this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/user/updatePassword`,
          qs.stringify({
            oldpassword: this.oldPassword,
            password: this.password,
            repassword: this.confirmPassword
          }),
          {
            headers: {
              'X-Auth-Token': this.$store.state.token
            }
          }
        )
        .then(res => {
          // console.log(res);
          if (res.data.result.token) {
            this.hasAlert = true
            this.alertMessage = '更改密码成功'
            this.$store.dispatch('setToken', res.data.result.token)
            // console.log(res.data.result.token)
          } else {
            this.hasAlert = true
            this.alertMessage = res.data.msg
            // console.log(res.data)
          }
          // this.isLoading = false;
          //   this.$forceUpdate();
        })
      // .catch(err => console.log(err));
      // .then(()=>console.log(this.$store.state.token));
      this.oldPassword = ''
      this.password = ''
      this.confirmPassword = ''
    }
  }
}
</script>
<style scoped>
.border_custo {
  border-radius: 10px;
}
</style>

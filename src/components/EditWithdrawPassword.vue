<template>
  <div>
    <v-container>
      <v-card class="border_custo py-2">
        <v-form ref="form" v-model="valid" class="pa-2">
          <v-text-field
            v-model="bankOldPassword"
            :append-icon="showOldPassword ? 'visibility' : 'visibility_off'"
            :rules="oldPasswordRules"
            label="原取款密码"
            :type="showOldPassword ? 'text' : 'password'"
            prepend-icon="fas fa-unlock"
            @click:append="showOldPassword = !showOldPassword"
            required
          ></v-text-field>
          <v-text-field
            v-model="bankNewPassword"
            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
            :rules="newPasswordRules"
            label="新取款密码"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="fas fa-unlock"
            @click:append="showPassword = !showPassword"
            required
          ></v-text-field>
          <v-text-field
            v-model="confirmBankNewPassword"
            :append-icon="showConfirmPassword ? 'visibility' : 'visibility_off'"
            :rules="newPasswordConfirmationRules"
            label="确认新密码"
            :type="showConfirmPassword ? 'text' : 'password'"
            prepend-icon="fas fa-unlock"
            @click:append="showConfirmPassword = !showConfirmPassword"
            required
          ></v-text-field>
          <v-btn
            color="red darken-4 white--text"
            block
            @click.native="updateWithdrawPassword"
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
  name: 'EditWithdrawPassword',
  components: {},
  data: () => ({
    isLoading: false,
    alertMessage: '',
    hasAlert: false,
    valid: true,
    showPassword: false,
    showConfirmPassword: false,
    showOldPassword: false,

    bankOldPassword: '',
    oldPasswordRules: [v => !!v || '请输入原本取款密码'],

    bankNewPassword: '',
    passwordRules: [v => !!v || '请输入新取款密码'],

    confirmBankNewPassword: '',
    comfirmPasswordRules: [v => !!v || '请确认新取款密码']
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
        v => !!v || '请输入新取款密码',
        v => (v && v == this.confirmBankNewPassword) || '确认密码不符合'
      ]
    },
    newPasswordConfirmationRules () {
      return [
        v => !!v || '请确认新取款密码',
        v => (v && v == this.bankNewPassword) || '确认密码不符合'
      ]
    }
  },
  watch: {
    confirmBankNewPassword: function () {
      this.$refs.form.validate()
    }
  },
  methods: {
    updateWithdrawPassword () {
      // this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/user/updateAccountPassword`,
          qs.stringify({
            oldpassword: this.bankOldPassword,
            password: this.bankNewPassword,
            repassword: this.confirmWithdrawPassword
          }),
          {
            headers: {
              'X-Auth-Token': this.$store.state.token
            }
          }
        )
        .then(res => {
          // console.log(res);
          // this.isLoading = false;
          this.hasAlert = true
          this.alertMessage = '更改密码成功'
          if (res.data.msg === 'ok') {
            this.getUserInfo()
          } else {
            this.hasAlert = true
            this.alertMessage = res.data.msg
          }
          // console.log(res.data.msg);
        })
      // .catch(err => console.log(err));
      this.withdrawPassword = ''
      this.oldWithdrawPassword = ''
      this.confirmWithdrawPassword = ''
    },
    getUserInfo () {
      this.isLoading = false
      axios
        .get(`${this.$store.state.apiUrl}/account/getUserInfo`, {
          headers: {
            'X-Auth-Token': this.$store.state.token
          }
        })
        .then(res => {
          this.$store.dispatch('setUserInfo', res.data.result)
          this.isLoading = false
        })
      // .catch(err => console.log(err));
    }
  }
}
</script>
<style scoped>
.border_custo {
  border-radius: 10px;
}
</style>

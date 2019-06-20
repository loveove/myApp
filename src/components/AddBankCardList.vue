<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <template v-slot:activator="{ on }"></template>
      <v-card color="yellow darken-4">
        <v-toolbar dark color="yellow darken-4">
          <v-btn icon dark @click="link_membercenter">
            <i class="fas fa-arrow-left"></i>
          </v-btn>
          <v-toolbar-title>添加银行卡</v-toolbar-title>
        </v-toolbar>
        <v-container>
          <v-card class="py-4 border_custo">
            <v-form ref="form" class="px-4" v-model="valid">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="开户名"
                prepend-icon="account_circle"
                :disabled="$store.state.userInfo.real_name != null"
                required
              ></v-text-field>
              <v-text-field
                v-model="bankNumber"
                :counter="20"
                :rules="bankRules"
                label="银行卡号"
                prepend-icon="credit_card"
                type="number"
                required
              ></v-text-field>
              <v-text-field
                v-model="bankName"
                :rules="bankNameRules"
                label="开户银行"
                prepend-icon="fas fa-university"
                required
              ></v-text-field>
              <v-text-field
                v-model="bankBranch"
                :rules="bankBranchRules"
                label="支行名称"
                prepend-icon="fas fa-university"
                required
              ></v-text-field>

              <v-layout row wrap>
                <v-flex xs12>
                  <v-btn
                    @click.native="addBankCard"
                    block
                    color="red darken-4 white--text"
                    :disabled="isDisabled"
                  >立即提交</v-btn>
                </v-flex>
                <v-flex xs12>
                  <v-alert
                    v-model="hasAlert"
                    :value="true"
                    icon="warning"
                    type="info"
                    outline
                    dismissible
                  >{{alertMessage}}</v-alert>
                </v-flex>
              </v-layout>
            </v-form>
          </v-card>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import axios from 'axios'
import { bus, apiMethods } from '@/main'
const qs = require('qs')
export default {
  name: 'AddBankCardList',
  components: {},
  data: () => ({
    valid: false,
    alertMessage: '',
    hasAlert: false,
    isLoading: false,
    dialog: true,
    notifications: false,
    sound: true,
    widgets: false,
    name: '',
    nameRules: [v => !!v || '请输入开户名'],
    bankNumber: '',
    bankRules: [
      v => !!v || '请输入银行卡号',
      v =>
        (v && v.toString().length > 15 && v.toString().length < 21) ||
        '银行编号必须介于16到20之间'
    ],
    bankName: '',
    bankNameRules: [v => !!v || '请输入开户银行'],
    bankBranch: '',
    bankBranchRules: [v => !!v || '请输入支行名称']
  }),
  methods: {
    link_membercenter () {
      this.$router.push('/membercenter')
    },

    addBankCard () {
      (this.isLoading = true),
      axios
        .post(
          `${this.$store.state.apiUrl}/user/bankCard/add`,
          qs.stringify({
            account: this.name,
            bank_no: this.bankNumber,
            bank_name: this.bankName,
            bank_branch: this.bankBranch
          }),
          {
            headers: {
              'X-Auth-Token': this.$store.state.token
              
            }
          }
        )
        .then(res => {
          // console.log(res);
          (this.isLoading = false), (this.hasAlert = true)
          this.alertMessage = '添加银行卡成功'
          if (res.data.msg === 'ok') {
            (this.bankNumber = ''),
            (this.bankName = ''),
            (this.bankBranch = '')
            bus.$emit('updateBankInfo')
            // apiMethods.getUserInfo()
          } else {
            this.hasAlert = true
            this.alertMessage = res.data.msg
          }
        })
      // .catch(err => console.log(err));
    }
  },
  computed: {
    isDisabled () {
      if (this.valid === false || this.isLoading === true) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    bus.$on('doneSettingUserInfo', () => {
      this.name = this.$store.state.userInfo.real_name
    })
    this.name = this.$store.state.userInfo.real_name
  }
}
</script>
<style scoped>
.border_custo {
  border-radius: 10px;
}
</style>

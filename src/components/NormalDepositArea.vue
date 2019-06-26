<template>
  <v-container>
    <v-card class="border_custo">
      <div>
        <v-form ref="form" class="pa-2" v-model="valid">
          <!-- <v-alert type="info">使用本方式充值, 系统赠送, 最高, 只需一倍流水即可提款</v-alert> -->
          <v-alert
            :value="true"
            type="info"
          >使用本方式充值, 系统赠送{{$store.state.depositeInfo[0].gift_rate}}, 最高{{$store.state.depositeInfo[0].gift_max}}, 只需一倍流水即可提款</v-alert>
          <v-flex>
            <v-text-field
              prepend-icon="fas fa-coins"
              type="number"
              label="存入金额"
              v-model="selectAmount"
              :rules="selectAmountRules"
              required
            ></v-text-field>
          </v-flex>
          <v-text-field
            label="存款人姓名"
            prepend-icon="account_circle"
            v-model="username"
            :rules="usernameRules"
            required
          ></v-text-field>
          <br>
          <label>付款方式</label>
          <v-radio-group row>
            <v-radio label="网线转账" color="secondary" value="网线转账"></v-radio>
            <v-radio label="支付宝转账" color="secondary" value="支付宝转账"></v-radio>
            <v-radio label="微信转账" color="secondary" value="微信转账"></v-radio>
            <v-radio label="手机银行转账" color="secondary" value="手机银行转账"></v-radio>
            <v-radio label="ATM 转账" color="secondary" value="ATM 转账"></v-radio>
            <v-radio label="柜台转账" color="secondary" value="柜台转账"></v-radio>
          </v-radio-group>
          <v-btn
            color="red darken-4 white--text"
            :loading="isLoading"
            :disabled="isDisabled"
            v-on:click="fastDeposite()"
            block
          >下一步</v-btn>
        </v-form>
      </div>
      <div v-show="showTable">
        <template>
          <v-data-table :items="dataInfo" hide-actions hide-headers>
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.result }}</td>
            </template>
          </v-data-table>

          <!-- <ConfirmationDialog @confirm="cancelDeposite" class="d-flex">
            <v-btn color="warning" :loading="isLoading" block>取消订单</v-btn>
          </ConfirmationDialog>-->
          <!-- <v-btn
            color="red darken-4 white--text"
            :loading="isLoading"
            v-on:click="submitDeposite"
            block
          >完成存款，下一步</v-btn>-->
        </template>
      </div>

      <v-flex xs12>
        <v-alert
          v-model="hasAlert"
          :value="true"
          type="info"
          icon="warning"
          outline
          dismissible
        >{{alertMessage}}</v-alert>
      </v-flex>
    </v-card>
  </v-container>
</template>
<script>
import axios from 'axios'
const qs = require('qs')
export default {
  name: 'NormalDepositArea',
  components: {},
  data: () => ({
    alertMessage: '',
    hasAlert: false,
    dataInfo: [
      { name: '订单编号', result: ' ' },
      { name: '存款金额', result: ' ' },
      { name: '银行', result: ' ' },
      { name: '账号', result: ' ' },
      { name: '开户名', result: '' },
      { name: '分行名称', result: '' }
    ],
    items: [],

    isLoading: false,
    valid: false,
    selectAmount: '',
    username: '',
    usernameRules: [v => !!v || '请输入存款人姓名'],
    showTable: false,
    showForm: true,
    payWay: '网线转账',
    orderId: ''
  }),
  computed: {
    isDisabled () {
      if (this.valid === false || this.isLoading === true) {
        return true
      } else {
        return false
      }
    },
    selectAmountRules () {
      return [
        v => !!v || '请输入金额',
        v =>
          (v &&
            v >= this.$store.state.depositeInfo[0].balanceStart &&
            v < this.$store.state.depositeInfo[0].balanceEnd) ||
          `限额 ${this.$store.state.depositeInfo[0].balanceStart} - ${
            this.$store.state.depositeInfo[0].balanceEnd
          }`
      ]
    }
  },
  methods: {
    displayTable: function () {
      this.showTable = !this.showTable
      this.showForm = !this.showForm
    },
    fastDeposite () {
      this.isLoading = true
      axios
        .post(
          `${this.$store.state.apiUrl}/account/deposit/fast`,
          qs.stringify({
            paytype: 'OFFLINE_BANK',
            amount: this.selectAmount,
            name: this.username,
            payway: this.payWay
          }),
          {
            headers: {
              'X-Auth-Token': this.$store.state.token
            }
          }
        )
        .then(res => {
          this.isLoading = false
          console.log(res)
          if (res.data.msg === 'ok') {
            // this.hasAlert = true;
            // this.alertMessage = "成功";
            this.isLoading = false
            this.showTable = true
            this.showForm = false
            this.dataInfo[0].result = res.data.result.bill_no
            this.dataInfo[1].result = res.data.result.amount
            this.dataInfo[2].result = res.data.result.bank_name
            this.dataInfo[3].result = res.data.result.bank_no
            this.dataInfo[4].result = res.data.result.name
            this.dataInfo[5].result = res.data.result.bank_address
            this.orderId = res.data.result.id
            // console.log(res.data);
            // this.getUserInfo();
          } else {
            this.hasAlert = true
            this.alertMessage = res.data.msg
          }
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

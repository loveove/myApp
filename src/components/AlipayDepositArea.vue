<template>
  <div>
    <v-container>
      <v-card class="border_custo">
        <div class="pa-2">
          <v-alert
            :value="true"
            type="info"
          >使用本方式充值, 系统赠送{{$store.state.depositeInfo[1].gift_rate}}, 最高{{$store.state.depositeInfo[1].gift_max}}, 只需一倍流水即可提款</v-alert>
          <v-form ref="form" v-model="valid" v-show="showAlipayForm">
            <v-flex>
              <v-text-field
                prepend-icon="fas fa-coins"
                v-model="alipayAmount"
                :rules="alipayAmountRules"
                type="number"
                label="存入金额"
                required
              ></v-text-field>
            </v-flex>
            <v-btn
              color="red darken-4 white--text"
              :disabled="isDisabled"
              :loading="isLoading"
              @click="submitDeposite"
              block
            >下一步</v-btn>
          </v-form>
        </div>
      </v-card>
    </v-container>
    <v-card class="mx-2">
    <div v-if="showQRcode">
      <QrCode/>
    </div>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
import QrCode from "./QrCode.vue";
const qs = require("qs");

export default {
  name: "AlipayDepositArea",
  components: { QrCode },
  data: () => ({
    isLoading: false,
    valid: false,
    alipayAmount: "",
    showQRcode: false,
    showAlipayForm: true
  }),
  computed: {
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
    },
    alipayAmountRules() {
      return [
        v => !!v || "请输入金额",
        v =>
          (v &&
            v >= this.$store.state.depositeInfo[1].balanceStart &&
            v < this.$store.state.depositeInfo[1].balanceEnd) ||
          `限额 ${this.$store.state.depositeInfo[1].balanceStart} - ${
            this.$store.state.depositeInfo[1].balanceEnd
          }`
      ];
    }
  },
  methods: {
    submitDeposite() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/account/deposit/online/ONLINE_ALIPAY`,
          qs.stringify({
            paytype: "ONLINE_ALIPAY",
            amount: this.alipayAmount
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          // console.log(res);
          // eslint-disable-next-line
          // .replace('<script>document.myform.submit()<\/script>','')
          this.$store.dispatch("setQrHtml", res.data.result.html);
          this.isLoading = false;
          this.showQRcode = true;
          this.showAlipayForm = false;
        });
      // .catch(err => console.log(err));
    }
  },
  created() {}
};
</script>
<style scoped>
.border_custo {
  border-radius: 10px;
}
</style>

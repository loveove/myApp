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
        <v-card class="py-4">
          <v-form ref="form" class="px-4">
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

            <v-container fluid>
              <v-layout row>
                <v-flex xs12>
                  <v-btn
                    @click.native="addBankCard"
                    :loading="isLoading"
                    block
                    color="red darken-4 white--text"
                  >立即提交</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import axios from "axios";
const qs = require("qs");
import { bus } from "@/main";
import { apiMethods } from "@/main";
export default {
  name: "AddBankCardList",
  components: {},
  data: () => ({
    isLoading: false,
    dialog: true,
    notifications: false,
    sound: true,
    widgets: false,
    name: "",
    nameRules: [v => !!v || "请输入开户名"],
    bankNumber: "",
    bankRules: [
      v => !!v || "请输入银行卡号",
      v =>
        (v && v.toString().length > 15 && v.toString().length < 21) ||
        "银行编号必须介于16到20之间"
    ],
    bankName: "",
    bankNameRules: [v => !!v || "请输入开户银行"],
    bankBranch: "",
    bankBranchRules: [v => !!v || "请输入支行名称"]
  }),
  methods: {
    link_membercenter() {
      this.$router.push("/membercenter");
    },

    addBankCard() {
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
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          console.log(res);
          if (res.data.msg === "ok") {
            (this.bankNumber = ""),
              (this.bankName = ""),
              (this.bankBranch = "");
          }
        });
      // .catch(err => console.log(err));
    }
  },
  mounted() {
    bus.$on("doneSettingUserInfo", () => {
      this.name = this.$store.state.userInfo.real_name;
    });
    this.name = this.$store.state.userInfo.real_name;
  }
};
</script>
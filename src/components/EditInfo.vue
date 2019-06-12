<template>
  <v-container>
    <v-card class="border_custo">
      <v-form ref="form" class="pa-2">
        <v-text-field
          v-model="name"
          :counter="20"
          :rules="nameRules"
          label="用户名"
          prepend-icon="person"
          required
          :disabled="$store.state.userInfo.real_name != null"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="邮箱"
          prepend-icon="email"
          required
          disabled
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :rules="phoneRules"
          :counter="11"
          label="+86 中国"
          prepend-icon="phone_iphone"
          type="number"
          required
          disabled
        ></v-text-field>
        <v-text-field
          v-model="wechat"
          :counter="20"
          :rules="wechatRules"
          label="微信"
          prepend-icon="fab fa-weixin"
          required
        ></v-text-field>
        <v-text-field
          v-model="qq"
          :rules="qqRules"
          :counter="20"
          label="QQ"
          prepend-icon="fab fa-qq"
          type="number"
          required
        ></v-text-field>
        <v-btn
          :disabled="isDisabled"
          color="red darken-4 white--text"
          block
          @click.native="updateUserInfo"
          :loading="isLoading"
        >更新</v-btn>
        <v-alert
          v-model="hasAlert"
          :value="true"
          type="info"
          icon="warning"
          outline
          dismissible
        >{{alertMessage}}</v-alert>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
const qs = require("qs");
import { bus } from "@/main";
export default {
  name: "EditInfo",
  components: {},
  data: () => ({
    alertMessage: "",
    hasAlert: false,
    isLoading: false,
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "请加入名称",
      v => (v && v.length <= 20) || "名称必须少于20个字符"
    ],
    email: "",
    emailRules: [
      v => !!v || "请加入邮件",
      v => /.+@.+/.test(v) || "邮件必须有效"
    ],
    phone: "",
    phoneRules: [
      v => !!v || "请加入电话号码",
      v => (v && v.toString().length == 11) || "必须是11个号码"
    ],
    wechat: "",
    wechatRules: [
      // v => !!v || "Wechat is required",
      // v => (v && v.length <= 20) || "Wechat must be less than 20 characters"
    ],
    qq: "",
    qqRules: [
      // v => !!v || "QQ is required",
      // v => (v && v.length <= 20) || "QQ must be less than 20 characters"
    ],
    show: false,
    timestampt: new Date().valueOf()
  }),
  computed: {
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    updateUserInfo() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/user/update/`,
          qs.stringify({
            real_name: this.name,
            mobile: this.phone,
            email: this.email,
            wechat: this.wechat,
            qq: this.qq
            // sex: this.sex
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
            // console.log(res.data.msg);

            this.hasAlert = true;
            this.alertMessage = "信息更新成功";
            this.getUserInfo();

            this.isLoading = false;
          } else {
            this.hasAlert = true;
            this.alertMessage = res.data.msg;
          }
        });
      // .catch(err => console.log(err));
    },
    getUserInfo() {
      axios
        .get(`${this.$store.state.apiUrl}/account/getUserInfo`, {
          headers: {
            "X-Auth-Token": this.$store.state.token
          }
        })
        .then(res => {
          this.$store.dispatch("setUserInfo", res.data.result);
        });
      // .catch(err => console.log(err));
    }
  },
  mounted() {
    bus.$on("doneSettingUserInfo", () => {
      this.name = this.$store.state.userInfo.real_name;
      this.email = this.$store.state.userInfo.email;
      this.phone = this.$store.state.userInfo.mobile;
      this.wechat = this.$store.state.userInfo.wechat;
      this.qq = this.$store.state.userInfo.qq;
    });

    this.name = this.$store.state.userInfo.real_name;
    this.email = this.$store.state.userInfo.email;
    this.phone = this.$store.state.userInfo.mobile;
    this.wechat = this.$store.state.userInfo.wechat;
    this.qq = this.$store.state.userInfo.qq;
  }
};
</script>
<style scoped>
.border_custo{
  border-radius: 10px;
}
</style>

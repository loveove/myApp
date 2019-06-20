<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" fullscreen hide-overlay>
        <template v-slot:activator="{ on }">
          <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
        </template>
        <v-card color="yellow darken-4">
          <v-toolbar dark color="yellow darken-4">
            <v-btn icon dark @click="link_membercenter">
              <i class="fas fa-arrow-left"></i>
            </v-btn>
            <v-toolbar-title>个人资料</v-toolbar-title>
          </v-toolbar>
          <v-tabs v-model="active" color="red darken-4" dark slider-color="yellow" grow>
            <v-tab v-for="tab in tabs" :key="tab.content" ripple>{{tab.name}}</v-tab>
            <v-tab-item v-for="tab in tabs" :key="tab.content">
              <div :is="tab.content"></div>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>
<script>
import { ApiCheckTokenMixin } from "../mixins/ApiCheckTokenMixin";
import EditInfo from "./EditInfo";
import BankCardList from "./BankCardList";
import EditLoginPassword from "./EditLoginPassword";
import EditWithdrawPassword from "./EditWithdrawPassword";
export default {
  mixins: [ApiCheckTokenMixin],
  name: "UserInfo",
  components: {
    EditInfo,
    BankCardList,
    EditLoginPassword,
    EditWithdrawPassword
  },
  data() {
    return {
      active: null,
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false,
      tabs: [
        {
          name: "基本资料",

          content: `EditInfo`
        },
        {
          name: "银行卡",

          content: `BankCardList`
        },
        {
          name: "登陆密码",

          content: `EditLoginPassword`
        },
        {
          name: "取款密码",

          content: `EditWithdrawPassword`
        }
      ]
    };
  },

  methods: {
    link_membercenter() {
      this.$router.push("/membercenter");
    }
  },
  computed: {
    // active() {
    //   return this.$store.state.userInfoDefaultTab;
    // }
  },
  created() {
    this.checkToken()
  }
};
</script>

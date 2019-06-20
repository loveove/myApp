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
            <v-toolbar-title>我的代理</v-toolbar-title>
          </v-toolbar>
          <v-tabs v-model="active" color="red darken-4 white--text" dark slider-color="yellow" grow>
            <v-tab v-for="item in items" :key="item.content" ripple d-flex>{{item.name}}</v-tab>
            <v-tab-item v-for="item in items" :key="item.content">
              <div :is="item.content"></div>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>
<script>
import { ApiCheckTokenMixin } from "../mixins/ApiCheckTokenMixin";
import OfflineWinLose from "./OfflineWinLose";
import OfflineInfo from "./OfflineInfo";
import CommissionIssue from "./CommissionIssue";
import AgentRule from "./AgentRule";
export default {
  mixins: [ApiCheckTokenMixin],
  name: "MyAgent",
  components: {
    OfflineWinLose,
    OfflineInfo,
    CommissionIssue,
    AgentRule
  },
  data() {
    return {
      active: null,
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false,

      items: [
        {
          name: "下线输赢",
          content: `OfflineWinLose`
        },
        {
          name: "下线资料",
          content: `OfflineInfo`
        },
        {
          name: "佣金发放",
          content: `CommissionIssue`
        },
        {
          name: "代理制度",
          content: `AgentRule`
        }
      ]
    };
  },
  methods: {
    link_membercenter() {
      this.$router.push("/membercenter");
    }
  },
  created() {
    this.checkToken();
  }
};
</script>
<style scoped>
.custo_border {
  margin: 10px;
}
</style>

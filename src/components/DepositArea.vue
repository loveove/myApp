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
            <v-toolbar-title>存款专区</v-toolbar-title>
          </v-toolbar>
          <v-tabs v-model="active" color="red darken-4" dark slider-color="yellow" grow>
            <v-tab v-for="item in items" :key="item.content" ripple>{{item.name}}</v-tab>
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
import AlipayDepositArea from "./AlipayDepositArea.vue";
import NormalDepositArea from "./NormalDepositArea.vue";
export default {
  mixins: [ApiCheckTokenMixin],
  name: "DepositArea",
  components: {
    AlipayDepositArea,
    NormalDepositArea
  },
  data: () => ({
    showNormalPay: true,
    showAliPay: false,
    dialog: true,
    notifications: false,
    sound: true,
    widgets: false,
    active: null,
    items: [
      {
        name: "NormalPay",

        content: `NormalDepositArea`
      },
      {
        name: "Alipay",

        content: `AlipayDepositArea`
      }
    ]
  }),
  methods: {
    displayNormalPay() {
      this.showNormalPay = true;
      this.showAliPay = false;
      // this.showTable = false;
    },
    displayAliPay() {
      this.showAliPay = true;
      this.showNormalPay = false;
      // this.showTable = false;
    },
    link_membercenter() {
      this.$router.push("/membercenter");
    }
  },
  created() {
    this.checkToken();
  }
};
</script>

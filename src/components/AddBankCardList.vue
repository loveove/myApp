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
            <v-text-field label="开户名" prepend-icon="account_circle" required></v-text-field>
            <v-text-field
              :counter="20"
              label="银行卡号"
              prepend-icon="credit_card"
              type="number"
              required
            ></v-text-field>
            <v-text-field label="开户银行" prepend-icon="fas fa-university" required></v-text-field>
            <v-text-field label="支行名称" prepend-icon="fas fa-university" required></v-text-field>

            <v-container fluid>
              <v-layout row>
                <v-flex xs12>
                  <v-btn block color="red darken-4 white--text">立即提交</v-btn>
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
// import { bus } from "@/main";
// import { apiMethods } from "@/main";
export default {
  name: "AddBankCardList",
  components: {},
  data: () => ({
    dialog: true,
    notifications: false,
    sound: true,
    widgets: false
  }),
  methods: {
    link_membercenter() {
      this.$router.push("/membercenter");
    },

  }
};
</script>
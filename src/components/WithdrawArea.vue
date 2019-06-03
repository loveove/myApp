<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" fullscreen hide-overlay>
        <template v-slot:activator="{ on }">
          <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
        </template>
        <v-card color="yellow darken-4">
          <v-toolbar color="yellow darken-4">
            <v-btn icon dark @click="link_membercenter" class="font-custo">
              <i class="fas fa-arrow-left"></i>
            </v-btn>
          </v-toolbar>

          <v-card class="border_rounded mt-3" color="orange lighten-4">
            <v-form ref="form" class="px-4">
              <v-flex>
                <v-select
                  prepend-icon="credit_card"
                  item-text="cardNumber"
                  item-value="id"
                  label="收款银行卡"
                  required
                ></v-select>
                <v-btn color="success">
                  <i class="fas fa-plus"></i>添加银行卡
                </v-btn>
              </v-flex>
              <v-text-field label="提款金额" type="number" prepend-icon="fas fa-coins" required></v-text-field>

              <v-text-field label="取款密码" prepend-icon="lock" required></v-text-field>

              <v-container fluid>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn color="success" block>立即提交</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: "WithdrawArea",
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  methods: {
    link_membercenter() {
      this.$router.push("/membercenter");
    }
  }
};
</script>
<style>
.font-custo {
  font-size: 20px;
}
/* .border-rounded {
  border-radius: 5px;
  margin: 10px;
} */
</style>


<template>
  <v-card>
    <div>
      <v-form ref="form" class="pa-2">
        <!-- <v-alert type="info">使用本方式充值, 系统赠送, 最高, 只需一倍流水即可提款</v-alert> -->
        <v-flex>
          <v-text-field prepend-icon="fas fa-coins" type="number" label="存入金额" required></v-text-field>
        </v-flex>
        <v-text-field label="存款人姓名" prepend-icon="account_circle" required></v-text-field>
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
        <v-btn color="red darken-4 white--text" block>下一步</v-btn>
      </v-form>
    </div>
    <div>
      <template>
        <!-- <v-data-table hide-actions hide-headers dark>
          <template>
            <td></td>
            <td></td>
          </template>
        </v-data-table>-->
        <v-btn color="red darken-4 white--text" block>完成存款，下一步</v-btn>
      </template>
    </div>
    <!-- <v-flex xs12></v-flex> -->
  </v-card>
</template>
<script>
export default {
  name: "NormalDepositArea",
  components: {},
  data: () => ({})
};
</script>
<style scoped>
</style>



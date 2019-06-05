<template>
  <v-card>
    <div class="pa-2">
      <!-- <v-alert type="info">使用本方式充值, 系统赠送, 最高, 只需一倍流水即可提款</v-alert> -->
      <v-form ref="form">
        <v-flex>
          <v-text-field prepend-icon="fas fa-coins" type="number" label="存入金额" required></v-text-field>
        </v-flex>
        <v-btn color="red darken-4 white--text" block>下一步</v-btn>
      </v-form>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "AlipayDepositArea",
  components: {},
  data: () => ({})
};
</script>
<style scoped>

</style>


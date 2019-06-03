<template>
  <v-card class="py-4">
    <v-form ref="form" class="px-4">
      <v-text-field label="原取款密码" prepend-icon="fas fa-unlock" required></v-text-field>
      <v-text-field label="新取款密码" prepend-icon="fas fa-unlock" required></v-text-field>
      <v-text-field label="确认新密码" prepend-icon="fas fa-unlock" required></v-text-field>

      <v-container fluid>
        <v-layout row>
          <v-flex xs12>
            <v-btn color="red darken-4 white--text" block>立即提交</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-card>
</template>
<script>
export default {
  name: "EditWithdrawPassword",
  components: {},
  data: () => ({})
};
</script>
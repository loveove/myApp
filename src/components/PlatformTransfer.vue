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
            <v-toolbar-title>平台互转</v-toolbar-title>
          </v-toolbar>
          <v-card class="custo_border">
            <v-form ref="form" class="px-4">
              <v-flex>
                <v-select prepend-icon="account_circle" :items="outgoingItems" label="转出" required></v-select>
              </v-flex>
              <v-flex>
                <v-select prepend-icon="account_circle" label="转入" required:items="items"></v-select>
              </v-flex>
              <v-text-field label="金额 " prepend-icon="fas fa-coins" type="number" required></v-text-field>
              <v-container fluid>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn color="red darken-4 white--text" block>确定转账</v-btn>
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
  name: "PlatformTransfer",
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false,
      outgoingItems: ["主账户", "新锦江", "MG", "新锦江（新版）"]
    };
  },
  methods: {
    link_membercenter() {
      this.$router.push("/membercenter");
    }
  }
};
</script>
<style scope>
.custo_border {
  margin: 10px;
}
</style>


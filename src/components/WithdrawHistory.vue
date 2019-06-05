<template>
  <v-card>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3>
            <v-text-field label="时间" type="date"></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field label="时间" type="date"></v-text-field>
          </v-flex>
          <v-btn color="red darken-4 white--text" block>搜索</v-btn>
        </v-layout>
      </v-container>
    </v-form>
  </v-card>

  <!-- <template v-slot:item="props">
          <v-container fluid grid-list-md>
            <v-flex xs12 sm12 md4 lg3>
              <v-card>
                <v-list dense>
                  <v-list-tile>
                    <v-list-tile-content>银行卡</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.account }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>申请时间</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.createTime }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>金额</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.amount }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>手续费</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.fee }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>状态</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.status}}</v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-container>
  </template>-->
</template>
  
<script>
export default {
  name: "WithdrawHistory",
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
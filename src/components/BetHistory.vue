<template>
  <v-card>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field label="时间" type="date"></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field label="时间" type="date"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-select v-model="gamePlatform" :items="inputPlatforms" label=" 游戏平台" outline></v-select>
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
                    <v-list-tile-content>平台</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.plat }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>时间</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.createTime }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>下注金额</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.amount }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>派彩金额</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.amountPc }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>输赢金额</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.amountWin}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>有效投注</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.validBet}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>洗码量</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.xml}}</v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-container>
        </template>
  -->
</template>
  
<script>
import axios from "axios";
const qs = require("qs");

export default {
  name: "BetHistory",
  data() {
    return {
      inputPlatforms: ["全部", "新锦江", "MG", "新锦江（新版）"],
      gamePlatform: "全部"
    };
  }
};
</script>
<style scoped>

</style>

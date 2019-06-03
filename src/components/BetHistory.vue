<template>
  <v-container fluid grid-list-md>
    <v-flex xs12 sm12 md4 lg3>
      <v-flex xs12>
        <v-text-field type="date" v-model="startDate"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field type="date" v-model="endDate"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-select v-model="gamePlatform" :items="inputPlatforms" label=" 游戏平台" outline></v-select>
      </v-flex>
      <v-btn color="warning" block @click="getRecords" :loading="isLoading" :disabled="isLoading">搜索</v-btn>
      <v-alert
        v-model="hasError"
        :value="true"
        color="error"
        icon="warning"
        outline
        dismissible
        error
      >{{errorMessage}}</v-alert>
      <v-data-iterator
        :items="records"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-tag="v-layout"
        row
        wrap
        v-if="records.length > 0"
      >
        <template v-slot:item="props">
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
      </v-data-iterator>
      <v-alert :value="true" type="info" v-if="records.length === 0">无数据</v-alert>
    </v-flex>
  </v-container>
</template>
  
<script>
import axios from "axios";
const qs = require("qs");

export default {
  name: "BetHistory",
  data() {
    return {
      isLoading: false,
      startDate: "",
      endDate: "",
      records: [],
      rowsPerPageItems: [3, 4, 5],
      pagination: {
        rowsPerPage: 3
      },
      inputPlatforms: ["全部", "新锦江", "MG", "新锦江（新版）"],
      gamePlatform: "全部",
      errorMessage: "",
      hasError: false
    };
  },
  computed: {
    dateRange: function() {
      return `${this.startDate} - ${this.endDate}`;
    },
    gamePlatformId: function() {
      switch (this.gamePlatform) {
        case "全部":
          return 0;
        case "新锦江":
          // return Number(this.$store.state.config.plats[0].id);
          return 32
        case "新锦江（新版）":
          // return Number(this.$store.state.config.plats[2].id);
           return 35
        case "MG":
          // return Number(this.$store.state.config.plats[1].id);
           return 33
        default:
          return "";
      }
    }
  },
  methods: {
    getRecords() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/record/game`,
          qs.stringify({
            day: this.dateRange,
            plat_id: this.gamePlatformId
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          this.isLoading = false;
          if (res.data.msg === "ok") {
            this.records = res.data.result;
          } else {
            // console.log(res.data);
            this.hasError = true;
            this.errorMessage = res.data.msg;
          }
        })
        // .catch(err => console.log(err));
    }
  },
  created() {}
};
</script>
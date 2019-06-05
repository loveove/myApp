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
                    <v-list-tile-content>时间</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.createTime }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>类型</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.type }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>金额</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.amount }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>变后余额</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.aftBalance}}</v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-container>
  </template>-->
</template>
  
<script>
import axios from "axios";
const qs = require("qs");
export default {
  name: "FundHistory",
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
      errorMessage: "",
      hasError: false
    };
  },
  computed: {
    dateRange: function() {
      return `${this.startDate} - ${this.endDate}`;
    }
  },
  methods: {
    getRecords() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/record/money`,
          qs.stringify({
            day: this.dateRange
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
        });
      // .catch(err => console.log(err));
    }
  }
};
</script>
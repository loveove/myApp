<template>
  <v-flex xs12 sm12 md4 lg3>
    <v-alert :value="true" type="info">
      您的邀请码: {{$store.state.agentInfo.invitationCode}}, 已推荐好友: {{$store.state.agentInfo.childNum}} 人,
      已获得: {{$store.state.agentInfo.rebateSum}}佣金
    </v-alert>
    <v-card>
      <v-form>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field v-model="name" :counter="20" label="用户名" prepend-icon="person"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field type="date" v-model="startDate"></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field type="date" v-model="endDate"></v-text-field>
            </v-flex>
            <v-btn
              color="red darken-4 white--text"
              block
              @click="getRecords"
              :loading="isLoading"
              :disabled="isLoading"
            >搜索</v-btn>
          </v-layout>
        </v-container>
      </v-form>
      <v-alert
        v-model="hasError"
        :value="true"
        color="error"
        icon="warning"
        outline
        dismissible
      >{{errorMessage}}</v-alert>
    </v-card>

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
                  <v-list-tile-content>时间</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.created_at }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>佣金</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.money }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>备注</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.remark }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-container>
      </template>
    </v-data-iterator>
    <v-alert :value="true" type="info" v-if="records.length === 0">无数据</v-alert>
  </v-flex>
</template>
  
<script>
import axios from "axios";
const qs = require("qs");
export default {
  name: "CommissionInfo",
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
      name: "",
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
          `${this.$store.state.apiUrl}/agent/myCommission/`,
          qs.stringify({
            day: this.dateRange,
            username: this.name,
            page: 1,
            limit: 10
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          this.isLoading = false;
          console.log(res);
          if (res.data.msg === "ok") {
            this.records = res.data.result;
            // console.log(res.data);
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
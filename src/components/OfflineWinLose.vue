<template>
  <v-container>
    <v-flex xs12 sm12 md4 lg3>
      <v-alert :value="true" type="info">
        您的邀请码: {{$store.state.agentInfo.invitationCode}}, 已推荐好友: {{$store.state.agentInfo.childNum}} 人,
        已获得: {{$store.state.agentInfo.rebateSum}}佣金
      </v-alert>
      <v-card class="border_custo">
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
              <v-flex xs12>
                <v-alert
                  v-model="hasError"
                  :value="true"
                  color="error"
                  icon="warning"
                  outline
                  dismissible
                  error
                >{{errorMessage}}</v-alert>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
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
                    <v-list-tile-content>用户名</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.username }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>真人输赢</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.win }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>洗码费</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.xima_money }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>红利</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.dividend }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>手续费</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.fee }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>实际输赢</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.real_win }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>当前余额</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.money_total }}</v-list-tile-content>
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
import axios from 'axios'
const qs = require('qs')
export default {
  name: 'WinloseInfo',
  data () {
    return {
      isLoading: false,
      startDate: '',
      endDate: '',
      records: [],
      rowsPerPageItems: [3, 4, 5],
      pagination: {
        rowsPerPage: 3
      },
      name: '',
      errorMessage: '',
      hasError: false
    }
  },
  computed: {
    dateRange: function () {
      return `${this.startDate} - ${this.endDate}`
    }
  },
  methods: {
    getRecords () {
      this.isLoading = true
      axios
        .post(
          `${this.$store.state.apiUrl}/agent/reportWin/`,
          qs.stringify({
            day: this.dateRange,
            username: this.name,
            page: 1,
            limit: 10
          }),
          {
            headers: {
              'X-Auth-Token': this.$store.state.token
            }
          }
        )
        .then(res => {
          this.isLoading = false
          if (res.data.msg === 'ok') {
            this.records = res.data.result
            // console.log(res.data);
          } else {
            // console.log(res.data);
            this.hasError = true
            this.errorMessage = res.data.msg
          }
        })
      // .catch(err => console.log(err));
    }
  },
  created () {}
}
</script>
<style scoped>
.border_custo{
  border-radius: 10px;
}
</style>

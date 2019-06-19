<template>
  <div>
    <v-container>
      <v-card class="border_custo">
        <v-form>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="时间" v-model="startDate" type="date"></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field label="时间" v-model="endDate" type="date"></v-text-field>
              </v-flex>
              <v-btn color="red darken-4 white--text" @click="getRecords" block>搜索</v-btn>
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
        </template>
      </v-data-iterator>
      <v-alert :value="true" type="info" v-if="records.length === 0">无数据</v-alert>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
const qs = require('qs')
export default {
  name: 'FundHistory',
  data () {
    return {
      startDate: '',
      endDate: '',
      records: [],
      rowsPerPageItems: [3, 4, 5],
      pagination: {
        rowsPerPage: 3
      },
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
      axios
        .post(
          `${this.$store.state.apiUrl}/record/money`,
          qs.stringify({
            day: this.dateRange
          }),
          {
            headers: {
              'X-Auth-Token': this.$store.state.token
            }
          }
        )
        .then(res => {
          console.log(res)
          if (res.data.msg === 'ok') {
            this.records = res.data.result
          } else {
            // console.log(res.data);
            this.hasError = true
            this.errorMessage = res.data.msg
          }
        })
      // .catch(err => console.log(err));
    }
  }
}
</script>
<style scoped>
.border_custo {
  border-radius: 10px;
}
</style>

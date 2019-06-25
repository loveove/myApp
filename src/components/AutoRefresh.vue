<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay>
      <template v-slot:activator="{ on }"></template>
      <v-card color="yellow darken-4">
        <v-toolbar dark color="yellow darken-4">
          <v-btn icon dark @click="link_membercenter">
            <i class="fas fa-arrow-left"></i>
          </v-btn>
          <v-toolbar-title>自助洗码</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-form>
            <v-container>
              <v-card-title>
                <h4>可结洗码</h4>
              </v-card-title>
              <v-flex xs12>
                <v-text-field single-line outline disabled></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-btn color="red darken-4 white--text" block>一键结算</v-btn>
              </v-flex>
            </v-container>
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
          </v-form>
        </v-card>

        <v-data-iterator
          :items="refreshcode"
          :rows-per-page-items="rowsPerPageItems"
          :pagination.sync="pagination"
          row
          wrap
        >
          <template v-slot:item="props">
            <v-container fluid grid-list-md>
              <v-flex xs12 sm12 md4 lg3>
                <v-card>
                  <v-card-title>
                    <h4>各厅洗码</h4>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-list dense>
                    <v-list-tile>
                      <v-list-tile-content>平台</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{ props.item.plat }}</v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>洗码量</v-list-tile-content>
                      <v-list-tile-content class="align-end">
                        <span v-html="props.item.xima_allow_txt"></span>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>洗码比</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{ props.item.xima_wj }}</v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>洗码费</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{ props.item.xima_money }}</v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>自助结算</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{ props.item.xima_rate }}</v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-flex>
            </v-container>
          </template>
        </v-data-iterator>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
// import { ApiCheckTokenMixin } from "../mixins/ApiCheckTokenMixin";
import axios from 'axios'
const qs = require('qs')
export default {
  // mixins: [ApiCheckTokenMixin],
  name: 'AutoRefreshCode',
  components: {},
  data: () => ({
    errorMessage: '',
    hasError: false,
    dialog: true,
    notifications: false,
    sound: true,
    widgets: false,
    hasAlert: false,
    alertMessage: '',
    refreshcode: [],
    rowsPerPageItems: [3, 4, 5],
    pagination: {
      rowsPerPage: 3
    },
    isLoading: false
  }),
  methods: {
    link_membercenter () {
      this.$router.push('/membercenter')
    },
    getRefreshCodeInfo () {
      this.isLoading = true
      axios
        .get(`${this.$store.state.apiUrl}/account/xima/getInfo`, {
          headers: {
            'X-Auth-Token': this.$store.state.token
          }
        })
        .then(res => {
          this.isLoading = false
          // console.log(res.data);
          this.refreshcode = Array.from(res.data.result)
        })
    },
    refreshCode () {
      this.isLoading = true
      axios
        .post(
          `${this.$store.state.apiUrl}/account/xima/jiesuan`,
          qs.stringify({
            platId: ''
          }),
          {
            headers: {
              'X-Auth-Token': this.$store.state.token
            }
          }
        )
        .then(res => {
          this.isLoading = false
          // console.log(res);
          if (res.data.msg === 'ok') {
            this.hasAlert = true
            this.alertMessage = '成功'
            this.getRefreshCodeInfo()
          } else {
            this.hasAlert = true
            this.alertMessage = res.data.msg
          }
        })
    },
    created () {
      this.getRefreshCodeInfo()
    }
    // mounted() {
    //   this.checkToken();
    // }
  },
  computed: {
    totalXimaMoney () {
      let money = 0
      this.refreshcode.forEach(item => (money += item.xima_money))
      return money
    }
  }
}
</script>

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
            <v-toolbar-title>资产总览</v-toolbar-title>
          </v-toolbar>
          <v-container>
            <v-card class="border-custo">
              <v-layout xs12 row class>
                <v-flex xs6 class="pt-2">
                  <h3 class="pl-2">我的资产</h3>
                </v-flex>
                <v-flex xs6 class="pt-2">
                  时间:
                  {{timestampt}}
                  <v-btn
                    color="red darken-4 white--text"
                    @click="refreshAllBalance"
                    :loading="isLoading"
                    :disabled="isLoading"
                  >刷新</v-btn>
                </v-flex>
              </v-layout>
              <v-layout xs12 row>
                <v-flex xs6>
                  <v-card-text>
                    <span>￥</span>
                    <span v-if="showBalance">{{totalBalance ==1 ?(totalBalance - 1):(totalBalance)}}</span>
                    <span v-if="!showBalance">***</span>
                  </v-card-text>
                </v-flex>
                <v-flex xs6>
                  <v-card-text>
                    <div @click="showBalance =!showBalance">
                      <i class="far fa-eye"></i>
                    </div>
                  </v-card-text>
                </v-flex>
              </v-layout>
              <v-layout xs12 row>
                <v-flex xs6>
                  <v-card-text>账户余额</v-card-text>
                </v-flex>
                <v-flex xs6>
                  <v-card-text>
                    <span>￥</span>
                    <span v-if="showBalance">{{mainBalance}}</span>
                    <span v-if="!showBalance">***</span>
                  </v-card-text>
                </v-flex>
              </v-layout>
              <v-layout xs12 row>
                <v-flex xs6>
                  <v-card-text>投注总额</v-card-text>
                </v-flex>
                <v-flex xs6>
                  <v-card-text>{{$store.state.userInfo.total_bet}}</v-card-text>
                </v-flex>
              </v-layout>
              <v-layout xs12 row>
                <v-flex xs6>
                  <v-btn color="red darken-4 white--text" @click.native="linkDepositeArea">存款</v-btn>
                </v-flex>
                <v-flex xs6>
                  <v-btn color="red darken-4 white--text" @click.native="linkWithdrawArea">提款</v-btn>
                </v-flex>
              </v-layout>
            </v-card>

            <v-card class="mt-1 border-custo">
              <h3 class="pl-2 pt-2">资产分布</h3>
              <v-layout xs12 row wrap>
                <v-flex xs6 class="pt-2">
                  <v-flex xs12 class="text-xs-center">
                    <span v-if="showBalance">主账户 ￥{{mainBalance}}</span>
                    <span v-if="!showBalance">主账户 ￥***</span>
                  </v-flex>
                  <v-flex xs12 class="d-flex">
                    <v-progress-circular
                      :rotate="360"
                      :size="100"
                      :width="15"
                      :value="mainAccountPercentage"
                      color="primary"
                    >{{mainAccountPercentage}}%</v-progress-circular>
                  </v-flex>
                  <v-card-actions>&nbsp;</v-card-actions>
                </v-flex>

                <v-flex xs6>
                  <v-flex xs12 class="text-xs-center">
                    <span v-if="showBalance">新锦江 ￥{{xjjBalance}}</span>
                    <span v-if="!showBalance">新锦江 ￥***</span>
                  </v-flex>
                  <v-flex xs12 class="d-flex">
                    <v-progress-circular
                      :rotate="360"
                      :size="100"
                      :width="15"
                      :value="xjjPercentage"
                      color="primary"
                    >{{xjjPercentage}}%</v-progress-circular>
                  </v-flex>
                  <v-card-actions>&nbsp;</v-card-actions>
                </v-flex>
              </v-layout>
              <v-layout xs12 row wrap>
                <v-flex xs6>
                  <v-flex xs12 class="text-xs-center">
                    <span v-if="showBalance">MG ￥{{mgBalance}}</span>
                    <span v-if="!showBalance">MG ￥***</span>
                  </v-flex>
                  <v-flex xs12 class="d-flex">
                    <v-progress-circular
                      :rotate="360"
                      :size="100"
                      :width="15"
                      :value="mgPercentage"
                      color="primary"
                    >{{mgPercentage}}%</v-progress-circular>
                  </v-flex>
                  <v-card-actions>&nbsp;</v-card-actions>
                </v-flex>

                <v-flex xs6>
                  <v-flex xs12 class="text-xs-center">
                    <span v-if="showBalance">新锦江(新版) ￥{{njjBalance}}</span>
                    <span v-if="!showBalance">新锦江(新版) ￥***</span>
                  </v-flex>
                  <v-flex xs12 class="d-flex">
                    <v-progress-circular
                      :rotate="360"
                      :size="100"
                      :width="15"
                      :value="njjPercentage"
                      color="primary"
                    >{{njjPercentage}}%</v-progress-circular>
                  </v-flex>
                  <v-card-actions>&nbsp;</v-card-actions>
                </v-flex>
                <v-container>
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
                </v-container>
              </v-layout>
            </v-card>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'QueryBalance',
  components: {},

  data () {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false,
      errorMessage: '',
      hasError: false,
      showBalance: true,
      mainBalance: 0,
      timestampt: '',
      isLoading: false,
      xjjBalance: 0,
      mgBalance: 0,
      njjBalance: 0
    }
  },
  computed: {
    icon: function () {
      return this.showBalance ? 'visibility' : 'visibility_off'
    },
    totalBalance () {
      let total
      total =
        this.mainBalance + this.xjjBalance + this.njjBalance + this.mgBalance
      if (total === 0) {
        return 1
      } else {
        return total
      }
    },
    mainAccountPercentage () {
      let percentage
      percentage = (this.mainBalance / this.totalBalance) * 100
      return Math.round(percentage)
    },
    xjjPercentage () {
      let percentage = (this.xjjBalance / this.totalBalance) * 100
      return Math.round(percentage)
    },
    mgPercentage () {
      let percentage = (this.mgBalance / this.totalBalance) * 100
      return Math.round(percentage)
    },
    njjPercentage () {
      let percentage = (this.njjBalance / this.totalBalance) * 100
      return Math.round(percentage)
    }
  },
  methods: {
    link_membercenter () {
      this.$router.push('/membercenter')
    },
    getPlatformBalance (id) {
      this.isLoading = true
      axios
        .get(
          `${
            this.$store.state.apiUrl
          }/account/getPlatformBalance?platformId=${id}`,
          // qs.stringify({
          //   platformId: id
          // }),
          {
            headers: {
              'X-Auth-Token': this.$store.state.token
            }
          }
        )
        .then(res => {
          this.isLoading = false

          if (res.data.msg === 'ok') {
            if (id === 0) {
              // console.log("main");
              this.mainBalance = res.data.result.balance
            }
            if (id === 32) {
              // console.log("xjj");
              this.xjjBalance = res.data.result.balance
            }
            if (id === 33) {
              // console.log("mg");
              this.mgBalance = res.data.result.balance
            }
            if (id === 35) {
              // console.log("njj");
              this.njjBalance = res.data.result.balance
            }
          } else {
            this.hasError = true
            this.errorMessage = res.data.msg
          }
        })
      // .catch(err => console.log(err));
    },
    linkDepositeArea () {
      this.$router.push('/depositarea')
    },
    linkWithdrawArea () {
      this.$router.push('/withdrawarea')
    },
    refreshAllBalance () {
      this.timestampt = ''
      this.getPlatformBalance(0)
      this.getPlatformBalance(32)
      this.getPlatformBalance(33)
      this.getPlatformBalance(35)
      let date = new Date()
      this.timestampt += date.getFullYear()
      this.timestampt += `/${date.getMonth()}`
      this.timestampt += `/${date.getDate()}`
      this.timestampt += ` ${date.getHours()}`
      this.timestampt += `:${date.getMinutes()}`
      this.timestampt += `:${date.getSeconds()}`
    }
  },
  created () {
    this.refreshAllBalance()
  }
}
</script>

<style scoped>
.border-custo {
  border-radius: 10px;
}
</style>

<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" fullscreen hide-overlay>
        <template v-slot:activator="{ on }">
          <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
        </template>
        <v-card color="yellow darken-4">
          <v-toolbar dark color="yellow darken-4">
            <v-btn icon dark @click.native="linkClassification">
              <i class="fas fa-arrow-left"></i>
            </v-btn>
            <v-toolbar-title>优惠活动</v-toolbar-title>
          </v-toolbar>
          <v-layout class="pt-2">
            <v-flex xs12 sm6 offset-sm3 pl-3 pr-3>
              <v-card v-for="offer in offers" :key="offer.id" class="mb-2">
                <v-img class="white--text" height="200px" :src="offer.image"></v-img>
                <v-card-title>
                  <div>
                    <span class="api-text">{{offer.name}}</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn color="orange" block @click.native="redirect(offer.id)">
                    <span style="color:white">查看详情</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Discount',
  data () {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false,
      offers: [],
      redirectingUrl:
        'http://47.90.100.229:20001/coloum/discount_detail.html?id='
    }
  },
  computed: {},
  methods: {
    linkClassification () {
      // this.$emit('discount')
      this.$router.push('/classification')
    },
    getOffers () {
      axios
        .get(`${this.$store.state.apiUrl}/activity/list`, {
          headers: {
            'X-Auth-Token': this.$store.state.token
          }
        })
        .then(res => {
          this.offers = res.data.result
        })
    },
    redirect (url) {
      window.open(this.redirectingUrl + url, '_blank')
    }
  },
  created () {
    this.getOffers()
  }
}
</script>
<style>
.api-text {
  font-size: 18px;
  text-align: center;
}
</style>

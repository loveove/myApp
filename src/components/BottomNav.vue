<template>
  <div>
    <v-card>
      <div></div>
      <v-bottom-nav :active.sync="bottomNav" :value="true" app color="red darken-4">
        <v-btn color="#FFB300" flat value="recent" to="/" class="pl-4">
          <span>首页</span>
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn color="#FFB300" flat value="favorites" to="/classification">
          <span>分类</span>
          <v-icon>select_all</v-icon>
        </v-btn>

        <v-btn color="#FFB300" flat value="nearby" to="/register" v-show="$store.state.token==''">
          <span>注册</span>
          <v-icon>waves</v-icon>
        </v-btn>
        <v-btn
          color="#FFB300"
          flat
          to="/depositarea"
          v-show="$store.state.token!=''"
          class="pr-4"
        >
          <span>存款</span>
          <v-icon>attach_money</v-icon>
        </v-btn>

        <v-btn color="#FFB300" flat to="/contact">
          <span>客服</span>
          <v-icon>settings_phone</v-icon>
        </v-btn>
        <v-btn color="#FFB300" flat to="/login" v-show="$store.state.token==''">
          <span>登录</span>
          <v-icon>account_circle</v-icon>
        </v-btn>

        <v-btn
          color="#FFB300"
          flat
          to="/membercenter"
          v-show="$store.state.token!=''"
          class="pr-4"
        >
          <span>会员中心</span>
          <v-icon>person</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "BottomNav",
  components: {},
  data() {
    return {
      bottomNav: "home"
    };
  },
  methods: {}
};
</script>
<style scoped>
.fa-id-badge {
  font-size: 30px;
}
</style>

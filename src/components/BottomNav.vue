<template>
  <div>
    <v-card >
      <div>
      </div>
      <v-bottom-nav :active.sync="bottomNav" :value="true" app color="red darken-4">
        <v-btn color="#FFB300" flat value="recent" to="/">
          <span>首页</span>
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn color="#FFB300" flat value="favorites" to="/livegame">
          <span>分类</span>
          <v-icon>select_all</v-icon>
        </v-btn>

        <v-btn color="#FFB300" flat value="nearby" to="/register">
          <span>注册</span>
          <v-icon>waves</v-icon>
        </v-btn>
        <v-btn color="#FFB300" flat to="/contact">
          <span>客服</span>
          <v-icon>settings_phone</v-icon>
        </v-btn>
        <v-btn color="#FFB300" flat to="/login">
          <span>登录</span>
          <v-icon>account_circle</v-icon>
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
  }
};
</script>
<style scoped>
.fa-id-badge{
  font-size: 30px
}
</style>

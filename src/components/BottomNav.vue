
  <!-- <v-bottom-nav :value="true" app class="grey">
    <v-btn flat value="home">
      <span>首页</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn flat value="games">
      <span>游戏</span>
      <v-icon>videogame_asset</v-icon>
    </v-btn>

    <v-btn flat>
      <span>个人中心</span>
      <v-icon>account_circle</v-icon>
    </v-btn>

    <v-btn flat>
      <span>个人中心</span>
      <v-icon>account_circle</v-icon>
    </v-btn>

    <v-btn flat value="info">
      <span>关于我们</span>
      <v-icon>info</v-icon>
    </v-btn>

    <v-btn>
      <span>关于我们</span>
      <v-icon>info</v-icon>
    </v-btn>
  </v-bottom-nav> -->

<template>
  <div>
    <v-card height="200px" flat>
      <div class="headline text-xs-center pa-5">
        <!-- Active: {{ bottomNav }} -->
      </div>
      <v-bottom-nav :active.sync="bottomNav" :value="true" app color="transparent">
        <v-btn color="teal" flat value="recent" to="/">
          <span>首页</span>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="favorites" to="/livegame">
          <span>分类</span>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="nearby" to="/register">
          <span>注册</span>
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn color="teal" flat to="/contact">
          <span>客服</span>
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn color="teal" flat to="/login">
          <span>登录</span>
          <v-icon>home</v-icon>
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
</style>

<template>
  <div style="max-width: 400px; margin: auto;">
    <v-toolbar color="orange">
      <v-toolbar-title>Service</v-toolbar-title>
    </v-toolbar>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="white" class="black--text">
          <h2 class="text-xs-center pt-3 mt-5">联系方式</h2>
          <div class="text-xs-center mt-2">
            <p class="item">客服：6182255</p>
            <p>投诉：350955</p>
            <p>代理：771282239</p>
            <p>wnsr2453</p>
            <v-btn color="black" class="white--text lighten-2" block>返回首页</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: "Contact"
};
</script>

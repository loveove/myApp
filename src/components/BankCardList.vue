<template>
  <div>
    <v-flex xs12>
      <v-btn color="red darken-4 white--text" @click="link_addbankcardlist">
        <i class="fas fa-plus"></i>添加银行卡
      </v-btn>
    </v-flex>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <h4>银行:</h4>
        </v-card-title>
        <v-divider></v-divider>
        <v-list dense>
          <v-list-tile>
            <v-list-tile-content>开户名:</v-list-tile-content>
            <v-list-tile-content class="align-end"></v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>卡号:</v-list-tile-content>
            <v-list-tile-content class="align-end"></v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>开户行:</v-list-tile-content>
            <v-list-tile-content class="align-end"></v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-btn color="red lighten-2" block depressed flat>
              <v-icon>delete_forever</v-icon>
              <span>删除</span>
            </v-btn>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </div>
</template>
<script>
export default {
  name: "BankCardList",
  data: () => ({}),
  methods:{
    link_addbankcardlist(){
        this.$router.push("/addbankcardlist");
    }
  }
};
</script>
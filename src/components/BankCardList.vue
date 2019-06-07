<template>
  <div>
    <v-flex xs12>
      <v-btn color="red darken-4 white--text" @click="addBankCardList" >
        <i class="fas fa-plus"></i>添加银行卡
      </v-btn>
    </v-flex>
  </div>
</template>
    <script scope>
export default {
  name: "BankCardList",
  data() {
    return {};
  },
  methods: {
    addBankCardList() {
      this.$router.push("/addbankcardlist");
    }
  }
};
</script>
    <style scope>
</style>
    
    
  
    
   
       
         
                  



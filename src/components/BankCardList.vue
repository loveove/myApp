<template>
  <div>
    <v-flex xs12>
      <v-btn color="red darken-4 white--text" @click="addBankCardList">
        <i class="fas fa-plus"></i>添加银行卡
      </v-btn>
    </v-flex>
    <div>
      <v-data-iterator
        :items="bankCards"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        row
        wrap
        v-if="bankCards.length>0"
      >
        <template v-slot:item="props">
          <v-flex xs12 sm6 md4 lg3>
            <v-card class="mt-1">
              <v-card-title>
                <h4>银行: {{ props.item.bankName }}</h4>
              </v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-content>开户名:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.account }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>卡号:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.cardNumber }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>开户行:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.bankBranch }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <ConfirmationDialog @confirm="deleteBank(props.item.id)">
                    <v-btn color="red darken-1" block depressed flat>
                      <v-icon>delete_forever</v-icon>
                      <span>删除</span>
                    </v-btn>
                  </ConfirmationDialog>
                  <!-- <v-list-tile-content>Delete</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.id }}</v-list-tile-content>-->
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </template>
      </v-data-iterator>
    </div>
  </div>
</template>
  <script>
import ConfirmationDialog from "./ConfirmationDialog.vue";
import axios from "axios";
import qs from "qs";
export default {
  name: "BankCardList",
  components: {
    ConfirmationDialog
  },
  data() {
    return {
      rowsPerPageItems: [2, 4, 6],
      pagination: {
        rowsPerPage: 2
      }
    };
  },
  computed: {
    bankCards() {
      return Array.from(this.$store.state.bankInfo);
    }
  },
  methods: {
    addBankCardList() {
      this.$router.push("/addbankcardlist");
    },
    getBankInfo() {
      // this.isLoading = true;
      axios
        .get(`${this.$store.state.apiUrl}/user/bankCards`, {
          headers: {
            "X-Auth-Token": this.$store.state.token
          }
        })
        .then(res => {
          this.$store.dispatch("setBankInfo", res.data.result);
          // this.isLoading = false;
        });
      // .catch(err => console.log(err));
    },
    deleteBank(bankId) {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/user/bankCard/del`,
          qs.stringify({
            id: bankId
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(() => {
          // this.isLoading = false;
          this.getBankInfo();
          //return code 1 when only one bank card is left
        });
      // .catch(err => console.log(err));
    }
  },
  created() {
    this.getBankInfo();
  }
};
</script>
    <style scope>
</style>
    
    
  
    
   
       
         
                  



<template>
  <v-container fluid grid-list-md>
    <v-flex xs12 sm12 md4 lg3>
      <v-layout row>
        <v-flex xs6>
          <v-btn color="red darken-4 white--text" block @click="displayRuleOne">代理方案</v-btn>
        </v-flex>

        <v-flex xs6>
          <v-btn color="red darken-4 white--text" block @click="displayRuleTwo">代理协议</v-btn>
        </v-flex>
      </v-layout>

      <div v-show="ruleOne" v-html="content"></div>
      <div v-show="ruleTwo" v-html="ruleContent"></div>
    </v-flex>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AgentRule',
  data () {
    return {
      ruleOne: true,
      ruleTwo: false,
      content: '',
      ruleContent: ''
    }
  },
  computed: {},
  methods: {
    displayRuleOne () {
      this.ruleOne = true
      this.ruleTwo = false
    },
    displayRuleTwo () {
      this.ruleTwo = true
      this.ruleOne = false
    },
    getData () {
      axios
        .get(`${this.$store.state.apiUrl}/message/agentRule`, {
          headers: {
            'X-Auth-Token': this.$store.state.token
          }
        })
        .then(res => {
          this.content = res.data.result.content
          this.ruleContent = res.data.result.rule_content
        })
      // .catch(err => console.log(err));
    }
  },
  created () {
    this.getData()
  }
}
</script>

<template>
  <div>
    <ConfirmationDialog @confirm="logout">
      <div class="pl-3">
        <i class="fas fa-power-off fa-lg" style="color:brown;"></i>
      </div>
      <div>退出账户</div>
    </ConfirmationDialog>
  </div>
</template>
<script>
// import { ApiCheckTokenMixin } from "../mixins/ApiCheckTokenMixin";

import axios from 'axios'
import ConfirmationDialog from './ConfirmationDialog.vue'
export default {
    // mixins: [ApiCheckTokenMixin],
  name: 'Logout',
  components: {
    ConfirmationDialog
  },
  data () {
    return {}
  },
  methods: {
    logout () {
      axios.get(`${this.$store.state.apiUrl}/logout`).then(response => {
        this.$store.dispatch('setToken', '')
        localStorage.removeItem('token')
        this.$store.dispatch('isLoginFalse')
   
        this.$router.push('/')
      })
    }
  }
}
</script>

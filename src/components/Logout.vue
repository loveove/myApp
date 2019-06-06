<template>
  <div>
    <ConfirmationDialog @comfirm="logout">
      <div class="pl-3">
      <i class="fas fa-power-off custo-size9"></i>
      </div>
      <div>退出账户</div>
    </ConfirmationDialog>
  </div>
</template>
<script>
import axios from "axios";
import ConfirmationDialog from "./ConfirmationDialog.vue";
export default {
  name: "Logout",
  components: {
    ConfirmationDialog
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      axios.post(`${this.$store.state.apiUrl}/logout`).then(response => {
        this.$store.dispatch("removeToken");
        this.$router.push("/");
      });
    }
  }
};
</script>

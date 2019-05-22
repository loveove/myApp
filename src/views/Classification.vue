
<template>
<div>
  <LiveGame/>
  <BottomNav/>
</div>
</template>
<script>
import LiveGame from "../components/LiveGame.vue";
import BottomNav from "../components/BottomNav.vue";
export default {
  name: "Classification",
  components: {
      LiveGame,
      BottomNav
  },
  data() {
    return {
      
    };
  }
};
</script>
<style scoped>
</style>



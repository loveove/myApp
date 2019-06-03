
<template>
<v-card>
  <v-form ref="form" class="pa-2">
    <v-text-field :counter="20" label="用户名" prepend-icon="person" required></v-text-field>
    <v-text-field label="邮箱" prepend-icon="email" required disabled></v-text-field>
    <v-text-field
      :counter="11"
      label="+86 中国"
      prepend-icon="phone_iphone"
      type="number"
      required
      disabled
    ></v-text-field>
    <v-text-field :counter="20" label="微信" prepend-icon="fab fa-weixin" required></v-text-field>
    <v-text-field :counter="20" label="QQ" prepend-icon="fab fa-qq" type="number" required></v-text-field>
    <v-btn color="red darken-4 white--text" block>更新</v-btn>
  </v-form>
</v-card>
</template>
<script>
export default {
  name: "EditInfo",
  components: {},
  data: () => ({})
};
</script>
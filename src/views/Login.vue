<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <!-- <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template> -->
      <v-card>
        <v-toolbar dark color="yellow darken-4">
          <v-btn icon dark @click="close">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form ref="form" class="px-4">
        <v-text-field  label="用户名" prepend-icon="person" required></v-text-field>
        <v-text-field label="密码" prepend-icon="lock" required></v-text-field>
        <v-container fluid>
          <v-layout row wrap>
            <v-btn color="yellow darken-4" block>登陆</v-btn>
          </v-layout>
        </v-container>
        <div class="text-xs-right">
          <a href="/Register">快速注册</a>
        </div>
      </v-form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  methods: {
    close() {
      this.$router.push("/");
      this.dialog=false;
    
    }
  }
};
</script>
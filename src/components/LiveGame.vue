<template>
  <div>
    <v-layout class="red" fluid>
      <v-flex xs12 class="blue">
        <div>
          <v-card-text class="text-xs-center">分类</v-card-text>
        </div>

        <v-card>
          <!-- <v-toolbar color="teal" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>Manage</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
          </v-toolbar>-->

          <v-list>
            <template v-for="(item) in items">
              <v-list-tile v-if="item.action" :key="item.title">
                <v-list-tile-action>
                  <v-icon>{{ item.action }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <!-- <v-divider v-else-if="item.divider" :key="index"></v-divider> -->

              <!-- <v-subheader v-else-if="item.header" :key="item.header">{{ item.header }}</v-subheader> -->
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <BottomNav/>
  </div>
</template>
<script>
import BottomNav from "./BottomNav.vue";
export default {
  name: "LiveGame",
  components: {
    BottomNav
  },
  data() {
    return {
      items: [
        {
          action: "move_to_inbox",
          title: "Inbox"
        },
        {
          action: "send",
          title: "Sent"
        },
        {
          action: "send",
          title: "Trash"
        },
        {
          action: "send",
          title: "Spam"
        },

        {
          action: "label",
          title: "Family"
        },
        {
          action: "label",
          title: "Friends"
        },
        {
          action: "label",
          title: "Work"
        }
      ]
    };
  }
};
</script>

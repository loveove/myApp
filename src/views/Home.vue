<template>
  <div>
    <HeaderComponent/>
    <v-carousel hide-controls>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      <marque>123</marque>
    </v-carousel>
    <v-layout row wrap>
      <v-flex flex>
        <v-card class="pt-3">
          <v-card style="height: 300px" class="yellow"></v-card>
          <v-card class="pt-3">
            <v-card style="height: 300px" class="red"></v-card>
          </v-card>
        </v-card>
      </v-flex>
    </v-layout>
    <BottomNav/>
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  name: "Home",
  components: {
    HeaderComponent,
    BottomNav

  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>


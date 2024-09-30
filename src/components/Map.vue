<script>
import showMap from "./maps/Map_one.vue";

export default {
  components: {
    showMap,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          path: "/img/Full_map.png",
        },
      ],
    };
  },
};
</script>
<template>
  <router-link class="container" to="/map/0">
    <showMap :imgSrc="images[0].path" />
  </router-link>
</template>

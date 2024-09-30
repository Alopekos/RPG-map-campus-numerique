<script>
import showMap from "./maps/Map_one.vue";
import images from "./Map.vue";
export default {
  components: {
    showMap,
  },
  methods: {
    goLeft: () => {
      alert("Hello " + this.name + "!");
    },
  },
  data() {
    return {
      name: "map area",
      images: [
        { id: 0, path: "/img/Map1.png" },
        { id: 1, path: "/img/Map2.png" },
        { id: 2, path: "/img/Map3.png" },
      ],
    };
  },
};
</script>
<template>
  <div  class="container">
    <showMap :imgSrc="images[$route.params.mapId].path" />
    MapArea n° {{ $route.params.mapId }}
  </div>
</template>

<style scoped></style>

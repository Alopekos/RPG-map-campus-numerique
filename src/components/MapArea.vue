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
  <div class="container">
    <router-link to="/">
      <div class="box box-up"><span class="arrow">🡩</span></div>
    </router-link>
    <router-link to="/">
      <div class="box box-left"><span class="arrow">🡨</span></div>
    </router-link>
    <router-link to="/">
      <div class="box box-right"><span class="arrow">🡪</span></div>
    </router-link>
    <router-link to="/">
      <div class="box box-down"><span class="arrow">🡫</span></div>
    </router-link>
    <showMap :imgSrc="images[$route.params.mapId].path" />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100svh;
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

img {
  max-height: 80svh;
  min-width: 80svh;
  border-radius: 1svh;
  margin: auto;
}
.box {
  position: fixed;
}

.box:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transition: 1s;
}

.box-up {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
}

.box-left {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10%;
  left: 0;
  height: 80%;
  width: 100px;
}
.box-right {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10%;
  right: 0;
  height: 80%;
  width: 100px;
}
.box-down {
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
}
.arrow {
  font-size: 50px;
}
</style>

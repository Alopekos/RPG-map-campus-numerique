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
        {
          id: 0,
          path: "/img/Map0.png",
          up: false,
          down: "/map/1",
          left: false,
          right: "/map/2",
        },
        {
          id: 1,
          path: "/img/Map1.png",
          up: false,
          down: false,
          left: "/map/3",
          right: false,
        },
        {
          id: 2,
          path: "/img/Map2.png",
          up: "/",
          down: false,
          left: false,
          right: false,
        },
        {
          id: 3,
          path: "/img/Map3.png",
          up: "/",
          down: false,
          left: false,
          right: false,
        },
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <router-link
      v-if="images[$route.params.mapId].up != false"
      :to="images[$route.params.mapId].up"
    >
      <div class="box box-up"><span class="arrow">🡩</span></div>
    </router-link>
    <router-link
      v-if="images[$route.params.mapId].left != false"
      :to="images[$route.params.mapId].left"
    >
      <div class="box box-left"><span class="arrow">🡨</span></div>
    </router-link>
    <router-link
      v-if="images[$route.params.mapId].right != false"
      :to="images[$route.params.mapId].right"
    >
      <div class="box box-right"><span class="arrow">🡪</span></div>
    </router-link>
    <router-link
      v-if="images[$route.params.mapId].down != false"
      :to="images[$route.params.mapId].down"
    >
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

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
          shop: false,
        },
        {
          id: 1,
          path: "/img/Map1.png",
          up: "/map/0",
          down: false,
          left: "/map/3",
          right: false,
          shop: false,
        },
        {
          id: 2,
          path: "/img/Map2.png",
          up: "/map/4",
          down: false,
          left: "/map/0",
          right: false,
          shop: false,
        },
        {
          id: 3,
          path: "/img/Map3.png",
          up: "/map/10",
          down: "/map/1",
          left: false,
          right: false,
          shop: false,
        },
        {
          id: 4,
          path: "/img/Map4.png",
          up: "/map/5",
          down: "/map/2",
          left: "/map/8",
          right: "/map/6",
          shop: false,
        },
        {
          id: 5,
          path: "/img/Map5.png",
          up: false,
          down: "/map/4",
          left: false,
          right: false,
          shop: false,
        },
        {
          id: 6,
          path: "/img/Map6.png",
          up: "/map/7",
          down: "/map/4",
          left: false,
          right: false,
          shop: false,
        },
        {
          id: 7,
          path: "/img/Map7.png",
          up: false,
          down: "/map/6",
          left: "/map/11",
          right: false,
          shop: false,
        },
        {
          id: 8,
          path: "/img/Map8.png",
          up: false,
          down: "/map/9",
          left: "/map/10",
          right: "/map/4",
          shop: false,
        },
        {
          id: 9,
          path: "/img/Map9.png",
          up: false,
          down: false,
          left: false,
          right: "/map/8",
          shop: false,
        },
        {
          id: 10,
          path: "/img/Map10.png",
          up: false,
          down: "/map/3",
          left: false,
          right: "/map/8",
          shop: false,
        },
        {
          id: 11,
          path: "/img/Map11.png",
          up: false,
          down: "/map/12",
          left: false,
          right: "/map/7",
          shop: false,
        },
        {
          id: 12,
          path: "/img/Map12.png",
          up: "/map/11",
          down: "/",
          left: false,
          right: false,
          shop: true,
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
    <h1
      v-if="images[$route.params.mapId].shop == true"
      style="position: absolute; font-size: 10rem"
    >
      You win !
    </h1>
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
  height: 70%;
  max-width: 70%;
  width: auto;
  object-fit: contain;
  border-radius: 1svh;
  margin: auto;
}
.box {
  position: fixed;
  transition: 0.3s;
}

.box:hover {
  background-color: rgba(255, 255, 255, 0.05);
  transition: 1s;
}

.box:hover .arrow {
  color: rgb(81, 97, 81);
  transition: 0.3s;
}

.box-up {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 15%;
}

.box-left {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10%;
  left: 0;
  height: 80%;
  width: 15%;
}
.box-right {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10%;
  right: 0;
  height: 80%;
  width: 15%;
}
.box-down {
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15%;
}
.arrow {
  font-size: 50px;
  color: white;
}

@media (max-width: 1250px) {
  img {
    max-width: 70%;
    object-fit: cover;
    transition: 1s;
  }
}
</style>

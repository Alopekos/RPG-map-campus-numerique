<script>
import Map from "./maps/MapImg.vue";
import Info from "./map-info/Info.vue";
import NavBtn from "./buttons/MainSiteButton.vue";
import data from "../data.js";

import Minimap from "./map-info/Compass.vue";
export default {
  components: {
    Map,
    Info,
    NavBtn,
    Minimap,
  },
  data() {
    return {
      name: "map area",
      images: data,
      currRoom: "/map/" + (data.length - 1),
      showMinimap: false,
    };
  },
};
</script>
<template>
  <div class="container">
    <Map :imgSrc="images[$route.params.mapId].path" />
    <h1 v-if="images[$route.params.mapId].shop" class="merchant-container">
      <div class="wrap">
        <img class="merchant" src="/img/Assets/Merchant.png" />
        <h1 class="merchant-text">Marchand</h1>
      </div>
    </h1>

    <Info :description="images[$route.params.mapId].description" />
    <router-link
      v-if="images[$route.params.mapId].up"
      :to="images[$route.params.mapId].up"
    >
      <div class="box box-up"><span class="arrow">🡩</span></div>
    </router-link>

    <router-link
      v-if="images[$route.params.mapId].left"
      :to="images[$route.params.mapId].left"
    >
      <div class="box box-left"><span class="arrow">🡨</span></div>
    </router-link>

    <router-link
      v-if="images[$route.params.mapId].right"
      :to="images[$route.params.mapId].right"
    >
      <div class="box box-right"><span class="arrow">🡪</span></div>
    </router-link>

    <router-link
      v-if="images[$route.params.mapId].down"
      :to="images[$route.params.mapId].down"
    >
      <div class="box box-down"><span class="arrow">🡫</span></div>
    </router-link>
  </div>

  <NavBtn />
</template>

<style scoped>
.container {
  width: 100%;
  height: 100svh;
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  position: absolute;
  top: 9svh;
}

img {
  height: 100%;
  width: auto;
  object-fit: contain;
  max-height: 75svh;
  border-radius: 1svh;
  margin: 1.5svh auto;
  position: relative;
  left: 15svh;
}

.merchant-container {
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wrap {
  width: 20svh;
  position: relative;
  margin: 0;
  left: 8.2svw;
  top: 10svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.merchant {
  height: 100%;
  width: 100%;
  object-fit: contain;
  max-height: 50svh;
  border-radius: 1svh;
  margin: 0;
  position: relative;
  left: 0;
}

.merchant-text {
  width: 100%;
  text-align: center;
  color: #cbb77e;
  font-size: 1.5rem;
  background-color: rgba(200, 0, 0, 0.5);
  border-radius: 10px;
  border: 2px solid #cbb77e;
  margin: 0;
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
  z-index: 0;
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
    left: 0;
    transition: 1s;
  }
  .map {
    display: none;
    transition: 1s;
  }
}
</style>

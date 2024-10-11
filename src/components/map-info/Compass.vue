<script>
import data from "../../data.js";
import { compassData } from "../../compassMap.js";
import CompassMapImg from "../maps/MapCompass.vue";

export default {
  components: {
    CompassMapImg,
  },
  props: {
    defaultChecked: [
      {
        type: Boolean,
        default: false,
      },
    ],
  },
  data() {
    return {
      name: "Compass",
      images: data,
      tiles: compassData,
      defaultChecked: this.defaultChecked,
    };
  },
};
</script>

<template>
  <div v-show="defaultChecked" class="compass-container">
    <div v-for="value in tiles" class="tile-row">
      <div v-for="tile in value" class="tile">
        <CompassMapImg
          v-if="tile == 'x'"
          imgSrc="/img/maps/map_compass/Map_unknown.png"
        />
        <div v-else-if="tile != 0" class="map-container">
          <router-link :to="'/map/' + tile">
            <div class="tile-number">{{ images[tile].number }}</div>
            <CompassMapImg :imgSrc="images[tile].path" class="single-image" />
          </router-link>
        </div>
      </div>
      <br />
    </div>
  </div>
  <button @click="defaultChecked = false" v-show="defaultChecked" class="close">
    <span>❌</span>
  </button>
</template>

<style scoped>
.tile {
  display: flex;
  width: 70px;
  height: 70px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0.5svh;
  padding: 0.5svh;
  font-size: 0.7rem;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.tile-row {
  display: flex;
  flex-direction: row;
}

img {
  width: 100%;
  height: 100%;
  height: 100%;

  object-fit: contain;
  max-height: none;
  border-radius: 1svh;
  margin: 0;
  position: relative;
}

button {
  border: none;
  margin-top: 0;
}

.map-container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
}

.tile:hover img {
  transform: scale(1.3);
  transition: 0.7s;
}

.tile:hover .tile-number {
  opacity: 0;
  transition: 0.3s;
}

.tile-number {
  transition: 0.3s;
}

.compass-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 485px;
  position: absolute;
  background-color: black;
  border-radius: 10px;
  transition: 1s;
}
CompassMapImg {
  position: absolute;
}

.menu-map {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.close {
  background-color: black;
  border-radius: 10px;
  padding: 0 0.5svw;
  font-size: 1.5rem;
  position: relative;
  top: 30svh;
  transition: 1s;
}
</style>

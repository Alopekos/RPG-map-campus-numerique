<script>
import data from "../../data.js";
import { compassData } from "../../compassMap.js";
import CompassMapImg from "../maps/MapCompass.vue";

export default {
  components: {
    CompassMapImg,
  },
  props: {
    defaultChecked: {
      type: Boolean,
      default: false,
    },
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
    <div class="tile-row first-row">
      <p>Minimap</p>
      <button
        @click="defaultChecked = false"
        v-show="defaultChecked"
        class="close"
      >
        <span>❌</span>
      </button>
    </div>
    <div v-for="value in tiles" class="tile-row">
      <div v-for="tile in value" class="tile">
        <CompassMapImg
          v-if="tile == 'x'"
          imgSrc="/img/maps/map_compass/Map_unknown.png"
        />
        <div v-else-if="tile != 0" class="map-container">
          <router-link @click="defaultChecked = false" :to="'/map/' + tile">
            <div class="tile-number">{{ images[tile].number }}</div>
            <CompassMapImg :imgSrc="images[tile].path" class="single-image" />
          </router-link>
        </div>
      </div>
      <br />
    </div>
  </div>

  <div @click="defaultChecked = true" v-show="!defaultChecked" class="compass">
    <img src="/img/Assets/compass.png" alt="compass" />
  </div>
</template>

<style scoped>
.tile {
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 1);
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

  align-items: center;
}

p {
  margin: 0;
  padding-left: 2svh;
}

span {
  font-size: 1.3rem;
}

.first-row {
  justify-content: space-between;
  width: 100%;
}

button {
  border: none;
  background-color: rgb(34, 34, 34) !important;
  margin: 0.5svh 1svh 0 0;
}

.compass {
  position: fixed;
  top: 75svh;
  left: 23svw;
}

.compass > img {
  width: 70px;
  height: 70;
  background-color: white;
  padding: 4px;
  border-radius: 50%;
}

img {
  width: 100%;
  height: 100%;
  height: 100%;
  opacity: 0.5;
  object-fit: contain;
  max-height: none;
  border-radius: 1svh;
  margin: 0;
  position: relative;
}

.map-container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 0.7s;
}

.tile:hover img {
  transform: scale(1.3);
  transition: 0.7s;
  opacity: 1;
}

.tile:hover .tile-number {
  opacity: 0;
  transition: 0.3s;
}

.tile-number {
  transition: 0.3s;
  position: absolute;
  font-size: 3rem;
  z-index: 4;
  left: 20%;
  top: auto;
}

.compass-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 670px;
  position: relative;
  background-color: rgb(48, 47, 47);
  border-radius: 10px;
  transition: 1s;
  opacity: 0.95;
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
  transition: 1s;
  display: flex;
}

@media (max-width: 1250px) {
  .compass {
    top: 54svh;
    left: auto;
  }
}
</style>

<script>
import showMap from "./maps/Map_one.vue";
import data from "../data.js";
export default {
  components: {
    showMap,
  },
  data() {
    return {
      name: "map area",
      images: data,
      currRoom: "/map/" + (data.length - 1),
    };
  },
};
</script>
<template>
  <div class="map-details">
    <div class="map">{{ images[$route.params.mapId].description }}</div>
  </div>
  <div class="container">
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
    <showMap :imgSrc="images[$route.params.mapId].path" />

    <div class="buttons-container">
      <router-link to="/dungeon">
        <button class="button-contained"><strong>Retour</strong></button>
      </router-link>
      <router-link to="/map/1">
        <button class="button-contained">
          <strong>Salle-1</strong>
        </button>
      </router-link>
      <router-link :to="currRoom">
        <button class="button-contained">
          <strong>Carte actuelle</strong>
        </button>
      </router-link>
    </div>
  </div>
  <h1 v-if="images[$route.params.mapId].shop" class="merchant-container">
    <div class="wrap">
      <img class="merchant" src="/img/Assets/Merchant.png" />
      <p class="merchant-text">Marchand</p>
    </div>
  </h1>
</template>

<style scoped>
.buttons-container {
  position: fixed;
  top: 80svh;
  z-index: 10;
  padding: 0 4svh;
  background-color: black;
  border-radius: 10px;
  border: 3px solid white;
  display: flex;
  flex-wrap: wrap;
}

.button-contained {
  border: none;
  font-size: 1rem;
}

.map-details {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: -2;
}

.map {
  opacity: 0.7;
  color: #fff;
  border: white 4px solid;
  border-radius: 10px;
  background-color: #582358;
  padding: 2svh;
  max-width: 30svh;
  max-height: auto;
  text-align: center;
  position: relative;
  left: 15svw;
}

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
  max-height: 80svh;
  border-radius: 1svh;
  margin: 1.5svh auto;
}

.merchant-container {
  display: flex;
  position: absolute;
  top: 50svh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wrap {
  width: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.merchant {
  width: 100%;
  margin: 0;
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
    transition: 1s;
  }
  .map {
    display: none;
    transition: 1s;
  }
}
</style>

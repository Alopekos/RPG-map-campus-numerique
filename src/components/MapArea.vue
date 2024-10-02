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
    <h1
      v-if="images[$route.params.mapId].shop"
      style="position: absolute; font-size: 10rem"
    >
      <img class="merchant" src="/img/Assets/Merchant.png" />
      <p class="merchant-text">Marchand</p>
    </h1>
    <div class="buttons-container">
      <router-link to="/dungeon">
        <button class="button-contained"><strong>Retour</strong></button>
      </router-link>
      <router-link :to="currRoom">
        <button class="button-contained">
          <strong>Carte actuelle</strong>
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.buttons-container {
  top: 75svh;
  left: auto;
  z-index: 10;
  padding: 0 4svh;
  background-color: black;
  border-radius: 10px;
  border: 3px solid white;
}

.button-contained {
  border: none;
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
  height: 60%;
  max-width: 60%;
  width: auto;
  object-fit: contain;
  border-radius: 1svh;
  margin: 1.5svh auto;
}

.merchant {
  height: 20svh;
  position: relative;
  top: 15svh;
}

.merchant-text {
  position: relative;
  top: -110px;
  color: #cbb77e;
  font-size: 1.5rem;
  background-color: rgba(200, 0, 0, 0.5);
  border-radius: 10px;
  border: 2px solid #cbb77e;
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

<script>
import Minimap from "../map-info/Compass.vue";

export default {
  props: ["description"],
  components: {
    Minimap,
  },
  data() {
    return {
      name: "Info",
      minimapClick: false,
    };
  },
};
</script>

<template>
  <div class="map-details">
    <div class="map-nav-container">
      <div class="map">{{ description }}</div>
      <div class="buttons-container">
        <router-link to="/dungeon">
          <button class="button-contained"><strong>Retour</strong></button>
        </router-link>
      </div>
    </div>
    <Minimap :defaultChecked="showMinimap" class="minimap" />
  </div>
</template>

<style scoped>
.map-nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 3svw 0 15svw;
}

.buttons-container {
  top: 80svh;
  margin-top: 1svh;
  padding: 0 4svh;
  background-color: black;
  border-radius: 10px;
  border: 3px solid white;
}

.button-contained {
  border: none;
  font-size: 1rem;
  max-width: 30svh;
}
.map {
  opacity: 0.7;
  color: #fff;
  border: white 4px solid;
  border-radius: 10px;
  background-color: #582358;
  padding: 2svh;
  width: 20svw;
  min-width: 200px;
  max-height: auto;
  text-align: center;
}


.map-details {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
}
@media (max-width: 1250px) {
  .map {
    display: none;
  }

  .map-nav-container {
    width: 100%;
    margin: 0;
  }

  .buttons-container {
    position: relative;
    top: 30svh;
  }
}
</style>

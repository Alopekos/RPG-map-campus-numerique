<script>
import showMap from "./maps/Map_one.vue";

export default {
  components: {
    showMap,
  },
  data() {
    return {
      images: [
        {
          id: 0,
          path: "/img/Assets/Main.png",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h1>Carte Jeu de Rôle - Campus Numérique</h1>
    </div>
    <span class="map">🗺️</span>

    <router-link to="/dungeon"
      ><button>Entrer dans le donjon</button>
    </router-link>
  </div>
</template>

<style scoped>
img {
  height: auto;
  width: 70svh;
  border-radius: 1svh;
  margin: 0;
  padding: 0;
}

.map {
  font-size: 15rem;
}
</style>

<template>
  <div class="container">
    <router-link :to="currRoom">
      <div class="container">
        <button><strong>1. Alduin's Keep</strong> 🐉</button>
        <p>
          Nos aventuriers se sont retrouvés un jour par mystère dans le terrible
          donjon de l'illustre Adluin. Désarmés et désemparés, la troupe
          s'apprête à rentrer dans le donjon alors que de stridents rugissements
          proviennent de l'antre.
        </p>
      </div>
    </router-link>
    <router-link to="/">
      <button><strong>Retour</strong></button>
    </router-link>
  </div>
</template>

<script>
import data from "../data.js";
export default {
  data() {
    return {
      name: "DungeonChoice",
      currRoom: "/map/" + (data.length - 1),
    };
  },
};
</script>

<style scoped>
img {
  width: 50svh;
}
</style>

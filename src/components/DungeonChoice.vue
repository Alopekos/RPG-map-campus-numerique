<template>
  <div class="container">
    <router-link to="/map/1">
      <div class="container">
        <button><strong>1. Alduin's Keep</strong> 🐉</button>
        <img src="/img/Assets/Main.png" alt="AlduinsMap" width="500px" />
      </div>
    </router-link>
    <router-link to="/">
      <button><strong>Retour</strong></button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "DungeonChoice",
    };
  },
};
</script>

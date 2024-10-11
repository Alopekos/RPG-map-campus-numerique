<script>
import Compass from "./map-info/Compass.vue";

export default {
  components: {
    Compass,
  },
};
</script>
<template>
  <div class="container">
    <button>Alduin's keep's minimap</button>
    <Compass />
  </div>
</template>
<style scoped>
button {
  position: absolute;
  margin-top: 3svh;
  top: 0;
}

.container {
  justify-content: space-around;
}
</style>

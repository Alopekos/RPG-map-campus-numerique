<script>
export default {
  props: ["imgSrc"],
};
</script>

<template>
  <img :src="imgSrc" alt="map" />
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
}
img {
  height: 60svh;
  width: 400px;
}
</style>

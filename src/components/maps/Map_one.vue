<script>
export default {
  props: ["imgSrc"],
};
</script>

<template>
  <img :src="imgSrc" alt="map" />
</template>

<style>
.container {
  width: 100%;
  height: 80svh;
  display: flex;
  align-items: center;
}
img {
  margin: auto;
  height: auto;
  max-height: 80svh;
  min-width: 80svh;
  border-radius: 1svh;
}
</style>

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
          id: 1,
          path: "/img/Full_map.png",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <showMap :imgSrc="images[0].path" />
    <router-link to="/map/0"
      ><button>Entrer dans le donjon</button>
    </router-link>
  </div>
</template>

<style scoped>
img {
  height: auto;
  width: 50svh;
  border-radius: 1svh;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

button {
  border: none;
  padding: 1rem;
  background-color: bisque;
  border-radius: 10px;
  font-size: 2svh;
  cursor: pointer;
}
</style>

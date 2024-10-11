import { createRouter, createWebHistory } from "vue-router";

import Compass from "./components/MiniMapChoice.vue";
import Home from "./components/Map.vue";
import MapArea from "./components/MapArea.vue";
import DungeonChoice from "./components/DungeonChoice.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/map/:mapId", component: MapArea },
    { path: "/dungeon", name: "dungeon", component: DungeonChoice },
    { path: "/mini-map", name: "compass", component: Compass },
  ],
});

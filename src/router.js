import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import map from "./components/Map.vue";
import MapArea from "./components/MapArea.vue";
import DungeonChoice from "./components/DungeonChoice.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "map", component: map },
    { path: "/map/:mapId", component: MapArea },
    {path: "/dungeon", name: "dungeon",component: DungeonChoice}
  ],
});

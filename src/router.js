import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import map from "./components/Map.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "App", App },
    { path: "/map", name: "map", component: map },
  ],
});

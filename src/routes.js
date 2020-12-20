import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Viewer from "./views/Viewer.vue";
console.log(import.meta);
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    base: import.meta.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/viewer",
            component: Viewer
        }
    ]
});

export default router;
import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Viewer from "./views/Viewer.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/viewer",
            component: Viewer
        }
    ]
});

export default router;
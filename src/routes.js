import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Viewer from "./views/Viewer.vue";

const router = createRouter({
    history: createWebHistory(),
    // base: import.meta.env.BASE_URL,
    base: "/3dviewer",
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
import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Viewer from "./views/Viewer.vue";

const router = createRouter({
    history: createWebHistory(),
    // base: import.meta.env.BASE_URL,
    base: "/3dviewer",
    routes: [
        {
            path: "/3dviewer/",
            component: Home
        },
        {
            path: "/3dviewer/viewer",
            component: Viewer
        }
    ]
});

export default router;
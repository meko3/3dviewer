import { createApp } from 'vue'

import App from './App.vue'
import './index.css'

import { TroisJSVuePlugin } from "troisjs";

import Router from "./routes";

createApp(App)
    .use(TroisJSVuePlugin)
    .use(Router)
    .mount('#app');

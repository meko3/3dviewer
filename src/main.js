import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { TroisJSVuePlugin } from "troisjs";

const app = createApp(App);
app.mount('#app');
app.use(TroisJSVuePlugin);

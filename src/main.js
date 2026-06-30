//import the vue.js function to create the application
import { createApp } from 'vue'
//import the main application vue.js module
import App from './App.vue'
//import the custom vue.js application router
import router from "./router/index.js";

createApp(App).use(router).mount('#app')

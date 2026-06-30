//import the vue.js router library function
import { createRouter, createWebHistory } from "vue-router";
//import the 
import HabitView from "../pages/HabitView.vue";
import AnalyticsView from "../pages/AnalyticsView.vue";

const routes = [
    {path: "/", component: HabitView},
    {path: "/analytics", component: AnalyticsView}
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
);

export default router; 

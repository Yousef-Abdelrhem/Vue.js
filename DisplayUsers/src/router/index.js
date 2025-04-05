import {createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/views/HomeView.vue";
import AboutView from "../components/views/AboutView.vue";
import details from "../components/views/details.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/about",
        name: "about",
        component: AboutView
    }, 
    {
        path: "/:id",
        component: details
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

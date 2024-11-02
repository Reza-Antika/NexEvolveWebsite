import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/components/LandingPage.vue";
import AboutUs from "@/components/AboutUs.vue";

const routes = [
    { path: '/', component: LandingPage}, // Halaman Home
    { path: '/aboutus', component: AboutUs}, // Halaman About Us
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
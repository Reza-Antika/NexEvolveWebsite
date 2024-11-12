import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/components/LandingPage.vue";
import AboutUs from "@/components/AboutUs.vue";
import OurService from "@/components/OurService.vue";

const routes = [
    { path: '/', component: LandingPage}, // Halaman Home
    { path: '/aboutus', component: AboutUs}, // Halaman About Us
    { path: '/ourservice', component: OurService}, // Halaman Our Service
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
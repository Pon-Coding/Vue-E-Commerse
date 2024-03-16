import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import CoursePage from "@/views/CoursePage.vue";
const routes = [
    { path: '/', component: HomePage },
    { path: '/course', component: CoursePage },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
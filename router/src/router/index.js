import Vue from "vue";
import VueRouter from 'vue-router'
import HomePage from '@/pages/home.vue'
import BlogPage from '@/pages/blog.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogPage
    }
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})


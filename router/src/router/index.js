import Vue from "vue";
import VueRouter from 'vue-router'
import HomePage from '@/pages/home.vue'
import BlogPage from '@/pages/blog.vue'
import NotFound from '@/components/NotFound.vue'

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
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

export const router = new VueRouter({
    routes,
    mode: 'history'
})


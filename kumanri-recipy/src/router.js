import { createRouter, createWebHistory } from "vue-router";
import mainPage from './components/mainPage.vue';
import singleRecipy from './components/singleRecipy.vue';
import pageNotFound from './components/notFound.vue';

const routes = [
    {
        path: '/accueil',
        component: mainPage,
    },
    {
        path: '/',
        component: mainPage,
    },
    {
        path: '/recette',
        component: singleRecipy,
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: pageNotFound,
        meta: {
          requiresAuth: false
        }
      },  
      
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
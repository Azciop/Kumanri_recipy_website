import { createRouter, createWebHistory } from "vue-router";
import mainPage from './components/mainPage.vue';
import pageNotFound from './components/notFound.vue';
import shoppingList from './components/shoppingList.vue';
import currentCategory from './components/currentCategory.vue';



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
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: pageNotFound,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/list",
        component: shoppingList,
      },
      {
        path: "/currentCategory",
        component: currentCategory  
      }
      
      
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
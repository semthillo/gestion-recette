import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Accueil.vue";
import ListRecette from "../views/recette/ListRecette.vue";
import AddRecette from "../views/recette/AddRecette.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil
  },
  {
    path: "/list-recette",
    name: "ListRecette",
    component: ListRecette
  },
  {
    path: "/add-recette",
    name: "AddRecette",
    component: AddRecette,
   
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  console.log('Navigating to:', to.name);
  next();
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TutorialView from "@/views/TutorialView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:user/:repository",
      name: "tutorial",
      component: TutorialView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;

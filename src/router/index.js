import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import ElagageView from "@/views/ElagageView.vue";
import PaysagisteView from "@/views/PaysagisteView.vue";
import EntretienView from "@/views/EntretienView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import CreditView from "@/views/CreditView.vue";
import AOS from "aos";

const routes = [
  { path: "/", name: "HomeView", component: Home },
  { path: "/paysagiste", name: "Paysagiste", component: PaysagisteView },
  { path: "/entretien", name: "EntretienView", component: EntretienView },
  { path: "/elagage-et-abattage", name: "Elagage", component: ElagageView },
  { path: "/about", name: "AboutView", component: AboutView },
  { path: "/contact", name: "ContactView", component: ContactView },
  { path: "/credit-dimpot", name: "CreditView", component: CreditView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  // Forcer la position de défilement en haut de chaque page
  scrollBehavior() {
    return { top: 0 };
  },
});

// Réinitialiser AOS après chaque navigation
router.afterEach(() => {
  setTimeout(() => {
    AOS.refreshHard(); // Réinitialise les animations AOS
  }, 300); // Petit délai pour laisser le DOM se reconstruire
});

export default router;

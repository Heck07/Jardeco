import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router);

router.isReady().then(() => {
  AOS.init({
    offset: 120, // Décalage en pixels avant de déclencher les animations
    duration: 600, // Durée des animations
    easing: "ease", // Type d'animation
    once: false, // Les animations peuvent être rejouées
    anchorPlacement: "top", // Animation déclenchée lorsque l'élément entre dans le viewport
  });
});

app.mount("#app");

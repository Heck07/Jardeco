<template>
  <div>
    <!-- Utilisation du composant Header -->
    <HeaderComponent :menuItems="menuItems" />
    <!-- Contenu principal -->
      <router-view />
      <FooterComponent/>
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import "./assets/main.css"
import '@mdi/font/css/materialdesignicons.css';


export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      menuItems: [
      { name: "Accueil", path: "/" },
      { name: "Qui sommes-nous", path: "/about" },
      { name: "Paysagiste", path: "/paysagiste" },
      { name: "Entretien", path: "/entretien" },
      { name: "Élagage et Abattage", path: "/elagage-et-abattage" },
      { name: "Crédit d'impôt", path: "/credit-dimpot" },
      { name: "Contact", path: "/contact" }
    ],
    };
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #366d3633;;
}



</style>

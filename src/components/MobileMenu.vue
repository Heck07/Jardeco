<template>
  <header class="mobile-header">
    <div class="header-container">
      <!-- Bouton Menu Burger -->
      <button class="menu-burger" @click="toggleMenu">
        <i :class="isMenuOpen ? 'mdi mdi-close' : 'mdi mdi-menu'"></i>
      </button>

      <!-- Logo centré -->
      <div class="logo">
        <img :src="require('@/assets/logo.png')" alt="Logo" />
      </div>
      
      <!-- Icônes à droite -->
      <div class="icons">
        <a href="tel:+123456789" class="bubble-link">
          <div class="icon bubble bcol1">
            <i class="mdi mdi-phone"></i>
          </div>
        </a>
        <div class="icon" @click="toggleCalendar">
          <i class="mdi mdi-calendar"></i>
        </div>
        <a href="https://www.facebook.com/profile.php?id=100094316217952" target="_blank" class="bubble-link">
          <div class="icon bubble bcol1">
            <i class="mdi mdi-facebook"></i>
          </div>
        </a>
      </div>
    </div>

    <!-- MiniCalendar -->
    <MiniCalendar
      :isVisible="isCalendarVisible"
      :top="calendarPosition.top"
      :left="calendarPosition.left"
      class="mobile-calendar"
    />

    <!-- Menu déroulant -->
    <div v-if="isMenuOpen" class="dropdown-menu">
      <ul>
        <li
          v-for="(item, index) in menuItems"
          :key="item.name"
          :data-aos="'fade-down'"
          :data-aos-delay="100 * (index + 1)"
        >
          <router-link :to="item.path" class="dropdown-item" @click="closeMenu">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import MiniCalendar from "@/components/MiniCalendar.vue"; // Importez votre composant


export default {
  name: "MobileMenu",
  components: {
    MiniCalendar,
  },
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isMenuOpen: false, // État pour afficher/masquer le menu
      isCalendarVisible: false, // Contrôle la visibilité du calendrier
      calendarPosition: {
        top: 0,
        left: 0,
      },
    };
  },
  mounted() {
    AOS.init(); // Initialise AOS pour les animations
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Ouvre/ferme le menu
    },
    closeMenu() {
      this.isMenuOpen = false; // Ferme le menu après un clic sur un lien
    },
    toggleCalendar() {
      const calendarIcon = this.$el.querySelector(".mdi-calendar");
      if (!calendarIcon) return;

      const rect = calendarIcon.getBoundingClientRect();
      this.calendarPosition.top = rect.bottom;
      this.calendarPosition.left = rect.left + rect.width / 2 + window.scrollX;

      this.isCalendarVisible = !this.isCalendarVisible;
    },
  },
};
</script>

<style scoped>
/* Style général */
.mobile-header {
  position: sticky; /* Ou fixed, selon votre besoin */
  top: 0;
  z-index: 1000;
  background-color: #394733dc;
  color: white;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px); /* Effet de flou */
  -webkit-backdrop-filter: blur(5px); /* Support Safari */
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Nécessaire pour positionner le logo */
  padding: 1rem;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centre le logo */
  z-index: 10; /* Assure que le logo est visible au-dessus des autres éléments */
}

.logo img {
  height: 40px; /* Ajuste la taille du logo */
  object-fit: contain; /* Garde le ratio d'aspect */
}


.menu-burger {
  z-index: 1;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.menu-burger:hover {
  transform: scale(1.1); /* Légèrement agrandi au survol */
}

.logo img {
  height: 50px;
}

.bubble-link {
  text-decoration: none; /* Supprime le soulignement par défaut */
  display: inline-block; /* Permet de rendre toute la bulle cliquable */
}


.icons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-left: auto; /* Assure que les icônes restent complètement à droite */
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #264e2c; /* Couleur des bulles */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Ombre portée */
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.1);
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #394733;
  padding: 1rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-item {
  display: block;
  text-align: center;
  color: white;
  padding: 1rem 0;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.dropdown-item:hover {
  background-color: #3b8f3d;
}

/* Effet AOS */
[data-aos] {
  opacity: 0;
  transform: translateY(-20px);
}

[data-aos].aos-animate {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 480px) {
  .mobile-calendar .calendar-wrapper {
    transform: scale(0.5); /* Réduit tout le calendrier */
    min-width: auto; /* Ajuste la largeur */
  }
}
@media (max-width: 480px) {
  .logo {
    display: none;
  }
}
</style>

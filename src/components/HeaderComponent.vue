<template>
  <header class="desktop-header" :class="['header', isScrolled ? 'scrolled' : '', 'bcol2']" v-if="!isMobile">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/logo2.png" alt="Logo" />
      </div>
        <!-- Partie droite avec icônes et menu -->
        <div class="right-section">
          <!-- Icônes dans des bulles -->
          <div class="icons">
            <a href="tel:+123456789" class="bubble-link">
              <div class="icon bubble bcol1">
                <i class="mdi mdi-phone"></i>
              </div>
            </a>
          <div class="icon bubble bcol1 calendar-icon" @click="toggleCalendar">
            <i class="mdi mdi-calendar"></i>
          </div>
            <a href="https://www.facebook.com/profile.php?id=100094316217952" target="_blank" class="bubble-link">
              <div class="icon bubble bcol1">
                <i class="mdi mdi-facebook"></i>
              </div>
            </a>
          </div>
  
           <!-- Menu -->
        <nav class="navigation">
          <ul>
            <li v-for="item in menuItems" :key="item.name">
              <router-link
                :to="item.path"
                :class="['nav-link', isActive(item.path) ? 'active-link' : '']">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </nav>
        </div>
        <MiniCalendar
        :isVisible="isCalendarVisible"
        :top="calendarPosition.top"
        :left="calendarPosition.left"
      />
      </div>
    </header>
    <MobileMenu v-else :menuItems="menuItems" />
  </template>
  
  <script>
  import MobileMenu from "@/components/MobileMenu.vue";
  import MiniCalendar from "./MiniCalendar.vue";

  export default {
    name: "HeaderComponent",
    components: {
      MobileMenu, // Corrigez ici, il doit être dans "components"
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
      isScrolled: false, // État pour le suivi du défilement
      scrollTimeout: null, // Référence pour gérer le debounce
      isMobile: window.innerWidth <= 795, // Assurez-vous que cette condition est correcte
      isCalendarVisible: false,
      calendarPosition: {
        top: 0,
        left: 0,
      },

    };
  },
  computed: {
    currentPath() {
      return this.$route.path; // Récupère le chemin actuel
    },
  },
  mounted() {
    // Ajoute un écouteur pour surveiller le défilement
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize); // Ajouté
    this.handleResize(); // Appel initial pour définir correctement isMobile
  },
  beforeUnmount() {
    // Supprime l'écouteur pour éviter les fuites de mémoire
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize); // Ajouté
  },
  methods: {
    toggleCalendar() {
      const calendarIcon = this.$el.querySelector(".calendar-icon");
      if (!calendarIcon) return;

      const rect = calendarIcon.getBoundingClientRect();
      this.calendarPosition.top = rect.bottom;
      this.calendarPosition.left = rect.left + rect.width / 2 + window.scrollX;
      this.isCalendarVisible = !this.isCalendarVisible;

      // Assurez-vous que la position est mise à jour lors de l'affichage
      if (this.isCalendarVisible) {
        window.addEventListener("scroll", this.updatePosition);
      } else {
        window.removeEventListener("scroll", this.updatePosition);
      }
    },
    updatePosition() {
      const calendarIcon = this.$el.querySelector(".calendar-icon");
      if (!calendarIcon) return;

      const rect = calendarIcon.getBoundingClientRect();
      this.calendarPosition.top = rect.bottom;
      this.calendarPosition.left = rect.left + rect.width / 2 + window.scrollX;
    },
    isActive(path) {
      return this.currentPath === path;
    },
    handleScroll() {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout); // Annule l'appel précédent
      }
      // Change l'état en fonction de la position du scroll
      this.scrollTimeout = setTimeout(() => {
        this.isScrolled = window.scrollY > 50; // Ajuste le seuil si nécessaire
      }, 100  ); // 100ms de délai avant de mettre à jour l'état
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 795;
    },
  },
};
</script>
  
<style scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 1000;
    color: white;
    padding: 1rem 3rem;
    backdrop-filter: blur(5px); /* Effet flou */
    transition: all 0.4s ease-in; /* Transition fluide */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .header.scrolled {
    padding: 0.4rem 3rem;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4); /* Ombre plus marquée */
    background-color: #394733dc;
  }

  .header.scrolled .icons{
    padding-top: 5px;
  }

  .header.scrolled .navigation ul {
    margin-top: 5px;
  }

  .header.scrolled .logo img {
    height: 90px; /* Réduit la taille du logo */
  } 

  .logo img {
    height: 100px;
    transition: height 0.4s ease; /* Animation fluide de la taille du logo */
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .right-section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .bubble-link {
    text-decoration: none; /* Supprime le soulignement par défaut */
    display: inline-block; /* Permet de rendre toute la bulle cliquable */
  }

  
  .icons {
    display: flex;
    gap: 1.2rem;
    padding-right: 15px;
    margin-bottom: 10px;
    transition: height 0.4s ease; 
  }
  
  .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px; /* Augmenté pour une meilleure visibilité */
  height: 50px;
  border-radius: 50%;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Ombre portée */
}

.icon:hover {
  transform: scale(1.05); /* Zoom au survol */
  background-color: #3b8f3d; /* Couleur plus foncée */
  transition: 0.3s ease;
}

.icon:hover::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: rgba(255, 255, 255, 0.20);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: pulse 0.6s ease-out;
}


  .mdi {
    display: flex;
    color: white;
    font-size: 24px;
    justify-content: center;
    align-self: center;
  }

  .navigation ul li a.active-link {
    color: #dfe49b; /* Couleur différente pour un match exact */
  font-weight: bold;
  text-decoration: none; /* Différence optionnelle */
}

  .navigation ul {
  list-style: none;
  display: flex; /* Les éléments restent alignés horizontalement */
  align-items: center; /* Centre les éléments sur la hauteur */
  justify-content: center; /* Centre horizontalement si nécessaire */
  margin: 0;
  padding: 0;
  height: 50%; /* Adapte à la hauteur de leur parent */
  margin-top: 12px;
}
  
  .navigation ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  transition: all 0.3s;
  position: relative;
}

.navigation ul li a:hover {
  color: #dfe49b;
}

.navigation ul li a::after {
  content: "";
  position: absolute;
  top: 36px; 
  left: 50%; /* Place le centre de la ligne au centre du lien */
  transform: translateX(-50%);
  width: 0;
  height: 1px;
  background-color: #dfe49b; /* Ligne colorée */
  transition: width 0.4s;
}

.navigation ul li a.active-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%; /* Place le centre de la ligne au centre du lien */
  transform: translateX(-50%);
  height: 1px;
  background-color: #dfe49b; /* Ligne colorée */
  transition: width 0.4s;
  width: 85%;
  align-self: center;
}


.navigation ul li a:hover::after {
  width: 100%; /* Étend la ligne au survol */
}

.calendar-icon {
  position: relative;
}

.calendar-wrapper {
  position: absolute;
  z-index: 2000;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  transform: translateX(-50%);
}

@keyframes pulse {
  to {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0;
  }
}

@media (max-width: 1160px) {
  .navigation {
    font-size: 13px;
  }
  .navigation ul li a::after {
    top: 38px
  }
}
@media (max-width: 1050px) {
  .navigation {
    font-size: 9px;
  }
  .navigation ul li a::after {
    top: 36px
  }
}

@media (max-width: 880px) {
  .navigation {
    font-size: 7px;
  }
  .navigation ul li a::after {
    top: 36px
  }
}

@media (max-width: 795px) {
  .desktop-header {
    display: none;
  }
  .container {
    flex-direction: column;
    align-items: center;
  }

  .icons {
    justify-content: center;
    padding-right: 0;
  }

  .navigation ul {
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
  }

  .navigation ul li {
    margin-bottom: 10px; /* Espacement vertical entre les liens */
  }
}



  </style>
  
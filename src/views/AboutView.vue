<template>
  <div class="about-page">
    <!-- Sections existantes -->
    <section class="hero-section">
      <h1 class="hero-title" 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000">Qui sommes-nous ?
        <p class="hero-subtitle">Découvrez notre histoire, nos valeurs et notre engagement.</p>
      </h1>
    </section>
    <section class="history-section">
      <div class="container">
        <div class="text" data-aos="fade-right" data-aos-duration="1500" :data-aos-delay="isMobile ? 600 : index * 100">
          <h4 class="info-title">Notre Histoire</h4>
          <p>
            Nous sommes spécialisés dans l'aménagement et l'entretien des espaces extérieurs.
            Née d'une passion pour la nature et d'une volonté de créer des espaces de vie uniques, notre entreprise familiale
            s'est forgée une réputation de qualité et de confiance.
          </p>
          <p>
            Notre mission est de transformer vos espaces verts en lieux exceptionnels, tout en respectant l'environnement
            et en utilisant des matériaux durables.
          </p>
        </div>
        <div class="image" data-aos="fade-left" data-aos-duration="1500">
          <img src="@/assets/jardin1_apres.jpg" alt="Notre histoire" />
        </div>
      </div>
    </section>
    <section class="values-section">
      <h4 class="info-title">Nos valeurs</h4>
      <div class="values-container">
        <div class="value-box">
          <i class="mdi mdi-nature-people"></i>
          <h4 class="info-title-value">Respect de la nature</h4>
          <p>
            Nous privilégions des pratiques respectueuses de l'environnement et utilisons des produits locaux et durables.
          </p>
        </div>
        <div class="value-box">
          <i class="mdi mdi-hand-heart"></i>
          <h4 class="info-title-value">Engagement client</h4>
          <p>
            La satisfaction de nos clients est au cœur de toutes nos actions. Chaque projet est unique, tout comme nos solutions.
          </p>
        </div>
        <div class="value-box">
          <i class="mdi mdi-leaf"></i>
          <h4 class="info-title-value">Innovation</h4>
          <p>
            Nous sommes constamment à la recherche des meilleures techniques pour répondre à vos besoins avec créativité et expertise.
          </p>
        </div>
      </div>
      <div class="cta-button-container">
      <a class="cta-button" href="tel:123456789"><i class="mdi mdi-phone"></i>06 25 33 55 45</a>
    </div>
    </section>
    <section class="team-section">
      <h4 class="info-title">Rencontrez notre équipe</h4>
      <div class="team-container">
        <div class="team-member" v-for="member in teamMembers" :key="member.name">
          <img :src="member.photo" :alt="member.name" class="member-photo" />
          <h4 class="info-title-value">{{ member.name }}</h4>
          <p class="member-role">{{ member.role }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from "aos";

export default {
  name: "AboutView",
  
  data() {
    return {
      teamMembers: [
        {
          name: "Jean Dupont",
          role: "Fondateur & Paysagiste",
          photo: require("@/assets/remy.png"),
        },
        {
          name: "Marie Durant",
          role: "Architecte paysagiste",
          photo: require("@/assets/sylvie.png"),
        },
        {
          name: "Paul Martin",
          role: "Expert en entretien",
          photo: require("@/assets/flo.png"),
        },
      ],
      isMobile: window.innerWidth <= 795, // Détection de la taille de l'écran

    };
  },
  mounted() {
    window.addEventListener("resize", () => {
    this.isMobile = window.innerWidth <= 795;
    });

    AOS.refresh();
  },
  methods: {
    getGridAreaClass(index) {
      const areas = ["item-a", "item-b", "item-c", "item-d", "item-e", "item-f", "item-g"];
      return areas[index % areas.length];
    },
  },
};
</script>

<style scoped>
/* General Styles */
.about-page {
  font-family: "Arial", sans-serif;
  color: #264E2C;
  overflow:hidden;
}

/* Hero Section */
.hero-section {
  background: url("@/assets/famille.jpg") no-repeat center center / cover;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 20px;
  border-bottom-right-radius: 100% 30%; 
}

.hero-title {
  font-size: 60px;
  font-weight: bold;
  margin: 0px;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-top: 10px;
  color: #dfe49b;
  margin-bottom: 20vh;
}

.history-section .container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem 10%;
  gap: 5rem;
  flex-wrap: wrap;
}

.history-section .text {
  flex: 1;
}

.history-section .image {
  flex: 1;
  object-fit: cover;
}

.history-section img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* Values Section */
.values-section {
  background-color: #f8f8f8;
  padding: 3rem 10%;
  text-align: center;
  border-top-left-radius: 100% 15%; 
  border-bottom-left-radius: 100% 5%;
  border-bottom-right-radius: 100% 5%;
}

.values-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  flex-wrap: wrap;
}

.value-box {
  flex: 1 1 calc(33.33% - 2rem);
  max-width: 300px;
  text-align: center;
  padding: 20px;
  background: #00000009;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.value-box i {
  font-size: 3rem;
  color: #8BA466;
  margin-bottom: 10px;
}

/* Team Section */
.team-section {
  padding: 3rem 10%;
  text-align: center;

}

.team-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  flex-wrap: wrap;
}

.team-member {
  flex: 1 1 calc(33.33% - 2rem);
  max-width: 250px;
  text-align: center;
  background: #ffffff75;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.member-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.member-role {
  font-size: 1rem;
  color: #8BA466;
}

.mdi-phone {
    padding-right: 20px;
    font-size: 16px;
    position: relative;
    top: 1px
}

/* Info Title Styling */
.info-title {
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 0px;
}

.info-title-value {
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.info-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background-color: #9db33e;
  border-radius: 2px;
}

/* Media Queries pour écrans mobiles */
@media (max-width: 768px) {
  /* Hero Section */
  .hero-section {
    height: 40vh;
    padding: 10px;
    border-bottom-right-radius: 100% 8%;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  /* History Section */
  .history-section .container {
    flex-direction: column; /* Change la disposition à une colonne */
    gap: 2rem;
  }

  .history-section .text,
  .history-section .image {
    flex: unset; /* Supprime la largeur fixe */
  }

  /* Values Section */
  .values-container {
    flex-direction: column; /* Empile les boîtes en colonne */
    gap: 1.5rem;
  }

  .values-section {
    border-top-left-radius: 100% 8%; 

  }

  .value-box {
    max-width: 100%; /* Occupe toute la largeur */
    padding: 15px;
  }

  /* Team Section */
  .team-container {
    flex-direction: column; /* Empile les membres */
    gap: 1.5rem;
  }

  .team-member {
    max-width: 100%; /* Occupe toute la largeur */
  }

  .member-photo {
    width: 80px;
    height: 80px;
  }

  /* Cta Button */
  .cta-button-container {
    text-align: center;
    margin-top: 20px;
    top: 100px;
  }

  .cta-button {
    font-size: 1rem;
    padding: 10px 20px;
  }
}

/* Media Queries pour écrans très petits */
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .info-title,
  .info-title-value {
    font-size: 1.2rem;
  }
}

</style>

<template>
  <div class="page-container">
    <!-- Image avec titre et sous-titre -->
    <section class="hero-section">
      <div class="hero-content" 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="600">
        <h1 class="page-title">Entretien</h1>
        <p class="page-subtitle">Laisser nous entretenir votre espace extérieur</p>
      </div>
    </section>

    <!-- Première section avec texte à gauche et image à droite -->
    <section class="text-image-section">
      <div class="container" v-scroll-reveal>
        <div class="text-left" data-aos="fade-right" data-aos-duration="1500" :data-aos-delay="isMobile ? 600 : index * 0">
          <h2 class="section-title">
            Un Jardin Toujours Impeccable</h2>
          <p class="section-text">Profitez d’un jardin resplendissant tout au long de l’année grâce à nos services d’entretien. Qu’il s’agisse de la tonte de pelouse, de la taille de haies ou du désherbage, nous prenons soin de chaque détail. Nos experts assurent un suivi personnalisé.</p>
        </div>
        <div class="image-right" data-aos="fade-left" data-aos-duration="1500">
          <img src="@/assets/nettoyageEscalier_apres.jpg" alt="Jardin personnalisé" />
        </div>
      </div>
    </section>

    <!-- Deuxième section avec image à gauche et texte à droite -->
    <section class="image-text-section">
      <div class="container">
        <div class="image-left" :data-aos="isMobile ? 'fade-left' : 'fade-right'" data-aos-duration="1500">
          <img src="@/assets/nettoyageCour_apres.jpg" alt="Paysagiste au travail" />
        </div>
        <div class="text-right" :data-aos="isMobile ? 'fade-right' : 'fade-left'" data-aos-duration="1500">
          <h2 class="section-title" >Nos services d'entretien paysager</h2>
          <p class="section-text">Pour un jardin impeccable en toute saison, confiez-nous son entretien. Taille des arbres, nettoyage des massifs, soin des pelouses : nous mettons notre expertise au service de vos besoins. Avec des prestations adaptées, nous veillons à maintenir vos espaces extérieurs.</p>
        </div>
      </div>
    </section>

     <!-- Bouton Call to Action -->
     <div class="cta-button-container">
      <a class="cta-button" href="tel:123456789"><i class="mdi mdi-phone"></i>06 25 33 55 45</a>
    </div>
    <!-- Carrousel avec plusieurs photos -->
    <section class="carousel-section">
      <div class="carousel-container" data-aos="fade-zoom-in" data-aos-easing="ease-in-out-back" data-aos-duration="1000" data-aos-offset="100">
        <h2 class="carousel-title">Nos Réalisations</h2>
        <div class="carousel">
          <img
            v-for="(image, index) in carouselImages"
            :key="index"
            :src="image"
            :alt="'Réalisations ' + (index + 1)"
            @click="openLightbox(index)"
          />
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div v-if="lightboxActive" class="lightbox">
      <button class="close-button" @click="closeLightbox">✖</button>
      <button class="prev-button" @click="prevImage">❮</button>
      <img :src="carouselImages[currentImage]" class="lightbox-image" />
      <button class="next-button" @click="nextImage">❯</button>
    </div>
  </div>
</template>

<script>
import AOS from "aos";

export default {
  name: "ElagageView",
  data() {
    return {
      carouselImages: [
        require('@/assets/nettoyageCour_apres.jpg'),
        require('@/assets/nettoyageJardin_apres.jpg'),
        require('@/assets/nettoyageEscalier_apres.jpg')
      ],
      lightboxActive: false,
      currentImage: 0,
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
    openLightbox(index) {
      this.currentImage = index;
      this.lightboxActive = true;
    },
    closeLightbox() {
      this.lightboxActive = false;
    },
    prevImage() {
      this.currentImage =
        (this.currentImage - 1 + this.carouselImages.length) %
        this.carouselImages.length;
    },
    nextImage() {
      this.currentImage =
        (this.currentImage + 1) % this.carouselImages.length;
    },
  },
};
</script>

<style scoped>
/* Section Hero */
.hero-section {
  position: relative;
  background-image: url('@/assets/nettoyageJardin_apres.jpg'); /* Image de fond */
  background-size: cover;
  background-position: center;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: baseline;
  color: white;
  text-align: center;
  opacity: 0.9;
  border-bottom-right-radius: 100% 15%; /* Courbure progressive */
}

.hero-content {
  max-width: 800px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Effet de texte */

}
h2 {
  color: #264E2C
}
.page-title {
  font-size: 60px;
  margin: 0;
}

.page-subtitle {
  font-size: 18px;
  margin-top: 10px;
  color: #dfe49b;
}

/* Sections text-image et image-text */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 50px;
  max-width: 1200px;
  overflow:hidden;
}
.text-image-section {
  display:flex;
  justify-content: center;
}

.image-text-section {
  display:flex;
  justify-content: center;
  padding-top: 0px;
}
.text-left, .text-right {
  flex: 1;
  padding: 20px;
  text-align: left;
  display:flex;
  flex-direction: column;
  align-content: baseline;
}

.text-left h2, .text-right h2 {
  font-size: 32px;
  margin-bottom: 20px;
}


.section-text {
  font-size: 16px;
  line-height: 1.6;
  margin-top: 40px;
  padding-bottom: 40px;
}

.image-right, .image-left {
  flex: 1;
  padding: 20px;
}

.image-right img, .image-left img {
  width: 100%;
  height: auto;
  max-height: 250px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

/* Bouton Call to Action */
.cta-button-container {
  text-align: center;
  margin: 30px 0;
  position: relative;
  top: 63px;
}

.mdi-phone {
    padding-right: 20px;
    font-size: 16px;
    position: relative;
    top: 1px
}

/* Carrousel */
.carousel-section {
  background-color: #f8f8f8;
  padding: 50px 0;
  text-align: center;
  border-top-left-radius: 100% 15%; /* Courbure progressive */
}

.carousel-container {
  max-width: 1200px;
  margin: 0 auto;
}

.carousel-title {
  font-size: 32px;
  margin-bottom: 30px;
}

.carousel-title::after {
content: "";
position: absolute;
bottom: -10px; /* Décale la barre de 10px sous le titre */
left: 50%;
transform: translateX(-50%);
width: 50px; /* Largeur de la barre */
height: 1px; /* Hauteur de la barre */
background-color: #9db33e; /* Couleur verte */
border-radius: 2px; /* Arrondi les bords de la barre */
}

.carousel {
  display: flex;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
}

.carousel img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* Lightbox Styles */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox img {
  max-width: 90%;
  max-height: 80%;
  border-radius: 10px;
}

.close-button,
.prev-button,
.next-button {
  position: absolute;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.close-button {
  top: 10px;
  right: 10px;
}

.prev-button {
  left: 20px;
}

.next-button {
  right: 20px;
}

/* Animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Appliquer une animation aux sections */
[v-scroll-reveal] {
  animation: fadeIn 1s ease-in-out;
}

/* Mobile responsiveness */
@media (max-width: 795px) {
  .hero-section {
    height: 60vh;
    background-position: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    border-bottom-right-radius: 100% 5%;
  }

  .hero-content {
    margin: 0;
  }

  .page-title {
    line-height: 1.4;
  }



  .page-subtitle {
    font-size: 16px;
    margin-top: 10px;
  }

  .container {
    flex-direction: column;
    align-items: center;
    margin: 20px;
    gap: 20px;
  }
  .page-container section {
    padding-bottom: 0px;
  }

  .image-text-section .container {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px; /* Espacement entre les éléments */
  }

  .text-left,
  .text-right {
    text-align: left;
    
  }

  .section-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .section-text {
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  .image-right img,
  .image-left img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    margin-bottom: 15px;
  }

  .cta-button-container {
    margin-top: 20px;
    padding: 0 10px;
  }


  .carousel-section {
    padding: 20px 10px;
    text-align: center;
    border-top-left-radius: 100% 5%;
  }

  .carousel-title {
    font-size: 24px;
    margin-bottom: 20px;
    margin-top: 50px;
  }

  .carousel {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 0px 20px;
  }

  .carousel img {
    width: 100%;
    max-width: 350px;
    max-height: 200px;
    margin-bottom: 10px;
  }

  .lightbox img {
    max-width: 90%;
    max-height: 70%;
  }

  .close-button,
  .prev-button,
  .next-button {
    font-size: 1.5rem;
  }
}
</style>

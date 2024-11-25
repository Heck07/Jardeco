<template>
    <div class="credit-page">
      <!-- Hero Section -->
      <section class="hero" >
        <h1 class="hero-title"
        data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-duration="500"
     data-aos-offset="0">Crédit d'impôts pour vos travaux de jardinage
            <p class="hero-description">Bénéficiez d’une réduction fiscale de 50% pour l’entretien de votre jardin !</p>
        </h1>
      </section>
  
      <!-- Section d'information avec image à droite -->
      <section class="info-section">
        <div class="info-content">
          <!-- Texte d'information -->
          <div class="info-text" data-aos="fade-right" data-aos-duration="1500">
            <h4 class="info-title" >Le crédit d’impôt jardinage</h4>
            <p class="info-description">Le crédit d'impôt vous permet de bénéficier d'une réduction sur vos impôts pour vos travaux d'entretien de jardin. Profitez de cette opportunité pour alléger vos dépenses.</p>
            <h4 class="info-title">L’application du crédit d’impôts</h4>
            <p class="info-description">Cette réduction s'applique à des travaux comme la tonte, la taille des haies ou le débroussaillage. Nous fournissons tous les documents nécessaires pour votre déclaration fiscale.</p>
            <h4 class="info-title">Règlement & attestation fiscale</h4>
            <p class="info-description">Après chaque prestation, nous vous remettons une attestation fiscale détaillant les travaux réalisés, conforme aux exigences pour votre déclaration d'impôts. Tout est simplifié pour vous !</p>
        </div>
  
          <!-- Image d'information -->
          <div class="info-image" data-aos="fade-left" data-aos-duration="1500">
            <img src="@/assets/coursPorte_apres.jpg" alt="Travaux de jardinage" />
          </div>

        </div>
  
        <!-- Règlement & Attestation Fiscale -->
        
      </section>
    </div>
  </template>
  
  <script>
  import AOS from "aos";

  export default {
    name: "CreditView",
    data() {
      return {
        isMobile: window.innerWidth <= 795, // Détection de la taille de l'écran
      }
    },
    mounted() {
      window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 795;
      });

      AOS.refresh();
    },
  };
  </script>
  
  <style scoped>
  /* Page générale */
  .credit-page {
    background-color: #ffffff;
    font-family: Arial, sans-serif;
    overflow: hidden;
  }
  
  /* Hero Section */
  .hero {
    color: white;
    text-align: center;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #d4dfd4;
    padding: 0 8%;
    border-bottom-right-radius: 100% 30%;
  }
  
  
  .hero-description {
    font-size: 18px;
  }
  
  /* Info Section */
  .info-section {
    padding: 50px 10%;
    background-color: #fff;
  }
  
  .info-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 30px;
  }
  
  .info-text {
    flex: 1 1 50%;
    text-align: left;
  }
  
  .info-title {
    font-size: 22px;
    margin-bottom: 10px;
    color: #264e2c;
  }

  .info-title::after {
  content: "";
  position: absolute;
  bottom: -10px; /* Décale la barre de 10px sous le titre */
  left: 25px;
  transform: translateX(-50%);
  width: 50px; /* Largeur de la barre */
  height: 1px; /* Hauteur de la barre */
  background-color: #9db33e; /* Couleur verte */
  border-radius: 2px; /* Arrondi les bords de la barre */
}
  
  .info-description {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .info-image {
    flex: 1 1 40%;
  }
  
  .info-image img {
    max-width: 100%;
    max-height: 600px;
    height: 420px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Rules Section (ajouté sous info-content) */
  .rules-text {
    text-align: left;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 8px;
  }
  
  .rules-text .info-title {
    margin-bottom: 10px;
  }
  
  .rules-text .info-description {
    margin-bottom: 0;
  }

  @media (max-width: 795px) {
  .hero {
    border-bottom-right-radius: 100% 7%; /* Courbure progressive */
  }

  .info-content {
    flex-direction: column;
  }
  
  .contact-form-section {
    padding: 20px 15%;
    border-top-left-radius: 100% 7%; /* Courbure progressive */
  }

}
  </style>
  
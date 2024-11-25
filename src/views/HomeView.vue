<template>
  <div class="home-page">
    <!-- Section Image principale -->
    <section class="hero">
      <h1 class="hero-title" 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="1000">
        Réalisez vos projets d'extérieur
        <p class="hero-subtitle">Nous sommes disponible sur Aubenas et ses alentours</p>
      </h1>
    </section>

    <!-- Section "Entreprise Familiale" -->
    <section class="entreprise-familiale">
      <div class="text-left" data-aos="fade-right" data-aos-duration="1000">
        <h2>Entreprise Familiale</h2>
        <p>
          Nous sommes une entreprise familiale spécialisée dans l'aménagement et l'entretien des espaces verts.
          Avec une passion pour la nature et une expertise qualifiée, nous transformons vos espaces extérieurs
          en lieux de vie exceptionnels.
        </p>
      </div>
      <div class="image-right" data-aos="fade-left" data-aos-offset="160">
        <img src="@/assets/famille.jpg" alt="Entreprise Familiale" />
      </div>
    </section>

    <!-- Section avec icônes -->
    <section class="features">
      <div class="feature-box" data-aos="fade-down" data-aos-duration="1200">
        <div class="icon-box">
          <i class="mdi mdi-flower"></i> <!-- Icône MDI pour Jardin -->
        </div>
        <div class="feature-info">
          <h4>Création</h4>
          <p>Création d'espaces extérieurs sur mesure, adaptés à vos besoins et à votre environnement.</p>
        </div>
      </div>

      <div class="feature-box" data-aos="fade-down" data-aos-duration="1000">
        <div class="icon-box">
          <i class="mdi mdi-shovel"></i> <!-- Icône MDI pour Outils -->
        </div>
        <div class="feature-info">
          <h4>Entretien</h4>
          <p>Entretien régulier pour garder votre jardin en parfait état toute l'année Lorem ipsum dolor sit </p>
        </div>
      </div>

      <div class="feature-box" data-aos="fade-down" data-aos-duration="800">
        <div class="icon-box">
          <i class="mdi mdi-tree-outline"></i> <!-- Icône MDI pour Local -->
        </div>
        <div class="feature-info">
          <h4>Local</h4>
          <p>Nous utilisons des produits et services locaux pour un impact environnemental réduit.</p>
        </div>
      </div>
    </section>

    <!-- Section "Nos Prestations" -->
    <section class="prestation" >
      <div  data-aos="fade-zoom-in" data-aos-easing="ease-in-out-back" data-aos-duration="1000" data-aos-offset="100">
        <h2 class="titre-center">Nos Prestations</h2>
        <div class="services">
          <!-- PAYSAGISTE -->
          <router-link
            to="/paysagiste"
            class="service-card"
            :style="{ backgroundImage: 'url(' + require('@/assets/creationRigole_apres.jpg') + ')' }"
          >
            <h4>PAYSAGISTE</h4>
            <p class="hover-text">Aménagement paysager sur mesure.</p>
          </router-link>

          <!-- ENTRETIEN -->
          <router-link
            to="/entretien"
            class="service-card"
            :style="{ backgroundImage: 'url(' + require('@/assets/nettoyageJardin_apres.jpg') + ')' }"
          >
            <h4>ENTRETIEN</h4>
            <p class="hover-text">Laissez-nous prendre soin de votre jardin.</p>
          </router-link>

          <!-- ELAGAGE -->
          <router-link
            to="/elagage-et-abattage"
            class="service-card"
            :style="{ backgroundImage: 'url(' + require('@/assets/arbreMort_avant.jpg') + ')' }"
          >
            <h4>ELAGAGE</h4>
            <p class="hover-text">Aménagement paysager sur mesure.</p>
          </router-link>
        </div>
    </div>
    </section>
  </div>
</template>

<script>
import AOS from "aos";

export default {
  name: "HomeView",
  mounted() {
    // Rafraîchir AOS si nécessaire
    this.$nextTick(() => {
      AOS.refresh();
    });
  },
};
</script>

<style scoped>
.home-page {
  overflow:hidden;
}
/* Hero Section */
/* Effet courbé progressif avec un dégradé */
.hero::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10%; /* Ajuster cette valeur selon l'intensité du fondu */
  z-index: 1; /* Assurer que l'effet est sous le texte */
  pointer-events: none;
}

.hero {
  background: url('@/assets/piscine_jardin.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  text-align: center;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20%;
  position: relative;
  overflow: hidden;
  border-bottom-right-radius: 100% 15%;
}

.hero-title {
  position: relative;
  z-index: 2;
  font-size: 60px;
  font-weight: bold;
  margin: 20px 0 0; /* Ajout du margin-top */
  color: white;
}

.hero-subtitle {
  font-size: 19px;
  color: #dfe49b;
  margin-top: 10px;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
}

/* Entreprise Familiale Section */
.entreprise-familiale {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem 10%;
}

.entreprise-familiale .text-left {
  width: 100%;
  max-width: 500px;
  text-align: left;
  margin-bottom: 1rem;
  color: #264e2c;

}

.entreprise-familiale .image-right img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
}

/* Features Section */
/* Features Section */
.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.features .feature-box {
  display: flex;
  align-items: center;  /* Aligner verticalement l'icône et le texte */
  width: 30%;           /* Largeur de la boîte (pour les grands écrans) */
  min-width: 250px;     /* Largeur minimale pour que les éléments ne soient pas trop petits */
  border-radius: 10px;
  gap: 2rem;
  padding: 15px;
  box-shadow: none;
  justify-content: flex-start;  /* Aligner le texte à gauche */
  box-sizing: border-box; /* Assure que le padding et la bordure sont inclus dans la largeur */
}


.features .icon-box {
  display: flex;
  justify-content: center;  /* Centrer l'icône horizontalement */
  align-items: center;      /* Centrer l'icône verticalement */
  width: 20%;               /* L'icône prend 25% de la largeur */
  padding: 0;
}

.icon-box i {
  color: #8ba466
}

.features .feature-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  width: 80%;  /* Le texte prend 75% de la largeur restante */
  box-sizing: border-box; /* Assure que le padding et la bordure sont inclus dans la largeur */
}

.features .feature-info h4 {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0px;
  margin-right: auto;  /* Assure que le titre reste aligné à gauche */
  color: #264E2C
}

.features .feature-info p {
  font-size: 1rem;
  font-weight: 300;
}

.icon-box i {
  font-size: 50px;
}


/* Prestations Section */
.prestation {
  background-color: white;
  padding: 3rem 10%;
  border-top-left-radius: 100% 15%; /* Courbure progressive */
}

.services {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 3rem;
  justify-items: center;
  justify-content: center ;
}

.service-card {
  background-size: cover;
  color: white;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.service-card h4 {
  z-index: 2; /* S'assurer que le titre reste visible */
  font-size: 1.8rem;
  position: relative;
  bottom: 10px;
  transition: transform 0.3s ease; /* Animation douce */
}

.service-card .hover-text {
  position: absolute;
  bottom: 20%;
  padding: 0px 18%;
  opacity: 0;
  color: white;
  font-size: 1rem;
  text-align: center;
  z-index: 2;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.service-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.1); /* Couleur dorée avec opacité */
  transform: scale(1.3); /* Effet légèrement agrandi au départ */
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 5px;
  z-index: 1;
  opacity: 0.5;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.service-card:hover h4 {
  transform: translateY(-20px); /* Le titre remonte */
}

.service-card:hover .hover-text {
  opacity: 1;
  transform: translateY(-10px); /* Le texte remonte légèrement */
}

.service-card:hover::before {
  transform: scale(0.7); /* Bordure carrée qui se réduit */
  opacity: 1; /* Effet lumineux activé */
}

.titre-center {
  text-align: center;
  position: relative;
  font-size: 32px;
  color: #264E2C;
}

.titre-center::after {
  content: "";
  position: absolute;
  bottom: -10px; /* Décale la barre de 10px sous le titre */
  left: 50%;
  transform: translateX(-50%);
  width: 50px; /* Largeur de la barre */
  height: 2px; /* Hauteur de la barre */
  background-color: #9db33e; /* Couleur verte */
  border-radius: 2px; /* Arrondi les bords de la barre */
}

/* Media Queries */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .entreprise-familiale {
    flex-direction: column;
    align-items: center;
  }

  .features .feature-box {
    width: 45%;
  }
}

@media (max-width: 795px) {
  .hero {
    border-bottom-right-radius: 100% 10%;
    justify-content: center;
  }
  .prestation {
    border-top-left-radius: 100% 10%;
  }
  .hero-title {
    font-size: 2.7rem;
  }

  .entreprise-familiale .text-left,
  .entreprise-familiale .image-right img {
    width: 100%;
    max-width: 100%;
  }

  .features .feature-box {
    width: 100%;
  }

  .services {
    grid-template-columns: 1fr;
  }
}
</style>

<template>
    <footer class="site-footer">
      <div class="footer-container">
        <!-- Logo à gauche -->
        <div class="footer-logo">
          <img :src="require('@/assets/logo.png')" alt="Logo" />
        </div>
  
        <!-- Services au centre -->
        <div class="footer-services">
          <h3>Nos Services</h3>
          <ul class="services-list">
            <li><span class="bullet"></span>Création de jardins</li>
            <li><span class="bullet"></span>Entretien de vos jardins</li>
            <li><span class="bullet"></span>Pose de mur en pierre</li>
            <li><span class="bullet"></span>Elagage et abattage</li>
            <li><span class="bullet"></span>Conception et maquette</li>
            <li><span class="bullet"></span>Service de suivi</li>
          </ul>
        </div>
  
        <!-- Moyens de contact à droite -->
        <div class="footer-contact">
          <h3>Contactez-nous</h3>
          <div class="contact-methods">
            <a href="https://wa.me/+123456789" target="_blank" class="contact-item">
              <i class="mdi mdi-whatsapp"></i>
            </a>
            <a href="tel:+123456789" class="contact-item">
              <i class="mdi mdi-phone"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" class="contact-item">
              <i class="mdi mdi-facebook"></i>
            </a>
          </div>
        </div>
      </div>
  
      <!-- Copyright en bas -->
      <div class="footer-copyright">
        <p>&copy; {{ new Date().getFullYear() }} Jardeco. Tous droits réservés. Site web réalisé par Heck.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  .site-footer {
    background-color: #D4DFD4;
    color: white;
    padding: 2rem 1rem;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Logo */
  .footer-logo {
    width: 20%;
    display: flex;
    justify-content: center; /* Centre horizontalement l'image */
    align-items: center; /* Centre verticalement */
  }
  
  .footer-logo img {
    width: 120px;
  }
  
  /* Services */
  .footer-services {
    flex: 1 1 50%; /* Prend 50% de la largeur */
    text-align: center; /* Centre horizontalement */
    margin: auto; /* Centre verticalement */
  }
  
  .footer-services h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  .services-list {
  list-style: none;
  padding: 0;
  display: grid; /* Active la grille */
  grid-template-columns: repeat(2, 1fr); /* Définit deux colonnes égales */
  gap: 0.5rem 1.5rem; /* Espacement entre les lignes et colonnes */
  justify-content: center; /* Centre la grille horizontalement */
  max-width: 500px; /* Optionnel : limite la largeur de la liste */
  margin: 0 auto; /* Centre la liste horizontalement */
  margin-left: 100px;
}

  .services-list li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  
  .services-list .bullet {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #dfe49b; /* Couleur de la puce */
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  
  /* Contact */
  .footer-contact {
    flex: 1 1 25%; /* Prend 25% de la largeur */
    text-align: center;
  }
  
  .footer-contact h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  .contact-methods {
    display: flex;
    gap: 1.5rem; /* Espacement entre les icônes */
    justify-content: center;
    align-items: center;
  }
  
  .contact-item {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .contact-item i {
    font-size: 1.8rem; /* Taille des icônes augmentée */
  }
  
  .contact-item:hover {
    color: #3b8f3d;
  }
  
  /* Copyright */
  .footer-copyright {
    margin-top: 1.5rem;
    text-align: center;
    font-size: 0.8rem;
    color: #dfe49b;
  }
  
  /* Responsiveness */
  @media (max-width: 1000px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  
    .footer-services,
    .footer-contact {
      text-align: center;
      align-items: center;
      margin: 0px;
    }

    .services-list {
        margin: 0px;
    }
  
    .contact-methods {
      justify-content: center;
      gap: 1rem; /* Réduit l'espacement entre les icônes */
    }
  }
  </style>
  
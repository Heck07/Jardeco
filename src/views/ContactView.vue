<template>
    <div class="contact-page">
        <section class="hero" >
            <h1 class="hero-title" 
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="500"
                data-aos-offset="0">
                Contactez Nous !
            <p class="hero-description">Nous intervenons dans le département de l'Ardèche, plus précisément aux alentours de Aubenas. N'hésitez pas à nous contacter par téléphone</p>
            </h1>
        </section>
  
      <!-- Section des étapes pour réaliser un projet -->
      <section class="steps-section">
        <h4 class="section-title" data-aos="fade-zoom-in" data-aos-duration="1000" :data-aos-delay="isMobile ? 600 : index * 0">Les étapes pour réaliser votre projet</h4>
        <div class="steps-container">
          <div class="step-box" data-aos="fade-up" v-for="(step, index) in steps" :key="index">
            <div class="step-number">0{{ index + 1 }}</div>
            <h4 class="step-title">{{ step.title }}</h4>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </section>

        <!-- Bouton Call to Action -->
    <div class="cta-button-container">
      <a class="cta-button" href="tel:123456789"><i class="mdi mdi-phone"></i>06 25 33 55 45</a>
      <p class="or">ou</p>
    </div>
    

  
      <!-- Formulaire de Contact -->
      <section class="contact-form-section">
        <h4 class="section-title">Nous Contacter</h4>
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Votre Nom *</label>
            <input type="text" id="name" v-model="form.name" placeholder="Entrez votre nom" required />
          </div>
          <div class="form-group">
            <label for="email">Votre Email *</label>
            <input type="email" id="email" v-model="form.email" placeholder="Entrez votre email" required />
          </div>
          <div class="form-group">
            <label for="phone">Votre Téléphone</label>
            <input type="tel" id="phone" v-model="form.phone" placeholder="Entrez votre numéro de téléphone" />
          </div>
          <!-- Liste des choix d'intervention -->
        <div class="form-group">
          <label for="intervention">Type d'Intervention *</label>
          <select id="intervention"  v-model="form.intervention" required>
            <option value="" disabled selected>Choisissez une option</option>
            <option value="creation">Création d'espaces extérieurs</option>
            <option value="entretien">Entretien de mon espace</option>
            <option value="elagage">Élagage et Abattement</option>
          </select>
        </div>
          <div class="form-group">
            <label for="message">Votre Message *</label>
            <textarea id="message" v-model="form.message" placeholder="Entrez votre message" required></textarea>
          </div>
          <button type="submit" class="submit-button">Envoyer</button>
        </form>
      </section>
  
      <!-- Section FAQ (optionnelle) -->
      <section class="faq-section">
        <h4 class="faq-title">Questions fréquentes</h4>
        <div class="faq-container">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <h4 class="faq-question" @click="toggleFAQ(index)">
              {{ faq.question }}
            </h4>
            <p v-show="faq.open" class="faq-answer">{{ faq.answer }}</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import AOS from "aos";
  export default {
    name: "ContactView",
    data() {
      return {
        steps: [
            {
                title: "Première rencontre",
                description: "Contactez-nous pour exprimer vos besoins et partager vos idées. Nous discuterons de vos attentes pour poser les bases d'un projet sur mesure qui vous correspond."
            },
            {
                title: "Élaboration du devis",
                description: "Nous analysons vos demandes et les caractéristiques de votre projet afin de vous proposer un devis personnalisé, transparent et adapté à vos objectifs."
            },
            {
                title: "Réalisation du projet",
                description: "Notre équipe met son expertise à votre service pour concrétiser votre projet, en alliant professionnalisme, soin et respect des délais convenus."
            },
            {
                title: "Suivi",
                description: "Nous restons disponibles après la réalisation pour répondre à vos questions, effectuer des ajustements ou envisager des améliorations futures."
            }
            ],
        form: {
          name: "",
          email: "",
          phone: "",
          message: ""
        },
        faqs: [
          { question: "Quels types de projets réalisez-vous ?", answer: "Nous nous spécialisons dans l'aménagement paysager, l'élagage, et bien plus.", open: false },
          { question: "Quels sont vos délais ?", answer: "Les délais dépendent du type de projet. Contactez-nous pour plus d'informations.", open: false },
          { question: "Comment obtenir un devis ?", answer: "Utilisez le formulaire ci-dessus pour nous contacter, et nous reviendrons vers vous rapidement.", open: false }
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
      submitForm() {
        console.log("Formulaire envoyé :", this.form);
        alert("Merci de nous avoir contactés !");
      },
      toggleFAQ(index) {
        this.faqs[index].open = !this.faqs[index].open;
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-page {
    background-color: #F8F8F8;
    overflow:hidden;
  }
  /* Hero Section */
  .hero {
  color: white;
  text-align: center;
  height: 50vh;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-color: #D4DFD4;
  border-bottom-right-radius: 100% 30%; /* Courbure progressive */
}

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
  .hero-description {
    font-size: 18px;
  }
  /* Steps Section */
  .steps-section {
    background-color: #f8f8f8;
    padding: 50px 10%;
    padding-bottom: 0px;
    text-align: center;
  }
  
  .steps-container {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    flex-wrap: wrap;
  }
  
  .step-box {
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    text-align: left;
  }
  
  .step-number {
    font-size: 60px;
    text-align: left;
    color: #dfe49b;
    font-weight: bold;
  }
  
  .step-title {
    font-size: 20px;
    margin: 10px 0;
    color: #3b4635de;
  }
  
  .step-description {
    font-size: 16px;
    color: #264e2c;
    margin-top: 25px;
  }

  .mdi-phone {
    padding-right: 20px;
    font-size: 16px;
    position: relative;
    top: 1px
}
  
  /* Form Section */
  .contact-form-section {
    padding: 50px 30%;
    text-align: center;
    background-color: #D4DFD4;
    border-top-left-radius: 100% 15%; /* Courbure progressive */
  }

  .contact-form-section .section-title {
    margin-top: 50px;
  }
  
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #3b4635de;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .submit-button {
    background-color: #264E2C;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #3b8f3d;
  }
  
  /* FAQ Section */
  .faq-section {
    padding: 50px 10%;
    background-color: #fff;
  }
  .faq-title {
    font-size: 25px;
    margin-bottom: 50px;
  }
  .faq-container {
    max-width: 800px;
    margin: 0 auto;
    
  }
  
  .faq-item {
    margin-bottom: 20px;
    
  }
  
  .faq-question {
    font-weight: bold;
    cursor: pointer;
    font-size: 22px;
  }
  
  .faq-answer {
    font-size: 16px;
    margin-top: 10px;
  }

  .step-title::after {
  content: "";
  position: absolute;
  bottom: -10px; /* Décale la barre de 10px sous le titre */
  left: 25px;
  transform: translateX(-50%);
  width: 50px; /* Largeur de la barre */
  height: 2px; /* Hauteur de la barre */
  background-color: #9db33e; /* Couleur verte */
  border-radius: 2px; /* Arrondi les bords de la barre */
}

@media (max-width: 795px) {
  .hero {
    border-bottom-right-radius: 100% 7%; /* Courbure progressive */
  }
  
  .contact-form-section {
    padding: 20px 15%;
    border-top-left-radius: 100% 7%; /* Courbure progressive */
  }

  .contact-form-section .section-title {
    margin-top: 80px;
    font-size: 2rem;
  }
  
  .cta-button-container {
    top: 97px;
  }
  .or {
    margin-bottom: 20px;
  }
}
  </style>
  
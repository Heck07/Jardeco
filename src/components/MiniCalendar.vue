    <template>
        <div
        v-show="isVisible"
        class="calendar-wrapper"
        :style="{ top: `${top}px`, left: `${left}px` }"
        >
        <div class="calendar-container">
            <!-- En-tête du calendrier -->
            <div class="calendar-header">
            <button @click="previousMonth" class="nav-button">←</button>
            <span class="month-display">{{ getMonthName() }}</span>
            <button @click="nextMonth" class="nav-button">→</button>
            </div>
    
            <!-- Initiales des jours de la semaine -->
            <div class="weekdays">
            <div class="weekday-name" v-for="day in ['L', 'M', 'M', 'J', 'V', 'S', 'D']" :key="day">
                {{ day }}
            </div>
            </div>
    
            <!-- Grille des jours -->
            <div class="days-grid">
            <div
                v-for="(day, index) in daysInMonth"
                :key="index"
                :class="['day', { 'weekday': day && !day.isWeekend, 'weekend': day && day.isWeekend }]"
            >
                {{ day ? day.date.getDate() : '' }}
            </div>
            </div>
        </div>
        </div>
    </template>
    
    <script>
    export default {
    props: {
        isVisible: {
        type: Boolean,
        required: true,
        },
        top: {
        type: Number,
        required: true,
        },
        left: {
        type: Number,
        required: true,
        },
    },
    data() {
        return {
        currentMonth: new Date().getMonth(), // Mois actuel (0-11)
        currentYear: new Date().getFullYear(), // Année actuelle
        daysInMonth: [], // Liste des jours (inclut placeholders)
        };
    },
    methods: {
        // Génère les jours du mois avec placeholders pour alignement
        generateDays() {
        const days = [];
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    
        // Placeholders pour aligner le 1er jour au bon jour de la semaine
        const firstDayIndex = (firstDay.getDay() + 6) % 7; // Convertir Dimanche (0) -> Samedi (6)
        for (let i = 0; i < firstDayIndex; i++) {
            days.push(null); // Cellules vides
        }
    
        // Ajouter les jours du mois
        for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
            days.push({
            date: new Date(day),
            isWeekend: day.getDay() === 0 || day.getDay() === 6, // 0 = Dimanche, 6 = Samedi
            });
        }
    
        this.daysInMonth = days;
        },
    
        // Passe au mois suivant
        nextMonth() {
        if (this.currentMonth === 11) {
            this.currentMonth = 0;
            this.currentYear++;
        } else {
            this.currentMonth++;
        }
        this.generateDays();
        },
    
        // Revient au mois précédent (optionnel)
        previousMonth() {
        if (this.currentMonth === 0) {
            this.currentMonth = 11;
            this.currentYear--;
        } else {
            this.currentMonth--;
        }
        this.generateDays();
        },
        getMonthName() {
            const month = new Date(this.currentYear, this.currentMonth).toLocaleString("default", {
                month: "long",
            });
            return month.charAt(0).toUpperCase() + month.slice(1);
            }
    },
    mounted() {
        this.generateDays(); // Génère les jours lors du montage du composant
    },
    };
    </script>
    
    <style scoped>
    .calendar-wrapper {
    position: absolute;
    z-index: 2000;
    background: white;
    border-radius: 8px;
    margin-top: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 0.8rem; /* Réduit la marge intérieure */
    transform: translateX(-50%);
    min-width: 187px; /* Réduit la largeur */
    }

    .calendar-container {
    text-align: center;
    }

    .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px; /* Taille réduite */
    }

    .nav-button {
    background-color: #394733;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 4px 8px; /* Réduit la taille des boutons */
    cursor: pointer;
    font-size: 12px;
    transition: background-color 0.3s ease;
    }

    .nav-button:hover {
    background-color: #3b8f3d;
    }

    .month-display {
    font-weight: bold;
    font-size: 14px; /* Taille réduite */
    color: black;
    }

    .weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 3px; /* Réduit l'espacement entre les jours */
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 12px; /* Réduction des initiales */
    }

    .weekday-name {
    text-align: center;
    color: #394733;
    }

    .days-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 3px; /* Réduit l'espacement entre les jours */
    }

    .day {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px; /* Taille réduite */
    width: 30px; /* Taille réduite */
    border-radius: 50%;
    font-size: 12px; /* Taille réduite */
    }

    .weekday {
    background-color: #d4edda; /* Vert clair */
    color: #155724; /* Vert foncé */
    }

    .weekend {
    background-color: #f8d7da; /* Rouge clair */
    color: #721c24; /* Rouge foncé */
    }
    /* Réduction pour mobile */
    @media (max-width: 800px) {
    .calendar-wrapper {
        padding: 0.4rem; /* Réduit la marge intérieure */
        min-width: 125px; /* Réduit la largeur */
        font-size: 50%; /* Réduit la taille globale */
    }

    .calendar-header {
        font-size: 12px;
    }

    .nav-button {
        padding: 2px 4px;
        font-size: 10px;
    }

    .month-display {
        font-size: 12px;
    }

    .weekdays {
        gap: 2px;
        font-size: 10px;
    }

    .day {
        height: 20px;
        width: 20px;
        font-size: 10px;
    }
}
</style>
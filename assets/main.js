var app = new Vue({
    el: '#app',
    data: {
        title: "Développeur Web et Web mobile",
        name: "Paimblanc",
        firstname: "Cédric",
        personalInfo: [

            { text: "28 Octobre 1991 (30ans)" },
            { text: "cedric.p14@free.fr" },
            { text: "www.linkedin.com/in/cédric-paimblanc-17465018" },
            { text: "Voiture + permis B" },
            { text: "0626577421" },
            { text: "Français" }
        ],
        competences: {

            technical: [
                { text: "Création de sites web statiques et dynamiques                        " },
                { text: "Développement d’applications" },
                { text: "Utiliser l’environnement Linux et Windows" },
                { text: "Réaliser une documentation utilisateur" },
                { text: "Analyse (Merise,UML)" },
                { text: "Travailler en méthodes(Agile)" },
                { text: "Gestion de bases de données (MySqL)" },
                { text: "Architecture MVC" },
                { text: "Programmation Orienté Objet" },
            ],
            personal: [
                { text: "Adaptable, autonome, autodidacte" },
                { text: "Sens de l’observation, pédagogie" },
                { text: "Capacité d’analyse, réponse à une demande précise, relation client" },
            ],
            programLang: [
                { lang: "Html5" },
                { lang: "CSS3" },
                { lang: "Javascript" },
                { lang: "Java" },
                { lang: "PHP" },
                { lang: "Python" },
                { lang: "SQL" },
                { lang: "Latex" },
                { lang: "Git" }
            ],

            framework: [

            ]
        }




    }
})
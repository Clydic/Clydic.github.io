var app = new Vue({
    el: '#app',
    data: {
        title: "Développeur Web et Web mobile",
        name: "Paimblanc",
        firstname: "Cédric",
        langs: [
            { lang: "Anglais", lvl: "Intermédiaire" },
            { lang: "Espagnole", lvl: "Débutant" },
        ],
        personalInfo: [

            { text: "28 Octobre 1991 (30ans)" },
            { text: "cedric.p14@free.fr" },
            { text: "www.linkedin.com/in/cédric-paimblanc-17465018" },
            { text: "Voiture + permis B" },
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

            frameworks: [
                { framework: "Bootstrap" },
                { framework: "Jquery" },
                { framework: "Symfony" },
                { framework: "Vuejs" },

            ],
            softwares: [

                { software: "Visual Studio Code" },
                { software: "JMerise" },
                { software: "Trello" },
                { software: "PHP-MyAdmin" },
                { software: "Vim" },
                { software: "Android Studio" },
                { software: "Github" },
                { software: "" },
            ]
        },
        stage: [{
                year: "2021-2022",
                title: "Titre Profesionnel",
                location: "AFPA de Ifs(14)"
            },
            {
                year: "2016-2017",
                title: "M1 MEEF 2nd degré de Mathématiques",
                location: "ESPE de Caen"
            },
            {
                year: "2015-2016",
                title: "M1 MEEF 2nd degré de Mathématiques",
                location: "ESPE de Caen"
            },
            {
                year: "",
                title: "Licence de Mathématiques",
                location: "Université de Caen (14)"
            },
        ]




    }
})
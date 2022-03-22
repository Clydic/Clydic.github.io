var app = new Vue({
    el: '#app',
    data: {
        title: "Développeur Web et Web mobile",
        name: "Paimblanc",
        firstname: "Cédric",
        langs: [
            { lang: "Anglais", lvl: "Intermédiaire" },
            { lang: "Espagnol", lvl: "Débutant" },
        ],
        personalInfo: [

            { text: "28 Octobre 1991 (30ans)" },
            { text: "cedric.p14@free.fr" },
            { text: "www.linkedin.com/in/cédric-paimblanc-17465018" },
            { text: "Voiture + permis B" },
            //{ text: "Français" }
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
                { lang: "CSS3 (Bootstrap)" },
                { lang: "Javascript (VueJs)" },
                { lang: "Java" },
                { lang: "PHP (Symfony)" },
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
            ]
        },
        stages: [{
                year: "2021-2022",
                title: "Titre Professionnel",
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
                year: "2015-2016",
                title: "Licence de Mathématiques",
                location: "Université de Caen (14)"
            },
        ],
        jobs: [

            {
                postTitle: "Développeur stagiaire",
                date: "12/2021-02/2022 (9 semaines)",
                location: "Louvigny(14)",
                company: "Agence 88"
            },
            {
                postTitle: "Équipier polyvalent",
                date: "2010-2020",
                location: "Pontorson(50),Ifs(14)",
                company: "McDonald's"
            },
        ],




    }
})
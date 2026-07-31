/**
 * Catalogue des realisations affichees dans la galerie filtrable.
 * Les devoirs 1 et 2 du cours y figurent, comme l'exige l'enonce, aux cotes
 * du projet de session.
 * LOG3500 - ISTEAH - Ete 2026 - equipe Charles / Olibrice / Jean Baptiste.
 */
export const projets = [
  {
    id: 'devoir-1',
    titre: {
      fr: 'Devoir 1 — Page d’inscription HTML5 et CSS3',
      en: 'Assignment 1 — HTML5 and CSS3 registration page'
    },
    resume: {
      fr: 'Formulaire d’inscription en HTML5 sémantique et CSS3 pur, sans framework ni bibliothèque tierce.',
      en: 'Registration form in semantic HTML5 and pure CSS3, without any framework or third-party library.'
    },
    contexte: {
      fr: "Premier devoir du cours LOG3500. L'objectif était de maîtriser la structure sémantique d'un document HTML5 et la mise en page en CSS pur : hiérarchie des titres, repères de navigation, labels de formulaire correctement associés à leurs champs et mise en page adaptée aux écrans mobiles.",
      en: 'First assignment of the LOG3500 course. The goal was to master the semantic structure of an HTML5 document and pure CSS layout: heading hierarchy, navigation landmarks, form labels properly associated with their fields and a layout adapted to mobile screens.'
    },
    contribution: {
      fr: 'Rédaction du balisage sémantique, conception de la mise en page responsive et vérification des contrastes de couleurs.',
      en: 'Semantic markup, responsive layout design and colour-contrast verification.'
    },
    technologies: ['HTML5', 'CSS3', 'Accessibilité'],
    annee: 2026,
    lienDepot: 'https://github.com/Leo-7dev/devoir1-inscription',
    couleur: '#2563eb'
  },
  {
    id: 'devoir-2',
    titre: {
      fr: 'Devoir 2 — Atlas mondial',
      en: 'Assignment 2 — World Atlas'
    },
    resume: {
      fr: 'Application interactive affichant la fiche d’identité d’un pays à partir de l’API REST Countries.',
      en: 'Interactive application displaying a country profile card fetched from the REST Countries API.'
    },
    contexte: {
      fr: "Deuxième devoir du cours. L'utilisateur recherche un pays par un formulaire ; l'application interroge la version 3.1 de l'API publique REST Countries avec fetch et async/await, puis compose dynamiquement une carte d'identité : drapeau, capitale, population formatée, région, monnaies et langues. La mise en page emploie Flexbox, CSS Grid et des requêtes média ; un indicateur de chargement animé et la gestion des erreurs réseau complètent l'expérience.",
      en: 'Second assignment of the course. The user searches for a country through a form; the application queries version 3.1 of the public REST Countries API with fetch and async/await, then dynamically composes a profile card: flag, capital, formatted population, region, currencies and languages. The layout uses Flexbox, CSS Grid and media queries; an animated loading indicator and network error handling complete the experience.'
    },
    contribution: {
      fr: 'Consommation asynchrone de l’API, injection des données par textContent uniquement — aucune insertion de HTML brut, donc aucun risque d’injection —, validation accessible du formulaire et conformité W3C vérifiée.',
      en: 'Asynchronous API consumption, data injection through textContent only — no raw HTML insertion, hence no injection risk —, accessible form validation and verified W3C compliance.'
    },
    technologies: ['JavaScript ES2022', 'API REST', 'HTML5', 'CSS3', 'Accessibilité'],
    annee: 2026,
    lienDepot: 'https://github.com/Leo-7dev/atlas-mondial',
    couleur: '#7c3aed'
  },
  {
    id: 'projet-session',
    titre: {
      fr: 'Projet de session — Portfolio full-stack',
      en: 'Term project — Full-stack portfolio'
    },
    resume: {
      fr: 'Application monopage React servie par Express, déployée en continu sur Railway.',
      en: 'React single-page application served by Express, continuously deployed on Railway.'
    },
    contexte: {
      fr: "Le présent portfolio. Il réunit un client React construit avec Vite (composants modulaires, React Router v6, Context API) et un serveur Node.js/Express qui sert le build de production et intercepte le formulaire de contact.",
      en: 'This very portfolio. It combines a React client built with Vite (modular components, React Router v6, Context API) and a Node.js/Express server that serves the production build and intercepts the contact form.'
    },
    contribution: {
      fr: 'Travail collectif : intégration et accessibilité, architecture des composants et routage, serveur Express et déploiement continu.',
      en: 'Collective work: integration and accessibility, component architecture and routing, Express server and continuous deployment.'
    },
    technologies: ['React 18', 'Vite', 'React Router v6', 'Node.js', 'Express', 'Railway'],
    annee: 2026,
    lienDepot: 'https://github.com/Leo-7dev/portfolio-log3500',
    couleur: '#0891b2'
  },
  {
    id: 'api-github',
    titre: {
      fr: 'Passerelle API GitHub',
      en: 'GitHub API gateway'
    },
    resume: {
      fr: 'Module de récupération asynchrone des statistiques publiques des dépôts de l’équipe.',
      en: 'Asynchronous fetching module for the team’s public repository statistics.'
    },
    contexte: {
      fr: "Crochet React dédié qui interroge l'API REST publique de GitHub avec fetch et useEffect. Il gère les trois états d'un appel réseau (chargement, succès, erreur) et annule proprement la requête si le composant est démonté.",
      en: 'A dedicated React hook querying the public GitHub REST API with fetch and useEffect. It handles the three states of a network call (loading, success, error) and cleanly aborts the request if the component unmounts.'
    },
    contribution: {
      fr: 'Conception du crochet useStatistiquesGitHub, gestion des états réseau et des indicateurs de chargement.',
      en: 'Design of the useStatistiquesGitHub hook, network state handling and loading indicators.'
    },
    technologies: ['API REST GitHub', 'JavaScript ES2022', 'React 18'],
    annee: 2026,
    lienDepot: 'https://github.com/Leo-7dev/portfolio-log3500',
    couleur: '#059669'
  },
  {
    id: 'serveur-contact',
    titre: {
      fr: 'Service de contact Express',
      en: 'Express contact service'
    },
    resume: {
      fr: 'Route POST validée et persistance de l’historique des messages dans un fichier JSON.',
      en: 'Validated POST route and message-history persistence in a JSON file.'
    },
    contexte: {
      fr: "Route POST /api/contact du serveur d'application. Elle vérifie la présence et le format des champs reçus (dont l'adresse de courriel), rejette les charges invalides avec un code 400 explicite et ajoute les messages valides à messages.json.",
      en: 'The application server’s POST /api/contact route. It checks the presence and format of the received fields (including the email address), rejects invalid payloads with an explicit 400 code and appends valid messages to messages.json.'
    },
    contribution: {
      fr: 'Développement de la route, des fonctions de validation serveur et de la couche de persistance sur le système de fichiers.',
      en: 'Route development, server-side validation functions and the file-system persistence layer.'
    },
    technologies: ['Node.js', 'Express', 'API REST'],
    annee: 2026,
    lienDepot: 'https://github.com/Leo-7dev/portfolio-log3500',
    couleur: '#d97706'
  },
  {
    id: 'chaine-deploiement',
    titre: {
      fr: 'Chaîne de déploiement Railway',
      en: 'Railway deployment pipeline'
    },
    resume: {
      fr: 'Build et déploiement automatiques à chaque intégration sur la branche principale.',
      en: 'Automatic build and deployment on every push to the main branch.'
    },
    contexte: {
      fr: "La plateforme Railway est connectée au dépôt GitHub public de l'équipe. Chaque commit poussé sur main déclenche « npm run build » puis « npm start », le serveur écoutant sur le port dynamique fourni par l'hôte.",
      en: 'The Railway platform is connected to the team’s public GitHub repository. Every commit pushed to main triggers "npm run build" then "npm start", with the server listening on the dynamic port provided by the host.'
    },
    contribution: {
      fr: 'Configuration de l’hébergement, des variables d’environnement et de l’automatisation du build.',
      en: 'Hosting configuration, environment variables and build automation.'
    },
    technologies: ['Railway', 'Git / GitHub', 'Node.js'],
    annee: 2026,
    lienDepot: 'https://github.com/Leo-7dev/portfolio-log3500',
    couleur: '#be123c'
  }
];

/**
 * Construit la liste dedupliquee des technologies presentes dans le catalogue.
 * Elle alimente les boutons de filtrage de la galerie.
 */
export function listerTechnologies() {
  const ensemble = new Set();
  projets.forEach((projet) => {
    projet.technologies.forEach((techno) => ensemble.add(techno));
  });
  return Array.from(ensemble).sort((a, b) => a.localeCompare(b, 'fr'));
}

export default projets;
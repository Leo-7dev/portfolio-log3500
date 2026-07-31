/**
 * Catalogue des realisations affichees dans la galerie filtrable.
 * Les devoirs 1 et 2 du cours y figurent, comme l'exige l'enonce, aux cotes
 * du projet de session.
 *
 * >>> A PERSONNALISER : liens du depot, captures et descriptions reelles. <<<
 */
export const projets = [
  {
    id: 'devoir-1',
    titre: { fr: 'Devoir 1 — Site statique sémantique', en: 'Assignment 1 — Semantic static site' },
    resume: {
      fr: 'Site multipage en HTML5 et CSS3 pur, validé par le W3C et adapté aux écrans mobiles.',
      en: 'Multi-page site in pure HTML5 and CSS3, W3C-validated and adapted to mobile screens.'
    },
    contexte: {
      fr: "Premier devoir du cours LOG3500. L'objectif était de maîtriser la structure sémantique d'un document HTML5 et la mise en page en CSS pur, sans recours à un framework. Chaque page respecte la hiérarchie des titres et les repères de navigation.",
      en: 'First assignment of the LOG3500 course. The goal was to master the semantic structure of an HTML5 document and pure CSS layout, without resorting to a framework. Every page respects heading hierarchy and navigation landmarks.'
    },
    contribution: {
      fr: 'Rédaction du balisage sémantique, conception de la grille responsive et vérification des contrastes de couleurs.',
      en: 'Semantic markup, responsive grid design and colour-contrast verification.'
    },
    technologies: ['HTML5', 'CSS3', 'Accessibilité'],
    annee: 2026,
    lienDepot: 'https://github.com/ORGANISATION/devoir-1',
    couleur: '#2563eb'
  },
  {
    id: 'devoir-2',
    titre: { fr: 'Devoir 2 — Interactivité JavaScript', en: 'Assignment 2 — JavaScript interactivity' },
    resume: {
      fr: 'Manipulation du DOM, gestion des événements et validation de formulaires en JavaScript natif.',
      en: 'DOM manipulation, event handling and form validation in vanilla JavaScript.'
    },
    contexte: {
      fr: "Deuxième devoir du cours. L'application ajoute une couche d'interactivité au site du devoir 1 : filtrage de contenus, validation de saisies et affichage conditionnel, sans bibliothèque tierce.",
      en: 'Second assignment. The application adds an interactivity layer to the assignment 1 site: content filtering, input validation and conditional display, without third-party libraries.'
    },
    contribution: {
      fr: 'Écriture des gestionnaires d’événements, des fonctions de validation et de la logique de filtrage.',
      en: 'Event handlers, validation functions and filtering logic.'
    },
    technologies: ['JavaScript ES2022', 'DOM', 'HTML5'],
    annee: 2026,
    lienDepot: 'https://github.com/ORGANISATION/devoir-2',
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
    lienDepot: 'https://github.com/ORGANISATION/portfolio-log3500',
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
    lienDepot: 'https://github.com/ORGANISATION/portfolio-log3500',
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
    lienDepot: 'https://github.com/ORGANISATION/portfolio-log3500',
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
    lienDepot: 'https://github.com/ORGANISATION/portfolio-log3500',
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

/**
 * Fiches des membres de l'equipe.
 * LOG3500 - Projet de session - ISTEAH - Ete 2026
 *
 * >>> IL RESTE DEUX VALEURS A COMPLETER <
 * Les constantes PSEUDO_MEMBRE_2 et PSEUDO_MEMBRE_3 doivent recevoir les
 * identifiants GitHub reels de Weslay et d'Adley. Ce sont eux qui alimentent
 * l'appel a l'API REST publique de GitHub sur la page Equipe. Tant qu'ils sont
 * vides, le bloc de statistiques ne s'affiche pas pour le membre concerne
 * (aucune erreur n'est montree a l'utilisateur).
 */

// ---------------------------------------------------------------------------
// Identifiants GitHub de l'equipe
// ---------------------------------------------------------------------------
const PSEUDO_MEMBRE_1 = 'Leo-7dev';
const PSEUDO_MEMBRE_2 = ''; // <-- pseudo GitHub de Weslay Olibrice
const PSEUDO_MEMBRE_3 = ''; // <-- pseudo GitHub d'Adley Jean Baptiste

export const membres = [
  {
    id: 'membre-1',
    nom: 'Fils Léonel Charles',
    role: {
      fr: 'Intégration sémantique, charte visuelle et accessibilité',
      en: 'Semantic integration, visual identity and accessibility'
    },
    ensembleTaches: 'Ensemble de tâches 1',
    pseudoGitHub: PSEUDO_MEMBRE_1,
    courriel: 'leonel.charlesfils@gmail.com',
    photo: '/membres/membre-1.jpeg',
    bio: {
      fr: "Responsable de la structure HTML5 sémantique de tous les composants, de la mise en page responsive en CSS pur (Flexbox et Grid, sans framework) et de la conformité aux règles d'accessibilité numérique : contrastes de couleurs, labels de formulaires et attributs ARIA. A également implémenté la bascule de styles visuels par variables CSS entre le mode clair et le mode sombre.",
      en: 'Responsible for the semantic HTML5 structure of every component, the responsive layout in pure CSS (Flexbox and Grid, no framework) and compliance with digital accessibility rules: colour contrast, form labels and ARIA attributes. Also implemented the visual theme switch between light and dark mode through CSS variables.'
    },
    competences: [
      'HTML5 sémantique',
      'CSS Grid',
      'Flexbox',
      'WCAG / ARIA',
      'Design responsive'
    ]
  },
  {
    id: 'membre-2',
    nom: 'Weslay Olibrice',
    role: {
      fr: 'Architecture client, composants et routage React',
      en: 'Client architecture, components and React routing'
    },
    ensembleTaches: 'Ensemble de tâches 2',
    pseudoGitHub: PSEUDO_MEMBRE_2,
    courriel: '',
    photo: '/membres/membre-2.jpeg',
    bio: {
      fr: "A initialisé l'application avec l'outil Vite et défini l'arborescence des répertoires du projet. A programmé et empaqueté l'ensemble des composants graphiques de l'interface — cartes de présentation, menus, boutons —, configuré le routeur React Router v6 et développé la validation dynamique côté client du formulaire de contact.",
      en: 'Initialised the application with Vite and defined the project directory tree. Built and packaged every graphical component of the interface — presentation cards, menus, buttons —, configured the React Router v6 router and developed the dynamic client-side validation of the contact form.'
    },
    competences: [
      'React 18',
      'Vite',
      'React Router v6',
      'Hooks',
      'Composants réutilisables'
    ]
  },
  {
    id: 'membre-3',
    nom: 'Adley Jean Baptiste',
    role: {
      fr: 'Développement serveur, interconnexion API et DevOps',
      en: 'Server development, API integration and DevOps'
    },
    ensembleTaches: 'Ensemble de tâches 3',
    pseudoGitHub: PSEUDO_MEMBRE_3,
    courriel: '',
    photo: '/membres/membre-3.jpeg',
    bio: {
      fr: "A programmé le serveur d'application Node.js/Express, créé la route POST /api/contact et géré la persistance des messages reçus dans un fichier JSON local. Assure la gestion du dépôt Git — résolution des conflits, revues de code, fusions — ainsi que le déploiement continu de l'application sur la plateforme Railway.",
      en: 'Built the Node.js/Express application server, created the POST /api/contact route and handled persistence of incoming messages in a local JSON file. Manages the Git repository — conflict resolution, code reviews, merges — as well as the continuous deployment of the application on the Railway platform.'
    },
    competences: ['Node.js', 'Express', 'API REST', 'Git / GitHub', 'Railway / CI-CD']
  }
];

/**
 * Competences collectives affichees sur la page d'accueil.
 */
export const competencesCollectives = [
  {
    id: 'frontend',
    titre: { fr: 'Développement frontend', en: 'Frontend development' },
    description: {
      fr: 'Composants React modulaires, hooks useState et useEffect, navigation sans rechargement avec React Router v6.',
      en: 'Modular React components, useState and useEffect hooks, reload-free navigation with React Router v6.'
    }
  },
  {
    id: 'integration',
    titre: { fr: 'Intégration et accessibilité', en: 'Integration and accessibility' },
    description: {
      fr: 'HTML5 sémantique validé par le W3C, mise en page CSS pure en Flexbox et Grid, contrastes et attributs ARIA vérifiés.',
      en: 'W3C-validated semantic HTML5, pure CSS layout with Flexbox and Grid, verified contrast ratios and ARIA attributes.'
    }
  },
  {
    id: 'backend',
    titre: { fr: 'Développement serveur', en: 'Server development' },
    description: {
      fr: 'Serveur Node.js/Express, routes API REST, validation des données reçues et persistance dans un fichier JSON.',
      en: 'Node.js/Express server, REST API routes, validation of incoming data and persistence in a JSON file.'
    }
  },
  {
    id: 'devops',
    titre: { fr: 'Pratiques DevOps', en: 'DevOps practices' },
    description: {
      fr: 'Versionnage collaboratif sous Git et GitHub, planification sur GitHub Projects, déploiement automatisé sur Railway.',
      en: 'Collaborative versioning with Git and GitHub, planning on GitHub Projects, automated deployment on Railway.'
    }
  }
];

export const pileTechnologique = [
  'React 18',
  'React Router v6',
  'Context API',
  'Vite',
  'JavaScript ES2022',
  'HTML5',
  'CSS3 (Flexbox / Grid)',
  'Node.js',
  'Express',
  'API REST GitHub',
  'Git / GitHub',
  'Railway'
];

export default membres;
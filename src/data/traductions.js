/**
 * Dictionnaires de libelles pour la bascule de langue diffusee par Context API.
 * Toute chaine affichee dans l'interface passe par la fonction t() du contexte.
 */
export const traductions = {
  fr: {
    'nav.accueil': 'Accueil',
    'nav.equipe': 'Équipe',
    'nav.projets': 'Projets',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu principal',
    'nav.evitement': 'Aller au contenu principal',

    'entete.titre': 'Portfolio d’équipe',
    'entete.sousTitre': 'LOG3500 — ISTEAH',
    'entete.themeClair': 'Activer le mode clair',
    'entete.themeSombre': 'Activer le mode sombre',
    'entete.langue': 'Switch to English',

    'accueil.surtitre': 'Portfolio professionnel collectif',
    'accueil.titre': 'Nous concevons des applications Web full-stack',
    'accueil.intro':
      'Ce portfolio est une application monopage React servie par un serveur Node.js/Express et déployée en continu sur Railway. Il présente notre équipe, nos compétences et nos réalisations du cours LOG3500.',
    'accueil.ctaProjets': 'Voir nos réalisations',
    'accueil.ctaContact': 'Nous écrire',
    'accueil.competences': 'Compétences collectives',
    'accueil.pile': 'Pile technologique',
    'accueil.chiffres': 'L’équipe en chiffres',
    'accueil.chiffreMembres': 'Membres',
    'accueil.chiffreProjets': 'Réalisations',
    'accueil.chiffreTechnos': 'Technologies',

    'equipe.titre': 'Notre équipe',
    'equipe.intro':
      'Trois étudiants, trois ensembles de tâches complémentaires, un seul dépôt Git.',
    'equipe.competences': 'Compétences',
    'equipe.profilGitHub': 'Profil GitHub',
    'equipe.statsTitre': 'Activité GitHub en direct',
    'equipe.statsIntro':
      'Données récupérées de façon asynchrone depuis l’API REST publique de GitHub.',
    'equipe.depots': 'Dépôts publics',
    'equipe.abonnes': 'Abonnés',
    'equipe.membreDepuis': 'Membre depuis',

    'projets.titre': 'Nos réalisations',
    'projets.intro':
      'Galerie dynamique filtrable. Les devoirs 1 et 2 du cours y figurent aux côtés du projet de session.',
    'projets.filtrer': 'Filtrer par technologie',
    'projets.tous': 'Tous',
    'projets.aucun': 'Aucune réalisation ne correspond à ce filtre.',
    'projets.voirDetails': 'Voir les détails',
    'projets.retour': 'Retour à la galerie',
    'projets.contexte': 'Contexte',
    'projets.contribution': 'Contribution de l’équipe',
    'projets.technologies': 'Technologies',
    'projets.depot': 'Code source',
    'projets.introuvable': 'Cette réalisation est introuvable.',

    'contact.titre': 'Nous contacter',
    'contact.intro':
      'Votre message est transmis en asynchrone au serveur Express, validé puis enregistré dans un fichier JSON. Aucune page n’est rechargée.',
    'contact.nom': 'Nom complet',
    'contact.courriel': 'Adresse de courriel',
    'contact.sujet': 'Sujet',
    'contact.message': 'Message',
    'contact.envoyer': 'Envoyer le message',
    'contact.envoiEnCours': 'Envoi en cours…',
    'contact.obligatoire': 'obligatoire',
    'contact.erreurNom': 'Veuillez saisir un nom d’au moins 2 caractères.',
    'contact.erreurCourriel': 'Veuillez saisir une adresse de courriel valide.',
    'contact.erreurSujet': 'Veuillez saisir un sujet d’au moins 3 caractères.',
    'contact.erreurMessage': 'Votre message doit contenir au moins 10 caractères.',
    'contact.erreurReseau':
      'Le serveur est injoignable pour le moment. Veuillez réessayer.',
    'contact.compteur': 'caractères',

    'commun.chargement': 'Chargement des données…',
    'commun.erreur': 'Une erreur est survenue.',
    'commun.reessayer': 'Réessayer',

    'nonTrouvee.titre': 'Page introuvable',
    'nonTrouvee.texte':
      'L’adresse demandée ne correspond à aucune section du portfolio.',
    'nonTrouvee.retour': 'Revenir à l’accueil',

    'pied.droits': 'Tous droits réservés.',
    'pied.cours': 'Projet de session — LOG3500, Conception et programmation de sites Web I',
    'pied.institution': 'ISTEAH — L’Université de la nouvelle Haïti'
  },

  en: {
    'nav.accueil': 'Home',
    'nav.equipe': 'Team',
    'nav.projets': 'Projects',
    'nav.contact': 'Contact',
    'nav.menu': 'Main menu',
    'nav.evitement': 'Skip to main content',

    'entete.titre': 'Team Portfolio',
    'entete.sousTitre': 'LOG3500 — ISTEAH',
    'entete.themeClair': 'Switch to light mode',
    'entete.themeSombre': 'Switch to dark mode',
    'entete.langue': 'Passer en français',

    'accueil.surtitre': 'Collective professional portfolio',
    'accueil.titre': 'We build full-stack web applications',
    'accueil.intro':
      'This portfolio is a React single-page application served by a Node.js/Express server and continuously deployed on Railway. It showcases our team, our skills and our LOG3500 coursework.',
    'accueil.ctaProjets': 'See our work',
    'accueil.ctaContact': 'Get in touch',
    'accueil.competences': 'Collective skills',
    'accueil.pile': 'Technology stack',
    'accueil.chiffres': 'The team in numbers',
    'accueil.chiffreMembres': 'Members',
    'accueil.chiffreProjets': 'Projects',
    'accueil.chiffreTechnos': 'Technologies',

    'equipe.titre': 'Our team',
    'equipe.intro':
      'Three students, three complementary task sets, a single Git repository.',
    'equipe.competences': 'Skills',
    'equipe.profilGitHub': 'GitHub profile',
    'equipe.statsTitre': 'Live GitHub activity',
    'equipe.statsIntro':
      'Data fetched asynchronously from the public GitHub REST API.',
    'equipe.depots': 'Public repositories',
    'equipe.abonnes': 'Followers',
    'equipe.membreDepuis': 'Member since',

    'projets.titre': 'Our work',
    'projets.intro':
      'A dynamic, filterable gallery. Assignments 1 and 2 sit alongside the term project.',
    'projets.filtrer': 'Filter by technology',
    'projets.tous': 'All',
    'projets.aucun': 'No project matches this filter.',
    'projets.voirDetails': 'View details',
    'projets.retour': 'Back to the gallery',
    'projets.contexte': 'Context',
    'projets.contribution': 'Team contribution',
    'projets.technologies': 'Technologies',
    'projets.depot': 'Source code',
    'projets.introuvable': 'This project could not be found.',

    'contact.titre': 'Contact us',
    'contact.intro':
      'Your message is sent asynchronously to the Express server, validated, then stored in a JSON file. No page reload occurs.',
    'contact.nom': 'Full name',
    'contact.courriel': 'Email address',
    'contact.sujet': 'Subject',
    'contact.message': 'Message',
    'contact.envoyer': 'Send message',
    'contact.envoiEnCours': 'Sending…',
    'contact.obligatoire': 'required',
    'contact.erreurNom': 'Please enter a name of at least 2 characters.',
    'contact.erreurCourriel': 'Please enter a valid email address.',
    'contact.erreurSujet': 'Please enter a subject of at least 3 characters.',
    'contact.erreurMessage': 'Your message must contain at least 10 characters.',
    'contact.erreurReseau': 'The server is unreachable right now. Please try again.',
    'contact.compteur': 'characters',

    'commun.chargement': 'Loading data…',
    'commun.erreur': 'An error occurred.',
    'commun.reessayer': 'Try again',

    'nonTrouvee.titre': 'Page not found',
    'nonTrouvee.texte': 'The requested address matches no section of this portfolio.',
    'nonTrouvee.retour': 'Back to home',

    'pied.droits': 'All rights reserved.',
    'pied.cours': 'Term project — LOG3500, Web Site Design and Programming I',
    'pied.institution': 'ISTEAH — University of the New Haiti'
  }
};

export default traductions;

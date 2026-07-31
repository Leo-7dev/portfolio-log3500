# Plan de travail et répartition des tâches

**LOG3500 — Projet de session : Portfolio Professionnel Dynamique Full-Stack**
ISTEAH — Été 2026 · Équipe de 3 étudiants · Remise Moodle : **vendredi 31 juillet 2026**

---

## 1. Répartition des ensembles de tâches

L'énoncé impose trois ensembles de tâches pour une équipe de trois. **Chaque
étudiant est évalué individuellement sur la qualité du code produit pour son
bloc** : il est donc essentiel que les commits de chacun portent bien sur ses
propres fichiers.

### Ensemble 1 — Intégration sémantique, charte visuelle et accessibilité

**Titulaire :** Fils Léonel Charles

| Tâche de l'énoncé | Fichiers concernés dans le dépôt |
|---|---|
| Structure sémantique HTML5 de tous les composants | `index.html`, balisage JSX de `components/` et `pages/` |
| Mise en page responsive CSS pure (Flexbox et Grid) | `src/styles/layout.css` |
| Accessibilité : contrastes, labels, ARIA | `src/styles/base.css`, `components/ChampFormulaire.jsx` |
| Bascule de styles visuels (variables CSS) | `src/styles/variables.css` |

**Livrable de preuve :** captures du validateur HTML du W3C, du validateur CSS
et du tableau des rapports de contraste (section 4 du rapport technique).

### Ensemble 2 — Architecture client, composants et routage React

**Titulaire :** *(membre 2)*

| Tâche de l'énoncé | Fichiers concernés |
|---|---|
| Initialisation Vite et arborescence du projet | `vite.config.js`, `package.json`, `src/main.jsx` |
| Composants graphiques (cartes, menus, boutons) | `src/components/*.jsx` |
| Routeur React Router v6 (accueil, équipe, détail) | `src/App.jsx`, `src/components/MainLayout.jsx` |
| Validation dynamique côté client du formulaire | `src/pages/Contact.jsx` |

**Livrable de preuve :** schéma de l'arbre des composants et tableau des routes
(sections 2 et 3 du rapport technique).

### Ensemble 3 — Développement serveur, interconnexion API et DevOps

**Titulaire :** *(membre 3)*

| Tâche de l'énoncé | Fichiers concernés |
|---|---|
| Serveur d'application Node.js / Express | `server.js` |
| Routes API, dont `POST /api/contact` | `server.js`, `serveur/validation.js` |
| Persistance des messages en JSON | `serveur/persistance.js` |
| Gestion du dépôt Git et déploiement continu Railway | `railway.json`, `.gitignore`, GitHub Projects |

**Livrable de preuve :** capture du tableau de bord Railway (build réussi), sortie
de `npm run test:serveur`, capture de `messages.json` après une soumission.

> **Zone partagée.** L'API GitHub (`src/hooks/useStatistiquesGitHub.js` et
> `components/StatistiquesGitHub.jsx`) relève de l'ensemble 3 pour la logique
> réseau et de l'ensemble 2 pour l'intégration dans le composant. Faites-en une
> tâche co-signée sur GitHub Projects afin qu'aucun des deux ne paraisse inactif.

---

## 2. Échéancier — du vendredi 24 au vendredi 31 juillet 2026

| Jour | Objectif | Qui | Fin de journée attendue |
|---|---|---|---|
| **Ven. 24** | Créer le dépôt GitHub **public**, y pousser le squelette, créer le tableau GitHub Projects avec une carte par tâche du §1 | Tous | Chaque membre a cloné le dépôt et fait au moins un commit |
| **Sam. 25** | Remplacer les contenus fictifs : noms, biographies, pseudonymes GitHub réels, photos, descriptions des devoirs 1 et 2 | Tous | `src/data/` ne contient plus aucun texte « à compléter » |
| **Dim. 26** | Connecter Railway au dépôt et obtenir un **premier déploiement vert**, même incomplet | M3 | URL publique fonctionnelle et partagée à l'équipe |
| **Lun. 27** | Finaliser l'intégration : responsive vérifié sur 360 px, 768 px et 1280 px ; passer le validateur W3C | M1 | Zéro erreur au validateur HTML et CSS |
| **Mar. 28** | Finaliser les composants et le routage : rafraîchissement direct sur `/equipe` et `/projets/:id`, filtrage de la galerie | M2 | Toutes les routes fonctionnent en production |
| **Mer. 29** | Test de bout en bout du formulaire sur l'URL Railway ; vérifier l'écriture dans `messages.json` via `GET /api/messages` | M3 | Capture d'écran de la réponse `201` et de l'historique |
| **Jeu. 30** | Rédiger et exporter le rapport PDF ; **répétition chronométrée** de la soutenance (10 min + 2 min) | Tous | PDF final + minutage tenu à ±30 s |
| **Ven. 31** | Relecture, gel du code (`git tag v1.0`), **dépôt Moodle par chacun des trois étudiants** | Tous | Trois dépôts Moodle enregistrés |

> Ne laissez pas le déploiement Railway pour la fin : c'est l'étape qui réserve
> le plus de mauvaises surprises (build échoué, port figé, dossier `dist`
> absent). Un déploiement vert dès le dimanche vous laisse une marge réelle.

---

## 3. Convention de travail sous Git

Le critère 6 de la grille évalue explicitement des « commits réguliers,
descriptifs et équitables ». Concrètement :

- **Une branche par ensemble de tâches** : `integration-css`, `client-react`,
  `serveur-devops`. Fusion vers `main` par *pull request*, relue par un
  coéquipier.
- **Messages de commit** au format `type(portée) : description à l'infinitif` —
  par exemple `feat(contact) : valider le courriel avant l'envoi réseau`,
  `fix(css) : corriger le contraste du bouton secondaire en mode sombre`.
- **Rythme** : au minimum un commit par membre et par jour de travail. Un dépôt
  affichant trois commits le 30 juillet est immédiatement suspect.
- **Jamais de commit direct sur `main`** après le premier déploiement : chaque
  fusion déclenche un redéploiement Railway.
- `node_modules/`, `dist/` et `messages.json` sont déjà exclus par `.gitignore`.

### GitHub Projects

Créez un tableau à quatre colonnes — *À faire · En cours · En revue · Terminé* —
et une carte par ligne des tableaux du §1, chacune assignée à son titulaire.
Le tableau sera projeté pendant la soutenance : c'est la preuve visuelle de la
répartition équitable exigée par l'énoncé.

---

## 4. Vérification finale — grille sur 35 points

| # | Critère | À vérifier avant de déposer |
|---|---|---|
| 1 | Architecture frontend React | Découpage en composants autonomes ; `useState` et `useEffect` employés à bon escient ; routage v6 fonctionnel y compris au rafraîchissement ; Context API pour thème **et** langue |
| 2 | Intégration UI/UX et sémantique | HTML5 sémantique ; responsive Flexbox/Grid sans framework ; indicateurs de chargement réseau visibles ; **zéro erreur** aux validateurs W3C |
| 3 | Logique backend Express | `server.js` à la racine ; `process.env.PORT` ; middleware statique sur `dist` ; `POST /api/contact` validé ; écriture effective dans `messages.json` |
| 4 | Déploiement Cloud et DevOps | Build de production vert sur Railway ; redéploiement automatique au push ; variables d'environnement configurées |
| 5 | Présentation et démonstration | 12 min tenues ; chaque membre parle de **sa** partie ; démonstration en direct depuis l'URL Railway |
| 6 | Suivi Git et collaboration | Historique équilibré entre les trois membres ; messages descriptifs ; tableau GitHub Projects renseigné |
| 7 | Documentation et rapport | Rapport PDF : architecture, arborescence, schéma des composants, preuves W3C |

### Points de contrôle techniques imposés par l'énoncé

- [ ] Sections présentes : Accueil, Équipe (bio + photo de chaque membre), Projets (galerie **filtrable**), Contact
- [ ] L'URL change sémantiquement : `/`, `/equipe`, `/projets`, `/contact`
- [ ] **Aucun `innerHTML`** — vérifiable par `grep -rn "innerHTML" src/` (doit ne rien retourner)
- [ ] `package.json` : `"start": "node server.js"` et `"build": "vite build"`
- [ ] Dépôt GitHub **public** (et non privé)
- [ ] Les devoirs 1 et 2 figurent dans la galerie des réalisations
- [ ] Données GitHub réelles affichées sur la page Équipe (pseudonymes valides)

---

## 5. Déroulement de la soutenance (12 minutes)

### Présentation technique — 10 minutes

| Durée | Contenu | Intervenant |
|---|---|---|
| 1 min | Membres de l'équipe et répartition, tableau GitHub Projects projeté | M2 |
| 2 min | Intégration sémantique, responsive et accessibilité ; démonstration de la bascule clair/sombre | M1 |
| 2 min | Architecture des composants React, Context API et routage v6 | M2 |
| 2 min | Serveur Express, route `POST /api/contact`, persistance JSON | M3 |
| 3 min | **Démonstration en direct** sur l'URL Railway | Chacun sa partie |

### Démonstration en direct — enchaînement exact

1. Ouvrir l'URL de production Railway dans un navigateur **neuf**.
2. Naviguer `/` → `/equipe` → `/projets` : montrer que l'URL change **sans**
   rechargement de page, puis rafraîchir sur `/equipe` pour prouver le repli SPA
   côté serveur.
3. Basculer le mode sombre et la langue : la préférence persiste d'une page à
   l'autre (Context API).
4. Filtrer la galerie par une technologie, ouvrir une fiche de détail.
5. Soumettre le formulaire de contact : le message de confirmation s'affiche
   **sans rechargement**. Montrer ensuite `/api/messages` dans un second onglet
   pour prouver l'écriture serveur.
6. Optionnel si le temps le permet : montrer une soumission invalide (courriel
   mal formé) et l'erreur renvoyée par le serveur.

### Questions / réponses — 2 minutes

Préparez-vous à expliquer, code à l'appui :

- Pourquoi Context API plutôt que de faire descendre les propriétés ?
- À quoi sert l'`AbortController` dans `useStatistiquesGitHub.js` ?
- Que se passe-t-il si l'on rafraîchit `/projets/devoir-1` — et pourquoi la
  route de repli `app.get('*')` est-elle indispensable ?
- Pourquoi la validation est-elle faite **deux fois**, côté client et côté
  serveur ?
- Pourquoi `process.env.PORT` et non un port fixe ?

---

## 6. Contenu du dépôt Moodle

Rappel : **chacun des trois étudiants** doit déposer, sinon sa participation
n'est pas enregistrée.

1. Le lien hypertexte vers le dépôt GitHub public de l'équipe.
2. Le lien hypertexte vers l'application déployée sur Railway.
3. Le rapport technique au format PDF.

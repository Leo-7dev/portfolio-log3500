# Portfolio Professionnel Dynamique Full-Stack

Projet de session **LOG3500 — Conception et programmation de sites Web I**
ISTEAH — Été 2026

Application monopage (SPA) React servie par un serveur d'application Node.js /
Express et déployée en continu sur Railway.

---

## 1. Membres de l'équipe

| Membre | Ensemble de tâches | Responsabilité |
|--------|--------------------|----------------|
| Fils Léonel Charles | Ensemble 1 | Intégration sémantique, charte visuelle et accessibilité |
| *(à compléter)* | Ensemble 2 | Architecture client, composants et routage React |
| *(à compléter)* | Ensemble 3 | Développement serveur, interconnexion API et DevOps |

- Dépôt GitHub public : `https://github.com/ORGANISATION/portfolio-log3500`
- Application en production : `https://<votre-app>.up.railway.app`

---

## 2. Démarrage local

```bash
npm install          # installation des dépendances

# Terminal A — serveur d'application Express (port 3000)
npm run dev:server

# Terminal B — serveur de développement Vite (port 5173, proxy /api -> 3000)
npm run dev
```

Ouvrir ensuite <http://localhost:5173>.

### Vérifier le comportement de production en local

```bash
npm run build        # génère le dossier dist/
npm start            # Express sert dist/ sur http://localhost:3000
```

### Tests unitaires du serveur

```bash
npm run test:serveur
```

Onze tests couvrent la validation des champs du formulaire (types, longueurs,
format du courriel), la normalisation des données et la couche de persistance
dans `messages.json`, y compris le cas d'un fichier absent ou corrompu.
Ils s'exécutent avec le lanceur intégré à Node.js, sans dépendance externe.

---

## 3. Arborescence du projet

```
portfolio-log3500/
├── index.html                  Gabarit HTML injecté par Vite
├── package.json                Scripts « start » et « build »
├── vite.config.js              Configuration Vite (outDir: dist, proxy /api)
├── railway.json                Configuration de la plateforme d'hébergement
├── server.js                   Serveur Express (racine, comme exigé)
├── serveur/
│   ├── validation.js           Validation serveur du formulaire
│   ├── persistance.js          Lecture/écriture de messages.json
│   └── validation.test.js      Tests unitaires (node --test)
├── public/
│   ├── favicon.svg
│   └── membres/                Photos des membres (à remplacer)
└── src/
    ├── main.jsx                Point d'entrée : BrowserRouter + Context
    ├── App.jsx                 Table de routage React Router v6
    ├── components/             Composants réutilisables
    │   ├── MainLayout.jsx      Gabarit commun (entête + contenu + pied)
    │   ├── Header.jsx          Navigation, bascule thème et langue
    │   ├── Footer.jsx
    │   ├── CarteMembre.jsx
    │   ├── CarteProjet.jsx
    │   ├── FiltreProjets.jsx
    │   ├── ChampFormulaire.jsx
    │   ├── StatistiquesGitHub.jsx
    │   └── IndicateurChargement.jsx
    ├── pages/                  Une vue par route
    │   ├── Accueil.jsx         /
    │   ├── Equipe.jsx          /equipe
    │   ├── Projets.jsx         /projets
    │   ├── DetailProjet.jsx    /projets/:identifiant
    │   ├── Contact.jsx         /contact
    │   └── NonTrouvee.jsx      route de repli 404
    ├── context/
    │   └── ContexteApplication.jsx   État global (thème + langue)
    ├── hooks/
    │   └── useStatistiquesGitHub.js  Appel asynchrone à l'API GitHub
    ├── data/                   Contenus éditoriaux (membres, projets, libellés)
    └── styles/                 CSS pur, aucun framework
        ├── variables.css       Charte visuelle et bascule clair/sombre
        ├── base.css            Réinitialisation, typographie, accessibilité
        ├── layout.css          Gabarit, grilles, adaptation mobile
        └── composants.css      Boutons, cartes, formulaire, alertes
```

---

## 4. Personnalisation avant la remise

1. `src/data/membres.js` — noms, biographies, courriels, **pseudonymes GitHub
   réels** (ils alimentent l'appel à l'API REST publique de GitHub) et chemins
   des photos.
2. `public/membres/` — remplacer les trois fichiers SVG par les photos de
   l'équipe (`.jpg` ou `.webp`, format paysage, ~640 × 480 px), puis ajuster le
   champ `photo` de chaque membre.
3. `src/data/projets.js` — descriptions réelles des devoirs 1 et 2 et liens des
   dépôts (`lienDepot`).
4. `README.md` — compléter le tableau des membres et les deux URL.

---

## 5. Routes de l'application

### Client (React Router v6)

| URL | Vue |
|-----|-----|
| `/` | Accueil : présentation, compétences collectives, pile technologique |
| `/equipe` | Fiches des membres + statistiques GitHub en direct |
| `/projets` | Galerie filtrable par technologie |
| `/projets/:identifiant` | Détail d'une réalisation |
| `/contact` | Formulaire de contact |
| *(autre)* | Page 404 |

### Serveur (Express)

| Méthode | Route | Rôle |
|---------|-------|------|
| `GET` | `/api/sante` | Sonde de disponibilité (utilisée par Railway) |
| `POST` | `/api/contact` | Validation puis écriture dans `messages.json` |
| `GET` | `/api/messages` | Historique (sans les adresses de courriel) |
| `GET` | `*` | Renvoie `dist/index.html` (repli SPA) |

Exemple d'appel :

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"nom":"Marie Dupont","courriel":"marie@exemple.ht","sujet":"Bonjour","message":"Votre portfolio est très réussi."}'
```

Réponse `201` : `{"succes":true,"message":"…","identifiant":"msg_…"}`
Réponse `400` : `{"succes":false,"erreurs":["…"]}`

---

## 6. Déploiement sur Railway

1. Pousser le projet sur un dépôt GitHub **public**.
2. Sur [railway.app](https://railway.app) : *New Project* → *Deploy from GitHub
   repo* → sélectionner le dépôt.
3. Railway détecte Node.js, exécute `npm run build` puis `npm start`.
4. *Settings* → *Networking* → **Generate Domain** pour obtenir l'URL publique.
5. Variables d'environnement : `NODE_ENV=production`. **Ne pas définir `PORT`** :
   la plateforme l'injecte elle-même et `server.js` le lit via `process.env.PORT`.
6. Chaque `git push` sur `main` déclenche automatiquement un nouveau build et un
   redéploiement.

> **Note sur la persistance.** Le système de fichiers d'un conteneur Railway est
> éphémère : `messages.json` est réinitialisé à chaque redéploiement. C'est le
> comportement attendu par l'énoncé (persistance dans un fichier local). Pour
> une conservation durable, il faudrait monter un volume Railway sur le dossier
> de l'application ou brancher une base de données.

---

## 7. Conformité aux spécifications de l'énoncé

- Composants React modulaires et réutilisables ✔
- Navigation sans rechargement — React Router v6 ✔
- État global centralisé — Context API (thème sombre/clair, langue) ✔
- Consommation asynchrone de l'API REST de GitHub — `fetch` + `useEffect` ✔
- Serveur Node.js/Express, middleware statique, interception du formulaire ✔
- `server.js` à la racine, port dynamique `process.env.PORT` ✔
- Scripts `start` et `build` conformes ✔
- Aucun framework CSS : Flexbox et CSS Grid uniquement ✔
- Accessibilité : contrastes ≥ 4,5:1, labels liés, attributs ARIA ✔
- **Aucun usage de `innerHTML` ni de `dangerouslySetInnerHTML`** : React rend
  toutes les valeurs dynamiques comme du texte (équivalent de `textContent`) ✔

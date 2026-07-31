/**
 * server.js — Serveur d'application Node.js / Express
 * Projet de session LOG3500 — Portfolio Professionnel Dynamique Full-Stack
 * ISTEAH — Ete 2026
 *
 * Responsabilites :
 *   1. Servir le build de production genere par Vite (dossier « dist ») a
 *      l'aide d'un middleware statique.
 *   2. Exposer la route POST /api/contact : validation de la structure des
 *      champs recus, puis ecriture de l'historique dans messages.json.
 *   3. Renvoyer index.html pour toute route inconnue afin que React Router v6
 *      puisse gerer la navigation cote client (rafraichissement sur /equipe).
 *   4. Ecouter sur le port dynamique attribue par l'hote Cloud (process.env.PORT).
 *
 * Les fonctions de validation et de persistance sont isolees dans le dossier
 * « serveur/ » afin de pouvoir etre testees unitairement (npm run test:serveur).
 */

import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { validerFormulaire, normaliserMessage } from './serveur/validation.js';
import { lireHistorique, ajouterMessage } from './serveur/persistance.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Port dynamique impose par l'hote Cloud (Railway). 3000 en developpement local.
const PORT = process.env.PORT || 3000;

// Fichier de persistance locale de l'historique des messages du formulaire.
const FICHIER_MESSAGES = path.join(__dirname, 'messages.json');

// Dossier du build de production genere par « vite build ».
const DOSSIER_BUILD = path.join(__dirname, 'dist');

/* -------------------------------------------------------------------------- */
/* Middlewares generaux                                                       */
/* -------------------------------------------------------------------------- */

// Interception et analyse du corps JSON des requetes. La limite de taille
// evite les charges utiles abusives.
app.use(express.json({ limit: '64kb' }));

// Journalisation minimale des appels API, utile lors de la demonstration.
app.use('/api', (requete, reponse, suivant) => {
  console.log(`[${new Date().toISOString()}] ${requete.method} ${requete.originalUrl}`);
  suivant();
});

// Middleware statique : sert le build optimise de production produit par Vite.
app.use(
  express.static(DOSSIER_BUILD, {
    maxAge: '1h',
    index: false
  })
);

/* -------------------------------------------------------------------------- */
/* Routes API                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * GET /api/sante — sonde de disponibilite (verification rapide du serveur).
 */
app.get('/api/sante', (requete, reponse) => {
  reponse.json({
    statut: 'operationnel',
    horodatage: new Date().toISOString(),
    environnement: process.env.NODE_ENV || 'developpement'
  });
});

/**
 * POST /api/contact — reception du formulaire de contact.
 * Valide la structure des champs recus, puis ecrit le message dans le fichier
 * local messages.json.
 */
app.post('/api/contact', async (requete, reponse) => {
  const erreurs = validerFormulaire(requete.body);

  if (erreurs.length > 0) {
    return reponse.status(400).json({
      succes: false,
      message: 'La validation des champs a echoue.',
      erreurs
    });
  }

  const nouveauMessage = normaliserMessage(requete.body);

  try {
    await ajouterMessage(FICHIER_MESSAGES, nouveauMessage);

    return reponse.status(201).json({
      succes: true,
      message: 'Votre message a bien ete recu. Merci de nous avoir ecrit.',
      identifiant: nouveauMessage.id
    });
  } catch (erreur) {
    console.error('Echec de la persistance du message :', erreur);
    return reponse.status(500).json({
      succes: false,
      message: "Une erreur interne est survenue lors de l'enregistrement."
    });
  }
});

/**
 * GET /api/messages — consultation de l'historique persiste.
 * Pratique lors de la demonstration en direct pour prouver l'ecriture dans le
 * fichier JSON. Les adresses de courriel ne sont pas exposees.
 */
app.get('/api/messages', async (requete, reponse) => {
  const historique = await lireHistorique(FICHIER_MESSAGES);
  const apercu = historique.map((entree) => ({
    id: entree.id,
    nom: entree.nom,
    sujet: entree.sujet,
    recuLe: entree.recuLe
  }));
  reponse.json({ total: apercu.length, messages: apercu });
});

// Toute autre route /api inconnue renvoie une erreur JSON explicite.
app.use('/api', (requete, reponse) => {
  reponse.status(404).json({
    succes: false,
    message: `Route API inconnue : ${requete.method} ${requete.originalUrl}`
  });
});

/* -------------------------------------------------------------------------- */
/* Repli sur l'application monopage (SPA)                                     */
/* -------------------------------------------------------------------------- */

// Toute requete non-API est confiee a index.html : React Router v6 prend alors
// le relais cote client. Cela permet le rafraichissement direct sur /equipe.
app.get('*', (requete, reponse) => {
  reponse.sendFile(path.join(DOSSIER_BUILD, 'index.html'), (erreur) => {
    if (erreur) {
      reponse
        .status(500)
        .type('text/plain')
        .send('Le build de production est introuvable. Executez « npm run build ».');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Serveur Express demarre sur le port ${PORT}`);
  console.log(`Build statique servi depuis : ${DOSSIER_BUILD}`);
});

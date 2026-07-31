/**
 * serveur/persistance.js
 * Couche de persistance locale de l'historique des messages du formulaire de
 * contact, ecrit au format JSON sur le systeme de fichiers du serveur.
 */

import fs from 'node:fs/promises';

/**
 * Lit l'historique deja persiste.
 * Retourne un tableau vide si le fichier n'existe pas encore ou est illisible.
 * @param {string} chemin Chemin absolu du fichier messages.json.
 * @returns {Promise<object[]>}
 */
export async function lireHistorique(chemin) {
  try {
    const contenu = await fs.readFile(chemin, 'utf-8');
    const donnees = JSON.parse(contenu);
    return Array.isArray(donnees) ? donnees : [];
  } catch (erreur) {
    if (erreur.code === 'ENOENT') {
      return [];
    }
    console.error('Historique illisible, reinitialisation :', erreur.message);
    return [];
  }
}

/**
 * Ecrit l'historique complet dans le fichier local.
 * @param {string} chemin Chemin absolu du fichier messages.json.
 * @param {object[]} historique
 */
export async function ecrireHistorique(chemin, historique) {
  await fs.writeFile(chemin, JSON.stringify(historique, null, 2), 'utf-8');
}

/**
 * Ajoute un message a l'historique et enregistre le tout.
 * @param {string} chemin
 * @param {object} message
 * @returns {Promise<number>} Nombre total de messages apres ajout.
 */
export async function ajouterMessage(chemin, message) {
  const historique = await lireHistorique(chemin);
  historique.push(message);
  await ecrireHistorique(chemin, historique);
  return historique.length;
}

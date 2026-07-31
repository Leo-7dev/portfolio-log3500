/**
 * serveur/validation.js
 * Validation, cote serveur, de la structure des champs recus par la route
 * POST /api/contact. Module isole afin de pouvoir etre teste unitairement.
 */

// Expression reguliere de verification du format d'une adresse de courriel.
export const MOTIF_COURRIEL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export const LIMITES = {
  nomMin: 2,
  nomMax: 80,
  sujetMin: 3,
  sujetMax: 120,
  messageMin: 10,
  messageMax: 2000,
  courrielMax: 120
};

/**
 * Valide la charge utile du formulaire de contact.
 * @param {unknown} charge Corps JSON de la requete.
 * @returns {string[]} Liste des erreurs detectees (vide si la charge est valide).
 */
export function validerFormulaire(charge) {
  if (typeof charge !== 'object' || charge === null || Array.isArray(charge)) {
    return ['Le corps de la requete doit etre un objet JSON.'];
  }

  const erreurs = [];
  const { nom, courriel, sujet, message } = charge;

  if (typeof nom !== 'string' || nom.trim().length < LIMITES.nomMin) {
    erreurs.push(
      `Le champ « nom » est obligatoire (${LIMITES.nomMin} caracteres minimum).`
    );
  } else if (nom.length > LIMITES.nomMax) {
    erreurs.push(`Le champ « nom » ne peut depasser ${LIMITES.nomMax} caracteres.`);
  }

  if (
    typeof courriel !== 'string' ||
    !MOTIF_COURRIEL.test(courriel.trim()) ||
    courriel.length > LIMITES.courrielMax
  ) {
    erreurs.push('Le champ « courriel » doit contenir une adresse valide.');
  }

  if (typeof sujet !== 'string' || sujet.trim().length < LIMITES.sujetMin) {
    erreurs.push(
      `Le champ « sujet » est obligatoire (${LIMITES.sujetMin} caracteres minimum).`
    );
  } else if (sujet.length > LIMITES.sujetMax) {
    erreurs.push(
      `Le champ « sujet » ne peut depasser ${LIMITES.sujetMax} caracteres.`
    );
  }

  if (typeof message !== 'string' || message.trim().length < LIMITES.messageMin) {
    erreurs.push(
      `Le champ « message » est obligatoire (${LIMITES.messageMin} caracteres minimum).`
    );
  } else if (message.length > LIMITES.messageMax) {
    erreurs.push(
      `Le champ « message » ne peut depasser ${LIMITES.messageMax} caracteres.`
    );
  }

  return erreurs;
}

/**
 * Normalise une charge deja validee en une entree prete a etre persistee.
 * @param {{nom: string, courriel: string, sujet: string, message: string}} charge
 * @returns {object}
 */
export function normaliserMessage(charge) {
  return {
    id: `msg_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    nom: charge.nom.trim(),
    courriel: charge.courriel.trim().toLowerCase(),
    sujet: charge.sujet.trim(),
    message: charge.message.trim(),
    recuLe: new Date().toISOString()
  };
}

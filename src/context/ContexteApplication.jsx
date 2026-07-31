import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { traductions } from '../data/traductions.js';

/**
 * Contexte global de l'application (Context API).
 * Centralise les preferences de l'utilisateur :
 *   - theme  : « clair » ou « sombre »
 *   - langue : « fr » ou « en »
 * La valeur est diffusee a l'ensemble de l'arbre de composants, ce qui evite
 * de faire descendre les proprietes de niveau en niveau.
 */
const ContexteApplication = createContext(null);

const CLE_THEME = 'log3500.theme';
const CLE_LANGUE = 'log3500.langue';

/**
 * Determine le theme initial : preference deja enregistree, sinon preference
 * systeme du navigateur, sinon theme clair.
 */
function themeInitial() {
  try {
    const enregistre = window.localStorage.getItem(CLE_THEME);
    if (enregistre === 'clair' || enregistre === 'sombre') {
      return enregistre;
    }
    const preferenceSysteme = window.matchMedia('(prefers-color-scheme: dark)');
    return preferenceSysteme.matches ? 'sombre' : 'clair';
  } catch {
    return 'clair';
  }
}

function langueInitiale() {
  try {
    const enregistree = window.localStorage.getItem(CLE_LANGUE);
    return enregistree === 'en' || enregistree === 'fr' ? enregistree : 'fr';
  } catch {
    return 'fr';
  }
}

export function FournisseurApplication({ children }) {
  const [theme, setTheme] = useState(themeInitial);
  const [langue, setLangue] = useState(langueInitiale);

  // Effet de bord : l'attribut data-theme place sur <html> declenche la bascule
  // des variables CSS definies dans styles/variables.css.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(CLE_THEME, theme);
    } catch {
      /* stockage indisponible : la preference reste valable pour la session */
    }
  }, [theme]);

  // L'attribut lang de <html> est mis a jour pour les lecteurs d'ecran et pour
  // la conformite au validateur du W3C.
  useEffect(() => {
    document.documentElement.setAttribute('lang', langue);
    try {
      window.localStorage.setItem(CLE_LANGUE, langue);
    } catch {
      /* stockage indisponible */
    }
  }, [langue]);

  const valeur = useMemo(() => {
    /**
     * Fonction de traduction : retourne le libelle correspondant a la cle
     * courante dans la langue active, ou la cle elle-meme si elle est absente.
     */
    const t = (cle) => {
      const dictionnaire = traductions[langue] || traductions.fr;
      return Object.prototype.hasOwnProperty.call(dictionnaire, cle)
        ? dictionnaire[cle]
        : cle;
    };

    return {
      theme,
      langue,
      t,
      estSombre: theme === 'sombre',
      basculerTheme: () =>
        setTheme((precedent) => (precedent === 'clair' ? 'sombre' : 'clair')),
      basculerLangue: () =>
        setLangue((precedente) => (precedente === 'fr' ? 'en' : 'fr')),
      definirTheme: setTheme,
      definirLangue: setLangue
    };
  }, [theme, langue]);

  return (
    <ContexteApplication.Provider value={valeur}>
      {children}
    </ContexteApplication.Provider>
  );
}

/**
 * Crochet d'acces au contexte global. Leve une erreur explicite si un
 * composant l'utilise en dehors du fournisseur.
 */
export function useApplication() {
  const contexte = useContext(ContexteApplication);
  if (contexte === null) {
    throw new Error(
      'useApplication doit etre utilise a l’interieur de FournisseurApplication.'
    );
  }
  return contexte;
}

export default ContexteApplication;

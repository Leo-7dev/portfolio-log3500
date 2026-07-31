import { useEffect, useState } from 'react';

/**
 * Crochet personnalise de consommation asynchrone de l'API REST publique de
 * GitHub (https://api.github.com/users/<pseudo>).
 *
 * Il expose les trois etats d'un appel reseau :
 *   - donnees    : la charge utile normalisee lorsque l'appel reussit ;
 *   - enChargement : vrai tant que la reponse n'est pas revenue ;
 *   - erreur     : le message d'echec le cas echeant.
 *
 * La requete est annulee proprement (AbortController) si le composant est
 * demonte avant la reponse, ce qui evite les mises a jour d'etat orphelines.
 *
 * @param {string} pseudo Identifiant GitHub de l'utilisateur.
 */
export default function useStatistiquesGitHub(pseudo) {
  const [donnees, setDonnees] = useState(null);
  const [enChargement, setEnChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [compteurRelance, setCompteurRelance] = useState(0);

  useEffect(() => {
    if (!pseudo) {
      setEnChargement(false);
      return undefined;
    }

    const controleur = new AbortController();

    async function recupererProfil() {
      setEnChargement(true);
      setErreur(null);

      try {
        const reponse = await fetch(
          `https://api.github.com/users/${encodeURIComponent(pseudo)}`,
          {
            signal: controleur.signal,
            headers: { Accept: 'application/vnd.github+json' }
          }
        );

        if (!reponse.ok) {
          throw new Error(`Reponse HTTP ${reponse.status}`);
        }

        const charge = await reponse.json();

        // Normalisation : on ne conserve que les champs reellement affiches.
        setDonnees({
          pseudo: charge.login,
          nomAffiche: charge.name,
          avatar: charge.avatar_url,
          depotsPublics: charge.public_repos,
          abonnes: charge.followers,
          profil: charge.html_url,
          creeLe: charge.created_at
        });
      } catch (exception) {
        if (exception.name !== 'AbortError') {
          setErreur(exception.message);
        }
      } finally {
        if (!controleur.signal.aborted) {
          setEnChargement(false);
        }
      }
    }

    recupererProfil();

    return () => controleur.abort();
  }, [pseudo, compteurRelance]);

  const relancer = () => setCompteurRelance((valeur) => valeur + 1);

  return { donnees, enChargement, erreur, relancer };
}

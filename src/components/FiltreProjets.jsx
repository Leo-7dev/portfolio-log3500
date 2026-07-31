import { useApplication } from '../context/ContexteApplication.jsx';

/**
 * Barre de filtrage de la galerie de projets.
 * Le groupe de boutons est expose comme une barre d'outils (role="toolbar")
 * et l'etat de chaque bouton est annonce par aria-pressed.
 */
export default function FiltreProjets({ technologies, filtreActif, surChangement }) {
  const { t } = useApplication();

  const options = [t('projets.tous'), ...technologies];

  return (
    <div className="filtre">
      <h2 className="filtre__intitule" id="intitule-filtre">
        {t('projets.filtrer')}
      </h2>

      <div className="filtre__boutons" role="toolbar" aria-labelledby="intitule-filtre">
        {options.map((option, index) => {
          const valeur = index === 0 ? 'tous' : option;
          const estActif = filtreActif === valeur;
          return (
            <button
              key={valeur}
              type="button"
              className={`bouton bouton--filtre ${
                estActif ? 'bouton--filtre-actif' : ''
              }`}
              aria-pressed={estActif}
              onClick={() => surChangement(valeur)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

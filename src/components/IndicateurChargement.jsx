import { useApplication } from '../context/ContexteApplication.jsx';

/**
 * Indicateur de chargement reseau reutilisable.
 * Le role « status » et aria-live=polite annoncent l'attente aux lecteurs
 * d'ecran sans interrompre la lecture en cours.
 */
export default function IndicateurChargement({ libelle }) {
  const { t } = useApplication();
  const texte = libelle || t('commun.chargement');

  return (
    <div className="chargement" role="status" aria-live="polite">
      <span className="chargement__rotor" aria-hidden="true" />
      <span className="chargement__texte">{texte}</span>
    </div>
  );
}

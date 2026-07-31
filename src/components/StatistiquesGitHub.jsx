import useStatistiquesGitHub from '../hooks/useStatistiquesGitHub.js';
import IndicateurChargement from './IndicateurChargement.jsx';
import { useApplication } from '../context/ContexteApplication.jsx';

/**
 * Bloc de statistiques GitHub d'un membre.
 * Les donnees proviennent de l'API REST publique de GitHub et sont injectees
 * dynamiquement. Aucune insertion de HTML brut n'est effectuee : les valeurs
 * sont rendues comme du texte par React (equivalent de textContent).
 */
export default function StatistiquesGitHub({ pseudo }) {
  const { t, langue } = useApplication();
  const { donnees, enChargement, erreur, relancer } = useStatistiquesGitHub(pseudo);

  if (enChargement) {
    return <IndicateurChargement />;
  }

  if (erreur) {
    return (
      <div className="alerte alerte--avertissement" role="status">
        <p className="alerte__texte">
          {t('commun.erreur')} ({erreur})
        </p>
        <button type="button" className="bouton bouton--discret" onClick={relancer}>
          {t('commun.reessayer')}
        </button>
      </div>
    );
  }

  if (!donnees) {
    return null;
  }

  const dateInscription = new Date(donnees.creeLe).toLocaleDateString(
    langue === 'fr' ? 'fr-CA' : 'en-CA',
    { year: 'numeric', month: 'long' }
  );

  return (
    <dl className="statistiques">
      <div className="statistiques__element">
        <dt className="statistiques__intitule">{t('equipe.depots')}</dt>
        <dd className="statistiques__valeur">{donnees.depotsPublics}</dd>
      </div>
      <div className="statistiques__element">
        <dt className="statistiques__intitule">{t('equipe.abonnes')}</dt>
        <dd className="statistiques__valeur">{donnees.abonnes}</dd>
      </div>
      <div className="statistiques__element">
        <dt className="statistiques__intitule">{t('equipe.membreDepuis')}</dt>
        <dd className="statistiques__valeur statistiques__valeur--texte">
          {dateInscription}
        </dd>
      </div>
    </dl>
  );
}

import { Link } from 'react-router-dom';
import { useApplication } from '../context/ContexteApplication.jsx';

/**
 * Route de repli pour toute adresse inconnue.
 */
export default function NonTrouvee() {
  const { t } = useApplication();

  return (
    <section className="section" aria-labelledby="titre-404">
      <div className="conteneur conteneur--etroit">
        <p className="code-erreur" aria-hidden="true">
          404
        </p>
        <h1 className="section__titre" id="titre-404">
          {t('nonTrouvee.titre')}
        </h1>
        <p className="section__introduction">{t('nonTrouvee.texte')}</p>
        <p>
          <Link className="bouton bouton--principal" to="/">
            {t('nonTrouvee.retour')}
          </Link>
        </p>
      </div>
    </section>
  );
}

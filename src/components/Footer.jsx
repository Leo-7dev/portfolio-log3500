import { useApplication } from '../context/ContexteApplication.jsx';

/**
 * Pied de page commun a toutes les routes.
 */
export default function Footer() {
  const { t } = useApplication();
  const annee = new Date().getFullYear();

  return (
    <footer className="pied" role="contentinfo">
      <div className="pied__interieur conteneur">
        <p className="pied__ligne">
          <strong>{t('entete.titre')}</strong> &mdash; {t('pied.institution')}
        </p>
        <p className="pied__ligne pied__ligne--discrete">{t('pied.cours')}</p>
        <p className="pied__ligne pied__ligne--discrete">
          &copy; {annee} &mdash; {t('pied.droits')}
        </p>
      </div>
    </footer>
  );
}

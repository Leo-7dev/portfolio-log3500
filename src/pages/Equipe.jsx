import { useEffect } from 'react';
import { useApplication } from '../context/ContexteApplication.jsx';
import { membres } from '../data/membres.js';
import CarteMembre from '../components/CarteMembre.jsx';

/**
 * Page « Equipe » : presentation de tous les membres avec biographie, photo,
 * competences et statistiques GitHub chargees en asynchrone.
 */
export default function Equipe() {
  const { t, langue } = useApplication();

  useEffect(() => {
    document.title = `${t('nav.equipe')} | ${t('entete.titre')}`;
  }, [t, langue]);

  return (
    <section className="section" aria-labelledby="titre-equipe">
      <div className="conteneur">
        <h1 className="section__titre" id="titre-equipe">
          {t('equipe.titre')}
        </h1>
        <p className="section__introduction">{t('equipe.intro')}</p>

        <h2 className="section__sous-titre">{t('equipe.statsTitre')}</h2>
        <p className="section__introduction section__introduction--discrete">
          {t('equipe.statsIntro')}
        </p>

        <ul className="grille grille--membres">
          {membres.map((membre) => (
            <li key={membre.id}>
              <CarteMembre membre={membre} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

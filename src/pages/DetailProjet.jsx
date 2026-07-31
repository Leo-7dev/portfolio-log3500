import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useApplication } from '../context/ContexteApplication.jsx';
import { projets } from '../data/projets.js';

/**
 * Page de details d'une realisation. La route dynamique /projets/:identifiant
 * illustre l'usage des parametres d'URL de React Router v6.
 */
export default function DetailProjet() {
  const { identifiant } = useParams();
  const { t, langue } = useApplication();

  const projet = projets.find((element) => element.id === identifiant);

  useEffect(() => {
    const titre = projet ? projet.titre[langue] : t('projets.introuvable');
    document.title = `${titre} | ${t('entete.titre')}`;
  }, [projet, langue, t]);

  if (!projet) {
    return (
      <section className="section" aria-labelledby="titre-introuvable">
        <div className="conteneur">
          <h1 className="section__titre" id="titre-introuvable">
            {t('projets.introuvable')}
          </h1>
          <p>
            <Link className="bouton bouton--principal" to="/projets">
              {t('projets.retour')}
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <article className="section" aria-labelledby="titre-detail">
      <div className="conteneur conteneur--etroit">
        <p className="fil-ariane">
          <Link className="lien-simple" to="/projets">
            &larr; {t('projets.retour')}
          </Link>
        </p>

        <div
          className="detail__bandeau"
          style={{ backgroundColor: projet.couleur }}
          aria-hidden="true"
        />

        <h1 className="section__titre" id="titre-detail">
          {projet.titre[langue]}
        </h1>
        <p className="section__introduction">{projet.resume[langue]}</p>

        <h2 className="section__sous-titre">{t('projets.contexte')}</h2>
        <p>{projet.contexte[langue]}</p>

        <h2 className="section__sous-titre">{t('projets.contribution')}</h2>
        <p>{projet.contribution[langue]}</p>

        <h2 className="section__sous-titre">{t('projets.technologies')}</h2>
        <ul className="liste-etiquettes">
          {projet.technologies.map((techno) => (
            <li key={techno} className="etiquette">
              {techno}
            </li>
          ))}
        </ul>

        <p className="detail__actions">
          <a
            className="bouton bouton--principal"
            href={projet.lienDepot}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('projets.depot')}
            <span className="sr-seulement"> (nouvel onglet)</span>
          </a>
        </p>
      </div>
    </article>
  );
}

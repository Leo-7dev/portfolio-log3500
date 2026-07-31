import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApplication } from '../context/ContexteApplication.jsx';
import {
  membres,
  competencesCollectives,
  pileTechnologique
} from '../data/membres.js';
import { projets } from '../data/projets.js';

/**
 * Page d'accueil : vitrine technologique de l'equipe.
 */
export default function Accueil() {
  const { t, langue } = useApplication();

  useEffect(() => {
    document.title = `${t('nav.accueil')} | ${t('entete.titre')}`;
  }, [t, langue]);

  return (
    <>
      <section className="banniere" aria-labelledby="titre-accueil">
        <div className="conteneur banniere__interieur">
          <p className="banniere__surtitre">{t('accueil.surtitre')}</p>
          <h1 className="banniere__titre" id="titre-accueil">
            {t('accueil.titre')}
          </h1>
          <p className="banniere__texte">{t('accueil.intro')}</p>

          <p className="banniere__actions">
            <Link className="bouton bouton--principal" to="/projets">
              {t('accueil.ctaProjets')}
            </Link>
            <Link className="bouton bouton--secondaire" to="/contact">
              {t('accueil.ctaContact')}
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-chiffres">
        <div className="conteneur">
          <h2 className="section__titre" id="titre-chiffres">
            {t('accueil.chiffres')}
          </h2>

          <ul className="grille grille--chiffres">
            <li className="carte carte-chiffre">
              <span className="carte-chiffre__valeur">{membres.length}</span>
              <span className="carte-chiffre__intitule">
                {t('accueil.chiffreMembres')}
              </span>
            </li>
            <li className="carte carte-chiffre">
              <span className="carte-chiffre__valeur">{projets.length}</span>
              <span className="carte-chiffre__intitule">
                {t('accueil.chiffreProjets')}
              </span>
            </li>
            <li className="carte carte-chiffre">
              <span className="carte-chiffre__valeur">
                {pileTechnologique.length}
              </span>
              <span className="carte-chiffre__intitule">
                {t('accueil.chiffreTechnos')}
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--alternee" aria-labelledby="titre-competences">
        <div className="conteneur">
          <h2 className="section__titre" id="titre-competences">
            {t('accueil.competences')}
          </h2>

          <ul className="grille grille--trois">
            {competencesCollectives.map((competence) => (
              <li key={competence.id} className="carte carte-competence">
                <h3 className="carte-competence__titre">
                  {competence.titre[langue]}
                </h3>
                <p className="carte-competence__texte">
                  {competence.description[langue]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-pile">
        <div className="conteneur">
          <h2 className="section__titre" id="titre-pile">
            {t('accueil.pile')}
          </h2>
          <ul className="liste-etiquettes liste-etiquettes--large">
            {pileTechnologique.map((techno) => (
              <li key={techno} className="etiquette etiquette--grande">
                {techno}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

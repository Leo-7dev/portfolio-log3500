import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useApplication } from '../context/ContexteApplication.jsx';

/**
 * Entete de l'application : identite visuelle, navigation principale et
 * commandes de preferences (theme sombre/clair et langue) issues du contexte.
 * Le menu se replie en bouton hamburger sous 720 px de largeur.
 */
export default function Header() {
  const { t, estSombre, basculerTheme, basculerLangue, langue } = useApplication();
  const [menuOuvert, setMenuOuvert] = useState(false);
  const emplacement = useLocation();

  const liens = [
    { vers: '/', cle: 'nav.accueil', exact: true },
    { vers: '/equipe', cle: 'nav.equipe', exact: false },
    { vers: '/projets', cle: 'nav.projets', exact: false },
    { vers: '/contact', cle: 'nav.contact', exact: false }
  ];

  const fermerMenu = () => setMenuOuvert(false);

  return (
    <header className="entete" role="banner">
      <div className="entete__interieur conteneur">
        <Link className="entete__marque" to="/" onClick={fermerMenu}>
          <span className="entete__logo" aria-hidden="true">
            &lt;/&gt;
          </span>
          <span className="entete__textes">
            <span className="entete__titre">{t('entete.titre')}</span>
            <span className="entete__sous-titre">{t('entete.sousTitre')}</span>
          </span>
        </Link>

        <button
          type="button"
          className="entete__hamburger"
          aria-expanded={menuOuvert}
          aria-controls="navigation-principale"
          aria-label={t('nav.menu')}
          onClick={() => setMenuOuvert((ouvert) => !ouvert)}
        >
          <span className="entete__barre" aria-hidden="true" />
          <span className="entete__barre" aria-hidden="true" />
          <span className="entete__barre" aria-hidden="true" />
        </button>

        <nav
          id="navigation-principale"
          className={`navigation ${menuOuvert ? 'navigation--ouverte' : ''}`}
          aria-label={t('nav.menu')}
        >
          <ul className="navigation__liste">
            {liens.map((lien) => (
              <li key={lien.vers} className="navigation__element">
                <NavLink
                  to={lien.vers}
                  end={lien.exact}
                  className={({ isActive }) =>
                    `navigation__lien ${isActive ? 'navigation__lien--actif' : ''}`
                  }
                  aria-current={
                    emplacement.pathname === lien.vers ? 'page' : undefined
                  }
                  onClick={fermerMenu}
                >
                  {t(lien.cle)}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="preferences">
            <button
              type="button"
              className="bouton bouton--discret"
              onClick={basculerLangue}
              lang={langue === 'fr' ? 'en' : 'fr'}
            >
              {t('entete.langue')}
            </button>

            <button
              type="button"
              className="bouton bouton--icone"
              onClick={basculerTheme}
              aria-pressed={estSombre}
              aria-label={
                estSombre ? t('entete.themeClair') : t('entete.themeSombre')
              }
              title={estSombre ? t('entete.themeClair') : t('entete.themeSombre')}
            >
              <span aria-hidden="true">{estSombre ? '☀' : '☾'}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

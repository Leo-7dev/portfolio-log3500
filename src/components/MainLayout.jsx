import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { useApplication } from '../context/ContexteApplication.jsx';

/**
 * Gabarit principal partage par toutes les routes.
 * Il assemble l'entete, la zone de contenu principale et le pied de page, et
 * remet le focus sur le contenu a chaque changement de route (accessibilite au
 * clavier et pour les lecteurs d'ecran).
 */
export default function MainLayout() {
  const { t } = useApplication();
  const emplacement = useLocation();
  const referenceContenu = useRef(null);

  useEffect(() => {
    if (referenceContenu.current) {
      referenceContenu.current.focus({ preventScroll: true });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [emplacement.pathname]);

  return (
    <div className="enveloppe-application">
      <a className="lien-evitement" href="#contenu-principal">
        {t('nav.evitement')}
      </a>

      <Header />

      <main
        id="contenu-principal"
        className="contenu-principal"
        tabIndex={-1}
        ref={referenceContenu}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

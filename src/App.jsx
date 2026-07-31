import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout.jsx';
import Accueil from './pages/Accueil.jsx';
import Equipe from './pages/Equipe.jsx';
import Projets from './pages/Projets.jsx';
import DetailProjet from './pages/DetailProjet.jsx';
import Contact from './pages/Contact.jsx';
import NonTrouvee from './pages/NonTrouvee.jsx';

/**
 * Table de routage de l'application monopage.
 * Les transitions ne provoquent aucun rechargement de page : seule l'adresse
 * URL change de maniere semantique (/, /equipe, /projets, /projets/:id, /contact).
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Accueil />} />
        <Route path="equipe" element={<Equipe />} />
        <Route path="projets" element={<Projets />} />
        <Route path="projets/:identifiant" element={<DetailProjet />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NonTrouvee />} />
      </Route>
    </Routes>
  );
}

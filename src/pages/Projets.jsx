import { useEffect, useMemo, useState } from 'react';
import { useApplication } from '../context/ContexteApplication.jsx';
import { projets, listerTechnologies } from '../data/projets.js';
import CarteProjet from '../components/CarteProjet.jsx';
import FiltreProjets from '../components/FiltreProjets.jsx';

/**
 * Page « Projets » : galerie dynamique dotee d'un systeme de filtrage par
 * technologie. Le filtrage est purement cote client, sans rechargement.
 */
export default function Projets() {
  const { t, langue } = useApplication();
  const [filtre, setFiltre] = useState('tous');

  useEffect(() => {
    document.title = `${t('nav.projets')} | ${t('entete.titre')}`;
  }, [t, langue]);

  const technologies = useMemo(() => listerTechnologies(), []);

  const projetsAffiches = useMemo(() => {
    if (filtre === 'tous') {
      return projets;
    }
    return projets.filter((projet) => projet.technologies.includes(filtre));
  }, [filtre]);

  return (
    <section className="section" aria-labelledby="titre-projets">
      <div className="conteneur">
        <h1 className="section__titre" id="titre-projets">
          {t('projets.titre')}
        </h1>
        <p className="section__introduction">{t('projets.intro')}</p>

        <FiltreProjets
          technologies={technologies}
          filtreActif={filtre}
          surChangement={setFiltre}
        />

        <p className="galerie__compteur" role="status" aria-live="polite">
          {projetsAffiches.length} / {projets.length}
        </p>

        {projetsAffiches.length === 0 ? (
          <p className="message-vide">{t('projets.aucun')}</p>
        ) : (
          <ul className="grille grille--projets">
            {projetsAffiches.map((projet) => (
              <li key={projet.id}>
                <CarteProjet projet={projet} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

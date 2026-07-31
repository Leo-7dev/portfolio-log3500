import { useApplication } from '../context/ContexteApplication.jsx';
import StatistiquesGitHub from './StatistiquesGitHub.jsx';

/**
 * Carte de presentation d'un membre : photo, nom, role, biographie,
 * competences et statistiques GitHub recuperees en asynchrone.
 */
export default function CarteMembre({ membre }) {
  const { t, langue } = useApplication();

  return (
    <article className="carte carte-membre">
      <img
        className="carte-membre__photo"
        src={membre.photo}
        alt={`Portrait de ${membre.nom}`}
        width="160"
        height="160"
        loading="lazy"
      />

      <div className="carte-membre__corps">
        <h3 className="carte-membre__nom">{membre.nom}</h3>
        <p className="carte-membre__role">{membre.role[langue]}</p>
        <p className="etiquette etiquette--sourdine">{membre.ensembleTaches}</p>

        <p className="carte-membre__bio">{membre.bio[langue]}</p>

        <h4 className="carte-membre__sous-titre">{t('equipe.competences')}</h4>
        <ul className="liste-etiquettes">
          {membre.competences.map((competence) => (
            <li key={competence} className="etiquette">
              {competence}
            </li>
          ))}
        </ul>

        <StatistiquesGitHub pseudo={membre.pseudoGitHub} />

        <p className="carte-membre__liens">
          <a
            className="lien-externe"
            href={`https://github.com/${membre.pseudoGitHub}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('equipe.profilGitHub')}
            <span className="sr-seulement"> (nouvel onglet)</span>
          </a>
        </p>
      </div>
    </article>
  );
}

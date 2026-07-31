import { Link } from 'react-router-dom';
import { useApplication } from '../context/ContexteApplication.jsx';

/**
 * Carte d'une realisation dans la galerie. Le bandeau colore est genere a
 * partir de la couleur du projet, ce qui evite de dependre d'images externes.
 */
export default function CarteProjet({ projet }) {
  const { t, langue } = useApplication();

  return (
    <article className="carte carte-projet">
      <div
        className="carte-projet__bandeau"
        style={{ backgroundColor: projet.couleur }}
        aria-hidden="true"
      >
        <span className="carte-projet__initiales">
          {projet.titre[langue].slice(0, 2).toUpperCase()}
        </span>
      </div>

      <div className="carte-projet__corps">
        <h3 className="carte-projet__titre">
          <Link className="carte-projet__lien" to={`/projets/${projet.id}`}>
            {projet.titre[langue]}
          </Link>
        </h3>

        <p className="carte-projet__resume">{projet.resume[langue]}</p>

        <ul className="liste-etiquettes">
          {projet.technologies.map((techno) => (
            <li key={techno} className="etiquette">
              {techno}
            </li>
          ))}
        </ul>

        <p className="carte-projet__pied">
          <Link className="bouton bouton--discret" to={`/projets/${projet.id}`}>
            {t('projets.voirDetails')}
          </Link>
          <span className="carte-projet__annee">{projet.annee}</span>
        </p>
      </div>
    </article>
  );
}

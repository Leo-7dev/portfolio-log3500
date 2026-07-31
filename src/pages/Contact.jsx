import { useEffect, useState } from 'react';
import { useApplication } from '../context/ContexteApplication.jsx';
import ChampFormulaire from '../components/ChampFormulaire.jsx';

const ETAT_INITIAL = { nom: '', courriel: '', sujet: '', message: '' };
const MOTIF_COURRIEL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const LONGUEUR_MAX_MESSAGE = 2000;

/**
 * Page « Contact ».
 * Le formulaire est valide dynamiquement cote client avant toute transmission
 * reseau, puis envoye en asynchrone (fetch) a la route POST /api/contact du
 * serveur Express. Aucune page n'est rechargee : la confirmation s'affiche
 * directement dans la vue.
 */
export default function Contact() {
  const { t, langue } = useApplication();

  const [valeurs, setValeurs] = useState(ETAT_INITIAL);
  const [erreurs, setErreurs] = useState({});
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [reponseServeur, setReponseServeur] = useState(null);

  useEffect(() => {
    document.title = `${t('nav.contact')} | ${t('entete.titre')}`;
  }, [t, langue]);

  /**
   * Valide un champ isole et retourne le message d'erreur, ou une chaine vide.
   */
  function validerChamp(nom, valeur) {
    const contenu = String(valeur).trim();

    switch (nom) {
      case 'nom':
        return contenu.length >= 2 ? '' : t('contact.erreurNom');
      case 'courriel':
        return MOTIF_COURRIEL.test(contenu) ? '' : t('contact.erreurCourriel');
      case 'sujet':
        return contenu.length >= 3 ? '' : t('contact.erreurSujet');
      case 'message':
        return contenu.length >= 10 ? '' : t('contact.erreurMessage');
      default:
        return '';
    }
  }

  /**
   * Valide l'ensemble du formulaire et retourne le dictionnaire des erreurs.
   */
  function validerFormulaire(donnees) {
    const resultat = {};
    Object.keys(ETAT_INITIAL).forEach((cle) => {
      const message = validerChamp(cle, donnees[cle]);
      if (message) {
        resultat[cle] = message;
      }
    });
    return resultat;
  }

  function gererChangement(evenement) {
    const { name, value } = evenement.target;
    setValeurs((precedentes) => ({ ...precedentes, [name]: value }));

    // Une erreur deja affichee disparait des que la saisie devient valide.
    setErreurs((precedentes) => {
      if (!precedentes[name]) {
        return precedentes;
      }
      const message = validerChamp(name, value);
      const copie = { ...precedentes };
      if (message) {
        copie[name] = message;
      } else {
        delete copie[name];
      }
      return copie;
    });
  }

  function gererPerteFocus(evenement) {
    const { name, value } = evenement.target;
    const message = validerChamp(name, value);
    setErreurs((precedentes) => {
      const copie = { ...precedentes };
      if (message) {
        copie[name] = message;
      } else {
        delete copie[name];
      }
      return copie;
    });
  }

  async function gererSoumission(evenement) {
    // Le comportement natif du navigateur est neutralise : pas de rechargement.
    evenement.preventDefault();
    setReponseServeur(null);

    const erreursDetectees = validerFormulaire(valeurs);
    setErreurs(erreursDetectees);

    if (Object.keys(erreursDetectees).length > 0) {
      const premierChamp = document.getElementById(
        `champ-${Object.keys(erreursDetectees)[0]}`
      );
      if (premierChamp) {
        premierChamp.focus();
      }
      return;
    }

    setEnvoiEnCours(true);

    try {
      const reponse = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valeurs)
      });

      const charge = await reponse.json();

      if (reponse.ok && charge.succes) {
        setReponseServeur({ type: 'succes', texte: charge.message });
        setValeurs(ETAT_INITIAL);
        setErreurs({});
      } else {
        setReponseServeur({
          type: 'echec',
          texte: charge.message || t('commun.erreur'),
          details: Array.isArray(charge.erreurs) ? charge.erreurs : []
        });
      }
    } catch {
      setReponseServeur({ type: 'echec', texte: t('contact.erreurReseau') });
    } finally {
      setEnvoiEnCours(false);
    }
  }

  return (
    <section className="section" aria-labelledby="titre-contact">
      <div className="conteneur conteneur--etroit">
        <h1 className="section__titre" id="titre-contact">
          {t('contact.titre')}
        </h1>
        <p className="section__introduction">{t('contact.intro')}</p>

        {/* Zone d'annonce du resultat de la soumission asynchrone. */}
        <div aria-live="polite">
          {reponseServeur ? (
            <div
              className={`alerte ${
                reponseServeur.type === 'succes'
                  ? 'alerte--succes'
                  : 'alerte--echec'
              }`}
              role={reponseServeur.type === 'succes' ? 'status' : 'alert'}
            >
              <p className="alerte__texte">{reponseServeur.texte}</p>
              {reponseServeur.details && reponseServeur.details.length > 0 ? (
                <ul className="alerte__details">
                  {reponseServeur.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </div>

        <form className="formulaire" onSubmit={gererSoumission} noValidate>
          <ChampFormulaire
            identifiant="champ-nom"
            nom="nom"
            libelle={t('contact.nom')}
            valeur={valeurs.nom}
            surChangement={gererChangement}
            surPerteFocus={gererPerteFocus}
            erreur={erreurs.nom}
            autoComplete="name"
            longueurMax={80}
            mentionObligatoire={t('contact.obligatoire')}
          />

          <ChampFormulaire
            identifiant="champ-courriel"
            nom="courriel"
            type="email"
            libelle={t('contact.courriel')}
            valeur={valeurs.courriel}
            surChangement={gererChangement}
            surPerteFocus={gererPerteFocus}
            erreur={erreurs.courriel}
            autoComplete="email"
            longueurMax={120}
            mentionObligatoire={t('contact.obligatoire')}
          />

          <ChampFormulaire
            identifiant="champ-sujet"
            nom="sujet"
            libelle={t('contact.sujet')}
            valeur={valeurs.sujet}
            surChangement={gererChangement}
            surPerteFocus={gererPerteFocus}
            erreur={erreurs.sujet}
            longueurMax={120}
            mentionObligatoire={t('contact.obligatoire')}
          />

          <ChampFormulaire
            identifiant="champ-message"
            nom="message"
            libelle={t('contact.message')}
            valeur={valeurs.message}
            surChangement={gererChangement}
            surPerteFocus={gererPerteFocus}
            erreur={erreurs.message}
            multiligne
            lignes={7}
            longueurMax={LONGUEUR_MAX_MESSAGE}
            mentionObligatoire={t('contact.obligatoire')}
          />

          <p className="formulaire__compteur" aria-live="polite">
            {valeurs.message.length} / {LONGUEUR_MAX_MESSAGE}{' '}
            {t('contact.compteur')}
          </p>

          <p className="formulaire__actions">
            <button
              type="submit"
              className="bouton bouton--principal"
              disabled={envoiEnCours}
            >
              {envoiEnCours ? t('contact.envoiEnCours') : t('contact.envoyer')}
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}

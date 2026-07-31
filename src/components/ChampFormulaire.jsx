/**
 * Champ de formulaire reutilisable (input ou textarea).
 * Chaque champ dispose d'un <label> explicitement associe par l'attribut
 * « for »/htmlFor, d'un message d'erreur relie par aria-describedby et de
 * l'attribut aria-invalid, conformement aux regles d'accessibilite.
 */
export default function ChampFormulaire({
  identifiant,
  nom,
  libelle,
  valeur,
  surChangement,
  surPerteFocus,
  erreur,
  type = 'text',
  multiligne = false,
  lignes = 6,
  longueurMax,
  autoComplete,
  mentionObligatoire
}) {
  const identifiantErreur = `${identifiant}-erreur`;
  const aUneErreur = Boolean(erreur);

  const proprietesCommunes = {
    id: identifiant,
    name: nom,
    value: valeur,
    onChange: surChangement,
    onBlur: surPerteFocus,
    required: true,
    maxLength: longueurMax,
    'aria-invalid': aUneErreur,
    'aria-describedby': aUneErreur ? identifiantErreur : undefined,
    className: `champ__saisie ${aUneErreur ? 'champ__saisie--invalide' : ''}`
  };

  return (
    <p className="champ">
      <label className="champ__libelle" htmlFor={identifiant}>
        {libelle}
        {mentionObligatoire ? (
          <span className="champ__mention"> ({mentionObligatoire})</span>
        ) : null}
      </label>

      {multiligne ? (
        <textarea {...proprietesCommunes} rows={lignes} />
      ) : (
        <input {...proprietesCommunes} type={type} autoComplete={autoComplete} />
      )}

      {aUneErreur ? (
        <span className="champ__erreur" id={identifiantErreur} role="alert">
          {erreur}
        </span>
      ) : null}
    </p>
  );
}

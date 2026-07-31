/**
 * serveur/validation.test.js
 * Tests unitaires de la validation serveur et de la couche de persistance.
 * Executes avec le lanceur de tests integre a Node.js : npm run test:serveur
 * (aucune dependance externe n'est requise).
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { validerFormulaire, normaliserMessage } from './validation.js';
import { lireHistorique, ajouterMessage } from './persistance.js';

const messageValide = {
  nom: 'Fils Leonel Charles',
  courriel: 'leonel.charlesfils@gmail.com',
  sujet: 'Demande d information',
  message: 'Bonjour, je souhaite en savoir plus sur votre projet de session.'
};

test('une charge complete et bien formee ne produit aucune erreur', () => {
  assert.deepEqual(validerFormulaire(messageValide), []);
});

test('une charge qui n est pas un objet est rejetee', () => {
  assert.equal(validerFormulaire(null).length, 1);
  assert.equal(validerFormulaire('texte').length, 1);
  assert.equal(validerFormulaire([]).length, 1);
});

test('un nom trop court est rejete', () => {
  const erreurs = validerFormulaire({ ...messageValide, nom: 'A' });
  assert.equal(erreurs.length, 1);
  assert.match(erreurs[0], /nom/);
});

test('les adresses de courriel mal formees sont rejetees', () => {
  const adressesInvalides = [
    'sans-arobase',
    'deux@@arobases.com',
    'espace @domaine.com',
    'utilisateur@domaine',
    ''
  ];
  adressesInvalides.forEach((courriel) => {
    const erreurs = validerFormulaire({ ...messageValide, courriel });
    assert.ok(erreurs.length >= 1, `attendu une erreur pour « ${courriel} »`);
  });
});

test('les adresses de courriel valides sont acceptees', () => {
  const adressesValides = [
    'a.b@exemple.ht',
    'etudiant+cours@isteah.edu.ht',
    'NOM@Domaine.CA'
  ];
  adressesValides.forEach((courriel) => {
    assert.deepEqual(validerFormulaire({ ...messageValide, courriel }), []);
  });
});

test('un message trop court est rejete', () => {
  const erreurs = validerFormulaire({ ...messageValide, message: 'court' });
  assert.equal(erreurs.length, 1);
});

test('un message depassant la limite est rejete', () => {
  const erreurs = validerFormulaire({
    ...messageValide,
    message: 'x'.repeat(2001)
  });
  assert.equal(erreurs.length, 1);
});

test('les champs absents produisent quatre erreurs', () => {
  assert.equal(validerFormulaire({}).length, 4);
});

test('la normalisation nettoie les espaces et abaisse la casse du courriel', () => {
  const normalise = normaliserMessage({
    nom: '  Marie Dupont  ',
    courriel: '  Marie.Dupont@Exemple.HT ',
    sujet: '  Question  ',
    message: '  Bonjour a toute l equipe.  '
  });

  assert.equal(normalise.nom, 'Marie Dupont');
  assert.equal(normalise.courriel, 'marie.dupont@exemple.ht');
  assert.equal(normalise.sujet, 'Question');
  assert.match(normalise.id, /^msg_\d+_[a-z0-9]+$/);
  assert.ok(!Number.isNaN(Date.parse(normalise.recuLe)));
});

test('la persistance ecrit puis relit correctement l historique', async () => {
  const dossier = await fs.mkdtemp(path.join(os.tmpdir(), 'log3500-'));
  const fichier = path.join(dossier, 'messages.json');

  // Fichier inexistant : l'historique doit etre vide, sans exception.
  assert.deepEqual(await lireHistorique(fichier), []);

  const total1 = await ajouterMessage(fichier, normaliserMessage(messageValide));
  assert.equal(total1, 1);

  const total2 = await ajouterMessage(fichier, normaliserMessage(messageValide));
  assert.equal(total2, 2);

  const historique = await lireHistorique(fichier);
  assert.equal(historique.length, 2);
  assert.equal(historique[0].nom, 'Fils Leonel Charles');

  // Le fichier ecrit doit etre du JSON valide et lisible par un humain.
  const brut = await fs.readFile(fichier, 'utf-8');
  assert.ok(brut.includes('\n  '));
  assert.equal(JSON.parse(brut).length, 2);

  await fs.rm(dossier, { recursive: true, force: true });
});

test('un fichier corrompu ne fait pas planter la lecture', async () => {
  const dossier = await fs.mkdtemp(path.join(os.tmpdir(), 'log3500-'));
  const fichier = path.join(dossier, 'messages.json');
  await fs.writeFile(fichier, '{ ceci n est pas du JSON', 'utf-8');

  assert.deepEqual(await lireHistorique(fichier), []);

  await fs.rm(dossier, { recursive: true, force: true });
});

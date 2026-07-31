# Régénérer le rapport technique en PDF

Le rapport est écrit en HTML (`rapport.html`) puis exporté en PDF. Après avoir
inséré vos captures d'écran W3C et complété la page de garde :

**Méthode simple (navigateur)**
1. Ouvrir `rapport.html` dans Chrome ou Edge.
2. `Ctrl + P` → Destination : *Enregistrer au format PDF*.
3. Format A4, marges *Par défaut*, cocher **Graphiques d'arrière-plan**.

**Insérer une capture d'écran**
Remplacer le bloc correspondant :

```html
<div class="emplacement-capture"> … </div>
```

par :

```html
<img src="captures/validateur-html.png" alt="Résultat du validateur HTML du W3C"
     style="width:100%; border:0.6pt solid #d5dae3; border-radius:3pt;">
```

en plaçant les images dans un sous-dossier `captures/`.

# Portfolio de Simon Paillaud

Site statique (HTML, CSS, JS sans dépendance ni build). Simon est Product Designer UX/UI ; il écrit en français.
Réponds-lui en français, avec des phrases simples, et explique ce que tu changes.

## Structure

- `index.html` : toute la page. Elle contient **deux versions complètes** :
  - `<div class="page" lang="fr" data-lang="fr">` : français
  - `<div class="page" lang="en" data-lang="en" hidden>` : anglais (langue par défaut)
- `assets/css/style.css` : styles. Toutes les couleurs sont des variables dans `:root`, redéfinies pour le thème sombre.
- `assets/js/main.js` : changement de langue, barre de lecture, agrandissement des images, copie de l'e-mail.
- `assets/images/` : photo et visuels de l'étude de cas.
- Pas de CV dans le dépôt : il est **public** et les CV contiennent le numéro de téléphone de Simon. Les boutons CV ouvrent un e-mail de demande. `files/` et `*.pdf` sont dans `.gitignore` : ne jamais les forcer dans un commit.

## Mise en ligne

Le dépôt `SPayo/simon-paillaud-portfolio` est public, branche `main`. Le site est servi par GitHub Pages depuis la racine de `main` : chaque push sur `main` met le site à jour en une ou deux minutes.

## Règles à respecter

1. **Toujours modifier les deux langues.** Tout texte changé dans la version française doit l'être dans la version anglaise, et inversement. Garder la même structure HTML et les mêmes `data-sec` dans les deux blocs : le changement de langue s'en sert pour garder la position.
2. **Ton des textes** : humain, direct, phrases courtes. « Je » pour les décisions de Simon, « on » pour le travail d'équipe. Pas de jargon marketing, pas de chiffres inventés (le projet n'a pas de KPI mesurés).
3. **Confidentialité** : le projet a été réalisé chez son ancien employeur (Plus que PRO). Ne pas ajouter de chiffres internes, d'écrans non livrés ni de critique de l'entreprise. Garder la mention de propriété en pied de page.
4. **Couleur d'accent** : bleu électrique, variable `--mark` (`#2B4BFF` en clair, `#7B93FF` en sombre). Ne pas réintroduire de rouge, sauf la pastille `#D90119` qui fait partie de la palette du projet Franchise Magazine.
5. **Accessibilité** : garder les textes alternatifs (`alt`) dans les deux langues, des boutons d'au moins 40 px de haut, un contraste AA.
6. **Référencement** : la balise `<meta name="robots" content="noindex, nofollow">` est volontaire. Ne la retire que si Simon le demande.

## Changer une image

- Remplacer le fichier dans `assets/images/` **en gardant le même nom** suffit.
- Si le nouveau fichier a un autre nom ou un autre format, mettre à jour les `src` correspondants dans les deux langues.
- Photo de profil : `assets/images/photo-simon.jpg`, au format portrait (environ 3:4). Mettre à jour `width` et `height` sur les deux balises `<img class="portrait">` avec les dimensions réelles du nouveau fichier.
- Compresser les images avant de les ajouter (JPEG qualité ~75, 1800 px de large au maximum pour les visuels, 900 px pour la photo).

## Vérifier avant de livrer

- Ouvrir `index.html` dans un navigateur, tester `#fr` et `#en`, le mode sombre et une largeur de téléphone (390 px).
- Vérifier qu'aucune image n'est cassée et que les liens (CV par e-mail, LinkedIn) fonctionnent.

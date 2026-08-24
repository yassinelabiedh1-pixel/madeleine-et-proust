# Madeleine et Proust — Menu QR

Site vitrine du menu, pensé pour être ouvert sur téléphone via un QR code.
Bilingue français / anglais (bouton EN/FR en haut à droite), aucun outil de
build nécessaire — juste des fichiers statiques.

## Structure

```
index.html          La page (héro, motifs floraux, pied de page)
css/style.css       Couleurs (olive / crème / or) et mise en page
js/menu-data.js     ⭐ LE MENU — c'est ici qu'on modifie articles et prix
js/app.js           Affichage + bascule de langue (ne pas toucher en général)
images/             Vos photos (voir images/LISEZ-MOI.txt)
```

## Ajouter les photos des plats

- `images/hero.jpg` : la grande photo derrière le titre en haut de page —
  elle apparaît automatiquement dès que le fichier existe.
- Photos de catégories (Entrée, Suite, Sandwichs, Dessert) : déposer le
  fichier dans `images/` puis, dans `js/menu-data.js`, remplacer
  `photo: null` par `photo: "images/monfichier.jpg"` dans la catégorie.

## Modifier le menu

Ouvrir `js/menu-data.js` : chaque catégorie contient des articles avec un nom
et une description en `fr` et `en`, plus un prix. Copier un bloc pour ajouter
un article, supprimer un bloc pour en retirer. Les horaires, l'adresse et le
téléphone se changent dans `index.html` et `js/menu-data.js` (`UI_TEXT`).

## Tester en local

```bash
npx serve . -l 4173
```

Puis ouvrir http://localhost:4173

## Mettre en ligne (gratuit)

1. Créer un compte sur https://app.netlify.com (ou Vercel / GitHub Pages).
2. Glisser-déposer ce dossier dans Netlify ("Deploy manually") — le site
   reçoit une adresse du type `https://madeleine-et-proust.netlify.app`.
3. Générer le QR code à partir de cette adresse (par ex. sur
   https://www.qrcode-monkey.com), l'imprimer et le poser sur les tables.

À chaque changement de menu : re-glisser le dossier dans Netlify, le QR code
reste le même.

# Site vitrine – Centre de formation

Ce dossier contient votre site HTML/CSS/JS prêt à être mis en ligne.

## Déploiement ultra simple (Netlify – gratuit)
1. Créez un compte sur https://app.netlify.com/ (Google/Microsoft OK)
2. Cliquez **Add new site → Deploy manually**
3. Faites glisser le dossier entier `site-centre-formation-julien` (ou le ZIP) dans la zone prévue
4. Netlify publie le site et vous fournit une URL (modifiable vers votre domaine)

> Formulaire : il est déjà compatible Netlify (attribut `data-netlify`). Les soumissions seront listées dans **Forms**.

## Déploiement alternatif (GitHub Pages)
1. Créez un dépôt `site-centre-formation`
2. Ajoutez tout le contenu du dossier
3. Activez **Settings → Pages → Deploy from branch** sur la branche `main` dans le répertoire `/`.

## Personnalisation rapide
- **Nom & coordonnées** : modifiez la section "Coordonnées" et les pages *Mentions* et *Confidentialité*.
- **Couleurs** : changez les variables CSS en tête de `styles.css` (`--primary`, `--accent`).
- **Logo** : remplacez `/assets/logo.svg` par le vôtre (même nom de fichier).
- **Catalogue** : modifiez/ajoutez des fichiers dans `/formations` et les tuiles dans `index.html`.

## SEO & bonnes pratiques
- Remplir la balise `<title>` et la meta `description` avec votre marque.
- Créer votre fiche **Google Business Profile** et ajouter l’URL du site.
- Lier un domaine (chez OVH, Gandi…) en ajoutant un **CNAME** vers Netlify ou GitHub.

## RGPD
- Personnalisez `politique-confidentialite.html` et `mentions-legales.html`.
- Si vous utilisez Google Analytics, informez et recueillez le consentement.
- Pour un hébergement au sein de l’UE, privilégiez Netlify (données US) **ou** un hébergeur FR (OVH) selon votre politique.

Bon lancement ! 🚀

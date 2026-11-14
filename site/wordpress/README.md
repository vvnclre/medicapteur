# Version WordPress du site

Le site est livré sous forme de **thème WordPress** : `dist/medicapteurs.zip`. Aucune extension n'est nécessaire.

## Installer

1. Dans l'administration WordPress : **Apparence › Thèmes › Ajouter › Téléverser un thème**, choisir `medicapteurs.zip`, puis **Installer** et **Activer**.
2. **Réglages › Permaliens** : choisir **Titre de la publication** (ou toute option autre que « Simple »), puis **Enregistrer**. Sans cela, les adresses `/fr/…` et `/en/…` ne fonctionnent pas.
3. Ouvrir le site : l'adresse racine envoie vers `/fr/` ou `/en/` selon la langue du navigateur.

Le fichier fait environ 4 Mo. Si l'hébergeur refuse le téléversement (limite de taille), lui demander d'augmenter `upload_max_filesize`, ou copier le dossier `medicapteurs` dans `wp-content/themes/` par FTP.

## Comment ça marche

- Chaque page du site est un fichier du dossier `pages/` du thème (`pages/fr/gamme.php`, `pages/en/products/fusyo.php`…).
- `functions.php` affiche la bonne page selon l'adresse demandée. Les autres adresses restent gérées par WordPress.
- `wp_head()` et `wp_footer()` sont appelés sur chaque page : les extensions de sécurité, de statistiques ou de SEO de l'hébergeur fonctionnent normalement.
- Le formulaire « Préparer ma demande » ouvre la messagerie du visiteur avec la demande rédigée. Il peut être relié plus tard à l'envoi d'e-mails de WordPress.

## Mettre à jour après une modification du site

Depuis le dossier `site/` :

```bash
npm run build
python3 wordpress/build-theme.py
```

Puis téléverser à nouveau `dist/medicapteurs.zip` (WordPress propose de remplacer le thème existant).

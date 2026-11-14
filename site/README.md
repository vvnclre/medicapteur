# Site Medicapteurs (FR / EN)

Site statique construit avec [Eleventy](https://www.11ty.dev/). Chaque page existe en français (`/fr/`) et en anglais (`/en/`) ; le bouton FR | EN ouvre directement la traduction de la page.

```bash
npm install
npm run serve   # aperçu sur http://localhost:8080
npm run build   # génère le site dans _site/
```

## Où modifier quoi

| Contenu | Fichier |
| --- | --- |
| Produits : textes, caractéristiques, prix | `src/_data/products.js` |
| Textes des pages | `src/_data/copy.js` |
| Menu, pied de page, libellés communs | `src/_data/ui.js` |
| Téléphones, e-mails, adresses | `src/_data/site.js` |
| Adresses des pages dans chaque langue | `src/_data/routes.js` |
| Styles | `src/assets/css/main.css` (couleurs et typographies : `tokens.css`) |

Les valeurs marquées `check: true` s'affichent « à confirmer » : elles diffèrent entre deux documents Medicapteurs (voir `contenu/REFERENTIEL.md`).

## État

Pages complètes : accueil, gamme et comparateur, 11 fiches produits, préparer ma demande, contact, entreprise.
Pages courtes en attendant leur version complète : comprendre la mesure, pied diabétique, études, mentions légales.

Le formulaire « Préparer ma demande » ouvre la messagerie avec la demande rédigée (pas de serveur nécessaire). Il pourra être branché sur un service d'envoi au moment de la mise en ligne.

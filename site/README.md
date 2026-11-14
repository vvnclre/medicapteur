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
| Textes des pages (solutions, guide, études, entreprise, actualités, assistance…) | `src/_data/pages.js` |
| Textes courts (accueil, gamme, demande, contact) | `src/_data/copy.js` |
| Menu, pied de page, libellés communs | `src/_data/ui.js` |
| Téléphones, e-mails, adresses | `src/_data/site.js` |
| Adresses des pages dans chaque langue | `src/_data/routes.js` |
| Styles | `src/assets/css/main.css` (couleurs et typographies : `tokens.css`) |

Les valeurs marquées `check: true` s'affichent « à confirmer » : elles diffèrent entre deux documents Medicapteurs (voir `contenu/REFERENTIEL.md`).

## État

62 pages (31 par langue) : accueil, gamme et comparateur, 13 fiches produits complètes (description, points forts, fiche technique, options, logiciel, documentations), logiciels, 3 solutions (baropodométrie, posturographie, rééducation), pied diabétique, comprendre la mesure, études, entreprise, ingénierie, distribution, actualités, assistance (hotline, licence, FAQ), téléchargements, préparer ma demande, contact, mentions légales.

Tout le contenu vient de l'ancien site, des brochures et des listes de publications (voir `contenu/`). Rien n'est inventé ; les valeurs contradictoires sont signalées « à confirmer ».

Le formulaire « Préparer ma demande » ouvre la messagerie avec la demande rédigée (pas de serveur nécessaire). Il pourra être branché sur un service d'envoi au moment de la mise en ligne.

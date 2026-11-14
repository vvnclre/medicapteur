# Contenu récupéré : site Medicapteurs actuel

Ce dossier contient l'intégralité des informations récupérées le 13 et le 14 novembre 2026 sur medicapteurs.com, minipod.fr et dans les documents PDF publiés par Medicapteurs. Il sert de base au nouveau site : rien n'y a été réécrit ni inventé.

| Élément | Contenu |
|---|---|
| `REFERENTIEL.md` | **À lire en premier.** Synthèse produit par produit : caractéristiques, fonctions, statut réglementaire, chiffres de l'entreprise, contacts. Chaque donnée a sa source. Les contradictions sont marquées « ⚠ À VALIDER ». |
| `site-actuel/fr/`, `site-actuel/en/` | Texte verbatim des 107 pages du site (onglets cachés dépliés), avec les documents liés et les images. Classé en accueil, produits, applications, pages et actualités. |
| `site-actuel/*/autres/` | Pages absentes du menu, trouvées via le plan du site : équipe (trombinoscope), livre d'or (16 messages clients, noms des particuliers anonymisés), boutique de test, pages de liste, mentions cookies. |
| `images-texte/` | Texte lu par OCR dans les images du site qui contiennent du texte (affiches d'offres avec prix, captures du logiciel, schémas). À relire : la reconnaissance automatique fait des erreurs. |
| `site-actuel/index.csv` | Index des pages : langue, type, titre, URL, date de modification. |
| `documents-texte/` | Texte extrait des 162 PDF publics : brochures, fiches techniques, listes de publications, configurations PC. La source et la date figurent en tête de chaque fichier. |
| `references/publications-2023-brut.csv` | Bibliographie extraite des listes de janvier 2023 (≈ 480 lignes). Le découpage est automatique et doit être relu. |
| `minipod/` | Contenu de minipod.fr (fiche produit, application Podocapture, assistance). |
| `medias.csv` | Inventaire des 687 fichiers de la médiathèque WordPress (images, vidéos, PDF) avec leurs URL. |

## Méthode

1. Lecture de l'API WordPress du site (`/wp-json/wp/v2/`) pour lister toutes les pages, fiches produits, actualités et médias.
2. Affichage de chaque page dans un navigateur, onglets « Description / Caractéristiques / Options / Logiciel » dépliés, puis extraction du texte.
3. Téléchargement des PDF de la médiathèque et extraction de leur texte (`pdftotext -layout`).
4. Recoupement des sources dans `REFERENTIEL.md`.

Deux PDF sont des images sans texte (`2017_02_fpi`, `2017_02_documentation-winshoe`). Le fichier `glcla.pdf` a été volontairement exclu : c'est un document comptable d'un tiers publié par erreur, voir la section 8 du référentiel.

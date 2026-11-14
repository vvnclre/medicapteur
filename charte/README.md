Medicapteurs conçoit et fabrique à Balma, depuis 1985, des plateformes de mesure des pressions plantaires pour la podologie, la posturologie et la rééducation. Cette charte part du logo existant (son orange, son noir, son symbole de plateforme aux angles arrondis) et le prolonge pour un site plus jeune, plus clair et plus crédible auprès des soignants, des chercheurs et des industriels.

## Principes

- **La mesure d'abord.** Le visuel le plus fort de Medicapteurs est la cartographie de pression du pied. Montrez des écrans du logiciel et des chiffres réels avant des photos d'ambiance.
- **Précis, pas froid.** Des chiffres exacts avec leurs unités, des phrases courtes, des personnes réelles (praticiens, atelier de Balma).
- **L'orange est rare.** Une seule zone orange forte par écran : le bouton principal ou un bloc de marque. Le reste est blanc, gris chaud et encre.

## Ton et écriture

- Vouvoiement. Phrases courtes, verbes d'action : « Demander une démo », « Comparer les plateformes », « Télécharger la fiche ».
- Pas de superlatifs (« le meilleur », « inégalé »). Remplacez-les par un fait sourcé : « 2 304 capteurs calibrés », « plus de 390 travaux scientifiques ».
- Chiffres à la française en français : espace fine pour les milliers (`12 288`), virgule décimale (`0,4 N`), unité séparée par une espace (`300 Hz`).
- Allégations médicales : décrivez ce que l'outil mesure et qui décide (« aide le professionnel à… »), jamais une promesse de résultat (« prévient l'amputation »).
- Noms de produits en capitales, dans le style `product` : WIN-POD, WIN-TRACK MINI, T-PLATE 30TH, FUSYO, MINIPOD.

## Logo

- Utilisez les fichiers du groupe Logos, jamais une version redessinée.
- `medicapteurs-logo-couleur.png` (orange et noir) sur `surface` claire ; `medicapteurs-logo-fond-sombre.png` (orange et blanc cassé) sur `surface-inverse` ou un fond photo sombre ; `medicapteurs-symbole-noir.jpg` pour les petits formats.
- Zone de protection : la hauteur du symbole tout autour. Largeur minimale : 120 px pour le logo complet, 24 px pour le symbole seul.
- Ne posez pas le logo couleur sur un aplat `orange`, ne le déformez pas, ne changez pas ses couleurs.
- La signature « PODOLOGIE, POSTUROLOGIE ET RÉÉDUCATION » s'écrit en style `eyebrow` sous le logo, jamais dans le fichier image.

## Couleurs

- `orange` est l'orange exact du logo (#F29519). Il sert aux aplats : bouton principal, symbole, bloc de marque. Il ne sert jamais de couleur de texte sur fond clair (contraste 2,3:1) : utilisez `orange-text` pour un lien ou un mot orange.
- Sur un aplat `orange`, le texte est `on-orange` (encre, 7,7:1), jamais blanc.
- Fond de page `surface`, sections alternées `surface-alt`, champs et zones en retrait `surface-sunken`, bandeau inversé `surface-inverse` avec du texte `ink-inverse`.
- Texte : `ink` pour les titres et le texte courant, `ink-muted` pour les unités, légendes et textes secondaires.
- Filets : `line` pour séparer, `line-strong` pour les bordures de champs et de boutons secondaires.
- États : `success`, `warning`, `danger`, `info`, toujours avec un mot ou une icône, jamais la couleur seule.
- `pressure-1` à `pressure-6` forment l'échelle de pression du logiciel, du bleu (faible) au rouge (pic). Elle est réservée aux cartographies, graphiques et légendes de mesure, jamais aux boutons ou aux fonds. Son 5e niveau est l'orange du logo : c'est le lien visuel entre la marque et la mesure.
- Le thème sombre reprend le même orange. Il convient aux écrans de logiciel, aux pages de démonstration et au pied de page.

## Typographie

Quatre familles, chacune avec un seul rôle :

| Famille | Rôle | Styles |
|---|---|---|
| Sora | Titres | `display`, `h1`, `h2`, `h3` |
| Michroma | Noms de produits et surtitres, en capitales. Sa forme large et carrée rappelle le mot « medicapteurs » du logo. | `product`, `eyebrow` |
| Atkinson Hyperlegible Next | Texte. Conçue par le Braille Institute pour les lecteurs malvoyants : un choix cohérent pour une marque médicale lue aussi par des patients âgés. | `lead`, `body`, `body-strong`, `small` |
| Atkinson Hyperlegible Mono | Valeurs techniques et unités, chiffres alignés | `data`, `data-xl` |

- Un seul `display` par page. Titres en casse de phrase (« Analyse du pied diabétique »), jamais tout en capitales.
- Michroma ne sert qu'en capitales et à 11-15 px. Jamais pour une phrase ni un titre.
- Les valeurs mesurées (capteurs, fréquences, dimensions) passent en `data`. Le libellé qui les précède reste en `body` ou `small`.
- Toutes les polices sont sur Google Fonts. `components/bundle.css` les charge.

## Espacements, rayons, ombres

- Grille de 4 px : `space-1` (4) à `space-24` (96). Marge latérale minimale `space-4` sur mobile. Espacement entre sections `space-12` sur mobile, `space-16` sur ordinateur.
- `radius-plate` (20 px) reprend les angles arrondis du symbole. Réservez-le aux objets « plateforme » : cartes produit, visuels, bloc de marque. Les boutons prennent `radius-md`, les champs et étiquettes `radius-sm`.
- Pas d'ombre sur les cartes : un filet `line` suffit. `shadow-raised` est réservé aux éléments flottants (menu, fenêtre de démo).

## Images

- Priorité aux vraies images : écrans du logiciel, cartographies, plateformes en situation, praticiens, atelier de Balma.
- Les photos de produits se détourent sur `surface-alt` ou sur `surface-inverse`, jamais sur un dégradé.
- Pas d'illustrations de banque d'images (coureur en vecteurs, pictogrammes de dessin animé), pas de flou décoratif ni de dégradé violet ou bleu.
- Les exemples de rapports patients portent un cabinet fictif neutre, jamais le nom d'un vrai établissement.

## Accessibilité

- Tous les couples texte/fond de cette charte dépassent 4,5:1 dans les deux thèmes ; bordures, icônes et anneau de focus dépassent 3:1.
- Focus clavier : contour `focus` de 2 px, décalé de 2 px, sur tout élément interactif.
- Chaque image porte un texte alternatif. L'échelle de pression est toujours accompagnée de valeurs chiffrées.

## Composants

- `Button` : action principale `mc-btn--primary` (un par écran), secondaire `mc-btn--secondary`, lien `mc-btn--link`.
- `ProductName` : nom de produit avec son repère orange.
- `Measure` : un chiffre clé et son unité.
- `SpecSheet` : fiche technique, libellé à gauche, valeur en `data` à droite.
- `PressureLegend` : légende de l'échelle de pression avec ses bornes chiffrées.

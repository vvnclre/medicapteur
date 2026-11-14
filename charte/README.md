Medicapteurs conçoit et fabrique à Balma, depuis 1985, des plateformes de mesure des pressions plantaires pour la podologie, la posturologie et la rééducation. Cette charte part du logo existant (son orange, son noir, son symbole de plateforme aux angles arrondis) et le prolonge pour un site plus jeune, plus clair et plus crédible auprès des soignants, des chercheurs et des industriels.

## Principes

- **La mesure d'abord.** Le visuel le plus fort de Medicapteurs est la cartographie de pression du pied. Montrez des écrans du logiciel et des chiffres réels avant des photos d'ambiance.
- **Précis, pas froid.** Des chiffres exacts avec leurs unités, des phrases courtes, des personnes réelles (praticiens, atelier de Balma).
- **L'orange est rare.** Une seule zone orange forte par écran : le bouton principal ou un bloc de marque. Le reste est blanc, gris chaud et encre.

## L'ADN graphique : trois motifs tirés du métier

Une plateforme Medicapteurs est une matrice de capteurs qui transforme un appui en carte de pression colorée. Le site fonctionne de la même façon. Tout élément de marque reprend au moins un de ces motifs, jamais un motif générique à la place.

| Motif | D'où il vient | Où il apparaît |
|---|---|---|
| **L'empreinte** | La cartographie de pression du logiciel : rouge au centre de l'appui, puis jaune et orange | Sous le pointeur, sur les boutons et les cartes produit : une empreinte pixelisée apparaît au survol et s'élargit au clic. Au repos, les surfaces sont nettes. |
| **La matrice** | Les capteurs carrés d'une plateforme (48 × 48 sur le Win-Pod) | Les cellules qui découpent l'empreinte, le soulignement des liens, les surtitres, les séparateurs de fiche technique, l'échelle de pression, la couverture. |
| **Le capteur** | La barre inclinée au centre du symbole du logo | Repère `mc-sensor` devant les noms de produits et dans les boutons ; il glisse de 3 px au survol. Il remplace flèches et puces. |

- Les surfaces n'ont ni contour, ni ombre, ni épaisseur : l'empreinte suffit à montrer qu'elles réagissent.
- N'ajoutez ni flèche « → », ni chevron, ni puce ronde : le capteur et la matrice les remplacent.
- Le mouvement imite la mesure : on survole, une pression apparaît ; on clique, elle s'intensifie. Pas d'autre animation décorative. Avec « moins d'animations » activé, rien ne bouge.
- L'empreinte est la seule exception à la règle « échelle de pression réservée aux données » : c'est la signature interactive de la marque.
- Ne recopiez jamais le symbole entier comme motif décoratif : il reste réservé au logo.

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
- `pressure-1` à `pressure-6` forment l'échelle de pression du logiciel, du bleu (faible) au rouge (pic). Elle est réservée aux cartographies, graphiques et légendes de mesure, et à l'empreinte qui apparaît sous le pointeur. Jamais en fond ni en aplat. Son 5e niveau est l'orange du logo : c'est le lien visuel entre la marque et la mesure.
- Le thème sombre reprend le même orange. Il convient aux écrans de logiciel, aux pages de démonstration et au pied de page.

## Typographie

Quatre familles, chacune avec un seul rôle :

| Famille | Rôle | Styles |
|---|---|---|
| Sora | Titres | `display`, `h1`, `h2`, `h3` |
| Michroma | Noms de produits et surtitres, en capitales. Sa forme large et carrée rappelle le mot « medicapteurs » du logo. | `product`, `eyebrow` |
| Atkinson Hyperlegible Next | Texte. Conçue par le Braille Institute pour les lecteurs malvoyants : un choix cohérent pour une marque médicale lue aussi par des patients âgés. | `lead`, `body`, `body-strong`, `small` |
| Atkinson Hyperlegible Mono | Valeurs techniques et unités dans les fiches et tableaux, chiffres alignés | `data` |

Le chiffre clé mis en avant (`data-xl`) est en Sora, chiffres tabulaires : la police mono élargit trop les grands nombres.

- Un seul `display` par page. Titres en casse de phrase (« Analyse du pied diabétique »), jamais tout en capitales.
- Michroma ne sert qu'en capitales et à 11-15 px. Jamais pour une phrase ni un titre.
- Les valeurs mesurées (capteurs, fréquences, dimensions) passent en `data`. Le libellé qui les précède reste en `body` ou `small`.
- Toutes les polices sont sur Google Fonts. `components/bundle.css` les charge.

## Espacements, rayons, ombres

- Grille de 4 px : `space-1` (4) à `space-24` (96). Marge latérale minimale `space-4` sur mobile. Espacement entre sections `space-12` sur mobile, `space-16` sur ordinateur.
- `radius-plate` (20 px) reprend les angles arrondis du symbole. Réservez-le aux objets « plateforme » : cartes produit, visuels, bloc de marque. Les boutons prennent `radius-md`, les champs et étiquettes `radius-sm`.
- Pas de contours ni d'ombres sur les cartes : le fond suffit à les détacher. Seul le bouton principal prend un halo orange discret au survol. `shadow-raised` est réservé aux éléments qui flottent au-dessus de la page (menu, fenêtre de démo).

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

- `Button` : plateforme orange (`mc-btn--primary`, une par écran), plateforme grise (`mc-btn--secondary`), ligne de cellules (`mc-btn--link`). Empreinte de pression au survol.
- `ProductName` : nom de produit précédé du capteur orange.
- `ProductCard` : carte produit sans contour, empreinte de pression au survol.
- `Measure` : un chiffre clé, sa ligne de cellules et son unité.
- `SpecSheet` : fiche technique, libellé à gauche, valeur en `data` à droite, lignes en pointillé de cellules.
- `PressureLegend` : l'échelle de pression en six cellules, avec ses bornes chiffrées.

L'empreinte sous le pointeur demande `components/bundle.js` (une ligne à charger une fois par page). Sans lui, elle se pose sur le capteur, à gauche.

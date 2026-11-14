# ProductCard

Carte produit en forme de dalle : coins `radius-plate` du symbole, tranche `line-strong` cassée près du coin gauche, qui devient orange (`orange-deep`) au survol.

- Classe `mc-plate` sur un `<a>` qui mène à la fiche produit. Contenu : un `mc-product`, une phrase en `<p>` (à quoi sert le produit, pour qui), une ligne `mc-data` avec 2 ou 3 valeurs validées.
- Grille de 2 à 4 cartes, écart `space-6` au moins pour laisser voir la tranche.
- Sur un fond autre que `surface`, mettez `mc-on-alt` ou `mc-on-inverse` sur le conteneur pour la cassure de la tranche.
- Pas d'ombre portée ni de bordure en plus : la tranche suffit.

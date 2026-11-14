# ProductCard

Carte produit sans contour ni ombre : une surface `surface-alt` aux angles `radius-plate` du symbole. Au survol, le pointeur y laisse une large empreinte de pression pixelisée, comme sur les boutons.

- Classe `mc-plate` sur un `<a>` qui mène à la fiche produit. Contenu : un `mc-product`, une phrase en `<p>` (à quoi sert le produit, pour qui), une ligne `mc-data` avec 2 ou 3 valeurs validées.
- Chargez `components/bundle.js` pour que l'empreinte suive le pointeur.
- Grille de 2 à 4 cartes, écart `space-6`.

# Button

Bouton d'action, en trois variantes : principal (aplat `orange`, texte `on-orange`), secondaire (bordure `line-strong`) et lien (`orange-text` souligné).

- Classes : `mc-btn` + `mc-btn--primary`, `mc-btn--secondary` ou `mc-btn--link`. Sur un `<button>` ou un `<a>`.
- Le consommateur fournit le libellé : un verbe à l'infinitif et son objet (« Demander une démo », « Télécharger la fiche »). Jamais « OK », « Envoyer » seul ou « En savoir plus » seul.
- Un seul bouton principal par écran. Le texte d'un bouton principal reste `on-orange`, jamais blanc.
- Focus : contour `focus` de 2 px, décalé de 2 px. Désactivé : attribut `disabled`.

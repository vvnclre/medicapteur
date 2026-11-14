# Button

Bouton d'action dessiné d'après le symbole du logo : le principal est une dalle orange avec sa tranche, que l'on enfonce en cliquant ; le secondaire reprend le contour épais du symbole, coupé en deux coins opposés ; le lien est souligné par une ligne de cellules de capteurs.

- Classes : `mc-btn` + `mc-btn--primary`, `mc-btn--secondary` ou `mc-btn--link`, sur un `<button>` ou un `<a>`.
- Placez le capteur `<span class="mc-sensor"></span>` avant le libellé des boutons principal et secondaire : c'est la barre inclinée du symbole. Il glisse de 3 px au survol.
- Comportement : au survol, la dalle principale se soulève de 2 px (sa tranche `orange-deep` s'épaissit) ; au clic, elle s'enfonce et sa tranche disparaît, comme un pied qui appuie sur la plateforme. Mouvement coupé si l'utilisateur a demandé moins d'animations.
- Les coupes et la cassure de la tranche prennent la couleur du fond. Sur `surface-alt`, ajoutez `mc-on-alt` au conteneur ; sur `surface-inverse`, `mc-on-inverse` (le secondaire passe alors en contour clair).
- Libellé fourni par le consommateur : un verbe à l'infinitif et son objet (« Demander une démo », « Comparer les plateformes »). Jamais « OK », « Envoyer » seul ou « En savoir plus » seul.
- Un seul bouton principal par écran. Texte du principal en `on-orange`, jamais blanc.
- Focus : contour `focus` de 2 px, décalé de 6 px pour ne pas toucher la tranche.

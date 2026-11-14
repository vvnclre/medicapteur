# Button

Chaque bouton est une petite plateforme de capteurs : au repos une surface nette, au survol le pointeur y laisse une empreinte de pression pixelisée, aux couleurs de l'échelle du logiciel (rouge au centre, puis jaune et orange).

- Classes : `mc-btn` + `mc-btn--primary` (plateforme orange), `mc-btn--secondary` (plateforme grise) ou `mc-btn--link` (ligne de cellules), sur un `<button>` ou un `<a>`.
- Placez le capteur `<span class="mc-sensor"></span>` avant le libellé des boutons principal et secondaire : c'est la barre inclinée du symbole du logo. Il glisse de 3 px au survol.
- Chargez `components/bundle.js` une fois par page : il place l'empreinte sous le pointeur. Sans lui, l'empreinte se pose sur le capteur, à gauche (c'est aussi ce qui se passe au clavier).
- Au clic, l'empreinte s'élargit, comme une pression plus forte.
- Sur `surface-inverse`, ajoutez `mc-on-inverse` au conteneur : le secondaire devient un contour clair.
- Libellé fourni par le consommateur : un verbe à l'infinitif et son objet (« Demander une démo », « Comparer les plateformes »). Jamais « OK », « Envoyer » seul ou « En savoir plus » seul.
- Un seul bouton principal par écran. Texte du principal en `on-orange`, jamais blanc.
- Focus clavier : contour `focus` de 2 px décalé de 3 px, et l'empreinte apparaît.
- Avec « moins d'animations » activé, l'empreinte apparaît sans transition.

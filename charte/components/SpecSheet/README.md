# SpecSheet

Fiche technique : libellé à gauche en `ink-muted`, valeur à droite en `data`, unités en `ink-muted`.

- Structure : `<table class="mc-spec">` avec une `<caption>` (style `eyebrow`) et des lignes `<tr><th>Libellé</th><td>Valeur <span class="unit">unité</span></td></tr>`.
- Une ligne dont la valeur reste à valider prend la classe `mc-spec__check` (texte `warning`) et la mention « à confirmer » : elle ne doit jamais partir en ligne.
- Le consommateur fournit les valeurs du référentiel validé, dans le même ordre pour toutes les plateformes : dimensions, poids, surface active, capteurs, pression, fréquence, connexion, système.

# PressureLegend

Légende de l'échelle de pression en six niveaux, de `pressure-1` (faible) à `pressure-6` (pic), avec ses bornes chiffrées.

- Structure : `<div class="mc-pressure">` contenant `<div class="mc-pressure__bar">` (six `<i>`) puis `<div class="mc-pressure__scale">` avec les valeurs.
- À placer sous toute cartographie ou capture du logiciel. Le consommateur fournit les bornes et l'unité réelles de la mesure affichée.
- L'échelle ne sert jamais de décoration ni de fond.

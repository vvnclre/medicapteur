/* Medicapteurs : recommandation d'une plateforme à partir de trois réponses.
   Utilisée par le comparateur de la gamme et par la page « Préparer ma demande ». */
window.mcReco = function (s, lang) {
  var u = s.usages || [];
  var has = function (k) { return u.indexOf(k) !== -1; };
  var W = {
    inshoe: ["Des capteurs sans fil dans la chaussure, pour mesurer en conditions réelles, au cabinet ou dehors.", "Wireless sensors inside the shoe, to measure in real conditions, in the clinic or outdoors."],
    power: ["Un tapis de course instrumenté dont la piste se pose aussi au sol pour la marche.", "An instrumented treadmill whose walkway also lies on the floor for walking."],
    trackLab: ["Une piste de 1,5 m d'un seul tenant pour 2 à 4 pas, à 200 images par seconde.", "A one-piece 1.5 m walkway for 2 to 4 steps, at 200 frames per second."],
    trackMini: ["Le Win-Track Mini : une piste de 1 m pour deux pas complets, qui tient dans un cabinet.", "Win-Track Mini: a 1 m walkway for two full steps, which fits in a practice."],
    posturo: ["Stabilométrie aux normes APE et rééducation par biofeedback avec Win-Trainer.", "APE-standard stabilometry and biofeedback rehabilitation with Win-Trainer."],
    fusyo: ["Podométrie et stabilométrie aux normes APE sur une seule plateforme.", "Podometry and APE-standard stabilometry on a single platform."],
    minipod: ["Une plateforme d'un kilo pilotée par smartphone, pour l'officine, le sport ou le domicile.", "A one-kilo platform driven by a smartphone, for pharmacies, sport or home visits."],
    winpod: ["Capteurs sensibles aux faibles pressions et rapport pied diabétique automatique.", "Sensors that pick up low pressures and an automatic diabetic foot report."],
    tplate: ["La T-Plate pour l'examen courant, le Win-Pod Wifi si vous suivez des pieds diabétiques ou faites de la recherche.", "T-Plate for everyday examinations, Win-Pod Wifi if you follow diabetic feet or do research."]
  };
  var r;
  if (has("chaussure")) r = { slugs: ["w-inshoe"], why: W.inshoe };
  else if (has("course")) r = { slugs: ["powertrack"], why: W.power };
  else if (has("marche")) r = { slugs: ["win-track"], why: s.lieu === "labo" ? W.trackLab : W.trackMini, budget: s.lieu === "labo" ? ["12 388 € TTC", "€12,388 incl. VAT"] : ["9 925 € TTC", "€9,925 incl. VAT"] };
  else if (has("posture")) r = (s.metier === "kine" && !has("statique") && !has("pas")) ? { slugs: ["win-posturo"], why: W.posturo } : { slugs: ["fusyo"], why: W.fusyo };
  else if (s.lieu === "mobile") r = { slugs: ["minipod"], why: W.minipod };
  else if (s.metier === "medecin" || s.metier === "chercheur" || s.lieu === "labo") r = { slugs: ["win-pod-wifi"], why: W.winpod };
  else r = { slugs: ["t-plate", "win-pod-wifi"], why: W.tplate };
  var i = lang === "en" ? 1 : 0;
  return { slugs: r.slugs, why: r.why[i], budget: r.budget ? r.budget[i] : null };
};

// Textes d'interface communs, en français et en anglais.
const fr = (fr, en) => ({ fr, en });

export default {
  skip: fr("Aller au contenu", "Skip to content"),
  navLabel: fr("Navigation principale", "Main navigation"),
  langLabel: fr("Langue", "Language"),
  langName: { fr: "Français", en: "English" },
  menu: fr("Menu", "Menu"),
  close: fr("Fermer", "Close"),
  nav: {
    products: fr("Produits", "Products"),
    diabetes: fr("Pied diabétique", "Diabetic foot"),
    guide: fr("Comprendre la mesure", "Understanding measurement"),
    studies: fr("Études", "Studies"),
    company: fr("L'entreprise", "About us"),
    contact: fr("Contact", "Contact"),
  },
  cta: fr("Préparer ma demande", "Prepare my request"),
  findPlatform: fr("Trouver ma plateforme", "Find my platform"),
  compare: fr("Comparer les modèles", "Compare models"),
  seeRange: fr("Voir toute la gamme", "See the whole range"),
  isNew: fr("Nouveau", "New"),
  toConfirm: fr("à confirmer", "to be confirmed"),
  soon: fr("Fiche technique à venir", "Data sheet coming soon"),

  mega: {
    byNeed: fr("Par besoin", "By need"),
    needs: [
      { label: fr("Examen podologique", "Podiatry examination"), route: "range", hash: "cabinet" },
      { label: fr("Pied diabétique", "Diabetic foot"), route: "diabetes" },
      { label: fr("Posture et équilibre", "Posture and balance"), route: "range", hash: "posture" },
      { label: fr("Analyse de la marche", "Gait analysis"), route: "range", hash: "labo" },
      { label: fr("Course et sport", "Running and sport"), route: "range", hash: "labo" },
      { label: fr("Mesure en déplacement", "Measuring on the move"), route: "range", hash: "mobile" },
    ],
    cols: [
      { title: fr("Plateformes", "Pressure plates"), items: ["minipod", "t-plate", "t-plate-40", "xt-plate", "win-pod-wifi"] },
      { title: fr("Marche et sport", "Gait and sport"), items: ["win-track", "powertrack", "w-inshoe"] },
      { title: fr("Posturologie", "Posturology"), items: ["fusyo", "win-posturo"] },
    ],
    software: fr("Logiciels", "Software"),
    softwareName: "Logiciel V10 · Podocapture",
    softwareNote: fr("Inclus avec chaque plateforme", "Included with every platform"),
    helpTitle: fr("Vous hésitez entre deux modèles ?", "Torn between two models?"),
    helpText: fr(
      "Quatre questions sur votre pratique : nous vous indiquons la plateforme adaptée et son budget indicatif.",
      "Four questions about your practice: we point you to the right platform and its indicative budget."
    ),
  },

  families: {
    mobile: { eyebrow: fr("Mobile", "Mobile"), title: fr("Mesurer partout", "Measure anywhere"), text: fr("Une plateforme légère pilotée par smartphone ou tablette.", "A lightweight platform driven by a smartphone or tablet.") },
    cabinet: { eyebrow: fr("Cabinet", "Clinic"), title: fr("Plateformes de baropodométrie", "Pressure plates"), text: fr("Statique, dynamique et posture, avec le logiciel complet sur PC.", "Static, dynamic and postural analysis, with the full software on PC.") },
    posture: { eyebrow: fr("Posturologie", "Posturology"), title: fr("Posture et équilibre", "Posture and balance"), text: fr("Stabilométrie normalisée APE et rééducation par biofeedback.", "APE-standardised stabilometry and biofeedback rehabilitation.") },
    labo: { eyebrow: fr("Laboratoire et sport", "Laboratory and sport"), title: fr("La marche, la course, la chaussure", "Walking, running, the shoe"), text: fr("Plusieurs pas d'affilée, la course sur tapis, la pression en conditions réelles.", "Several steps in a row, treadmill running, pressure in real conditions.") },
  },

  footer: {
    about: fr("Plateformes de mesure des pressions plantaires, conçues et fabriquées à Balma depuis 1985.", "Plantar pressure measurement platforms, designed and made in Balma, France, since 1985."),
    products: fr("Produits", "Products"),
    solutions: fr("Solutions", "Solutions"),
    resources: fr("Ressources", "Resources"),
    company: fr("Entreprise", "Company"),
    plates: fr("Plateformes", "Pressure plates"),
    walkways: fr("Pistes de marche", "Walkways"),
    posturology: fr("Posturologie", "Posturology"),
    inshoe: fr("Capteurs embarqués", "In-shoe sensors"),
    comparator: fr("Comparateur", "Comparison table"),
    podiatry: fr("Podologie", "Podiatry"),
    research: fr("Recherche", "Research"),
    sport: fr("Sport et rééducation", "Sport and rehabilitation"),
    support: fr("Support et hotline", "Support and hotline"),
    story: fr("Notre histoire", "Our story"),
    legal: fr("Mentions légales", "Legal notice"),
    privacy: fr("Données personnelles", "Privacy"),
    regulatory: fr("Dispositifs médicaux. Classe, règlement et organisme notifié : à préciser par Medicapteurs.", "Medical devices. Class, regulation and notified body: to be specified by Medicapteurs."),
  },
};

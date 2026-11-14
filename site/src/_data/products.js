// Gamme Medicapteurs : tout le contenu des fiches de l'ancien site (FR et EN), des brochures
// et de minipod.fr. Source et contradictions : contenu/REFERENTIEL.md.
// `check: true` = valeur contradictoire entre deux documents Medicapteurs, affichée « à confirmer ».
// `missing: true` = fiche technique à fournir par Medicapteurs.

const fr = (fr, en) => ({ fr, en });
const DOC = "https://www.medicapteurs.com/wp-content/uploads/sites/1772";
const row = (label, value, check) => ({ label, value, check: !!check });

/* ---------- Blocs de logiciel partagés ---------- */
const WINTRACK_SOFT = (name) => ({
  name: `${name} software`,
  intro: [
    fr(`La nouvelle version ${name} software est le résultat de plus de 30 années d'expérience de Medicapteurs en logiciel de podométrie. Elle conserve une grande facilité d'utilisation et répond aux dernières exigences : acquisition multi-pas, paramètres spatio-temporels, cartographie « Impulse », vidéo. Le bilan se présente mieux : rapport personnalisable, éditeur de courrier, publipostage, insertion de photos.`,
      `The new ${name} software is the result of more than 30 years of Medicapteurs experience in podometry software. It stays very easy to use and meets the latest requirements: multi-step acquisition, spatio-temporal parameters, “Impulse” mapping, video. Reports look better too: customisable report, letter editor, mail merge, photo insertion.`),
    fr("La visualisation pied gauche / pied droit fonctionne comme une acquisition dynamique Win-Pod, avec toutes ses fonctions : analyse par zone, vue zoomée, phases du pas. Le logiciel gère aussi un agenda multi-praticiens et le rattachement de tout type de fichier (Word, JPEG, PDF) à l'examen d'un patient.",
      "The left foot / right foot view works like a Win-Pod dynamic acquisition, with all its features: zone analysis, zoomed view, step phases. The software also manages a multi-practitioner calendar and lets you attach any type of file (Word, JPEG, PDF) to a patient's examination."),
  ],
  groups: [
    { title: fr("Analyse statique", "Static analysis"), items: [fr("Cartographie statique avec calcul par zone", "Static mapping with zone calculation"), fr("Visualisations thermographique, isopression, pourcentage, 3D", "Thermographic, isopressure, percentage and 3D views"), fr("Comparaison d'examens", "Examination comparison")] },
    { title: fr("Analyse dynamique", "Dynamic analysis"), items: [fr("Acquisition multi-pas jusqu'à 200 images par seconde", "Multi-step acquisition up to 200 frames per second"), fr("Image globale dynamique, calculs, courbes", "Global dynamic image, calculations, curves"), fr("Mosaïque des phases d'appui, analyse par zone", "Mosaic of stance phases, zone analysis"), fr("Temps d'appui et quantité de charge", "Contact time and load"), fr("Vidéo ou photo avec outil de mesure (longueurs, angles)", "Video or photo with measuring tool (lengths, angles)"), fr("Analyse médio-latérale", "Medio-lateral analysis"), fr("Analyse locométrique : longueur du pas, angle d'ouverture, timing des pas et des cycles", "Locomotion analysis: step length, foot angle, step and cycle timing")] },
    { title: fr("Analyse posturographique", "Postural analysis"), items: [fr("Analyse numérique et graphique des données posturographiques", "Numerical and graphical analysis of postural data"), fr("Écartement des pieds jusqu'à 1 m : swing de golf, tir, ergonomie", "Feet up to 1 m apart: golf swing, shooting, ergonomics"), fr("Quotient de Romberg", "Romberg quotient")] },
    { title: fr("Agenda, rapport et compte rendu", "Calendar and reports"), items: [fr("Agenda multi-praticiens", "Multi-practitioner calendar"), fr("Fichiers liés à l'examen du patient", "Files linked to the patient's examination"), fr("Impression à l'échelle 1:1", "1:1 scale printing"), fr("Rapport personnalisable, éditeur de courrier", "Customisable report, letter editor"), fr("Rapport pied diabétique automatique", "Automatic diabetic foot report")] },
  ],
});

const WINSHOE_SOFT = {
  name: "W-Inshoe software",
  intro: [fr("Un logiciel simple et intuitif sur PC Windows. La fiche patient et la base de données sont partagées avec tous les logiciels Medicapteurs.", "Simple, intuitive software for Windows PCs. The patient record and database are shared with all Medicapteurs software.")],
  groups: [
    { title: fr("Acquisitions", "Acquisitions"), items: [fr("Acquisition et visualisation 3D en temps réel", "Real-time acquisition and 3D display"), fr("Téléchargement des données enregistrées en ambulatoire", "Download of data recorded on the move"), fr("Fiche patient et base partagées avec tous les logiciels Medicapteurs", "Patient record and database shared with all Medicapteurs software")] },
    { title: fr("Paramétrages", "Settings"), items: [fr("Création et enregistrement de modèles de placement des capteurs", "Creation and saving of sensor placement templates")] },
    { title: fr("Analyses", "Analysis"), items: [fr("Pressions, temps d'activation et impulse de chaque capteur", "Pressure, activation time and impulse of each sensor"), fr("Comparaison pied droit / pied gauche", "Right foot / left foot comparison"), fr("Barycentre des capteurs", "Sensor barycentre"), fr("Assistant de détection des pas", "Step detection assistant"), fr("Comparaison entre plusieurs enregistrements", "Comparison between several recordings"), fr("Édition de rapports", "Report editing")] },
  ],
};

const TPLATE_SOFT = (name) => ({
  name: `${name} software`,
  intro: [fr("Le logiciel des T-Plate couvre l'examen statique, dynamique et postural, avec un suivi simple du patient : jusqu'à 4 examens comparés côte à côte, affichage en temps réel, enregistrement et rappel immédiats des examens.", "The T-Plate software covers static, dynamic and postural examinations, with simple patient follow-up: up to 4 examinations compared side by side, real-time display, immediate storage and recall of examinations.")],
  groups: [
    { title: fr("Analyse statique", "Static analysis"), items: [fr("Cartographie avec centre de pression, pressions max et moyenne, répartition des charges", "Mapping with centre of pressure, max and average pressure, weight distribution"), fr("Vues thermographique, isopression et 3D", "Thermographic, isopressure and 3D views"), fr("Mesures de longueur, angle, pression, surface", "Length, angle, pressure and area measurements"), fr("Impression à l'échelle 1:1", "1:1 scale printing"), fr("Foot Posture Index (© Anthony Redmond)", "Foot Posture Index (© Anthony Redmond)"), fr("Niveau de risque d'ulcération du pied diabétique et zones à risque", "Diabetic foot ulceration risk level and risk zones")] },
    { title: fr("Analyse dynamique", "Dynamic analysis"), items: [fr("Film et image par image", "Movie and frame-by-frame mode"), fr("Vue dynamique globale", "Global dynamic view"), fr("Ligne de marche", "Gait line"), fr("Calculs et courbes", "Calculations and curves"), fr("Rapport pied diabétique automatique", "Automatic diabetic foot report"), fr("CPEI (Center of Pressure Excursion Index)", "CPEI (Center of Pressure Excursion Index)")] },
    { title: fr("Analyse posturale", "Postural analysis"), items: [fr("Statokinésigramme et stabilogramme", "Statokinesigram and stabilogram"), fr("Paramètres internationaux d'instabilité", "International instability parameters"), fr("Positionneur Altuglas en option", "Altuglas positioner as an option")] },
    { title: fr("Vidéo", "Video"), items: [fr("Synchronisation automatique pression et vidéo", "Automatic pressure and video synchronisation"), fr("Outil de mesure d'angles et de longueurs", "Angle and length measuring tool")] },
  ],
});

const POSTURE_NV = {
  title: fr("Win-Posture NV : stabilographie statique et dynamique", "Win-Posture NV: static and dynamic stabilography"),
  items: [fr("Création et gestion des protocoles d'acquisition", "Creation and management of acquisition protocols"), fr("Paramétrage des normes et référentiels", "Norms and reference settings"), fr("Toutes les données stabilométriques normalisées AFP85 (APE)", "All AFP85 (APE) standardised stabilometry data"), fr("En option : ondelettes, analyses fractales et de diffusion", "Options: wavelets, fractal and diffusion analysis"), fr("Comparaison des examens", "Examination comparison"), fr("Multiples visualisations du signal stabilométrique", "Multiple views of the stabilometric signal"), fr("Rapports et bilans personnalisables", "Customisable reports"), fr("Export direct vers Excel", "Direct export to Excel"), fr("Éditeur de courrier, publipostage", "Letter editor, mail merge")],
};

export default [
  /* ---------------- MINIPOD ---------------- */
  {
    slug: "minipod",
    name: "Minipod",
    short: fr("800 capteurs · smartphone", "800 sensors · smartphone"),
    family: "mobile",
    image: "minipod.jpg",
    gallery: ["minipod-pied.jpg"],
    tagline: fr("La plateforme qui tient dans un sac, pilotée par smartphone.", "The platform that fits in a bag, driven by a smartphone."),
    summary: fr(
      "Minipod mesure les pressions plantaires en statique et en dynamique avec l'application Podocapture, sur tablette ou smartphone iOS et Android. Pour l'officine, le sport et les consultations à domicile.",
      "Minipod measures plantar pressure in static and dynamic conditions with the Podocapture app, on iOS and Android tablets or smartphones. For pharmacies, sport and home visits."
    ),
    intro: [
      fr("Un kilo, un centimètre d'épaisseur : Minipod se range dans un sac et se pose n'importe où. Il se pilote uniquement par l'application gratuite Podocapture, sur smartphone ou tablette, en Bluetooth ou en USB-C.", "One kilo, one centimetre thick: Minipod fits in a bag and goes anywhere. It is driven only by the free Podocapture app, on a smartphone or tablet, over Bluetooth or USB-C."),
      fr("Minipod est conçu et fabriqué à 100 % en France, à Toulouse. Il a été présenté au salon AFDP du 7 mars 2025 lors de l'intervention « Minipod : des podomètres pour tous ! ».", "Minipod is designed and made 100% in France, in Toulouse. It was presented at the AFDP show on 7 March 2025 in the talk “Minipod: pressure plates for everyone!”."),
    ],
    key: [
      { value: "800", label: fr("capteurs (20 × 40)", "sensors (20 × 40)") },
      { value: "1", unit: "kg", label: fr("ultra-léger", "lightweight") },
      { value: "100", unit: fr("images/s", "frames/s"), label: fr("acquisition", "sampling") },
    ],
    highlights: [
      { title: fr("Mesure", "Measurement"), items: [fr("Statique et dynamique sur smartphone ou tablette", "Static and dynamic on smartphone or tablet"), fr("Répartition gauche / droite et avant / arrière", "Left / right and front / rear distribution"), fr("Ligne de marche (gait line)", "Gait line"), fr("Pics de pression, pressions moyennes, zones d'impulse", "Peak pressure, average pressure, impulse zones")] },
      { title: fr("Patient", "Patient"), items: [fr("Base patients dans l'application", "Patient database in the app"), fr("Photos, notes vocales ou écrites", "Photos, voice or written notes"), fr("Scoring du pied diabétique : au-delà de 2, les zones à décharger s'affichent", "Diabetic foot scoring: above 2, the areas to offload are displayed")] },
      { title: fr("Rapport", "Report"), items: [fr("Rapport généré en un clic", "One-click report"), fr("Partage par e-mail, WhatsApp, SMS, Google Drive", "Share by email, WhatsApp, text, Google Drive"), fr("Impression sur imprimante Wifi", "Printing on a Wi-Fi printer")] },
    ],
    specs: [
      { title: fr("Mécanique", "Mechanical"), rows: [
        row(fr("Dimensions", "Dimensions"), "430 × 280 × 10 mm"),
        row(fr("Poids", "Weight"), "1 kg"),
        row(fr("Surface active", "Active area"), "200 × 400 mm"),
      ] },
      { title: fr("Électronique", "Electronics"), rows: [
        row(fr("Capteurs", "Sensors"), fr("800 (20 × 40), résistifs autocalibrés", "800 (20 × 40), self-calibrated resistive")),
        row(fr("Taille, épaisseur du capteur", "Sensor size, thickness"), "10 × 10 mm · 3 mm"),
        row(fr("Pression par capteur", "Pressure per sensor"), fr("0,6 à 100 N", "0.6 to 100 N"), true),
        row(fr("Fréquence", "Sampling rate"), fr("100 images/s", "100 frames/s")),
        row(fr("Température en mesure", "Operating temperature"), "0 – 35 °C"),
        row(fr("Connexion", "Connection"), "Bluetooth · USB-C"),
        row(fr("Alimentation", "Power"), fr("Secteur ou USB", "Mains or USB")),
        row(fr("Pilotage", "Control"), fr("Application Podocapture · Android 10, iOS 17", "Podocapture app · Android 10, iOS 17")),
      ] },
    ],
    options: [fr("Tapis mousse : 50 € TTC", "Foam mat: €50"), fr("Câble : 30 € TTC", "Cable: €30"), fr("Adaptateur secteur : 35 € TTC", "Mains adapter: €35")],
    software: {
      name: "Podocapture",
      intro: [
        fr("L'application Podocapture rend l'examen baropodométrique mobile et lisible. Elle montre clairement les pressions sous la plante des pieds et fait de la podométrie un outil de dialogue avec le patient.", "The Podocapture app makes the baropodometric examination mobile and easy to read. It clearly shows the pressure under the soles of the feet and turns podometry into a tool for talking with the patient."),
        fr("Podocapture calcule nativement le scoring du pied diabétique. Si le score dépasse 2, l'application affiche automatiquement les zones à décharger.", "Podocapture natively calculates diabetic foot scoring. If the score is above 2, the app automatically shows the areas to offload."),
      ],
      groups: [],
    },
    docs: [
      { label: fr("Application Podocapture (PDF)", "Podocapture app (PDF)"), url: `${DOC}/2017/02/podocapture-.pdf` },
    ],
    price: { value: fr("1 790 € TTC", "€1,790 incl. VAT"), note: fr("Prix public sur minipod.fr", "Public price on minipod.fr") },
    related: ["t-plate", "win-pod-wifi"],
  },

  /* ---------------- T-PLATE ---------------- */
  {
    slug: "t-plate",
    name: "T-Plate",
    short: fr("1 600 capteurs · USB, Wifi", "1,600 sensors · USB, Wi-Fi"),
    family: "cabinet",
    image: "t-plate.jpg",
    gallery: ["tplate-wifi-tablette.jpg"],
    tagline: fr("L'examen podologique de tous les jours.", "The everyday podiatry examination."),
    summary: fr(
      "Fine, intelligente, simple : la T-Plate est la façon la plus précise et la plus économique de connaître le profil de pression plantaire. Elle existe en USB, USB + Wifi ou USB + Bluetooth.",
      "Slim, smart, simple: T-Plate is the most accurate and cost-effective way to identify the plantar pressure profile. It comes in USB, USB + Wi-Fi or USB + Bluetooth versions."
    ),
    intro: [
      fr("Chaque jour, plus de 15 000 T-Plate examinent des dizaines de milliers de pieds. Les outils traditionnels ne donnent pas les mêmes informations : la T-Plate renforce votre crédibilité et vous aide à poser le bon diagnostic.", "Every day, more than 15,000 T-Plates scan tens of thousands of feet. Traditional tools cannot provide the same information: T-Plate strengthens your credibility and helps you make the right diagnosis."),
      fr("Un examen moderne : suivi du patient sur 4 examens comparés, affichage en temps réel, écrans visuels qui facilitent la compréhension du patient. En Wifi, elle se pilote depuis un iPad, une tablette ou un smartphone avec l'application gratuite Podocapture.", "A modern examination: patient follow-up over 4 compared examinations, real-time display, visual screens that help the patient understand. Over Wi-Fi, it can be driven from an iPad, tablet or smartphone with the free Podocapture app."),
    ],
    key: [
      { value: "1 600", label: fr("capteurs résistifs", "resistive sensors") },
      { value: "400 × 400", unit: "mm", label: fr("surface active", "active area") },
      { value: "3", unit: "kg", label: fr("transportable", "portable") },
    ],
    highlights: [
      { title: fr("Applications cliniques (brochure 2026)", "Clinical applications (2026 brochure)"), items: [fr("Évaluation anatomique et fonctionnelle : pied plat, varus, valgus, FPI", "Anatomical and functional assessment: flat foot, varus, valgus, FPI"), fr("Traitement des pathologies du pied : hallux valgus, orteils en marteau, métatarsalgies", "Treatment of foot conditions: bunions, mallet toes, metatarsalgia"), fr("Fabrication de semelles et de chaussures", "Insole and shoe manufacturing"), fr("Bilan du pied du sportif", "Athlete foot assessment"), fr("Évaluation du pied diabétique et du risque d'ulcération", "Diabetic foot and ulceration risk assessment"), fr("Risque de chute de la personne âgée : appui monopodal 5 s, lever de chaise", "Fall risk in older people: 5 s single-leg stance, sit-to-stand"), fr("Suivi avant / après chirurgie", "Pre / post surgery follow-up"), fr("Pied plat de l'enfant, maladie de Sever", "Children's flat foot, Sever's disease"), fr("Recherche", "Research")] },
    ],
    specs: [
      { title: fr("Mécanique", "Mechanical"), rows: [
        row(fr("Dimensions", "Dimensions"), "565 × 612 × 22 mm"),
        row(fr("Épaisseur", "Thickness"), "8 mm"),
        row(fr("Poids", "Weight"), "3 kg"),
        row(fr("Matériau", "Material"), "Plexiglas"),
        row(fr("Surface active", "Active area"), "400 × 400 mm"),
        row(fr("Charge maximale", "Maximum load"), "200 kg"),
      ] },
      { title: fr("Électronique", "Electronics"), rows: [
        row(fr("Capteurs", "Sensors"), fr("1 600 résistifs, 10 × 10 mm", "1,600 resistive, 10 × 10 mm")),
        row(fr("Pression par capteur", "Pressure per sensor"), fr("0,4 à 100 N", "0.4 to 100 N")),
        row(fr("Fréquence", "Sampling rate"), fr("100 Hz en USB · 150 Hz en Wifi", "100 Hz USB · 150 Hz Wi-Fi")),
        row(fr("Durée de vie des capteurs", "Sensor lifetime"), fr("> 1 000 000 d'actionnements", "> 1,000,000 actuations")),
        row(fr("Température", "Temperature"), "0 – 60 °C"),
        row(fr("Connexion", "Connection"), fr("USB · USB + Wifi · USB + Bluetooth", "USB · USB + Wi-Fi · USB + Bluetooth")),
        row(fr("Alimentation", "Power"), fr("USB, ou batterie lithium en Wifi", "USB, or lithium battery in Wi-Fi mode")),
        row(fr("Statut", "Status"), fr("Dispositif médical classe 1m · CE, FDA, KFDA, PAL (brochure 2026)", "Class 1m medical device · CE, FDA, KFDA, PAL (2026 brochure)"), true),
      ] },
    ],
    options: [fr("Application Podocapture (version Wifi)", "Podocapture app (Wi-Fi version)"), fr("Positionneur Altuglas (référence 60°)", "Altuglas positioner (60° reference)"), fr("Housse de transport", "Carrying bag")],
    software: TPLATE_SOFT("T-Plate"),
    docs: [
      { label: fr("Brochure T-Plate 2026 (PDF)", "T-Plate 2026 brochure (PDF)"), url: `${DOC}/2017/06/tplate2026.pdf` },
      { label: fr("Brochure T-Plate 2023 (PDF)", "T-Plate 2023 brochure (PDF)"), url: `${DOC}/2017/06/t-plate_2023.pdf` },
    ],
    price: null,
    studies: 38,
    related: ["t-plate-40", "t-plate-30th", "win-pod-wifi"],
  },

  /* ---------------- T-PLATE 40 ---------------- */
  {
    slug: "t-plate-40",
    name: "T-Plate 40",
    short: fr("Nouveau · édition des 40 ans", "New · 40th anniversary"),
    family: "cabinet",
    image: "t-plate-40.jpg",
    isNew: true,
    missing: true,
    tagline: fr("L'édition des 40 ans de Medicapteurs.", "The Medicapteurs 40th anniversary edition."),
    summary: fr(
      "Présentée au salon AFDP 2026 au Parc floral de Paris, la T-Plate « 40e anniversaire » est livrée avec le logiciel toutes options, qui rédige désormais un rapport synthétique automatique.",
      "Introduced at the AFDP 2026 show at the Parc floral in Paris, the “40th anniversary” T-Plate comes with the full-option software, which now writes an automatic summary report."
    ),
    intro: [fr("Medicapteurs célèbre 40 ans d'excellence avec cette nouvelle plateforme. Le rapport synthétique automatique rédige les phrases d'interprétation de l'examen : répartition gauche / droite dans ou hors de la norme, rapports avant / arrière, pressions max et moyenne, surface d'appui, durées de contact et phases du pas, asymétries. Il existe en français et en anglais.", "Medicapteurs celebrates 40 years of excellence with this new platform. The automatic summary report writes the interpretation of the examination: left / right distribution within or outside the norm, front / rear ratios, max and average pressure, contact area, contact times and step phases, asymmetries. It is available in French and English.")],
    key: [],
    highlights: [{ title: fr("Inclus", "Included"), items: [fr("Logiciel toutes options", "Full-option software"), fr("Rapport synthétique généré automatiquement, en français et en anglais", "Automatically generated summary report, in French and English")] }],
    specs: [],
    options: [],
    software: null,
    docs: [],
    price: null,
    related: ["t-plate", "t-plate-30th"],
  },

  /* ---------------- T-PLATE 30th ---------------- */
  {
    slug: "t-plate-30th",
    name: "T-Plate 30th",
    short: fr("4 096 capteurs · 50 × 50 cm", "4,096 sensors · 50 × 50 cm"),
    family: "cabinet",
    image: "t-plate-30.jpg",
    tagline: fr("50 % de surface en plus et le logiciel toutes options.", "50% more active area and the full-option software."),
    summary: fr(
      "La T-Plate avancée : une surface active de 50 × 50 cm et les options avancées du logiciel, dont les paramètres de recherche et la visualisation spécifique du pied diabétique.",
      "The advanced T-Plate: a 50 × 50 cm active area and the advanced software options, including research parameters and a specific diabetic foot view."
    ),
    intro: [fr("La T-Plate 30th ajoute 50 % de surface active et un logiciel toutes options à la T-Plate, la plateforme la plus vendue de la gamme. Elle existe en deux modèles : USB, ou USB + Wifi.", "T-Plate 30th adds 50% more active area and a full-option software to T-Plate, the best seller of the range. It comes in two models: USB, or USB + Wi-Fi.")],
    key: [
      { value: "4 096", label: fr("capteurs résistifs", "resistive sensors") },
      { value: "500 × 500", unit: "mm", label: fr("surface active", "active area") },
      { value: "3,6", unit: "kg", label: fr("transportable", "portable") },
    ],
    highlights: [
      { title: fr("Options logicielles incluses", "Software options included"), items: [fr("Paramètres et graphiques de recherche", "Research parameters and graphs"), fr("Visualisation spécifique du pied diabétique", "Specific diabetic foot view"), fr("Foot Posture Index, norme internationale du pied", "Foot Posture Index, international foot norm"), fr("CPEI : détection automatique du pied pronateur, supinateur ou neutre", "CPEI: automatic detection of pronated, supinated or neutral foot"), fr("Découpage automatique en 2 ou 10 zones, manuel en 7 ou 12 zones", "Automatic division into 2 or 10 zones, manual into 7 or 12 zones"), fr("Calcul du niveau de risque d'ulcération du patient diabétique", "Calculation of the ulceration risk level for diabetic patients"), fr("Rapport descriptif automatique en statique, dynamique et posture", "Automatic descriptive report in static, dynamic and postural modes")] },
    ],
    specs: [
      { title: fr("Mécanique", "Mechanical"), rows: [
        row(fr("Dimensions", "Dimensions"), "710 × 610 × 22 mm"),
        row(fr("Épaisseur", "Thickness"), "8 mm"),
        row(fr("Poids", "Weight"), "3,6 kg"),
        row(fr("Matériau", "Material"), "Plexiglas"),
        row(fr("Surface active", "Active area"), "500 × 500 mm"),
        row(fr("Charge maximale", "Maximum load"), "200 kg"),
      ] },
      { title: fr("Électronique", "Electronics"), rows: [
        row(fr("Capteurs", "Sensors"), fr("4 096 résistifs", "4,096 resistive")),
        row(fr("Taille d'un capteur", "Sensor size"), fr("7,8 × 7,8 mm", "7.8 × 7.8 mm"), true),
        row(fr("Pression par capteur", "Pressure per sensor"), fr("0,4 à 100 N", "0.4 to 100 N")),
        row(fr("Fréquence", "Sampling rate"), fr("150 Hz en USB · 200 Hz en Wifi (brochure 2026)", "150 Hz USB · 200 Hz Wi-Fi (2026 brochure)"), true),
        row(fr("Température", "Temperature"), "0 – 60 °C"),
        row(fr("Connexion", "Connection"), fr("USB ou Wifi", "USB or Wi-Fi")),
        row(fr("Système", "Operating system"), "Windows 7, 8, 10, 11"),
      ] },
    ],
    options: [fr("Modèle USB ou USB + Wifi", "USB or USB + Wi-Fi model"), fr("Housse de transport", "Carrying bag"), fr("Positionneur Altuglas", "Altuglas positioner")],
    software: TPLATE_SOFT("T-Plate 30th"),
    docs: [{ label: fr("Fiche technique T-Plate 30th (PDF)", "T-Plate 30th data sheet (PDF)"), url: `${DOC}/2017/03/data-t-plate-30-th.pdf` }],
    price: null,
    related: ["t-plate", "t-plate-40", "win-pod-wifi"],
  },

  /* ---------------- XT-PLATE ---------------- */
  {
    slug: "xt-plate",
    name: "XT-Plate",
    short: fr("Nouveau · 2026", "New · 2026"),
    family: "cabinet",
    image: "xt-plate.jpg",
    isNew: true,
    missing: true,
    tagline: fr("Légère et économique, en USB, Wifi ou Bluetooth.", "Light and cost-effective, in USB, Wi-Fi or Bluetooth."),
    summary: fr(
      "La XT-Plate est la dernière plateforme de la gamme, en modèles USB, USB + Wifi ou USB + Bluetooth. Sa fiche technique propre sera publiée prochainement.",
      "XT-Plate is the latest platform in the range, in USB, USB + Wi-Fi or USB + Bluetooth models. Its own data sheet will be published soon."
    ),
    intro: [fr("La page actuelle de la XT-Plate reprend les caractéristiques de la T-Plate (400 × 400 mm, 1 600 capteurs). Les valeurs propres à la XT-Plate sont à confirmer par Medicapteurs.", "The current XT-Plate page repeats the T-Plate specifications (400 × 400 mm, 1,600 sensors). The values specific to XT-Plate are to be confirmed by Medicapteurs.")],
    key: [],
    highlights: [],
    specs: [],
    options: [],
    software: null,
    docs: [],
    price: null,
    related: ["t-plate", "t-plate-40"],
  },

  /* ---------------- WIN-POD WIFI ---------------- */
  {
    slug: "win-pod-wifi",
    name: "Win-Pod Wifi",
    short: fr("2 304 capteurs · la référence", "2,304 sensors · the reference"),
    family: "cabinet",
    image: "win-pod.jpg",
    gallery: ["winpod-tablette.jpg"],
    tagline: fr("La plateforme de référence, des faibles pressions aux plus fortes.", "The reference platform, from the lowest pressures to the highest."),
    summary: fr(
      "2 304 capteurs HD calibrés : précision, homogénéité et sensibilité. Détection des faibles pressions pour la marche de l'enfant, dynamique étendue pour les fortes pressions de la course. USB sur PC, Wifi sur smartphone et tablette.",
      "2,304 calibrated HD sensors: accuracy, consistency and sensitivity. Low-pressure detection for children's gait, extended range for the high pressures of running. USB to a PC, Wi-Fi to smartphones and tablets."
    ),
    intro: [
      fr("La plateforme de référence du marché, et la garantie d'une qualité de résultats made in France. Les capteurs à seuil bas conviennent à la marche de l'enfant et au pied diabétique ; la grande dynamique de mesure évite la saturation aux fortes pressions, là où des appareils d'entrée de gamme affichent des zones rouges surdimensionnées.", "The reference platform on the market, and the guarantee of made-in-France quality results. Its low-threshold sensors suit children's gait and the diabetic foot; its wide measuring range avoids saturation at high pressures, where entry-level devices show oversized red areas."),
      fr("Un design novateur et des matériaux robustes, avec un positionneur et un support en Plexiglas en option. Batterie grande capacité : 2 jours d'autonomie.", "An innovative design and robust materials, with an optional Plexiglas positioner and stand. High-capacity battery: 2 days of autonomy."),
    ],
    key: [
      { value: "2 304", label: fr("capteurs, matrice 48 × 48", "sensors, 48 × 48 matrix") },
      { value: "0,4 – 100", unit: "N", label: fr("par capteur", "per sensor") },
      { value: "300", unit: fr("images/s", "frames/s"), label: fr("en dynamique", "in dynamic mode") },
    ],
    highlights: [
      { title: fr("La plateforme", "The platform"), items: [fr("Précision, homogénéité et sensibilité des 2 304 capteurs HD calibrés", "Accuracy, consistency and sensitivity of the 2,304 calibrated HD sensors"), fr("Détection des faibles pressions pour l'analyse de la marche de l'enfant", "Low-pressure detection for children's gait analysis"), fr("Dynamique de mesure étendue pour les pressions élevées pendant la course", "Extended range for high pressures while running"), fr("USB sur PC, Wifi sur smartphone et tablette iOS et Android", "USB to a PC, Wi-Fi to iOS and Android smartphones and tablets")] },
      { title: fr("Le logiciel Win-Pod", "Win-Pod software"), items: [fr("Plus de 30 années d'expérience en baropodométrie", "More than 30 years of baropodometry experience"), fr("Prise en main aisée, du débutant à l'expert", "Easy to learn, for beginners and experts"), fr("Analyse statique, dynamique et posturale", "Static, dynamic and postural analysis"), fr("Bilans imprimables ou en PDF, comparaison avant / après traitement", "Printable or PDF reports, before / after treatment comparison"), fr("Fonctions avancées pour la recherche, export statistique", "Advanced research features, statistical export"), fr("Plus de 150 publications scientifiques et mémoires", "More than 150 scientific papers and theses")] },
    ],
    specs: [
      { title: fr("Mécanique", "Mechanical"), rows: [
        row(fr("Dimensions", "Dimensions"), "530 × 610 × 25 mm", true),
        row(fr("Épaisseur", "Thickness"), "4 mm"),
        row(fr("Poids", "Weight"), "6,8 kg", true),
        row(fr("Surface active", "Active area"), "400 × 400 mm"),
      ] },
      { title: fr("Électronique", "Electronics"), rows: [
        row(fr("Capteurs", "Sensors"), fr("2 304 (48 × 48), résistifs calibrés", "2,304 (48 × 48), calibrated resistive")),
        row(fr("Taille, épaisseur du capteur", "Sensor size, thickness"), "8 × 8 mm · 0,15 mm"),
        row(fr("Pression par capteur", "Pressure per sensor"), fr("0,4 à 100 N", "0.4 to 100 N")),
        row(fr("Fréquence", "Sampling rate"), fr("jusqu'à 300 images/s (standard ou option ?)", "up to 300 frames/s (standard or option?)"), true),
        row(fr("Température", "Temperature"), "-40 – 85 °C"),
        row(fr("Connexion", "Connection"), fr("USB · Wifi (iOS, Android avec Podocapture)", "USB · Wi-Fi (iOS, Android with Podocapture)")),
        row(fr("Alimentation", "Power"), fr("USB ou batterie lithium, 2 jours d'autonomie", "USB or lithium battery, 2-day autonomy")),
        row(fr("Système", "Operating system"), "Windows 8, 10, 11"),
      ] },
    ],
    options: [fr("Positionneur Plexiglas", "Plexiglas positioner"), fr("Support Plexiglas", "Plexiglas stand"), fr("Valise de transport", "Carrying case"), fr("Logiciel Physioplay (rééducation)", "Physioplay software (rehabilitation)")],
    software: {
      name: "Win-Pod software · V10",
      intro: [fr("Le logiciel Win-Pod pour Windows est le résultat de plus de 30 années d'expérience en baropodométrie. Il s'adresse autant au débutant qu'à l'expert et à la recherche.", "Win-Pod software for Windows is the result of more than 30 years of baropodometry experience. It suits beginners, experts and researchers alike.")],
      groups: [
        { title: fr("Acquisition", "Acquisition"), items: [fr("Acquisition multi-pas", "Multi-step acquisition"), fr("Enregistrement jusqu'à 300 images par seconde", "Recording up to 300 frames per second"), fr("Synchronisation automatique jusqu'à 2 caméras vidéo", "Automatic synchronisation with up to 2 video cameras")] },
        { title: fr("Analyse", "Analysis"), items: [fr("Visualisations thermographique, isopression, pourcentage, 3D", "Thermographic, isopressure, percentage and 3D views"), fr("Analyse automatique par 2, 7, 10 ou 12 zones", "Automatic analysis by 2, 7, 10 or 12 zones"), fr("Découpage libre : dissymétrie, retard pied gauche / pied droit", "Free division: asymmetry, left / right foot delay"), fr("Analyse médio-latérale", "Medio-lateral analysis"), fr("Sway index : papillon du centre de pression", "Sway index: centre of pressure butterfly")] },
        { title: fr("Indices", "Indices"), items: [fr("Foot Posture Index, normalisation internationale du pied", "Foot Posture Index, international foot standard"), fr("CPEI : type de pied pronateur, supinateur ou normal calculé automatiquement", "CPEI: pronated, supinated or normal foot type calculated automatically"), fr("Rapport pied diabétique automatique", "Automatic diabetic foot report")] },
        { title: fr("Rapport et partage", "Reports and sharing"), items: [fr("Impression à l'échelle 1:1", "1:1 scale printing"), fr("Tout type de fichier rattaché à l'examen (Word, JPEG, PDF)", "Any type of file attached to the examination (Word, JPEG, PDF)"), fr("Envoi du rapport par e-mail en 2 clics", "Report sent by email in 2 clicks"), fr("Export pour analyse statistique", "Export for statistical analysis")] },
      ],
    },
    docs: [
      { label: fr("Brochure Win-Pod 2022 (PDF)", "Win-Pod 2022 brochure (PDF)"), url: `${DOC}/2017/02/win-pod_2022.pdf` },
      { label: fr("Documentation Win-Pod Wifi (PDF)", "Win-Pod Wifi documentation (PDF)"), url: `${DOC}/2017/08/documentation_winpod_wifi-.pdf` },
      { label: fr("Application Podocapture (PDF)", "Podocapture app (PDF)"), url: `${DOC}/2017/02/podocapture-uk.pdf` },
    ],
    price: { value: fr("8 319 € TTC", "€8,319 incl. VAT"), note: fr("Prix catalogue 2024 indicatif", "Indicative 2024 list price"), check: true },
    studies: 94,
    related: ["t-plate", "fusyo", "win-track"],
  },

  /* ---------------- FUSYO ---------------- */
  {
    slug: "fusyo",
    name: "Fusyo",
    short: fr("Podo + stabilométrie APE", "Podometry + APE stabilometry"),
    family: "posture",
    image: "fusyo.jpg",
    gallery: ["fusyo-plateau.jpg"],
    tagline: fr("Podométrie et stabilométrie sur une seule plateforme.", "Podometry and stabilometry on a single platform."),
    summary: fr(
      "Nouvelle Fusyo 3, filaire ou Wifi intégré : une matrice de 2 304 capteurs pour la podométrie et trois jauges de contrainte pour la stabilométrie aux recommandations de l'Association Posture et Équilibre (APE).",
      "The new Fusyo 3, wired or with built-in Wi-Fi: a 2,304-sensor matrix for podometry and three strain gauges for stabilometry following the recommendations of the French Posture and Balance Association (APE)."
    ),
    intro: [
      fr("Fusyo, le couplage inédit : Medicapteurs réalise un système qui réunit une plateforme de podométrie électronique et une plateforme de posturographie répondant aux recommandations de l'APE.", "Fusyo, a unique combination: Medicapteurs makes a system that brings together an electronic podometry platform and a posturography platform following APE recommendations."),
      fr("Le logiciel Fusyo exploite toutes les fonctions des logiciels Win-Pod et Win-Posture NV. Il ouvre aussi des analyses inédites des paramètres stabilométriques en corrélation avec la baropodométrie statique.", "Fusyo software uses every feature of the Win-Pod and Win-Posture NV software. It also opens new analyses of stabilometric parameters correlated with static baropodometry."),
    ],
    key: [
      { value: "2 304", label: fr("capteurs + 3 jauges", "sensors + 3 gauges") },
      { value: "5 – 40", unit: "Hz", label: fr("stabilométrie", "stabilometry") },
      { value: "250", unit: "kg", label: fr("charge maximale", "maximum load") },
    ],
    highlights: [
      { title: fr("Fonctions podométriques", "Podometry features"), items: [fr("Cartographies de pression d'une grande précision et fiabilité", "Highly accurate and reliable pressure maps"), fr("Toutes les fonctions du logiciel Win-Pod", "All Win-Pod software features")] },
      { title: fr("Fonctions posturographiques", "Posturography features"), items: [fr("Évaluation posturale, troubles de la statique et de l'équilibre", "Postural assessment, static and balance disorders"), fr("Selon les recommandations AFP85 (SOFPEL), aujourd'hui APE", "Following AFP85 (SOFPEL) recommendations, now APE")] },
    ],
    specs: [
      { title: fr("Mécanique", "Mechanical"), rows: [
        row(fr("Dimensions", "Dimensions"), "530 × 600 × 70 mm", true),
        row(fr("Épaisseur", "Thickness"), "35 mm"),
        row(fr("Poids", "Weight"), "12,5 kg"),
      ] },
      { title: fr("Électronique", "Electronics"), rows: [
        row(fr("Surface active", "Active area"), "400 × 400 mm"),
        row(fr("Charge maximale", "Maximum load"), "250 kg"),
        row(fr("Capteurs", "Sensors"), fr("2 304 (48 × 48) haute résolution pour la podométrie · 3 jauges de contrainte pour la stabilométrie", "2,304 (48 × 48) high-resolution for podometry · 3 strain gauges for stabilometry")),
        row(fr("Taille, épaisseur du capteur", "Sensor size, thickness"), "8 × 8 mm · 0,15 mm"),
        row(fr("Pression par capteur", "Pressure per sensor"), fr("0,4 à 100 N", "0.4 to 100 N")),
        row(fr("Non-linéarité", "Non-linearity"), "< 0,2 %"),
        row(fr("Fréquence", "Sampling rate"), fr("Podométrie 200 images/s · stabilométrie 5 ou 40 Hz", "Podometry 200 frames/s · stabilometry 5 or 40 Hz"), true),
        row(fr("Connexion", "Connection"), fr("USB · Wifi", "USB · Wi-Fi")),
        row(fr("Alimentation", "Power"), fr("Câble USB, batterie en mode Wifi (fournie ou non ?)", "USB cable, battery in Wi-Fi mode (supplied or not?)"), true),
        row(fr("Système", "Operating system"), "Windows 7, 8, 10, 11"),
      ] },
    ],
    options: [fr("Plateau d'équilibration dynamique", "Dynamic balance board"), fr("Valise de transport", "Carrying case"), fr("Win-Trainer NV (rééducation)", "Win-Trainer NV (rehabilitation)")],
    software: {
      name: "Fusyo software",
      intro: [fr("Un logiciel convivial qui réunit la podométrie et la posturographie. Le compte rendu se personnalise entièrement selon votre méthode de travail : photos, commentaires, modèles types, impression à la file.", "User-friendly software that brings podometry and posturography together. The report is fully customisable to your way of working: photos, comments, templates, batch printing.")],
      groups: [
        { title: fr("Analyse statique", "Static analysis"), items: [fr("Cartographie statique avec calcul par zone", "Static mapping with zone calculation"), fr("Visualisations thermographique, isopression, pourcentage, 3D", "Thermographic, isopressure, percentage and 3D views"), fr("Impression à l'échelle 1:1", "1:1 scale printing"), fr("Comparaison d'examens", "Examination comparison"), fr("Foot Posture Index", "Foot Posture Index")] },
        { title: fr("Analyse dynamique (avec piste de marche, non fournie)", "Dynamic analysis (with a walkway, not supplied)"), items: [fr("Acquisition multi-pas jusqu'à 200 images par seconde", "Multi-step acquisition up to 200 frames per second"), fr("Image globale dynamique, calculs, courbes", "Global dynamic image, calculations, curves"), fr("Mosaïque des phases d'appui, analyse par zone", "Mosaic of stance phases, zone analysis"), fr("Temps d'appui et quantité de charge", "Contact time and load"), fr("Vidéo synchronisée automatiquement", "Automatically synchronised video"), fr("Analyse médio-latérale, CPEI", "Medio-lateral analysis, CPEI"), fr("Rapport pied diabétique", "Diabetic foot report")] },
        POSTURE_NV,
      ],
    },
    docs: [
      { label: fr("Plaquette de la nouvelle Fusyo (PDF)", "New Fusyo brochure (PDF)"), url: `${DOC}/2017/02/fusyo-v3-2019.pdf` },
      { label: fr("Documentation Fusyo (PDF)", "Fusyo documentation (PDF)"), url: `${DOC}/2017/02/documentation-fusyo.pdf` },
    ],
    price: null,
    studies: 84,
    related: ["win-posturo", "win-pod-wifi"],
  },

  /* ---------------- WIN-POSTURO ---------------- */
  {
    slug: "win-posturo",
    name: "Win-Posturo",
    short: fr("Stabilométrie 5 – 40 Hz", "Stabilometry 5 – 40 Hz"),
    family: "posture",
    image: "win-posturo.jpg",
    gallery: ["winposturo-soft.jpg"],
    tagline: fr("La plateforme de stabilométrie et de rééducation posturale.", "The stabilometry and postural rehabilitation platform."),
    summary: fr(
      "L'outil du praticien posturologue pour l'évaluation posturale, l'analyse des troubles de la statique et de l'équilibre et le contrôle thérapeutique. Plateforme extra-plate, électronique 16 bits, fiable à 5 Hz comme à 40 Hz.",
      "The posturologist's tool for postural assessment, analysis of static and balance disorders, and treatment monitoring. Extra-flat platform, 16-bit electronics, reliable at 5 Hz as at 40 Hz."
    ),
    intro: [
      fr("Nouvelle conception, plus performante et plus robuste, nouveau design. La plateforme est normalisée suivant les normes AFP85, aujourd'hui APE (Association Posture et Équilibre). Medicapteurs est membre de l'APE et intègre systématiquement les dernières évolutions validées par l'association.", "New design, more efficient and more robust. The platform is standardised according to the AFP85 norms, now APE (French Posture and Balance Association). Medicapteurs is a member of APE and systematically implements the latest changes validated by the association."),
      fr("La posturologie étudie l'équilibre orthostatique, régi par le système postural fin : l'œil, l'oreille interne, la proprioception et le pied, qui sous le nom d'entrée podale y tient une grande place.", "Posturology studies orthostatic balance, governed by the fine postural system: the eye, the inner ear, proprioception and the foot, which, as the podal input, plays a large part in it."),
    ],
    key: [
      { value: "16", unit: "bits", label: fr("électronique", "electronics") },
      { value: "5 – 40", unit: "Hz", label: fr("programmable", "programmable") },
      { value: "900", unit: fr("points/kg", "points/kg"), label: fr("résolution", "resolution") },
    ],
    highlights: [
      { title: fr("Un instrument aux objectifs multiples", "An instrument with many uses"), items: [fr("Analyser le comportement postural statique et dynamique", "Analyse static and dynamic postural behaviour"), fr("Décrire le comportement de façon objective et chiffrée par les enregistrements stabilométriques", "Describe behaviour objectively, with figures, from stabilometric recordings"), fr("Établir des bilans posturaux documentés", "Produce documented postural assessments"), fr("Orienter le diagnostic", "Guide the diagnosis"), fr("Contrôler l'effet du traitement sur la posture : semelles, orthoplasties, prothèses, gouttières occlusales, manipulations", "Check the effect of treatment on posture: insoles, orthoplasties, prostheses, occlusal splints, manipulations"), fr("Mieux communiquer avec le patient et les autres praticiens", "Communicate better with the patient and other practitioners")] },
      { title: fr("Une plateforme très performante", "A high-performance platform"), items: [fr("Instrument de mesure précis et fiable", "Accurate, reliable measuring instrument"), fr("Plateforme extra-plate", "Extra-flat platform"), fr("Électronique 16 bits, enregistrements fiables à 40 Hz", "16-bit electronics, reliable recordings at 40 Hz"), fr("Connexion USB directe au PC", "Direct USB connection to the PC"), fr("Parfaite linéarité, très grande sensibilité", "Perfect linearity, very high sensitivity")] },
      { title: fr("Pour qui", "Who it is for"), items: [fr("Podologie, kinésithérapie, ostéopathie, orthopractie", "Podiatry, physiotherapy, osteopathy, orthotics"), fr("Médecine physique et sportive, rééducation, orthopédie, rhumatologie", "Physical and sports medicine, rehabilitation, orthopaedics, rheumatology"), fr("Occlusodontie, orthodontie, ORL, réhabilitation vestibulaire", "Occlusal dentistry, orthodontics, ENT, vestibular rehabilitation"), fr("Ophtalmologie, orthoptie, neurologie, gériatrie, psychiatrie, neurosciences", "Ophthalmology, orthoptics, neurology, geriatrics, psychiatry, neuroscience")] },
    ],
    specs: [
      { title: fr("Mécanique", "Mechanical"), rows: [
        row(fr("Dimensions", "Dimensions"), "530 × 460 × 35 mm"),
        row(fr("Épaisseur", "Thickness"), "12 mm"),
        row(fr("Poids", "Weight"), "7,8 kg"),
        row(fr("Matériau", "Material"), fr("Aluminium AU4G rectifié", "Ground AU4G aluminium")),
      ] },
      { title: fr("Électronique", "Electronics"), rows: [
        row(fr("Charge maximale", "Maximum load"), fr("250 kg (180 kg selon une brochure)", "250 kg (180 kg in one brochure)"), true),
        row(fr("Non-linéarité", "Non-linearity"), "< 0,2 %"),
        row(fr("Hystérésis", "Hysteresis"), "< 0,2 %"),
        row(fr("Résolution", "Resolution"), fr("900 points/kg", "900 points/kg")),
        row(fr("Fréquence", "Sampling rate"), fr("Programmable de 5 à 40 Hz", "Programmable from 5 to 40 Hz")),
        row(fr("Conversion analogique-numérique", "Analogue-to-digital conversion"), "16 bits"),
        row(fr("Connexion, alimentation", "Connection, power"), fr("USB, alimentation par le câble USB", "USB, powered by the USB cable")),
        row(fr("Système", "Operating system"), "Windows 7, 8, 10, 11"),
        row(fr("Norme", "Standard"), fr("Normalisée AFP85 (APE)", "AFP85 (APE) standardised")),
      ] },
    ],
    options: [fr("Plateau d'équilibration dynamique", "Dynamic balance board"), fr("Valise de transport", "Carrying case")],
    software: {
      name: "Win-Posture NV · Win-Trainer NV",
      intro: [fr("Deux logiciels : Win-Posture NV pour la stabilographie statique et dynamique, Win-Trainer NV pour la rééducation par biofeedback visuo-postural, avec des exercices ludiques à niveaux.", "Two programs: Win-Posture NV for static and dynamic stabilography, Win-Trainer NV for visual-postural biofeedback rehabilitation, with playful levelled exercises.")],
      groups: [POSTURE_NV, { title: fr("Win-Trainer NV : rééducation", "Win-Trainer NV: rehabilitation"), items: [fr("Biofeedback visuo-postural", "Visual-postural biofeedback"), fr("Exercices ludiques à niveaux", "Playful levelled exercises"), fr("Compatible Physioplay", "Physioplay compatible")] }],
    },
    docs: [
      { label: fr("Documentation Win-Posturo (PDF)", "Win-Posturo documentation (PDF)"), url: `${DOC}/2017/02/documentationwinposturo.pdf` },
      { label: fr("Brochure Win-Posturo, anglais (PDF)", "Win-Posturo brochure (PDF)"), url: `${DOC}/2017/02/winposturouk.pdf` },
    ],
    price: null,
    studies: 96,
    related: ["fusyo"],
  },

  /* ---------------- WIN-TRACK ---------------- */
  {
    slug: "win-track",
    name: "Win-Track",
    short: fr("Piste 1,5 m · 200 images/s", "1.5 m walkway · 200 frames/s"),
    family: "labo",
    image: "win-track-mini.jpg",
    gallery: ["win-track.jpg"],
    tagline: fr("La piste de marche d'un seul tenant : 2 à 4 pas.", "The one-piece walkway: 2 to 4 steps."),
    summary: fr(
      "Une véritable piste de marche de 1,5 m pour enregistrer et analyser le déroulé de 2 à 4 pas, ou réaliser des acquisitions statiques et posturographiques. 12 288 capteurs enregistrés à 200 images par seconde.",
      "A true 1.5 m walkway to record and analyse 2 to 4 steps, or to perform static and postural acquisitions. 12,288 sensors recorded at 200 frames per second."
    ),
    intro: [
      fr("Son châssis en matériaux composites assure rigidité, solidité, légèreté et facilité d'entretien. Sa structure monobloc évite les défauts des pistes « domino » : zones mortes, sensibilités différentes d'un module à l'autre, synchronisation difficile, faible fréquence d'acquisition, absence de planéité, manipulation difficile.", "Its composite chassis provides rigidity, strength, lightness and easy cleaning. Its one-piece structure avoids the flaws of “domino” walkways: dead zones, different sensitivity from one module to the next, difficult synchronisation, low sampling rate, uneven surface, difficult handling."),
      fr("Plus de 2 ans de recherche et développement ont été nécessaires pour enregistrer les 12 288 capteurs à 200 images par seconde ou afficher les empreintes en temps réel. Win-Track permet ainsi l'analyse de la course et des mouvements très rapides ; avec le couplage vidéo intégré, le praticien visualise précisément la dynamique de son patient.", "More than 2 years of research and development were needed to record all 12,288 sensors at 200 frames per second or display the footprints in real time. Win-Track therefore allows analysis of running and very fast movements; with built-in video coupling, the practitioner sees the patient's dynamics precisely."),
    ],
    key: [
      { value: "12 288", label: fr("capteurs résistifs", "resistive sensors") },
      { value: "200", unit: fr("images/s", "frames/s"), label: fr("acquisition", "sampling") },
      { value: "2 – 4", label: fr("pas enregistrés", "steps recorded") },
    ],
    highlights: [
      { title: fr("Points forts", "Highlights"), items: [fr("Structure monobloc, sans zone morte", "One-piece structure, no dead zones"), fr("Couplage vidéo et synchronisation EMG", "Video coupling and EMG synchronisation"), fr("Paramètres spatio-temporels : durée de pas, de foulée, d'appui simple, de double appui, d'oscillation et de cycle", "Spatio-temporal parameters: step, stride, single support, double support, swing and cycle duration"), fr("Posturographie pieds écartés jusqu'à 1 m", "Posturography with feet up to 1 m apart"), fr("Existe en version Mini d'un mètre", "Also available as the one-metre Mini")] },
    ],
    specs: [
      { title: fr("Mécanique", "Mechanical"), rows: [
        row(fr("Dimensions", "Dimensions"), "1 610 × 652 × 30 mm"),
        row(fr("Épaisseur", "Thickness"), "9 mm"),
        row(fr("Poids", "Weight"), "11,8 kg"),
        row(fr("Matériau", "Material"), "Composite"),
      ] },
      { title: fr("Électronique", "Electronics"), rows: [
        row(fr("Surface active", "Active area"), "1 500 × 500 mm"),
        row(fr("Charge maximale", "Maximum load"), "300 kg"),
        row(fr("Capteurs", "Sensors"), fr("12 288 résistifs HD", "12,288 HD resistive")),
        row(fr("Taille, épaisseur du capteur", "Sensor size, thickness"), "7,8 × 7,8 mm · 3 mm"),
        row(fr("Pression par capteur", "Pressure per sensor"), fr("0,4 à 100 N", "0.4 to 100 N")),
        row(fr("Température", "Temperature"), "0 – 85 °C"),
        row(fr("Fréquence", "Sampling rate"), fr("jusqu'à 200 images/s, affichage en temps réel", "up to 200 frames/s, real-time display")),
        row(fr("Connexion, alimentation", "Connection, power"), fr("USB, alimentation par le câble USB", "USB, powered by the USB cable")),
        row(fr("Système", "Operating system"), "Windows 7, 8, 10, 11"),
      ] },
    ],
    options: [fr("Housse de transport", "Carrying bag"), fr("Logiciel Physioplay (rééducation)", "Physioplay software (rehabilitation)")],
    software: WINTRACK_SOFT("Win-Track"),
    docs: [
      { label: fr("Documentation Win-Track (PDF)", "Win-Track documentation (PDF)"), url: `${DOC}/2017/02/documentationwintrack.pdf` },
      { label: fr("Brochure Win-Track, anglais (PDF)", "Win-Track brochure (PDF)"), url: `${DOC}/2017/02/wintrackuk.pdf` },
    ],
    price: { value: fr("12 388 € TTC", "€12,388 incl. VAT"), note: fr("Prix catalogue 2024 indicatif", "Indicative 2024 list price"), check: true },
    studies: 29,
    related: ["win-track-mini", "powertrack", "win-pod-wifi"],
  },

  /* ---------------- WIN-TRACK MINI ---------------- */
  {
    slug: "win-track-mini",
    name: "Win-Track Mini",
    short: fr("Piste 1 m · 2 pas", "1 m walkway · 2 steps"),
    family: "labo",
    image: "win-track-mini-light.jpg",
    gallery: ["win-track-mini.jpg"],
    tagline: fr("La piste de marche d'un mètre, qui tient dans un cabinet.", "The one-metre walkway that fits in a practice."),
    summary: fr(
      "Une plateforme de grande dimension pour enregistrer et analyser le déroulé de 2 pas, ou réaliser des acquisitions statiques et posturographiques. 8 192 capteurs enregistrés à 200 images par seconde.",
      "A large platform to record and analyse 2 steps, or to perform static and postural acquisitions. 8,192 sensors recorded at 200 frames per second."
    ),
    intro: [fr("Même conception que la Win-Track : châssis composite monobloc, sans les défauts des pistes « domino », enregistrement des 8 192 capteurs à 200 images par seconde ou affichage des empreintes en temps réel, couplage vidéo intégré.", "Same design as Win-Track: one-piece composite chassis, without the flaws of “domino” walkways, recording of all 8,192 sensors at 200 frames per second or real-time footprint display, built-in video coupling.")],
    key: [
      { value: "8 192", label: fr("capteurs résistifs", "resistive sensors") },
      { value: "1 000 × 500", unit: "mm", label: fr("surface active", "active area") },
      { value: "200", unit: fr("images/s", "frames/s"), label: fr("acquisition", "sampling") },
    ],
    highlights: [],
    specs: [
      { title: fr("Mécanique", "Mechanical"), rows: [
        row(fr("Dimensions", "Dimensions"), "1 115 × 652 × 30 mm"),
        row(fr("Épaisseur", "Thickness"), "9 mm"),
        row(fr("Poids", "Weight"), "8 kg", true),
        row(fr("Matériau", "Material"), "Composite"),
      ] },
      { title: fr("Électronique", "Electronics"), rows: [
        row(fr("Surface active", "Active area"), "1 000 × 500 mm"),
        row(fr("Charge maximale", "Maximum load"), "300 kg"),
        row(fr("Capteurs", "Sensors"), fr("8 192 résistifs", "8,192 resistive")),
        row(fr("Taille, épaisseur du capteur", "Sensor size, thickness"), "7,8 × 7,8 mm · 3 mm"),
        row(fr("Pression par capteur", "Pressure per sensor"), fr("0,4 à 100 N", "0.4 to 100 N")),
        row(fr("Température", "Temperature"), "0 – 85 °C"),
        row(fr("Fréquence", "Sampling rate"), fr("jusqu'à 200 images/s", "up to 200 frames/s")),
        row(fr("Connexion, alimentation", "Connection, power"), fr("USB, alimentation par le câble USB", "USB, powered by the USB cable")),
        row(fr("Système", "Operating system"), "Windows 7, 8, 10, 11"),
      ] },
    ],
    options: [fr("Housse de transport", "Carrying bag"), fr("Logiciel Physioplay (rééducation)", "Physioplay software (rehabilitation)")],
    software: WINTRACK_SOFT("Win-Track Mini"),
    docs: [{ label: fr("Documentation Win-Track Mini (PDF)", "Win-Track Mini documentation (PDF)"), url: `${DOC}/2017/02/documentationwintrackmini.pdf` }],
    price: { value: fr("9 925 € TTC", "€9,925 incl. VAT"), note: fr("Prix catalogue 2024 indicatif", "Indicative 2024 list price"), check: true },
    related: ["win-track", "win-pod-wifi"],
  },

  /* ---------------- POWERTRACK ---------------- */
  {
    slug: "powertrack",
    name: "PowerTrack",
    short: fr("Tapis 0,8 – 20 km/h", "Treadmill 0.8 – 20 km/h"),
    family: "labo",
    image: "powertrack.jpg",
    gallery: ["powertrack-sortie.jpg"],
    tagline: fr("Le premier tapis de course 2-en-1.", "The first 2-in-1 treadmill."),
    summary: fr(
      "Un tapis de course équipé de capteurs de pression amovibles pour étudier les sportifs, la marche et la course. Posés au sol en 5 secondes, les capteurs deviennent une piste de marche pour l'enfant et la personne âgée.",
      "A treadmill fitted with removable pressure sensors to study athletes, walking and running. Laid on the floor in 5 seconds, the sensors become a walkway for children and older people."
    ),
    intro: [fr("PowerTrack est le fruit de plus de 37 années d'expérience en podométrie électronique. Ce concept unique allie tapis de course et plateforme de pression amovible, et s'adapte à tout type d'examen : du sportif de haut niveau à la personne âgée présentant des troubles de l'équilibre.", "PowerTrack is the result of more than 37 years of experience in electronic podometry. This unique concept combines a treadmill and a removable pressure platform, and suits every type of examination: from elite athletes to older people with balance disorders.")],
    key: [
      { value: "0,8 – 20", unit: "km/h", label: fr("vitesse", "speed") },
      { value: "200", unit: fr("images/s", "frames/s"), label: fr("acquisition", "sampling") },
      { value: "4", label: fr("types d'examen", "examination modes") },
    ],
    highlights: [
      { title: fr("Quatre examens", "Four examinations"), items: [fr("Statique", "Static"), fr("Dynamique au sol", "Dynamic on the floor"), fr("Posturologique", "Postural"), fr("Dynamique sur tapis, marche et course", "Dynamic on the treadmill, walking and running")] },
    ],
    specs: [
      { title: fr("Caractéristiques", "Specifications"), rows: [
        row(fr("Dimensions", "Dimensions"), "180 × 153 × 88 cm"),
        row(fr("Poids", "Weight"), "125 kg"),
        row(fr("Vitesse", "Speed"), fr("0,8 à 20 km/h", "0.8 to 20 km/h")),
        row(fr("Pression par capteur", "Pressure per sensor"), fr("0,6 à 100 N", "0.6 to 100 N")),
        row(fr("Fréquence", "Sampling rate"), fr("jusqu'à 200 images/s", "up to 200 frames/s")),
        row(fr("Connexion", "Connection"), "USB"),
        row(fr("Logiciel", "Software"), "V10"),
        row(fr("Nombre de capteurs, surface active", "Sensor count, active area"), fr("à confirmer", "to be confirmed"), true),
      ] },
    ],
    options: [],
    software: {
      name: fr("Logiciel V10", "V10 software"),
      intro: [fr("PowerTrack fonctionne avec le logiciel V10.", "PowerTrack runs on the V10 software.")],
      groups: [
        { title: fr("Fonctions", "Features"), items: [fr("Visualisations thermographique, isopression, 3D, histogrammes, diagrammes circulaires", "Thermographic, isopressure, 3D views, histograms, pie charts"), fr("FPI (Foot Posture Index) et CPEI (Center of Pressure Excursion Index)", "FPI (Foot Posture Index) and CPEI (Center of Pressure Excursion Index)"), fr("Indice prédictif d'ulcération du pied diabétique selon David Armstrong", "Diabetic foot ulceration predictive index according to David Armstrong"), fr("Sway index ou papillon", "Sway index or butterfly"), fr("Examen clinique paramétrable", "Configurable clinical examination"), fr("Rapports personnalisables, export PDF", "Customisable reports, PDF export"), fr("Import des bases des anciens systèmes Medicapteurs", "Import of databases from older Medicapteurs systems"), fr("Synchronisation vidéo avec plusieurs caméras", "Video synchronisation with several cameras"), fr("Recommandation de semelles, adaptable à une gamme de semelles préfabriquées ou en marque blanche", "Insole recommendation, adaptable to a prefabricated or white-label insole range")] },
      ],
    },
    docs: [
      { label: fr("Plaquette PowerTrack provisoire (PDF)", "Preliminary PowerTrack brochure (PDF)"), url: `${DOC}/2022/10/powertrack3-fr.pdf` },
      { label: fr("Configuration PC PowerTrack, février 2026 (PDF)", "PowerTrack PC requirements, February 2026 (PDF)"), url: `${DOC}/2026/03/fiche-config-info-power-track-v4-3-fevrier-2026-fr.pdf` },
    ],
    price: null,
    related: ["win-track", "w-inshoe"],
  },

  /* ---------------- W-INSHOE ---------------- */
  {
    slug: "w-inshoe",
    name: "W-Inshoe",
    short: fr("9 capteurs libres · 100 Hz", "9 free sensors · 100 Hz"),
    family: "labo",
    image: "w-inshoe.jpg",
    gallery: ["winshoe-9.jpg"],
    tagline: fr("La pression mesurée dans la chaussure, en conditions réelles.", "Pressure measured inside the shoe, in real conditions."),
    summary: fr(
      "Deux boîtiers sans fil de 50 g pilotent chacun 9 capteurs ultra-minces et calibrés, à placer librement sur le pied ou la semelle. Au cabinet ou en extérieur.",
      "Two 50 g wireless units each drive 9 ultra-thin calibrated sensors, placed freely on the foot or insole. In the clinic or outdoors."
    ),
    intro: [
      fr("La solution d'analyse de la pression dans la chaussure la plus performante au meilleur prix. Plus de 3 ans de développement ont été nécessaires pour concevoir ce produit.", "The highest-performing in-shoe pressure solution at the best price. It took more than 3 years of development to design this product."),
      fr("W-Inshoe aide à faciliter les diagnostics, corriger et améliorer la marche de nombreux patients, optimiser les performances du sportif ou mesurer l'effet des semelles en conditions réelles.", "W-Inshoe helps make diagnoses easier, correct and improve many patients' gait, optimise athletes' performance or measure the effect of insoles in real conditions."),
    ],
    key: [
      { value: "2 × 9", label: fr("capteurs libres", "free sensors") },
      { value: "100", unit: "Hz", label: "Bluetooth" },
      { value: "50", unit: "g", label: fr("par boîtier", "per unit") },
    ],
    highlights: [
      { title: fr("Faible encombrement", "Small footprint"), items: [fr("9 capteurs indépendants, positionnement précis", "9 independent sensors, precise positioning"), fr("S'adapte à toutes les pointures", "Fits every shoe size"), fr("Pression maximale mesurée : 8 kg/cm²", "Maximum measured pressure: 8 kg/cm²")] },
      { title: fr("Boîtier léger et performant", "Light, efficient unit"), items: [fr("Communication Bluetooth, acquisition 100 Hz", "Bluetooth communication, 100 Hz sampling"), fr("Synchronisation automatique des 2 boîtiers", "Automatic synchronisation of the 2 units"), fr("Recharge rapide par USB : 1 h 30, 5 h de mesure", "Fast USB charging: 1 h 30, 5 h of measurement"), fr("Fixation par clip sur les lacets ou bandeau", "Clip-on fixing on laces or strap")] },
      { title: fr("Capteurs haute précision", "High-precision sensors"), items: [fr("9 capteurs ultra-minces et calibrés", "9 ultra-thin calibrated sensors"), fr("Positionnement libre", "Free positioning"), fr("Garantis pour 1 million d'activations, validé sur banc de test", "Guaranteed for 1 million activations, bench-tested")] },
    ],
    specs: [
      { title: fr("Mécanique", "Mechanical"), rows: [
        row(fr("Boîtier", "Unit"), "65 × 46,5 × 18,3 mm"),
        row(fr("Poids", "Weight"), "50 g"),
      ] },
      { title: fr("Électronique", "Electronics"), rows: [
        row(fr("Surface active", "Active area"), fr("Ø 12 mm par capteur", "Ø 12 mm per sensor")),
        row(fr("Capteurs", "Sensors"), fr("Résistifs HD calibrés, 9 par boîtier", "Calibrated HD resistive, 9 per unit")),
        row(fr("Épaisseur du capteur", "Sensor thickness"), "0,5 mm"),
        row(fr("Pression par capteur", "Pressure per sensor"), fr("0,1 à 8 kgF", "0.1 to 8 kgF")),
        row(fr("Fréquence", "Sampling rate"), fr("100 images/s", "100 frames/s")),
        row(fr("Connexion", "Connection"), "Bluetooth"),
        row(fr("Alimentation", "Power"), fr("Secteur / USB", "Mains / USB")),
        row(fr("Système", "Operating system"), "Windows 7, 8, 10"),
      ] },
    ],
    options: [fr("Logiciel couplé aux logiciels de toutes les plateformes Medicapteurs", "Software linked to the software of every Medicapteurs platform")],
    software: WINSHOE_SOFT,
    docs: [
      { label: fr("Documentation W-Inshoe (PDF)", "W-Inshoe documentation (PDF)"), url: `${DOC}/2017/02/documentation-winshoe.pdf` },
      { label: fr("Configuration PC W-Inshoe, février 2026 (PDF)", "W-Inshoe PC requirements, February 2026 (PDF)"), url: `${DOC}/2026/03/fiche-config-info-w-inshoe-v3-3-fevrier-2026-fr.pdf` },
    ],
    price: { value: fr("3 495 € TTC", "€3,495 incl. VAT"), note: fr("Prix catalogue 2018-2020", "2018-2020 list price"), check: true },
    studies: 9,
    related: ["w-inshoe-easy", "powertrack"],
  },

  /* ---------------- W-INSHOE EASY ---------------- */
  {
    slug: "w-inshoe-easy",
    name: "W-Inshoe Easy",
    short: fr("Semelles 35 à 46", "Insoles EU 35 to 46"),
    family: "labo",
    image: "winshoe-easy.jpg",
    tagline: fr("Les semelles instrumentées, prêtes à glisser dans la chaussure.", "Instrumented insoles, ready to slip into the shoe."),
    summary: fr(
      "La version de W-Inshoe optimisée pour une prise de mesure rapide : 4 paires de semelles de 8 capteurs calibrés à placement fixe, pour les pointures 35 à 46. Logiciel et boîtiers Bluetooth identiques.",
      "The version of W-Inshoe designed for quick measurement: 4 pairs of insoles with 8 calibrated sensors in fixed positions, for sizes EU 35 to 46. Same software and Bluetooth units."
    ),
    intro: [fr("W-Inshoe Easy est adapté à l'étude des pressions du pied : il facilite les diagnostics, aide à corriger la marche, à optimiser les performances du sportif et à mesurer l'effet des semelles en conditions réelles, en cabinet ou en extérieur.", "W-Inshoe Easy is designed for studying foot pressure: it makes diagnoses easier and helps correct gait, optimise athletes' performance and measure the effect of insoles in real conditions, in the clinic or outdoors.")],
    key: [
      { value: "4", label: fr("paires de semelles", "pairs of insoles") },
      { value: "8", label: fr("capteurs par semelle", "sensors per insole") },
      { value: "35 – 46", label: fr("pointures", "EU sizes") },
    ],
    highlights: [
      { title: fr("Points forts", "Highlights"), items: [fr("8 capteurs indépendants placés sur les zones pertinentes", "8 independent sensors placed on the relevant areas"), fr("Dispositif médical certifié CE", "CE-certified medical device"), fr("Pression maximale mesurée : 8 kg/cm²", "Maximum measured pressure: 8 kg/cm²"), fr("Bluetooth, acquisition 100 Hz, 2 boîtiers synchronisés", "Bluetooth, 100 Hz sampling, 2 synchronised units"), fr("Recharge USB 1 h 30, fixation par clip", "1 h 30 USB charge, clip-on fixing"), fr("Garantis pour 1 million d'activations", "Guaranteed for 1 million activations")] },
    ],
    specs: [
      { title: fr("Mécanique", "Mechanical"), rows: [row(fr("Boîtier", "Unit"), "65 × 46,5 × 18,3 mm"), row(fr("Poids", "Weight"), "50 g")] },
      { title: fr("Électronique", "Electronics"), rows: [
        row(fr("Surface d'un capteur", "Sensor area"), "35 × 20 mm", true),
        row(fr("Capteurs", "Sensors"), fr("Résistifs HD calibrés, 8 par semelle", "Calibrated HD resistive, 8 per insole")),
        row(fr("Épaisseur du capteur", "Sensor thickness"), "0,5 mm"),
        row(fr("Pression par capteur", "Pressure per sensor"), fr("0,1 à 8 kgF", "0.1 to 8 kgF")),
        row(fr("Fréquence", "Sampling rate"), fr("100 images/s", "100 frames/s")),
        row(fr("Connexion", "Connection"), "Bluetooth"),
        row(fr("Système", "Operating system"), "Windows 7, 8, 10"),
      ] },
    ],
    options: [],
    software: WINSHOE_SOFT,
    docs: [{ label: fr("Documentation W-Inshoe Easy (PDF)", "W-Inshoe Easy documentation (PDF)"), url: `${DOC}/2017/08/documentation_winshoe_semelles.pdf` }],
    price: { value: fr("5 600 € TTC", "€5,600 incl. VAT"), note: fr("Prix catalogue 2018-2020", "2018-2020 list price"), check: true },
    related: ["w-inshoe", "powertrack"],
  },
];

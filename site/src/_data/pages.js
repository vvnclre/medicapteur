// Contenu des pages éditoriales, repris de l'ancien site (FR et EN), des brochures et des
// listes de publications. Sources : contenu/site-actuel, contenu/documents-texte, REFERENTIEL.md.
const fr = (fr, en) => ({ fr, en });
const DOC = "https://www.medicapteurs.com/wp-content/uploads/sites/1772";

export default {
  /* ================= SOLUTIONS ================= */
  solutions: [
    {
      slug: fr("baropodometrie", "baropodometry"),
      name: fr("Baropodométrie", "Baropodometry"),
      image: "soft-10zones.jpg",
      title: fr("Baropodométrie : mesurer les pressions plantaires", "Baropodometry: measuring plantar pressure"),
      description: fr("La baropodométrie étudie les pressions plantaires en statique et en dynamique. Plateformes et logiciels Medicapteurs pour podologues, kinésithérapeutes, médecins du sport.", "Baropodometry studies plantar pressure in static and dynamic conditions. Medicapteurs platforms and software for podiatrists, physiotherapists and sports physicians."),
      lead: fr("La podométrie, ou baropodométrie, est l'étude des pressions plantaires en statique et en dynamique.", "Podometry, or baropodometry, is the study of plantar pressure in static and dynamic conditions."),
      body: [fr("Sous l'appui du pied, des capteurs de pression se déclenchent et donnent une cartographie instantanée. Le signal est recueilli, traité, puis reproduit sous forme d'image où chaque valeur de pression devient une couleur.", "Under the foot, pressure sensors are triggered and give an instant map. The signal is collected, processed, then shown as an image in which each pressure value becomes a colour.")],
      benefits: [
        { t: fr("Objectiver votre examen", "Make your examination objective"), d: fr("L'analyse par podomètre électronique objective les caractéristiques biomécaniques du pied et appuie votre démarche diagnostique. L'image de la cartographie facilite la communication et le suivi avec le patient et les prescripteurs.", "Electronic podometry objectively measures the biomechanical characteristics of the foot and supports your diagnosis. The pressure map makes communication and follow-up with the patient and prescribers easier.") },
        { t: fr("Suivre l'évolution", "Track progress"), d: fr("Un outil pour quantifier la pathologie du patient et son évolution. Un suivi chiffré et objectif renforce la relation avec votre patientèle.", "A tool to quantify the patient's condition and how it changes. Measured, objective follow-up strengthens the relationship with your patients.") },
        { t: fr("Gagner du temps", "Save time"), d: fr("La simplicité du logiciel et le stockage de tous les éléments (pressions, images, vidéos, scans) optimisent la durée de vos consultations.", "The simple software and the storage of everything (pressure, images, videos, scans) make your consultations more efficient.") },
      ],
      audience: fr("Podologues, kinésithérapeutes, ostéopathes, orthopédistes, médecins du sport, rééducateurs, rhumatologues, gériatres.", "Podiatrists, physiotherapists, osteopaths, orthopaedists, sports physicians, rehabilitation specialists, rheumatologists, geriatricians."),
      products: ["t-plate", "win-pod-wifi", "fusyo", "win-track", "win-track-mini", "minipod"],
    },
    {
      slug: fr("posturographie", "posturography"),
      name: fr("Posturographie", "Posturography"),
      image: "soft-posturo.jpg",
      title: fr("Posturographie et stabilométrie", "Posturography and stabilometry"),
      description: fr("Plateformes de stabilométrie normalisées APE pour l'évaluation posturale : Fusyo et Win-Posturo, logiciel Win-Posture NV.", "APE-standardised stabilometry platforms for postural assessment: Fusyo and Win-Posturo, Win-Posture NV software."),
      lead: fr("La posturologie est l'étude de l'équilibre orthostatique, régi par le système postural fin.", "Posturology is the study of orthostatic balance, governed by the fine postural system."),
      body: [fr("Ce système fait appel à l'œil, à l'oreille interne, à la proprioception et au pied qui, sous le nom d'entrée podale, y tient une grande place. Depuis 1985, une norme française définie par l'Association Française de Posturologie, aujourd'hui Association Posture et Équilibre (APE), fixe un cahier des charges précis aux plateformes : elles donnent les mêmes résultats et se réfèrent à une même norme chiffrée.", "This system relies on the eye, the inner ear, proprioception and the foot, which, as the podal input, plays a large part in it. Since 1985, a French standard set by the French Posturology Association, now the Posture and Balance Association (APE), has defined precise specifications for platforms: they give the same results and refer to the same numerical norm.")],
      benefits: [
        { t: fr("Analyser", "Analyse"), d: fr("Analyser le comportement postural statique et dynamique, avec une description objective et chiffrée des enregistrements stabilométriques.", "Analyse static and dynamic postural behaviour, with an objective, numerical description of stabilometric recordings.") },
        { t: fr("Documenter", "Document"), d: fr("Établir des bilans posturaux documentés et orienter le diagnostic.", "Produce documented postural assessments and guide the diagnosis.") },
        { t: fr("Contrôler le traitement", "Monitor treatment"), d: fr("Contrôler et optimiser l'effet du traitement sur la posture : semelles correctrices, orthoplasties, prothèses, gouttières occlusales, manipulations, soins.", "Check and optimise the effect of treatment on posture: corrective insoles, orthoplasties, prostheses, occlusal splints, manipulations, care.") },
        { t: fr("Communiquer", "Communicate"), d: fr("Partager des résultats clairs avec le patient et les autres praticiens.", "Share clear results with the patient and other practitioners.") },
      ],
      audience: fr("Podologie, kinésithérapie, ostéopathie, orthopractie, médecine physique et sportive, rééducation, orthopédie, rhumatologie, occlusodontie, orthodontie, ORL, réhabilitation vestibulaire, ophtalmologie, orthoptie, neurologie, gériatrie, psychiatrie, neurosciences.", "Podiatry, physiotherapy, osteopathy, orthotics, physical and sports medicine, rehabilitation, orthopaedics, rheumatology, occlusal dentistry, orthodontics, ENT, vestibular rehabilitation, ophthalmology, orthoptics, neurology, geriatrics, psychiatry, neuroscience."),
      products: ["fusyo", "win-posturo"],
    },
    {
      slug: fr("reeducation", "rehabilitation"),
      name: fr("Rééducation", "Rehabilitation"),
      image: "physioplay-rumble.jpg",
      title: fr("Rééducation posturale avec Physioplay", "Postural rehabilitation with Physioplay"),
      description: fr("Physioplay : 6 jeux de biofeedback visuo-postural pour la rééducation de l'équilibre, sur plateforme Medicapteurs.", "Physioplay: 6 visual-postural biofeedback games for balance rehabilitation, on a Medicapteurs platform."),
      lead: fr("La rééducation rassemble les techniques qui aident à réduire les déficiences et incapacités du patient liées à l'équilibre orthostatique.", "Rehabilitation brings together techniques that help reduce a patient's impairments and disabilities related to orthostatic balance."),
      body: [
        fr("Physioplay, le logiciel de rééducation posturale de Medicapteurs, propose 6 jeux de biofeedback visuo-postural. Le patient guide le jeu par son équilibre sur la plateforme.", "Physioplay, Medicapteurs' postural rehabilitation software, offers 6 visual-postural biofeedback games. The patient controls the game with their balance on the platform."),
        fr("Le « Physioplay pack » comprend une plateforme et le logiciel. « Physioplay software » s'adresse aux praticiens déjà équipés d'une plateforme Medicapteurs : Win-Pod, Win-Track, Win-Track Mini, Fusyo, Win-Posturo, S-Plate ou T-Plate.", "The “Physioplay pack” includes a platform and the software. “Physioplay software” is for practitioners who already own a Medicapteurs platform: Win-Pod, Win-Track, Win-Track Mini, Fusyo, Win-Posturo, S-Plate or T-Plate."),
      ],
      benefits: [
        { t: fr("Reconstruire", "Rebuild"), d: fr("Une reconstruction optimale de la capacité posturo-cinétique du patient par biofeedback visuo-postural.", "Optimal rebuilding of the patient's posturo-kinetic capacity through visual-postural biofeedback.") },
        { t: fr("Paramétrer", "Adjust"), d: fr("Des exercices ludiques paramétrables selon l'évolution de la rééducation, avec des niveaux prédéfinis ou créés en quelques clics.", "Playful exercises that adjust to the progress of rehabilitation, with predefined levels or levels created in a few clicks.") },
        { t: fr("Enchaîner", "Sequence"), d: fr("Programmer automatiquement un enchaînement de jeux.", "Automatically program a sequence of games.") },
        { t: fr("Suivre", "Follow up"), d: fr("Historiser et suivre la progression du patient.", "Record and track the patient's progress.") },
      ],
      audience: fr("Kinésithérapeutes, podo-orthésistes, médecins du sport, rééducateurs, posturologues.", "Physiotherapists, orthotists, sports physicians, rehabilitation specialists, posturologists."),
      gallery: ["physioplay-kass.jpg", "physioplay-bee.jpg"],
      products: ["win-posturo", "fusyo", "win-pod-wifi", "win-track"],
      contact: fr("Plus d'informations au 05 62 57 74 60 ou commercial@medicapteurs.fr.", "More information on +33 5 62 57 74 60 or commercial@medicapteurs.fr."),
    },
  ],

  /* ================= PIED DIABÉTIQUE ================= */
  diabetes: {
    title: fr("Pied diabétique : évaluer le risque d'ulcération", "Diabetic foot: assessing ulceration risk"),
    description: fr("Le rapport pied diabétique Medicapteurs calcule le niveau de risque d'ulcération (indice d'Armstrong) et localise les zones à décharger.", "The Medicapteurs diabetic foot report calculates the ulceration risk level (Armstrong index) and locates the areas to offload."),
    eyebrow: fr("Solution", "Solution"),
    h1: fr("Pied diabétique.", "Diabetic foot."),
    lead: fr("Tous les logiciels Medicapteurs intègrent une évaluation complète et simple du pied diabétique : le niveau de risque d'ulcération et les zones du pied à surveiller s'affichent automatiquement.", "All Medicapteurs software includes a complete, easy-to-use diabetic foot assessment: the ulceration risk level and the areas of the foot to watch are displayed automatically."),
    facts: [
      { t: fr("Ce que montre la mesure", "What the measurement shows"), d: fr("Le pied diabétique présente des pics de pression accrus à l'avant-pied et sous les métatarsiens par rapport au pied sain. Une semelle adaptée réduit la pression à l'avant-pied.", "The diabetic foot shows higher pressure peaks under the forefoot and metatarsals than a healthy foot. A suitable insole reduces forefoot pressure.") },
      { t: fr("Ce que calcule le logiciel", "What the software calculates"), d: fr("Le niveau de risque d'ulcération pour le pied diabétique neuropathique, à partir du rapport des pressions avant-pied / arrière-pied, l'indice publié par le Pr David Armstrong (Keck School of Medicine, University of Southern California).", "The ulceration risk level for the neuropathic diabetic foot, from the forefoot / rearfoot pressure ratio, the index published by Prof. David Armstrong (Keck School of Medicine, University of Southern California).") },
      { t: fr("Ce que vous en faites", "What you do with it"), d: fr("Le logiciel affiche les surcharges et vous aide à décharger le pied avec une semelle ou une orthèse. La plateforme aide ensuite à valider le traitement.", "The software shows overloads and helps you offload the foot with an insole or orthosis. The platform then helps validate the treatment.") },
    ],
    report: {
      title: fr("Le rapport pied diabétique automatique", "The automatic diabetic foot report"),
      since: fr("Disponible depuis octobre 2019 sur Win-Pod, Win-Track, Win-Track Mini et Fusyo (avec piste de marche), puis sur T-Plate, T-Plate 30th, PowerTrack et dans l'application Podocapture.", "Available since October 2019 on Win-Pod, Win-Track, Win-Track Mini and Fusyo (with a walkway), then on T-Plate, T-Plate 30th, PowerTrack and in the Podocapture app."),
      items: [fr("Calcul du niveau de risque d'apparition d'ulcères : rapport avant-pied / arrière-pied", "Calculation of the ulcer risk level: forefoot / rearfoot ratio"), fr("Localisation des zones potentiellement à risque", "Location of potential risk zones"), fr("Calcul du type de pied", "Foot type calculation"), fr("Phrase de synthèse, par exemple : « indice d'Armstrong pour le pied gauche de 1,11, risque modéré d'ulcération »", "Summary sentence, for example: “Armstrong index for the left foot of 1.11, moderate risk of ulceration”")],
    },
    thresholds: [
      { v: "> 2", l: fr("Risque élevé", "High risk"), c: 6 },
      { v: "< 2", l: fr("Risque modéré", "Moderate risk"), c: 4 },
    ],
    thresholdNote: fr("Seuils affichés par le logiciel Medicapteurs. Ils sont à confirmer par Medicapteurs avec la référence exacte de la publication avant mise en ligne.", "Thresholds shown by the Medicapteurs software. To be confirmed by Medicapteurs with the exact publication reference before going live."),
    studiesTitle: fr("Études sur le pied diabétique avec des plateformes Medicapteurs", "Diabetic foot studies using Medicapteurs platforms"),
    studies: [
      { t: "Biomechanical evaluation of diabetic foot through hierarchical cluster analysis", a: "Sawacha Z., Spolaor F., Guarneri G., Guiotto A., Avogaro A., Cobelli C. · Université de Padoue", p: "Win-Pod" },
      { t: "Influence of an individual orthopaedic equipment on the condition of a foot with neuropathic diabetic foot syndrome", a: "Nowicka S. A., Węgrzynowski A., Stanišić M., Wierusz-Wysocka B.", p: "Win-Pod" },
      { t: "Analysis of gait characteristics using a dynamic foot scanner in type 2 diabetes mellitus without peripheral neuropathy", a: "Chenamgere G. S. K., Maiya A. G., Hande H. M., Kadavigere V. R., Vidhyasagar S. · Journal of Exercise Science and Physiotherapy, 2015", p: "Win-Track" },
      { t: "Intérêt de la baropodométrie dans la validation du choix de type de décharge chez le diabétologue", a: "Cornu J.-Y., Ruault C.", p: "Win-Pod" },
      { t: "Évaluation de l'influence de la neuropathie diabétique sur la performance posturale grâce aux nouvelles méthodes de traitement du signal posturographique", a: "Marchou C. · Université Joseph Fourier, Grenoble, 2012", p: "Fusyo" },
      { t: "Afferent control of walking: are there distinct deficits associated to loss of fibres of different diameter?", a: "Nardone A., Corna S., Turcato A. M., Schieppati M.", p: "Win-Posturo" },
      { t: "Orthoplasties dans le cadre podo-diabétique", a: "Paoli C. · Le Podologue, juillet 2017", p: "Win-Pod" },
    ],
    pdf: { label: fr("Liste des études pied diabétique (PDF, 2018)", "Diabetic foot studies list (PDF, 2018)"), url: `${DOC}/2018/06/diabetes-research-using-medicapteurs-plates.pdf` },
    products: ["win-pod-wifi", "t-plate", "minipod", "win-track", "powertrack"],
  },

  /* ================= COMPRENDRE LA MESURE ================= */
  guide: {
    title: fr("Comprendre la mesure des pressions plantaires", "Understanding plantar pressure measurement"),
    description: fr("Statique, dynamique, posture ; capteurs, fréquence, plage de pression ; FPI, CPEI, indice pied diabétique : le guide pour choisir une plateforme de baropodométrie.", "Static, dynamic, posture; sensors, sampling rate, pressure range; FPI, CPEI, diabetic foot index: the guide to choosing a pressure plate."),
    eyebrow: fr("Guide", "Guide"),
    h1: fr("Comprendre la mesure.", "Understanding measurement."),
    lead: fr("Ce que mesure une plateforme, comment lire une fiche technique, ce que calcule le logiciel et quel budget prévoir.", "What a platform measures, how to read a data sheet, what the software calculates and what budget to plan."),
    toc: [fr("Trois examens", "Three examinations"), fr("Lire une fiche technique", "Reading a data sheet"), fr("Les indices du logiciel", "Software indices"), fr("Budget", "Budget")],
    exams: [
      { t: fr("Statique", "Static"), d: fr("Le patient se tient debout. La plateforme donne la cartographie des pressions, le centre de pression, les pressions maximale et moyenne, la répartition des charges entre pied gauche et droit, avant et arrière, et la surface d'appui.", "The patient stands still. The platform gives the pressure map, centre of pressure, maximum and average pressure, load distribution between left and right, front and rear, and contact area."), img: "soft-2zones.jpg" },
      { t: fr("Dynamique", "Dynamic"), d: fr("Le patient marche sur la plateforme ou la piste. Le logiciel montre le déroulé du pas image par image, la ligne de marche, les phases (talon, plantigrade, avant-pied), les durées de contact et, sur piste, les paramètres spatio-temporels : durée de pas, de foulée, d'appui simple, de double appui, d'oscillation et de cycle.", "The patient walks over the platform or walkway. The software shows the step frame by frame, the gait line, the phases (heel, foot flat, forefoot), contact times and, on a walkway, spatio-temporal parameters: step, stride, single support, double support, swing and cycle duration."), img: "soft-phases.jpg" },
      { t: fr("Posture", "Posture"), d: fr("Le patient reste immobile, yeux ouverts puis fermés. Les oscillations du centre de pression donnent le statokinésigramme et le stabilogramme, le Sway index et le quotient de Romberg. Les plateformes de stabilométrie normalisées APE produisent des données comparables entre praticiens.", "The patient stands still, eyes open then closed. Centre of pressure sway gives the statokinesigram and stabilogram, the sway index and the Romberg quotient. APE-standardised stabilometry platforms produce data that can be compared between practitioners."), img: "soft-posturo.jpg" },
    ],
    datasheet: [
      { t: fr("Nombre et taille des capteurs", "Number and size of sensors"), d: fr("Plus les capteurs sont petits, plus l'empreinte est fine : 10 × 10 mm sur Minipod et T-Plate, 8 × 8 mm sur Win-Pod et Fusyo, 7,8 × 7,8 mm sur T-Plate 30th et Win-Track.", "The smaller the sensors, the finer the footprint: 10 × 10 mm on Minipod and T-Plate, 8 × 8 mm on Win-Pod and Fusyo, 7.8 × 7.8 mm on T-Plate 30th and Win-Track.") },
      { t: fr("Surface active", "Active area"), d: fr("La zone qui mesure. 40 × 40 cm suffisent pour un pas ; une piste de 1 à 1,5 m enregistre 2 à 4 pas d'affilée.", "The area that measures. 40 × 40 cm is enough for one step; a 1 to 1.5 m walkway records 2 to 4 steps in a row.") },
      { t: fr("Plage de pression", "Pressure range"), d: fr("De 0,4 à 100 N par capteur sur la plupart des plateformes. Un seuil bas détecte les faibles pressions (enfant, pied diabétique) ; une plage haute évite la saturation pendant la course, quand les pics restent lisibles au lieu de devenir une grande zone rouge.", "From 0.4 to 100 N per sensor on most platforms. A low threshold picks up low pressures (children, diabetic foot); a high range avoids saturation while running, so peaks stay readable instead of becoming one big red area.") },
      { t: fr("Fréquence d'acquisition", "Sampling rate"), d: fr("Le nombre d'images par seconde. 100 images/s suffisent pour la marche ; 200 à 300 images/s pour la course et les mouvements rapides.", "The number of frames per second. 100 frames/s is enough for walking; 200 to 300 frames/s for running and fast movements.") },
      { t: fr("Connexion", "Connection"), d: fr("USB vers un PC Windows pour le logiciel complet ; Wifi ou Bluetooth pour piloter la plateforme depuis une tablette ou un smartphone avec Podocapture.", "USB to a Windows PC for the full software; Wi-Fi or Bluetooth to drive the platform from a tablet or smartphone with Podocapture.") },
      { t: fr("Statut", "Status"), d: fr("Les plateformes Medicapteurs sont des dispositifs médicaux de mesure. La classe et le texte réglementaire à jour sont à préciser par Medicapteurs.", "Medicapteurs platforms are measuring medical devices. The class and current regulatory text are to be specified by Medicapteurs.") },
    ],
    indices: [
      { t: "Foot Posture Index (FPI)", src: "© Anthony Redmond", d: fr("Six critères notés de -2 (supiné) à +2 (proné). Score total : forte supination ≤ -5 ; supination -1 à -4 ; normal 0 à +5 ; pronation +6 à +9 ; forte pronation ≥ 10.", "Six criteria scored from -2 (supinated) to +2 (pronated). Total score: highly supinated ≤ -5; supinated -1 to -4; normal 0 to +5; pronated +6 to +9; highly pronated ≥ 10."), scale: [["≤ -5", 1], ["-1 / -4", 2], ["0 / +5", 3], ["+6 / +9", 5], ["≥ 10", 6]] },
      { t: "CPEI", src: "Center of Pressure Excursion Index", d: fr("L'excursion du centre de pression pendant le pas. Le logiciel classe le pied automatiquement : pronation, normal, supination ou sur-supination.", "The excursion of the centre of pressure during the step. The software automatically classifies the foot: pronation, normal, supination or over-supination.") },
      { t: fr("Indice pied diabétique", "Diabetic foot index"), src: "D. Armstrong", d: fr("Rapport des pressions avant-pied / arrière-pied. Au-delà de 2 : risque élevé d'ulcération ; en dessous : risque modéré. Les zones à décharger s'affichent sur l'empreinte.", "Forefoot / rearfoot pressure ratio. Above 2: high ulceration risk; below: moderate risk. The areas to offload are shown on the footprint.") },
      { t: "Sway index", src: fr("Papillon du centre de pression", "Centre of pressure butterfly"), d: fr("La trajectoire du centre de pression pendant la marche, qui révèle les asymétries entre pied gauche et pied droit.", "The path of the centre of pressure while walking, which reveals asymmetries between left and right foot.") },
      { t: fr("Quotient de Romberg", "Romberg quotient"), src: fr("Posture", "Posture"), d: fr("Le rapport entre les oscillations yeux fermés et yeux ouverts : la part de la vision dans l'équilibre.", "The ratio between sway with eyes closed and eyes open: how much vision contributes to balance.") },
      { t: fr("Normes APE", "APE norms"), src: fr("Stabilométrie", "Stabilometry"), d: fr("Les paramètres stabilométriques normalisés de l'Association Posture et Équilibre (ex-AFP85), produits par Fusyo et Win-Posturo.", "The standardised stabilometric parameters of the Posture and Balance Association (formerly AFP85), produced by Fusyo and Win-Posturo.") },
    ],
    budget: fr("Prix publics indicatifs relevés sur les supports Medicapteurs. Les offres incluent selon les périodes la livraison, l'installation, la formation en ligne, une extension de garantie et la reprise de l'ancienne plateforme.", "Indicative list prices taken from Medicapteurs documents. Depending on the period, offers include delivery, installation, online training, extended warranty and trade-in of the old platform."),
    prices: [["minipod", "1 790 € TTC", "€1,790"], ["win-pod-wifi", "8 319 € TTC", "€8,319"], ["win-track-mini", "9 925 € TTC", "€9,925"], ["win-track", "12 388 € TTC", "€12,388"]],
    warranty: fr("Garantie matérielle de 2 ans ; les offres 2021-2024 ajoutaient une 3e année, 3 ans de contrat d'assistance et de mise à jour, la livraison et l'installation en France métropolitaine et la formation en ligne. Conditions actuelles à confirmer.", "2-year hardware warranty; 2021-2024 offers added a 3rd year, 3 years of support and update contract, delivery and installation in mainland France and online training. Current terms to be confirmed."),
  },

  /* ================= LOGICIELS ================= */
  software: {
    title: fr("Logiciels Medicapteurs : Win-Pod V10, Win-Posture NV, Podocapture, Physioplay", "Medicapteurs software: Win-Pod V10, Win-Posture NV, Podocapture, Physioplay"),
    description: fr("Les logiciels livrés avec les plateformes Medicapteurs : analyse statique, dynamique et posturale, rapports automatiques, application mobile, rééducation.", "The software supplied with Medicapteurs platforms: static, dynamic and postural analysis, automatic reports, mobile app, rehabilitation."),
    eyebrow: fr("Logiciels", "Software"),
    h1: fr("Ce que vous voyez à l'écran.", "What you see on screen."),
    lead: fr("Chaque plateforme est livrée avec son logiciel. Tous partagent la même base patients, fonctionnent hors ligne sur votre PC et rédigent des rapports en français et en anglais.", "Every platform comes with its software. They all share the same patient database, work offline on your PC and write reports in French and English."),
    items: [
      { name: "Win-Pod software · V10", for: "Win-Pod Wifi, T-Plate, T-Plate 30th, Fusyo, Win-Track, PowerTrack", img: "soft-dynamiq.jpg", d: fr("Le logiciel de baropodométrie : statique, dynamique et posture, analyse par 2, 7, 10 ou 12 zones, FPI, CPEI, Sway index, rapport pied diabétique, vidéo synchronisée, rapport synthétique automatique (2026).", "The baropodometry software: static, dynamic and posture, analysis by 2, 7, 10 or 12 zones, FPI, CPEI, sway index, diabetic foot report, synchronised video, automatic summary report (2026).") },
      { name: "Win-Posture NV", for: "Win-Posturo, Fusyo", img: "soft-posturo.jpg", d: fr("La stabilographie statique et dynamique : protocoles, normes APE, ondelettes et analyses fractales en option, export Excel, éditeur de courrier.", "Static and dynamic stabilography: protocols, APE norms, optional wavelets and fractal analysis, Excel export, letter editor.") },
      { name: "Win-Trainer NV · Physioplay", for: "Win-Posturo, Fusyo, Win-Pod, Win-Track", img: "physioplay-rumble.jpg", d: fr("La rééducation par biofeedback visuo-postural : exercices ludiques à niveaux, 6 jeux Physioplay, suivi de la progression.", "Rehabilitation through visual-postural biofeedback: playful levelled exercises, 6 Physioplay games, progress tracking.") },
      { name: "Podocapture", for: "Minipod, Win-Pod Wifi, T-Plate Wifi et Bluetooth", img: "winpod-tablette.jpg", d: fr("L'application gratuite pour iOS et Android, lancée en 2018 : la première application mobile à piloter une plateforme Wifi. Photos, vidéos, notes vocales, scoring du pied diabétique, rapport en un clic, recopie d'écran sur TV, envoi vers le logiciel PC.", "The free app for iOS and Android, launched in 2018: the first mobile app to drive a Wi-Fi platform. Photos, videos, voice notes, diabetic foot scoring, one-click report, screen mirroring to a TV, transfer to the PC software.") },
      { name: "W-Inshoe software", for: "W-Inshoe, W-Inshoe Easy", img: "soft-comparaison.jpg", d: fr("L'analyse de la pression dans la chaussure : 3D en temps réel, enregistrement ambulatoire, comparaison pied droit / pied gauche, détection des pas.", "In-shoe pressure analysis: real-time 3D, ambulatory recording, right / left foot comparison, step detection.") },
    ],
    offline: fr("Vos données restent chez vous : les logiciels Medicapteurs fonctionnent hors ligne, sans connexion à un serveur cloud. Les plateformes s'intègrent aux logiciels de gestion de cabinet Podoevolution, Medi+4000 et Podia XP (à confirmer).", "Your data stays with you: Medicapteurs software works offline, with no connection to a cloud server. The platforms connect to the practice management software Podoevolution, Medi+4000 and Podia XP (to be confirmed)."),
    pc: {
      title: fr("Configuration PC conseillée (février 2026)", "Recommended PC configuration (February 2026)"),
      rows: [
        [fr("Système", "System"), fr("Windows 8.1, 10 ou 11 (pas Windows 10 S)", "Windows 8.1, 10 or 11 (not Windows 10 S)"), ""],
        [fr("Processeur", "Processor"), fr("Core i3 8e gén. · Ryzen 3 série 3", "Core i3 8th gen · Ryzen 3 3000 series"), fr("Core i5 10e gén. · Ryzen 5 série 5", "Core i5 10th gen · Ryzen 5 5000 series")],
        [fr("Mémoire", "Memory"), fr("8 Go", "8 GB"), fr("16 Go", "16 GB")],
        [fr("Écran", "Screen"), "1366 × 768", "1920 × 1080"],
        [fr("Ports", "Ports"), fr("2 USB-A, dont un dédié à la plateforme", "2 USB-A, one for the platform only"), ""],
        [fr("Webcam", "Webcam"), fr("30 images/s (Logitech C920 Pro conseillée)", "30 frames/s (Logitech C920 Pro recommended)"), ""],
      ],
      notes: fr("Mac non compatibles. Tout-en-un, micro-PC et écrans de 13 à 14 pouces déconseillés. Câble USB de 3 m maximum avec un processeur Ryzen, ou hub USB 3.2.", "Macs are not compatible. All-in-ones, mini PCs and 13 to 14-inch screens are not recommended. USB cable of 3 m maximum with a Ryzen processor, or a USB 3.2 hub."),
      pdf: `${DOC}/2026/03/fiche-config-info-generale-v3-3-fevrier-2026-fr.pdf`,
    },
  },

  /* ================= ÉTUDES ================= */
  studies: {
    title: fr("Études scientifiques avec les plateformes Medicapteurs", "Scientific studies using Medicapteurs platforms"),
    description: fr("Près de 400 travaux publiés et 130 mémoires réalisés avec les plateformes Medicapteurs : podologie, posturologie, biomécanique, diabétologie.", "Nearly 400 published works and 130 theses using Medicapteurs platforms: podiatry, posturology, biomechanics, diabetology."),
    eyebrow: fr("Recherche", "Research"),
    h1: fr("Près de 400 travaux publiés.", "Nearly 400 published works."),
    lead: fr("Depuis 40 ans, Medicapteurs est partenaire de la recherche partout dans le monde, en podométrie, posturologie, biomécanique et diabétologie. Voici le recensement établi par Medicapteurs en janvier 2023.", "For 40 years, Medicapteurs has been a research partner worldwide, in podometry, posturology, biomechanics and diabetology. Here is the census drawn up by Medicapteurs in January 2023."),
    table: [
      { p: "Win-Posturo", pub: 96, years: "2000 – 2022", other: 19, slug: "win-posturo", files: ["winposturo-published-work-01-2023.pdf", "memoires-theses-winposturo_01-2023.pdf"] },
      { p: "Win-Pod", pub: 94, years: "2003 – 2022", other: 59, slug: "win-pod-wifi", files: ["winpod-published-work-01-2023.pdf", "memoires-theses-winpod_01-2023.pdf"] },
      { p: "Fusyo", pub: 84, years: "2005 – 2022", other: 11, slug: "fusyo", files: ["fusyo-published-work-01-2023.pdf", "memoires-theses-fusyo_01-2023.pdf"] },
      { p: fr("PEL38 (ancienne plateforme)", "PEL38 (former platform)"), pub: 43, years: "1983 – 2021", other: 10, files: ["pel38-published-work-01-2023.pdf", "pel38-non-published-work-01-2023.pdf"] },
      { p: "T-Plate · S-Plate", pub: 38, years: "2007 – 2022", other: 12, slug: "t-plate", files: ["tplate-published-work-01-2023.pdf", "memoire-t-plate.s-plate.distributeurs.01-2023.pdf"] },
      { p: "Win-Track", pub: 29, years: "2009 – 2022", other: 9, slug: "win-track", files: ["wintrack-published-work-01-2023.pdf", "memoires-theses-wintrack_01-2023.pdf"] },
      { p: "W-Inshoe", pub: 9, years: "2014 – 2022", other: 9, slug: "w-inshoe", files: ["winshoe-published-work-01-2023.pdf", "memoires-theses-winshoe_01-2023.pdf"] },
    ],
    totals: { pub: 393, other: 129 },
    genres: [
      [fr("Publications", "Publications"), 127], [fr("Articles", "Articles"), 93], [fr("Résumés de congrès", "Conference abstracts"), 79], [fr("Posters", "Posters"), 33], [fr("Présentations", "Presentations"), 14],
    ],
    langs: fr("Environ 183 travaux en anglais et 154 en français.", "About 183 works in English and 154 in French."),
    selection: [
      { t: "Effect of the distance run and the rest periods on the static plantar pressure during a 24-hour running race", a: "Farfaro M., Dumon L., Masmontet C. · European Journal of Human Movement, 2019", p: "Win-Pod" },
      { t: "Effectiveness of custom foot insoles to decrease plantar pressure: a cross-over randomized trial study", a: "Casado-Hernández I., Becerro-de-Bengoa-Vallejo R., Losa-Iglesias M. · Healthcare, 2022", p: "Win-Pod" },
      { t: "A cross-sectional study on the correlations between floating toe, plantar arch posture, and body sway", a: "Wakoa M., Fujimaki T., Koyama K., Furuya N. · Foot and Ankle Surgery, 2022", p: "Win-Pod" },
      { t: "The effects of unilateral medial arch support stimulation on plantar pressure and center of pressure adjustment in young gymnasts", a: "Janin M., Dupui P. · Neuroscience Letters, 2009", p: "Fusyo" },
      { t: "Effect of eccentric isokinetic strengthening in the rehabilitation of patients with knee osteoarthritis: Isogo, a randomized trial", a: "Jégu A.-G., Pereira B., Andant N., Coudeyre E. · Trials, 2014", p: "Fusyo" },
      { t: "Biomechanical evaluation of diabetic foot through hierarchical cluster analysis", a: "Sawacha Z., Spolaor F., Guarneri G. et al. · Université de Padoue", p: "Win-Pod" },
      { t: "Analysis of gait characteristics using a dynamic foot scanner in type 2 diabetes mellitus without peripheral neuropathy", a: "Chenamgere G. S. K., Maiya A. G. et al. · Journal of Exercise Science and Physiotherapy, 2015", p: "Win-Track" },
      { t: "Standing hindfoot alignment and body sway in healthy adolescents", a: "Turci M., Ranghino C., Colaccino V., Grassi G. P. · poster, 2007", p: "Win-Pod" },
      { t: "La baropodométrie", a: "Cornu J.-Y., Dussaucy A., Jeunet L. · Progrès en médecine et chirurgie du pied, 2004", p: "Win-Pod" },
      { t: "Sensibilité et motricité podales : leur influence sur le contrôle des activités posturo-cinétiques de sujets sains et pathologiques", a: "Janin M. · thèse, Université Paul Sabatier Toulouse III, 2009", p: "Fusyo · Win-Pod" },
    ],
    people: [
      { n: "Marc Janin", r: fr("Podologue, PhD. Master class de baropodométrie chez Medicapteurs en février 2017, webinaires 2020-2021.", "Podiatrist, PhD. Baropodometry master class at Medicapteurs in February 2017, webinars 2020-2021.") },
      { n: "Jean-Yves Cornu", r: fr("Podologue, nombreuses publications avec le Win-Pod.", "Podiatrist, many publications with Win-Pod.") },
      { n: "Marc Bourgeois", r: fr("Biomécanicien.", "Biomechanist.") },
    ],
    note: fr("Les travaux « publiés » regroupent des articles, résumés de congrès, posters et présentations. Les listes complètes, par plateforme, sont téléchargeables ci-dessous.", "“Published” works include articles, conference abstracts, posters and presentations. The full lists, by platform, can be downloaded below."),
  },

  /* ================= ENTREPRISE ================= */
  company: {
    title: fr("L'entreprise : née au LAAS-CNRS, fabriquée à Balma", "About us: born at LAAS-CNRS, made in Balma"),
    description: fr("Medicapteurs conçoit et fabrique depuis 1985 des plateformes de mesure des pressions plantaires, issues des travaux du LAAS-CNRS sur la « peau artificielle ».", "Since 1985, Medicapteurs has designed and manufactured plantar pressure platforms, based on LAAS-CNRS research on “artificial skin”."),
    eyebrow: fr("L'entreprise", "About us"),
    h1: fr("Née d'une peau artificielle.", "Born from an artificial skin."),
    lead: fr("Née de la recherche et de la haute technologie du LAAS-CNRS de Toulouse, Medicapteurs a été créée en 1985 pour exploiter les travaux sur le capteur tactile connu sous le nom de « peau artificielle ». Depuis, l'entreprise conçoit et fabrique des équipements pour les professionnels du pied, de la semelle et de la chaussure.", "Born from the research and high technology of LAAS-CNRS in Toulouse, Medicapteurs was founded in 1985 to develop the tactile sensor known as “artificial skin”. Since then, the company has designed and manufactured equipment for foot, insole and footwear professionals."),
    sections: [
      { t: fr("Une gamme complète et évolutive", "A complete, evolving range"), d: fr("Medicapteurs développe des produits pour le secteur médical comme pour la conception et la vente de semelles et de chaussures. Win-Pod, Win-Posturo, Fusyo, Win-Track et leurs logiciels sont améliorés en permanence pour répondre aux attentes des praticiens.", "Medicapteurs develops products for the medical sector as well as for insole and footwear design and retail. Win-Pod, Win-Posturo, Fusyo, Win-Track and their software are constantly improved to meet practitioners' needs.") },
      { t: fr("Qualité et fiabilité", "Quality and reliability"), d: fr("Medicapteurs bénéficie de la certification DEKRA relative aux dispositifs médicaux ayant une fonction de mesurage, qui impose notamment des tests finaux avant mise sur le marché. Conception et fabrication 100 % françaises.", "Medicapteurs holds DEKRA certification for medical devices with a measuring function, which requires final testing before release. 100% French design and manufacturing."), check: fr("Année de certification à confirmer (1988 ou 2006)", "Certification year to be confirmed (1988 or 2006)") },
      { t: fr("Une implantation mondiale", "A worldwide presence"), d: fr("Distribuée en Europe, en Amérique et en Asie, Medicapteurs est implantée à Toulouse (Balma) et à Nice (Sophia Antipolis). Son service recherche et développement travaille avec de nombreuses écoles de podologie européennes et des universités médicales de plusieurs pays, et améliore en continu les logiciels, les matériaux et le service client.", "Distributed in Europe, America and Asia, Medicapteurs is based in Toulouse (Balma) and Nice (Sophia Antipolis). Its research and development department works with many European podiatry schools and medical universities in several countries, and continuously improves software, materials and customer service.") },
      { t: fr("Partenaire de la recherche", "A research partner"), d: fr("Près de 400 travaux scientifiques publiés avec les plateformes Medicapteurs. En 2016, Medicapteurs a mené le projet « Serious GaRS » du programme européen Easynov : des plateformes en réseau sur lesquelles des patients âgés guident un avatar par leur équilibre, pour une rééducation collective qui recrée du lien social.", "Nearly 400 scientific works published using Medicapteurs platforms. In 2016, Medicapteurs led the “Serious GaRS” project in the European Easynov programme: networked platforms on which older patients guide an avatar with their balance, for group rehabilitation that rebuilds social ties.") },
    ],
    timeline: [
      { y: "1985", d: fr("Création de Medicapteurs pour valoriser la « peau artificielle » du LAAS-CNRS", "Medicapteurs founded to develop the LAAS-CNRS “artificial skin”") },
      { y: "~2010", d: fr("Plus de 4 000 systèmes installés", "More than 4,000 systems installed") },
      { y: "2016", d: fr("Plus de 12 000 clients équipés · projet européen Serious GaRS", "More than 12,000 equipped customers · Serious GaRS European project") },
      { y: "2017", d: fr("Lancement de Physioplay, la rééducation ludique", "Launch of Physioplay, playful rehabilitation") },
      { y: "2018", d: fr("Podocapture, première application mobile à piloter une plateforme Wifi · plus de 15 000 systèmes", "Podocapture, the first mobile app to drive a Wi-Fi platform · more than 15,000 systems") },
      { y: "2019", d: fr("Rapport pied diabétique automatique · nouvelle Fusyo 3", "Automatic diabetic foot report · new Fusyo 3") },
      { y: "2023", d: fr("Plus de 20 000 appareils en service dans le monde", "More than 20,000 devices in use worldwide") },
      { y: "2024", d: fr("PowerTrack, le tapis de course 2-en-1 · Minipod", "PowerTrack, the 2-in-1 treadmill · Minipod") },
      { y: "2026", d: fr("T-Plate 40 pour les 40 ans · rapport synthétique automatique · XT-Plate", "T-Plate 40 for the 40th anniversary · automatic summary report · XT-Plate") },
    ],
    figures: [
      { b: "1985", s: fr("création", "founded") },
      { b: "20 000+", s: fr("appareils en service", "devices in use") },
      { b: "~400", s: fr("travaux publiés", "published works") },
      { b: "100 %", s: fr("conçu et fabriqué en France", "designed and made in France") },
    ],
    figuresNote: fr("Le chiffre de 20 000 appareils vient des brochures 2023 et 2026 ; il est à confirmer par Medicapteurs (utilisateurs, clients ou appareils).", "The 20,000 devices figure comes from the 2023 and 2026 brochures; to be confirmed by Medicapteurs (users, customers or devices)."),
    team: [
      { n: "Olivier", r: fr("Directeur", "Managing director") },
      { n: "Eric", r: fr("Directeur technique", "Technical director") },
      { n: "Laura", r: fr("Développeuse", "Developer") },
      { n: "Laurent", r: fr("Export", "Export") },
      { n: "Tully", r: fr("Commerciale", "Sales") },
    ],
    teamNote: fr("Équipe affichée sur l'ancien site (2017), à mettre à jour.", "Team shown on the former site (2017), to be updated."),
    clients: fr("Ils utilisent Medicapteurs : podologues, médecins, kinésithérapeutes, biomécaniciens, diabétologues, fabricants de chaussures et de semelles, magasins de sport, hôpitaux et laboratoires de recherche.", "Medicapteurs users: podiatrists, physicians, physiotherapists, biomechanists, diabetologists, shoe and insole makers, sports shops, hospitals and research laboratories."),
  },

  /* ================= INGÉNIERIE ================= */
  engineering: {
    title: fr("Ingénierie : développement spécifique et sur mesure", "Engineering: custom development"),
    description: fr("Plateformes et logiciels personnalisés, capteurs de pression adaptés : biomécanique, sport de haut niveau, ergonomie.", "Customised platforms and software, adapted pressure sensors: biomechanics, elite sport, ergonomics."),
    eyebrow: fr("Ingénierie", "Engineering"),
    h1: fr("Votre projet, nos capteurs.", "Your project, our sensors."),
    lead: fr("Notre savoir-faire est à votre disposition pour réaliser vos projets sur mesure dans l'analyse des pressions réparties ou la posturologie. Toutes nos plateformes et leurs logiciels peuvent être personnalisés selon vos applications ou votre image d'entreprise.", "Our know-how is at your disposal for your custom projects in distributed pressure analysis or posturology. All our platforms and their software can be customised for your applications or your brand."),
    cases: [
      { t: fr("Biomécanique", "Biomechanics"), d: fr("Adaptation de nos matrices de capteurs de pression sur les plateformes de force du marché.", "Adapting our pressure sensor matrices to force platforms on the market."), img: "inge1.jpg" },
      { t: fr("Sport de haut niveau", "Elite sport"), d: fr("Analyse des forces de préhension ou de l'interface homme / machine : golf, équitation, tir, ski.", "Analysis of grip forces or of the human / machine interface: golf, horse riding, shooting, skiing."), img: "golf.jpg" },
      { t: fr("Ergonomie", "Ergonomics"), d: fr("Aide à la conception et à la validation de matelas, de sièges, de corsets.", "Help with designing and validating mattresses, seats, braces."), img: "formation.jpg" },
      { t: fr("Commerce et marque blanche", "Retail and white label"), d: fr("Recommandation de semelles adaptable à une gamme préfabriquée ou en marque blanche ; solutions pour magasins de sport et de chaussures.", "Insole recommendation adaptable to a prefabricated or white-label range; solutions for sports and shoe shops."), img: "powertrack-sortie.jpg" },
    ],
    outro: fr("La précision de nos capteurs et la souplesse de nos logiciels sont les atouts de vos projets. Soumettez-nous le vôtre.", "The accuracy of our sensors and the flexibility of our software are the strengths of your projects. Tell us about yours."),
  },

  /* ================= DISTRIBUTION ================= */
  distribution: {
    title: fr("Distribution en France et à l'étranger", "Distribution in France and abroad"),
    description: fr("En France, Medicapteurs vend en direct. À l'étranger, un réseau de distributeurs assure le suivi commercial et technique.", "In France, Medicapteurs sells directly. Abroad, a network of distributors provides sales and technical follow-up."),
    eyebrow: fr("Distribution", "Distribution"),
    h1: fr("Près de chez vous.", "Close to you."),
    lead: fr("En France, Medicapteurs commercialise sa gamme en direct. À l'étranger, un réseau de distribution sérieux et compétent, en constant développement, assure un suivi commercial et technique de qualité.", "In France, Medicapteurs sells its range directly. Abroad, a reliable and skilled distribution network, constantly growing, provides quality sales and technical follow-up."),
    france: fr("En France", "In France"),
    abroad: fr("À l'étranger", "Abroad"),
    abroadText: fr("Pour connaître les coordonnées du distributeur de votre pays, écrivez au service export.", "To get the contact details of the distributor in your country, write to the export department."),
    become: fr("Vous souhaitez distribuer nos produits ?", "Would you like to distribute our products?"),
    known: fr("Distributeurs cités publiquement : Algeos (Royaume-Uni), Herbitas (Portugal). Liste officielle à fournir par Medicapteurs.", "Publicly mentioned distributors: Algeos (United Kingdom), Herbitas (Portugal). Official list to be provided by Medicapteurs."),
  },

  /* ================= ACTUALITÉS ================= */
  news: {
    title: fr("Actualités : salons, nouveautés, offres", "News: trade shows, new products, offers"),
    description: fr("Les actualités Medicapteurs : salons MEDICA, AFDP, FNP, Entretiens de podologie, lancements de produits.", "Medicapteurs news: MEDICA, AFDP, FNP trade shows, podiatry congresses, product launches."),
    eyebrow: fr("Actualités", "News"),
    h1: fr("Actualités.", "News."),
    lead: fr("Salons, nouveautés et rendez-vous Medicapteurs.", "Medicapteurs trade shows, new products and events."),
    items: [
      { d: "2026-11-13", k: fr("Salon", "Trade show"), t: fr("Medicapteurs à MEDICA 2026, hall 4, stand H22-1", "Meet us at MEDICA 2026, Hall 4, Stand H22-1"), x: fr("Retrouvez-nous au plus grand salon mondial des équipements médicaux, à Düsseldorf.", "Meet us at the world's largest medical equipment show, in Düsseldorf.") },
      { d: "2026-09-11", k: fr("Salon", "Trade show"), t: fr("Entretiens de Podologie à Poitiers, les 2 et 3 octobre 2026", "Podiatry congress in Poitiers, 2 and 3 October 2026"), x: fr("Medicapteurs expose aux Entretiens de Podologie de la FNP.", "Medicapteurs exhibits at the FNP podiatry congress.") },
      { d: "2026-03-10", k: fr("Nouveauté", "New product"), t: fr("Salon AFDP 2026 : la T-Plate 40", "AFDP 2026: T-Plate 40"), x: fr("Au Parc floral de Paris, Medicapteurs présente sa dernière née, la T-Plate « 40e anniversaire », avec le logiciel toutes options et son rapport synthétique généré automatiquement.", "At the Parc floral in Paris, Medicapteurs presents its latest platform, the “40th anniversary” T-Plate, with the full-option software and its automatically generated summary report."), p: "t-plate-40" },
      { d: "2025-02-26", k: fr("Salon", "Trade show"), t: fr("Salon de Podologie, 7 et 8 mars 2025 à Paris", "Salon de Podologie, 7 and 8 March 2025 in Paris"), x: fr("Venez poser vos questions et voir nos démonstrations. Intervention « Minipod : des podomètres pour tous ! ».", "Come and ask your questions and see our demonstrations. Talk: “Minipod: pressure plates for everyone!”."), p: "minipod" },
      { d: "2024-11-19", k: fr("Salon", "Trade show"), t: fr("FNP 2024 à Paris, 22 et 23 novembre", "FNP 2024 in Paris, 22 and 23 November"), x: fr("Rencontrez-nous sur notre stand au salon de la Fédération nationale des podologues. Entrée libre.", "Meet us on our stand at the French national podiatry federation show. Free entry.") },
      { d: "2024-11-14", k: fr("Salon", "Trade show"), t: fr("MEDICA 2024, hall 4, stand H06-2", "MEDICA 2024, Hall 4, Stand H06-2"), x: fr("Chaque année, Medicapteurs participe au plus grand salon mondial des équipements médicaux, du 11 au 14 novembre 2024.", "Every year, Medicapteurs attends the world's largest medical equipment show, 11 to 14 November 2024."), img: "medica-stand.jpg" },
      { d: "2024-02-23", k: fr("Salon", "Trade show"), t: fr("Salon de la Podologie, 8 et 9 mars 2024 à Paris", "Salon de la Podologie, 8 and 9 March 2024 in Paris"), x: fr("Au Parc floral de Paris, stand 4, pour découvrir Minipod et toute la gamme.", "At the Parc floral in Paris, stand 4, to discover Minipod and the whole range.") },
      { d: "2024-01-08", k: fr("Nouveauté", "New product"), t: fr("PowerTrack, le tapis de course intelligent", "PowerTrack, the smart treadmill"), x: fr("Un tapis de course équipé de capteurs de pression amovibles pour étudier les sportifs, la marche et la course ; une piste de marche pour l'enfant et la personne âgée, posée au sol en 5 secondes.", "A treadmill fitted with removable pressure sensors to study athletes, walking and running; a walkway for children and older people, laid on the floor in 5 seconds."), p: "powertrack" },
      { d: "2023-09-28", k: fr("Salon", "Trade show"), t: fr("MEDICA 2023, stand 4H06", "MEDICA 2023, Booth 4H06"), x: fr("Medicapteurs expose à MEDICA 2023.", "Medicapteurs exhibits at MEDICA 2023.") },
      { d: "2022-11-25", k: fr("Salon", "Trade show"), t: fr("ISPO 2022 à Munich", "ISPO 2022 in Munich"), x: fr("Stand A3/426 : nos dernières technologies pour les magasins de sport.", "Booth A3/426: our latest technology for sports shops.") },
      { d: "2022-04-14", k: fr("Salon", "Trade show"), t: fr("OT World, hall 1, stand 36", "OT World, Hall 1, Booth 36"), x: fr("Medicapteurs au salon international de l'orthopédie technique de Leipzig.", "Medicapteurs at the international orthopaedic technology show in Leipzig.") },
      { d: "2021-02-22", k: fr("Événement", "Event"), t: fr("Journée portes ouvertes du 18 mars 2021", "Open day on 18 March 2021"), x: fr("Une journée de démonstrations en ligne, gratuite sur inscription.", "A day of online demonstrations, free with registration.") },
      { d: "2020-11-16", k: fr("Événement", "Event"), t: fr("Stand virtuel le 19 novembre 2020", "Virtual stand on 19 November 2020"), x: fr("Démonstrations en ligne de toute la gamme.", "Online demonstrations of the whole range.") },
      { d: "2020-04-06", k: fr("Formation", "Training"), t: fr("Webinaires Medicapteurs", "Medicapteurs webinars"), x: fr("Un planning de webinaires par plateforme, avec Marc Janin, podologue PhD.", "A webinar schedule by platform, with Marc Janin, podiatrist PhD.") },
      { d: "2019-10-17", k: fr("Logiciel", "Software"), t: fr("Le rapport pied diabétique automatique", "The automatic diabetic foot report"), x: fr("Calcul du niveau de risque d'ulcération (rapport avant-pied / arrière-pied, publication de David Armstrong), localisation des zones à risque, type de pied. Sur Win-Pod, Win-Track, Win-Track Mini et Fusyo.", "Ulceration risk level (forefoot / rearfoot ratio, David Armstrong's publication), risk zone location, foot type. On Win-Pod, Win-Track, Win-Track Mini and Fusyo.") },
      { d: "2019-09-02", k: fr("Salon", "Trade show"), t: fr("44es Entretiens de Podologie à Paris, 4 et 5 octobre 2019", "44th Podiatry congress in Paris, 4 and 5 October 2019"), x: fr("Retrouvez Medicapteurs début octobre à Paris.", "Meet Medicapteurs in early October in Paris.") },
      { d: "2018-11-26", k: fr("Salon", "Trade show"), t: fr("Rehacare and Orthopedic China 2019 à Canton", "Rehacare and Orthopedic China 2019 in Guangzhou"), x: fr("Medicapteurs expose en Chine.", "Medicapteurs exhibits in China.") },
      { d: "2018-08-29", k: fr("Événement", "Event"), t: fr("Journée de l'innovation numérique, Montpellier", "Digital innovation day, Montpellier"), x: fr("Le 19 septembre 2018.", "On 19 September 2018.") },
      { d: "2018-03-15", k: fr("Nouveauté", "New product"), t: fr("Podocapture, la première application mobile qui pilote une plateforme Wifi", "Podocapture, the first mobile app to drive a Wi-Fi platform"), x: fr("Gratuite sur l'App Store et Google Play, pour Win-Pod Wifi et T-Plate Wifi.", "Free on the App Store and Google Play, for Win-Pod Wifi and T-Plate Wifi.") },
      { d: "2018-01-11", k: fr("Congrès", "Congress"), t: fr("Congrès SOFAMEA à Toulouse · Journées internationales de posturologie à Madrid", "SOFAMEA congress in Toulouse · International posturology days in Madrid"), x: fr("Medicapteurs au XVIIe congrès de la Société francophone d'analyse du mouvement chez l'enfant et l'adulte, puis à Madrid du 26 au 28 janvier 2018.", "Medicapteurs at the 17th congress of the French-speaking society for movement analysis in children and adults, then in Madrid from 26 to 28 January 2018.") },
      { d: "2017-02-14", k: fr("Formation", "Training"), t: fr("Master class de baropodométrie avec Marc Janin, PhD", "Baropodometry master class with Marc Janin, PhD"), x: fr("Du 23 au 25 février 2017, trois jours de master class chez Medicapteurs.", "From 23 to 25 February 2017, three days of master class at Medicapteurs.") },
      { d: "2017-01-01", k: fr("Nouveauté", "New product"), t: fr("Medicapteurs lance Physioplay", "Medicapteurs launches Physioplay"), x: fr("La rééducation visuo-posturale ludique et à la portée de tous.", "Playful visual-postural rehabilitation for everyone.") },
    ],
  },

  /* ================= ASSISTANCE ================= */
  support: {
    title: fr("Assistance : hotline, licence, FAQ, configuration PC", "Support: hotline, licence, FAQ, PC requirements"),
    description: fr("Hotline Medicapteurs, enregistrement du code licence, questions fréquentes, configuration PC et manuels.", "Medicapteurs hotline, licence code registration, frequently asked questions, PC requirements and manuals."),
    eyebrow: fr("Assistance", "Support"),
    h1: fr("Vous êtes déjà équipé.", "You already have our equipment."),
    lead: fr("Une question, un souci d'utilisation ou une suggestion sur votre logiciel ? Voici comment obtenir de l'aide.", "A question, a problem or a suggestion about your software? Here is how to get help."),
    hotline: { t: fr("Hotline", "Hotline"), hours: fr("Du lundi au vendredi, 9 h – 12 h et 14 h – 17 h", "Monday to Friday, 9 am – 12 pm and 2 pm – 5 pm"), check: fr("Horaires à confirmer (17 h ou 18 h)", "Hours to be confirmed (5 pm or 6 pm)"), need: fr("Préparez le nom du logiciel, son numéro de version et le numéro de série de votre plateforme.", "Have the software name, its version number and your platform's serial number ready.") },
    licence: { t: fr("Code licence", "Licence code"), d: fr("Pour enregistrer votre licence, ouvrez le logiciel Medicapteurs, menu Aide puis À propos, et recopiez les 25 caractères sur fond rouge. Envoyez-les au service après-vente avec le nom et le numéro de série du matériel, le nom du logiciel (Win-Pod / Win-Track / Fusyo, Win-Posture, Win-Trainer) et sa version (V1 à V10).", "To register your licence, open the Medicapteurs software, Help menu then About, and copy the 25 characters on a red background. Send them to the after-sales department with the equipment name and serial number, the software name (Win-Pod / Win-Track / Fusyo, Win-Posture, Win-Trainer) and its version (V1 to V10).") },
    remote: { t: fr("Assistance à distance", "Remote assistance"), d: fr("Un technicien peut prendre la main sur votre PC pendant l'appel à la hotline.", "A technician can take control of your PC during the hotline call.") },
    manuals: { t: fr("Manuels", "Manuals"), d: fr("Les manuels sont sur le CD d'installation, dans le dossier « Manuels », et dans l'espace client sav.medicapteurs.fr.", "Manuals are on the installation CD, in the “Manuals” folder, and in the customer area sav.medicapteurs.fr.") },
    faq: [
      { q: fr("Comment changer d'ordinateur ?", "How do I change computer?"), a: fr("Sauvegardez d'abord votre base de données actuelle pour la transférer. Vérifiez la configuration PC conseillée, puis contactez-nous pour valider la compatibilité du nouvel ordinateur avec votre produit Medicapteurs.", "First back up your current database so you can transfer it. Check the recommended PC configuration, then contact us to confirm the new computer is compatible with your Medicapteurs product.") },
      { q: fr("Comment faire les sauvegardes ?", "How do I back up?"), a: fr("Copiez le dossier « data » situé dans le dossier de votre logiciel Medicapteurs, sur votre disque dur. Faites-le au moins 2 fois par semaine pour perdre le moins de données possible en cas de problème informatique.", "Copy the “data” folder located in your Medicapteurs software folder, on your hard drive. Do it at least twice a week to lose as little data as possible if your computer fails.") },
      { q: fr("Quelle différence entre l'option posturographie d'un Win-Pod et une plateforme de stabilométrie normalisée ?", "What is the difference between the Win-Pod posturography option and a standardised stabilometry platform?"), a: fr("Depuis 1985, une norme française de l'Association Française de Posturologie, aujourd'hui Association Posture et Équilibre (APE), fixe un cahier des charges très précis aux plateformes de stabilométrie, pour qu'elles donnent les mêmes résultats et se réfèrent à la même norme chiffrée. Fusyo et Win-Posturo y répondent.", "Since 1985, a French standard from the French Posturology Association, now the Posture and Balance Association (APE), has set very precise specifications for stabilometry platforms, so that they give the same results and refer to the same numerical norm. Fusyo and Win-Posturo meet it.") },
      { q: fr("Comment nettoyer la plateforme ?", "How do I clean the platform?"), a: fr("Avec des lingettes nettoyantes sans alcool pour surfaces plastiques, de type Phagolingettes.", "With alcohol-free cleaning wipes for plastic surfaces, such as Phagolingettes.") },
      { q: fr("J'ai perdu mon manuel.", "I have lost my manual."), a: fr("Les manuels sont en version électronique sur votre CD d'installation, dans le dossier « Manuels ». Le service après-vente peut aussi vous les envoyer.", "Manuals are available electronically on your installation CD, in the “Manuals” folder. The after-sales department can also send them to you.") },
      { q: fr("Peut-on mesurer un patient chaussé ?", "Can I measure a patient wearing shoes?"), a: fr("Oui, toutes les plateformes le permettent. Vérifiez qu'aucun objet tranchant n'est coincé dans les semelles et évitez les talons aiguilles.", "Yes, all platforms allow it. Check that nothing sharp is stuck in the soles and avoid stiletto heels.") },
      { q: fr("Mes données patients sont-elles envoyées sur internet ?", "Is my patient data sent over the internet?"), a: fr("Non. Les logiciels Medicapteurs fonctionnent hors ligne : il n'y a pas de connexion à un serveur cloud.", "No. Medicapteurs software works offline: there is no connection to a cloud server.") },
      { q: fr("Puis-je faire reprendre mon ancienne plateforme ?", "Can I trade in my old platform?"), a: fr("Oui, Medicapteurs propose la reprise de votre ancienne plateforme Medicapteurs, quel que soit son état, lors de l'achat d'un nouvel équipement. Montant selon l'offre en cours.", "Yes, Medicapteurs offers to take back your old Medicapteurs platform, whatever its condition, when you buy new equipment. Amount depends on the current offer.") },
    ],
  },

  /* ================= TÉLÉCHARGEMENTS ================= */
  downloads: {
    title: fr("Téléchargements : documentations, configuration PC, publications", "Downloads: documentation, PC requirements, publications"),
    description: fr("Documentations produits, fiches de configuration PC et listes de publications scientifiques Medicapteurs, en PDF.", "Medicapteurs product documentation, PC requirement sheets and scientific publication lists, in PDF."),
    eyebrow: fr("Téléchargements", "Downloads"),
    h1: fr("Téléchargements.", "Downloads."),
    lead: fr("Documentations produits, configuration PC et listes de publications, au format PDF.", "Product documentation, PC requirements and publication lists, in PDF."),
    groups: [
      { t: fr("Documentations produits", "Product documentation"), items: [
        ["T-Plate 2026", `${DOC}/2017/06/tplate2026.pdf`], ["T-Plate 30th", `${DOC}/2017/03/data-t-plate-30-th.pdf`], ["Win-Pod 2022", `${DOC}/2017/02/win-pod_2022.pdf`], ["Win-Pod Wifi", `${DOC}/2017/08/documentation_winpod_wifi-.pdf`], ["Win-Track", `${DOC}/2017/02/documentationwintrack.pdf`], ["Win-Track Mini", `${DOC}/2017/02/documentationwintrackmini.pdf`], ["Fusyo 2019", `${DOC}/2017/02/fusyo-v3-2019.pdf`], ["Fusyo", `${DOC}/2017/02/documentation-fusyo.pdf`], ["Win-Posturo", `${DOC}/2017/02/documentationwinposturo.pdf`], ["W-Inshoe", `${DOC}/2017/02/documentation-winshoe.pdf`], ["W-Inshoe Easy", `${DOC}/2017/08/documentation_winshoe_semelles.pdf`], ["PowerTrack", `${DOC}/2022/10/powertrack3-fr.pdf`], ["Podocapture", `${DOC}/2017/02/podocapture-.pdf`], ["Physioplay", `${DOC}/2017/02/physioplay_uk.pdf`], ["Foot Posture Index", `${DOC}/2017/02/fpi.pdf`],
      ] },
      { t: fr("Configuration PC (février 2026)", "PC requirements (February 2026)"), items: [
        [fr("Configuration générale", "General configuration"), `${DOC}/2026/03/fiche-config-info-generale-v3-3-fevrier-2026-fr.pdf`], ["PowerTrack", `${DOC}/2026/03/fiche-config-info-power-track-v4-3-fevrier-2026-fr.pdf`], ["W-Inshoe", `${DOC}/2026/03/fiche-config-info-w-inshoe-v3-3-fevrier-2026-fr.pdf`],
      ] },
      { t: fr("Publications et mémoires (janvier 2023)", "Publications and theses (January 2023)"), studies: true },
      { t: fr("Études pied diabétique", "Diabetic foot studies"), items: [[fr("Liste 2018", "2018 list"), `${DOC}/2018/06/diabetes-research-using-medicapteurs-plates.pdf`]] },
    ],
  },

  /* ================= MENTIONS LÉGALES ================= */
  legal: {
    title: fr("Mentions légales et données personnelles", "Legal notice and privacy"),
    description: fr("Mentions légales, conditions d'utilisation et données personnelles du site Medicapteurs.", "Legal notice, terms of use and personal data of the Medicapteurs website."),
    eyebrow: fr("Informations", "Information"),
    h1: fr("Mentions légales.", "Legal notice."),
    sections: [
      { t: fr("Éditeur", "Publisher"), d: fr("Medicapteurs France SAS, 31130 Balma, France. Téléphone : +33 5 62 571 571. Numéro RCS, capital et directeur de la publication : à compléter par Medicapteurs.", "Medicapteurs France SAS, 31130 Balma, France. Phone: +33 5 62 571 571. Company registration number, share capital and publication director: to be completed by Medicapteurs.") },
      { t: fr("Hébergeur", "Host"), d: fr("Ikoula, 175 rue d'Aguesseau, 92100 Boulogne-Billancourt, France (RCS Nanterre B 417 680 618), d'après l'ancien site : à confirmer pour le nouveau site.", "Ikoula, 175 rue d'Aguesseau, 92100 Boulogne-Billancourt, France (RCS Nanterre B 417 680 618), according to the former site: to be confirmed for the new site.") },
      { t: fr("Conditions d'utilisation", "Terms of use"), d: fr("L'accès au site confère un droit d'usage privé, non collectif et non exclusif sur son contenu. Les textes, photographies, vidéos et infographies sont des œuvres protégées par le Code de la propriété intellectuelle : leur reproduction à des fins commerciales nécessite l'accord exprès de Medicapteurs.", "Access to the site gives a private, non-collective and non-exclusive right to use its content. Texts, photographs, videos and infographics are works protected by the French Intellectual Property Code: reproducing them for commercial purposes requires Medicapteurs' express consent.") },
      { t: fr("Données personnelles", "Personal data"), id: "donnees", d: fr("Les informations envoyées par les formulaires du site servent uniquement à répondre à votre demande et ne sont transmises qu'à Medicapteurs. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'opposition et d'effacement de vos données. Politique complète à fournir par Medicapteurs.", "Information sent through the site's forms is only used to answer your request and is only passed to Medicapteurs. Under the GDPR, you have the right to access, correct, object to and erase your data. Full policy to be provided by Medicapteurs.") },
      { t: fr("Cookies", "Cookies"), d: fr("Le site n'utilise pas de cookie de suivi. Il mémorise seulement, dans votre navigateur, la langue choisie.", "The site uses no tracking cookie. It only stores, in your browser, the language you chose.") },
    ],
  },
};

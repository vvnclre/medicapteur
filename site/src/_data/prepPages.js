// Pages courtes en attendant leur version complète (guide, pied diabétique, études, mentions légales).
import langs from "./langs.js";
const keys = [
  { key: "guide", image: "pied-pression.jpg" },
  { key: "diabetes", image: "logiciel-diabete.jpg" },
  { key: "studies", image: null },
  { key: "legal", image: null },
];
export default langs.flatMap((lang) => keys.map((k) => ({ lang, ...k })));

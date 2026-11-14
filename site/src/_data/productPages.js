// Une fiche produit par produit et par langue.
import products from "./products.js";
import langs from "./langs.js";
export default langs.flatMap((lang) => products.map((product) => ({ lang, product })));

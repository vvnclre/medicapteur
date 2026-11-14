// Configuration Eleventy du site Medicapteurs.
// Chaque page existe en français (/fr/) et en anglais (/en/) ; les adresses
// des deux langues sont déclarées dans src/_data/routes.js.
import routes from "./src/_data/routes.js";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/root": "/" });
  eleventyConfig.ignores.add("src/root/**");

  // Adresse d'une page dans une langue : url("range", "en") -> /en/range/
  const url = (key, lang, slug) => {
    const r = routes[key];
    if (!r) throw new Error(`Route inconnue : ${key}`);
    const base = r[lang] === "" ? `/${lang}/` : `/${lang}/${r[lang]}/`;
    return slug ? `${base}${slug}/` : base;
  };
  eleventyConfig.addFilter("url", (key, lang, slug) => url(key, lang, slug));
  eleventyConfig.addGlobalData("routeUrl", () => url);

  // Texte bilingue : { fr: "...", en: "..." } -> la bonne langue
  eleventyConfig.addFilter("t", (value, lang) => {
    if (value && typeof value === "object" && (value.fr !== undefined || value.en !== undefined)) {
      return value[lang] ?? value.fr;
    }
    return value;
  });

  // Nombre à la française ou à l'anglaise : 12288 -> « 12 288 » / « 12,288 »
  eleventyConfig.addFilter("num", (n, lang) =>
    new Intl.NumberFormat(lang === "en" ? "en-GB" : "fr-FR").format(n).replace(/ /g, " "));

  // Chiffres écrits à la française dans les données : « 0,4 » et « 2 304 » deviennent « 0.4 » et « 2,304 » en anglais
  eleventyConfig.addFilter("loc", (value, lang) => {
    if (lang !== "en" || typeof value !== "string") return value;
    return value.replace(/(\d),(\d)/g, "$1.$2").replace(/(\d) (\d{3})(?!\d)/g, "$1,$2");
  });

  eleventyConfig.addFilter("byFamily", (products, family) => products.filter((p) => p.family === family));
  eleventyConfig.addFilter("bySlug", (products, slug) => products.find((p) => p.slug === slug));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
  };
}

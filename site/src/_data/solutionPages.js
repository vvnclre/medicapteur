// Une page par solution (baropodométrie, posturographie, rééducation) et par langue.
import pages from "./pages.js";
import langs from "./langs.js";
export default langs.flatMap((lang) => pages.solutions.map((s) => ({ lang, s })));

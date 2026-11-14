// Cadran gradué de l'accueil, comme le cadran imprimé sur les plateformes.
// Calculé à la construction du site : aucune image ni script nécessaire.
const cx = 310, cy = 310, r2 = 292;
const f = (n) => Math.round(n * 10) / 10;
let major = "", minor = "";
for (let a = 0; a < 360; a += 3) {
  const t = (a * Math.PI) / 180;
  const r1 = a % 30 === 0 ? 262 : a % 15 === 0 ? 272 : 280;
  const seg = `M${f(cx + r1 * Math.cos(t))} ${f(cy + r1 * Math.sin(t))}L${f(cx + r2 * Math.cos(t))} ${f(cy + r2 * Math.sin(t))}`;
  if (a % 30 === 0) major += seg; else minor += seg;
}
const p = (k) => `${f(cx + 300 * Math.cos(Math.PI * k))} ${f(cy + 300 * Math.sin(Math.PI * k))}`;
export default { major, minor, arc: `M${p(1.12)}A300 300 0 0 1 ${p(1.32)}` };

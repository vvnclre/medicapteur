#!/usr/bin/env python3
"""Transforme le site construit (_site/) en thème WordPress installable.

Usage, depuis le dossier site/ :
    npm run build
    python3 wordpress/build-theme.py

Résultat : wordpress/dist/medicapteurs.zip, à téléverser dans
WordPress > Apparence > Thèmes > Ajouter > Téléverser un thème.

Chaque page du site devient un fichier PHP du thème. Le thème sert ces pages
à leur adresse habituelle (/fr/gamme/, /en/range/…) ; toute autre adresse
reste gérée normalement par WordPress.
"""
import os
import re
import shutil
import sys
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.normpath(os.path.join(HERE, "..", "_site"))
OUT = os.path.join(HERE, "dist")
THEME = os.path.join(OUT, "medicapteurs")
SRC = os.path.join(HERE, "theme")  # fichiers PHP fixes du thème

ASSET = "<?php echo esc_url( MC_URI ); ?>"
HOME = "<?php echo esc_url( MC_HOME ); ?>"
OLD_DOMAIN = "https://www.medicapteurs.com"


def convert(html):
    """Adresses du site -> adresses WordPress, et crochets wp_head / wp_footer."""
    if "<?" in html:
        raise ValueError("balise PHP inattendue dans le HTML généré")
    # liens canoniques et alternates : domaine du site WordPress
    html = re.sub(r'href="' + re.escape(OLD_DOMAIN) + r'/(fr|en)/', 'href="' + HOME + r'/\1/', html)
    # ressources du thème
    html = re.sub(r'((?:href|src)=")/assets/', r"\1" + ASSET + "/assets/", html)
    html = re.sub(r'("img": ")/assets/', r"\1" + ASSET + "/assets/", html)
    # pages du site
    html = re.sub(r'((?:href|src)=")/(fr|en)/', r"\1" + HOME + r"/\2/", html)
    html = re.sub(r'("url": ")/(fr|en)/', r"\1" + HOME + r"/\2/", html)
    # extensions WordPress (sécurité, statistiques, SEO) : elles s'accrochent ici
    html = html.replace("</head>", "<?php wp_head(); ?>\n</head>", 1)
    html = html.replace("</body>", "<?php wp_footer(); ?>\n</body>", 1)
    leftovers = re.findall(r'(?:href|src)="/(?!/)[^"]*"', html)
    if leftovers:
        raise ValueError(f"adresses non converties : {leftovers[:3]}")
    return html


def main():
    if not os.path.isdir(SITE):
        sys.exit("Construisez d'abord le site : npm run build")
    shutil.rmtree(THEME, ignore_errors=True)
    shutil.copytree(SRC, THEME)
    shutil.copytree(os.path.join(SITE, "assets"), os.path.join(THEME, "assets"))

    count = 0
    for root, _, files in os.walk(SITE):
        for name in files:
            if not name.endswith(".html"):
                continue
            rel = os.path.relpath(os.path.join(root, name), SITE)
            if rel == "index.html":  # redirection racine : gérée en PHP
                continue
            if rel == "404.html":
                key = "404"
            else:
                key = os.path.dirname(rel)  # fr/gamme, en/products/fusyo, fr
                key = key + "/index" if key in ("fr", "en") else key
            dest = os.path.join(THEME, "pages", key + ".php")
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            with open(os.path.join(root, name), encoding="utf-8") as f:
                html = convert(f.read())
            with open(dest, "w", encoding="utf-8") as f:
                f.write("<?php defined( 'ABSPATH' ) || exit; ?>\n" + html)
            count += 1

    zpath = os.path.join(OUT, "medicapteurs.zip")
    with zipfile.ZipFile(zpath, "w", zipfile.ZIP_DEFLATED) as z:
        for root, _, files in os.walk(THEME):
            for name in files:
                full = os.path.join(root, name)
                z.write(full, os.path.relpath(full, OUT))
    print(f"{count} pages -> {zpath} ({os.path.getsize(zpath) // 1024} Ko)")


if __name__ == "__main__":
    main()

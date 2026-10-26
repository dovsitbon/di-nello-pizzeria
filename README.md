# Pizza Di Nello — site vitrine

Astro 7 + Tailwind 4, site statique. Pizzeria napolitaine, 8 allée des Glycines, Saint-Brice-sous-Forêt.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:4410
npm run build      # génère dist/
npm run preview    # sert dist/ sur le port 4410
npm run captures   # captures 390 px et 1440 px dans captures/ (après build)
npm run og         # régénère public/og.png et public/apple-touch-icon.png
```

## Déployer

Projet Vercel importé depuis le dépôt GitHub : chaque push sur `main` redéploie. Astro statique est détecté automatiquement (aucun `vercel.json` nécessaire).
Après mise en ligne sur un domaine définitif : changer `URL_SITE` dans `src/data/site.ts` (canonical, sitemap, robots.txt, llms.txt et JSON-LD suivent).

## Où changer quoi

| Quoi | Fichier |
|---|---|
| Nom, adresse, téléphone, réseaux, note Google, avis | `src/data/site.ts` |
| Horaires (deux services par jour possibles) | `src/data/site.ts`, tableau `HORAIRES` |
| La carte (rubriques, plats, prix) | `src/data/carte.json` (`prix: null` affiche « [À CONFIRMER] ») |
| Offres du moment | `src/data/offres.json` (`actif: false` pour masquer) |
| Textes des sections | `src/pages/index.astro` |
| Mentions légales / confidentialité | `src/pages/mentions-legales.astro`, `src/pages/confidentialite.astro` |
| Couleurs et polices | `src/styles/global.css` (bloc `@theme`) |
| Photos | voir `PHOTOS_A_PRENDRE.md` ; remplacer les blocs `.photo-vide` par `<Image>` d'`astro:assets` (fichiers dans `src/assets/`) |

Ce qui reste à confirmer : `A_COMPLETER.md`.

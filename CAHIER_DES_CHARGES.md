# Prompt Claude Code : site « Di Nello » (pizzeria napolitaine, Saint-Brice-sous-Forêt)

Tu es un développeur front-end et directeur artistique senior. Crée le site vitrine complet de **Pizza Di Nello**. Objectif business : récupérer les commandes en direct (aujourd'hui sur Uber Eats, avec commission), afficher une **vraie carte en ligne** (actuellement un simple dossier Google Drive) et remplir la salle et la terrasse.

## Fiche d'identité (informations vérifiées)
- **Nom** : Pizza Di Nello / Di Nello Pizzeria (fiche PagesJaunes : « MDJ O'vergers Food / Di Nello Pizzeria »)
- **Type** : pizzeria **100 % napolitaine**, aussi pâtes fraîches et desserts (tiramisu)
- **Adresse** : 8 allée des Glycines, 95350 Saint-Brice-sous-Forêt (centre commercial des Vergers)
- **Téléphone** : 09 81 27 42 87
- **Horaires (Google)** : mardi au samedi 11h30–14h30 et 18h30–22h30 · dimanche 18h00–22h30 `[À CONFIRMER : horaire habituel ou exceptionnel]` · **lundi fermé**
- **Note Google** : 4,9/5 sur 78 avis
- **Services** : sur place, à emporter, livraison (Uber Eats), traiteur, terrasse, adapté aux enfants ; présent sur **Too Good To Go**
- **Réseaux** : Instagram @dinello_pizza (~630 abonnés), TikTok @dinello_pizza
- **Contexte** : cité par actu.fr (septembre 2024) parmi les nouvelles enseignes qui redonnent « un second souffle » au centre commercial des Vergers
- **Offres vues sur Instagram** : promo « 3 plats au choix pour 30 € » `[À CONFIRMER si toujours valable]`
- **Pratique** : parking gratuit, stationnement facile
- **Paiements** : CB, sans contact
- **Schema.org** : `Restaurant` (servesCuisine : Pizza, Italian ; hasMenu)

## Ce que disent les clients
Pâte légère et parfaite, ingrédients de qualité, garniture généreuse, prix raisonnables, accueil chaleureux, service rapide, jolie déco intérieure, terrasse agréable. Pizzas citées : **Mortadella à la truffe**, **burrata**, pollo crema ; **pâtes poulet pesto** fraîches ; **tiramisu**. Le patron est apprécié des habitués (prénom cité dans un avis : « Mathiou » `[À CONFIRMER orthographe]`).

Extraits d'avis utilisables (« Avis Google ») :
- « Franchement meilleure pizzeria de Saint-Brice, avec un accueil de malade. Les pizzas napolitaines, un pur délice. »
- « La pizza Mortadella à la truffe était tout simplement extraordinaire. »
- « Les pizzas sont délicieuses avec une pâte parfaite, et les pâtes sont fraîches et pleines de goût. »
- « Très jolie décoration intérieure et terrasse extérieure agréable. »
- « Les pizzas pâte fine au top, ça rappelle le goût de l'Italie. »

## Direction artistique (angle : « le carton à pizza et le four »)
- Inspiration : **cartons à pizza imprimés des pizzerias napolitaines, tickets de commande, affiches italiennes des années 60**. Joyeux, gourmand, direct.
- Palette : rouge tomate San Marzano, vert basilic, crème mozzarella, noir four ; texture carton kraft légère en CSS.
- Typo : une slab ou une display italienne rétro (ex. Alfa Slab One ou Abril Fatface) + une sans lisible (ex. DM Sans).
- Idée signature : la **carte façon ticket de commande** (numéros, cases à cocher visuelles) et un header en forme de **couvercle de carton à pizza**.

## Structure
1. **Accueil** : « Pizza napolitaine au centre des Vergers », note 4,9/5, boutons « Commander à emporter » (tel:) + « Voir la carte », statut ouvert/fermé.
2. **La carte** : pizzas (rouges / blanches / spéciales dont Mortadella truffe, burrata), pâtes fraîches, desserts (tiramisu), boissons. Données dans `src/data/carte.json`, prix `[À CONFIRMER]` (reprendre la carte du dossier Google Drive du restaurant).
3. **Pourquoi la napolitaine** : pâte, cuisson, produits (sans inventer de détails techniques : fermentation, four, farine `[À CONFIRMER]`).
4. **Offres du moment** : bloc éditable (`src/data/offres.json`).
5. **Sur place / à emporter / livraison** : terrasse, Uber Eats en option, commande directe recommandée.
6. **Avis** : 5 extraits + 4,9/5.
7. **Infos pratiques** : horaires, centre commercial des Vergers, parking gratuit, carte, Instagram/TikTok.

---

## Règles communes (à respecter strictement)

### 1. Avant de coder
- Liste les skills et plugins disponibles dans ta session et **utilise toutes celles qui s'appliquent** : design frontend (ex. `frontend-design`), tests navigateur / captures (Playwright, `webapp-testing`), images, déploiement, etc. Dis-moi lesquelles tu utilises.
- Propose-moi en 10 lignes max la direction artistique (palette en hex, 2 polices, ambiance, 1 idée de mise en page signature) **puis enchaîne sans attendre ma validation**.

### 2. Stack technique
- **Astro + Tailwind CSS**, site statique, zéro framework JS lourd côté client (îlots JS seulement si nécessaire).
- Polices auto-hébergées (`@fontsource`), pas d'appel Google Fonts.
- Images en AVIF/WebP via `astro:assets`, `loading="lazy"` sauf la première image.
- Déploiement prévu sur **Vercel** (ajoute la config si besoin). Si un accès Vercel est connecté dans ta session, fais un déploiement **preview** et donne-moi l'URL.
- Objectif Lighthouse : ≥ 95 sur les 4 scores, mobile.

### 3. Design qui NE FAIT PAS « site généré par IA » (priorité n°1)
Interdit :
- dégradés violet/bleu, « glassmorphism », blobs flous en fond, néons, ombres molles partout ;
- la grille « 3 cartes avec une icône + titre + 2 lignes » ;
- les emojis comme icônes, les icônes génériques type Heroicons/Lucide posées partout ;
- Inter/Poppins/Montserrat seules, tout centré, tout arrondi en `rounded-2xl` ;
- les phrases creuses : « Bienvenue chez… », « Découvrez… », « Plongez dans… », « Votre partenaire de confiance », « Une expérience unique », « Notre passion, votre satisfaction » ;
- les fausses stats (« +500 clients satisfaits »), les faux témoignages, les photos de banque d'images clichés (poignée de main, personnes en costume qui sourient).

À faire :
- une **identité propre au lieu** (voir la direction artistique plus haut), avec un ou deux partis pris forts : typographie éditoriale, mise en page asymétrique, détails réels (ardoise, ticket, plaque, carte routière, numéro de rue en très grand…) ;
- des textes **courts, concrets, à la voix du commerçant**, avec de vrais détails (horaires, plats, adresses, noms de rues, parkings) ;
- du rythme : alterner sections pleines et aérées, une grande typo, des espaces généreux ;
- des micro-interactions sobres (hover, apparition légère au scroll), rien de plus ;
- `prefers-reduced-motion` respecté.

### 4. Contenu : zéro invention
- Utilise **uniquement** les informations fournies dans ce prompt.
- Tout ce qui manque (prix, plats exacts, photos, nom du gérant, SIRET…) = un marqueur visible **`[À CONFIRMER]`** et une entrée dans le fichier `A_COMPLETER.md` à la racine.
- Avis clients : n'utilise **que** les extraits fournis, attribués « Avis Google ». Jamais d'avis inventé, jamais de nom inventé.

### 5. Photos
- **Ne télécharge pas et n'intègre pas** de photos Google Maps / Facebook / Instagram (droits d'auteur des clients et du commerce).
- Mets des emplacements propres (bloc couleur + légende du cliché attendu, pas de gris « placeholder ») et crée `PHOTOS_A_PRENDRE.md` : la liste précise des photos à faire (cadrage, lumière, format), pour que je les prenne moi-même chez le commerçant.

### 6. SEO local (indispensable)
- `<html lang="fr">`, title + meta description uniques, Open Graph, favicon.
- **JSON-LD schema.org** adapté (type indiqué plus haut) avec nom, adresse, téléphone, horaires `openingHoursSpecification`, géolocalisation, `sameAs` (réseaux sociaux).
- Nom / adresse / téléphone identiques partout (NAP), pied de page compris.
- Carte : iframe Google Maps chargée **au clic** (façade légère) pour ne pas plomber la perf.
- `sitemap.xml`, `robots.txt`, URLs propres, H1 unique, balises `alt` descriptives.
- Mots-clés locaux naturels : la ville + les communes voisines (Groslay, Montmorency, Saint-Brice-sous-Forêt, Sarcelles, Deuil-la-Barre, Montmagny, Domont, Ézanville).

### 7. Conversion et mobile
- Mobile d'abord. **Bouton d'appel fixe en bas d'écran sur mobile** (`tel:`), + bouton itinéraire (lien Google Maps).
- Horaires lisibles, avec indication « Ouvert maintenant / Fermé » calculée en JS léger (fuseau Europe/Paris).
- Accessibilité AA : contrastes, focus visibles, navigation clavier, tailles de cibles ≥ 44 px.

### 8. Légal
- Page **Mentions légales** (éditeur, hébergeur Vercel, SIRET `[À CONFIRMER]`) et **Politique de confidentialité**.
- Pas de traceur, donc pas de bandeau cookies. Si un formulaire existe : consentement RGPD + envoi via un service sans backend (ex. Formspree / Web3Forms, clé `[À CONFIRMER]`).

### 9. Livraison
1. `npm run build` sans erreur ni warning.
2. Captures Playwright **mobile (390 px) et desktop (1440 px)** de chaque page ; regarde-les toi-même et corrige ce qui fait « template » ou « IA » avant de me rendre la main.
3. Un `README.md` court : lancer en local, déployer, où changer textes / photos / horaires.
4. Les fichiers `A_COMPLETER.md` et `PHOTOS_A_PRENDRE.md`.
5. Un résumé final de 10 lignes max : ce qui est fait, ce qui manque.

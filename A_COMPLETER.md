# À compléter avant mise en ligne définitive

Chaque point apparaît sur le site avec un marqueur jaune « [À CONFIRMER] ». Une fois l'info obtenue, la modifier dans le fichier indiqué et retirer le marqueur.

## La carte (`src/data/carte.json`)
- [ ] Reprendre la **carte complète** depuis le dossier Google Drive du restaurant : pizzas rouges (base tomate), autres pizzas blanches et spéciales, autres pâtes, desserts, **boissons**.
- [ ] **Prix** de chaque plat (aujourd'hui `null` partout).
- [ ] Compositions (champ `description`, facultatif).
- [ ] Vérifier le classement : Pollo crema en « blanches », Mortadella à la truffe et Burrata en « spéciales ».

## Horaires (`src/data/site.ts`)
- [ ] **Dimanche 18h00–22h30** : horaire habituel ou exceptionnel ? (retirer `aConfirmer` si habituel ; supprimer le service sinon).
- [ ] Vérifier mardi–samedi 11h30–14h30 / 18h30–22h30 et lundi fermé.

## Offres (`src/data/offres.json`)
- [ ] « 3 plats au choix pour 30 € » (vue sur Instagram) : toujours valable ? Conditions (sur place / emporter, quels plats) ?
- [ ] Too Good To Go : confirmer que l'offre est toujours active.

## Pourquoi la napolitaine (`src/pages/index.astro`)
- [ ] Farine et temps de fermentation de la pâte.
- [ ] Type de four (bois, gaz, électrique) et temps de cuisson.
- [ ] Provenance des produits (tomate, mozzarella, farine…).

## Commande et services (`src/pages/index.astro`)
- [ ] Lien de la fiche **Uber Eats** et zone livrée.
- [ ] Traiteur : formules, quantités, délai de commande.
- [ ] Prénom du patron : « Mathiou » (orthographe citée dans un avis) — accord du patron pour le citer.

## Mentions légales (`src/pages/mentions-legales.astro`, `src/pages/confidentialite.astro`)
- [ ] Raison sociale exacte (PagesJaunes indique « MDJ O'vergers Food »), forme juridique, capital.
- [ ] SIRET, RCS, n° TVA intracommunautaire.
- [ ] E-mail de contact.
- [ ] Directeur de la publication.

## SEO
- [ ] Coordonnées GPS (latitude / longitude) du restaurant : non connues avec certitude, donc `geo` est **omis** du JSON-LD. À ajouter dans `src/layouts/Base.astro` (`geo: { '@type': 'GeoCoordinates', latitude, longitude }`) une fois relevées sur la fiche Google.
- [ ] Vérifier les liens Instagram et TikTok (`@dinello_pizza`).
- [ ] Mettre à jour la note Google (4,9/5, 78 avis) de temps en temps dans `src/data/site.ts`.
- [ ] Domaine définitif : changer `URL_SITE` dans `src/data/site.ts`.

## Photos
- [ ] Voir `PHOTOS_A_PRENDRE.md`.

// Données du restaurant : URL du site, NAP, horaires, liens. Modifier ici, tout le site suit
// (pages, pied de page, JSON-LD, robots.txt, llms.txt, statut « ouvert / fermé »).
export const URL_SITE = 'https://di-nello-pizzeria.vercel.app';

export const SITE = {
  nom: 'Pizza Di Nello',
  nomLong: 'Di Nello Pizzeria',
  raisonSociale: "MDJ O'vergers Food", // nom figurant sur la fiche PagesJaunes
  adresse: { rue: '8 allée des Glycines', cp: '95350', ville: 'Saint-Brice-sous-Forêt', lieu: 'Centre commercial des Vergers', pays: 'FR' },
  telAffiche: '09 81 27 42 87',
  telLien: '+33981274287',
  note: '4,9',
  noteNum: 4.9,
  nbAvis: 78,
  instagram: 'https://www.instagram.com/dinello_pizza/',
  tiktok: 'https://www.tiktok.com/@dinello_pizza',
  pseudo: '@dinello_pizza',
  itineraire:
    'https://www.google.com/maps/dir/?api=1&destination=8%20all%C3%A9e%20des%20Glycines%2C%2095350%20Saint-Brice-sous-For%C3%AAt',
  carte:
    'https://www.google.com/maps?q=Di%20Nello%20Pizzeria%2C%208%20all%C3%A9e%20des%20Glycines%2C%2095350%20Saint-Brice-sous-For%C3%AAt&output=embed',
  voisines: ['Groslay', 'Montmorency', 'Sarcelles', 'Deuil-la-Barre', 'Montmagny', 'Domont', 'Ézanville'],
};

// Horaires. jour : 0 = dimanche … 6 = samedi. Format 24 h "HH:MM".
// Deux services par jour possibles (midi / soir). `aConfirmer` affiche un marqueur à côté du jour.
export type Service = { ouvre: string; ferme: string };
export type Jour = { jour: number; nom: string; services: Service[]; aConfirmer?: string };
const MIDI = { ouvre: '11:30', ferme: '14:30' };
const SOIR = { ouvre: '18:30', ferme: '22:30' };
export const HORAIRES: Jour[] = [
  { jour: 1, nom: 'Lundi', services: [] },
  { jour: 2, nom: 'Mardi', services: [MIDI, SOIR] },
  { jour: 3, nom: 'Mercredi', services: [MIDI, SOIR] },
  { jour: 4, nom: 'Jeudi', services: [MIDI, SOIR] },
  { jour: 5, nom: 'Vendredi', services: [MIDI, SOIR] },
  { jour: 6, nom: 'Samedi', services: [MIDI, SOIR] },
  { jour: 0, nom: 'Dimanche', services: [{ ouvre: '18:00', ferme: '22:30' }], aConfirmer: 'horaire habituel ou exceptionnel' },
];

export const fmtHeure = (h: string) => h.replace(':', 'h');

// Les 5 extraits d'avis fournis (Avis Google). Ne pas en ajouter d'inventés.
export const AVIS = [
  'Franchement meilleure pizzeria de Saint-Brice, avec un accueil de malade. Les pizzas napolitaines, un pur délice.',
  'La pizza Mortadella à la truffe était tout simplement extraordinaire.',
  'Les pizzas sont délicieuses avec une pâte parfaite, et les pâtes sont fraîches et pleines de goût.',
  'Très jolie décoration intérieure et terrasse extérieure agréable.',
  "Les pizzas pâte fine au top, ça rappelle le goût de l'Italie.",
];

import type { APIRoute } from 'astro';
import { SITE, HORAIRES, fmtHeure } from '../data/site';
import carte from '../data/carte.json';

export const GET: APIRoute = ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const horaires = HORAIRES.map(
    (j) =>
      `${j.nom} : ${j.services.length ? j.services.map((s) => `${fmtHeure(s.ouvre)}–${fmtHeure(s.ferme)}`).join(' et ') : 'fermé'}${j.aConfirmer ? ' (à confirmer)' : ''}`,
  ).join('\n- ');
  const plats = carte.rubriques.flatMap((r) => r.plats.map((p) => `${p.nom} (${r.titre.toLowerCase()})`)).join(', ');
  const txt = `# ${SITE.nom} (${SITE.nomLong}), Saint-Brice-sous-Forêt

> Pizzeria 100 % napolitaine au centre commercial des Vergers, ${SITE.adresse.rue}, ${SITE.adresse.cp} ${SITE.adresse.ville} (Val-d'Oise). Pizzas, pâtes fraîches, tiramisu. Note Google ${SITE.note}/5 sur ${SITE.nbAvis} avis.

- Téléphone (commande à emporter) : ${SITE.telAffiche}
- Services : sur place, terrasse, à emporter, livraison via Uber Eats, traiteur, adapté aux enfants, paniers Too Good To Go
- Pratique : parking gratuit ; paiement par carte bancaire et sans contact
- Plats cités par les clients : ${plats}
- Réseaux : Instagram ${SITE.instagram} ; TikTok ${SITE.tiktok}
- Communes voisines : ${SITE.voisines.join(', ')}

## Horaires
- ${horaires}

## Pages
- [Accueil](${u('/')}) : carte, offres, modes de commande, avis, horaires, accès
- [La carte](${u('/#carte')})
- [Infos pratiques](${u('/#infos')})
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

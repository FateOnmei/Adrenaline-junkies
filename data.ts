import { Adventure } from './types';

export const adventures: Adventure[] = [
  {
    id: 'iceland-lava',
    title: 'Vulkanická výprava – Iceland Lava Rush',
    description: 'Kombinace výstupu na aktivní sopky, superjeep expedice, lávových jeskyní a arktického potápění.',
    activities: ['Superjeep', 'Lávové jeskyně', 'Arktické potápění', 'Sopky'],
    priceLevel: '€€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://picsum.photos/seed/volcano/800/600'
  },
  {
    id: 'greenland-survival',
    title: 'Greenland Ice Survival Challenge',
    description: '5denní kurz přežití na ledové plošině, stavba iglú, navigation training, závěrečný „escape mission“.',
    activities: ['Survival kurz', 'Stavba iglú', 'Navigace', 'Escape mission'],
    priceLevel: '€€€',
    difficulty: 'Extrémní',
    imageUrl: 'https://picsum.photos/seed/iceberg/800/600'
  },
  {
    id: 'morocco-desert',
    title: 'Moroccan Desert Rally Week',
    description: 'Jízda na dunách v buggy, sandboarding, pouštní noc v Berber campu, off-road orientační závod.',
    activities: ['Buggy', 'Sandboarding', 'Berber camp', 'Off-road'],
    priceLevel: '€€',
    difficulty: 'Střední',
    imageUrl: 'https://picsum.photos/seed/desert/800/600'
  },
  {
    id: 'alpine-trio',
    title: 'Alpine Fearless Trio – Skok, Let, Výstup',
    description: 'Kombo: canyoning + via ferrata + paragliding z alpského vrcholu.',
    activities: ['Canyoning', 'Via Ferrata', 'Paragliding'],
    priceLevel: '€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://picsum.photos/seed/alps/800/600'
  },
  {
    id: 'amazonas-jungle',
    title: 'Amazonas Jungle Expedition',
    description: 'Průzkum džungle s lokálními průvodci, řeka Rio Negro, survival techniky + hledání divoké zvěře.',
    activities: ['Jungle trek', 'Rio Negro', 'Survival', 'Divoká zvěř'],
    priceLevel: '€€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://picsum.photos/seed/jungle/800/600'
  },
  {
    id: 'norway-fjord',
    title: 'Norský Fjord Drop – Vodopádová mise',
    description: 'Sjezd vodopádu (guided), sea-kayak, cliff-jumping, zipline přes fjord.',
    activities: ['Sjezd vodopádu', 'Sea-kayak', 'Cliff-jumping', 'Zipline'],
    priceLevel: '€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://picsum.photos/seed/fjord/800/600'
  },
  {
    id: 'japan-circuit',
    title: 'Japan Adrenaline Circuit',
    description: 'Snowboard v Hakubě → parkour v Tokiu → horská kola v Naganu → samurajský survival trénink.',
    activities: ['Snowboard', 'Parkour', 'MTB', 'Samurajský trénink'],
    priceLevel: '€€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://picsum.photos/seed/japan/800/600'
  },
  {
    id: 'bali-water',
    title: 'Bali Extreme Water Combo',
    description: 'Kitesurf, freediving (level 1), rafting Ayung River, sunset cliff dive.',
    activities: ['Kitesurf', 'Freediving', 'Rafting', 'Cliff dive'],
    priceLevel: '€€',
    difficulty: 'Střední',
    imageUrl: 'https://picsum.photos/seed/bali/800/600'
  },
  {
    id: 'peru-heights',
    title: 'Peru Heights & Depths',
    description: 'Machu Picchu trek → zipline přes Sacred Valley → výstup na Rainbow Mountain → oceánský sharksnorkel.',
    activities: ['Trek', 'Zipline', 'Horský výstup', 'Shark snorkel'],
    priceLevel: '€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://picsum.photos/seed/peru/800/600'
  },
  {
    id: 'slovenia-adrenopack',
    title: 'Slovinsko AdrenoPack',
    description: 'Levný evropský balíček: Canyoning + bungee jumping + raft na Soče + horský ultralight let.',
    activities: ['Canyoning', 'Bungee jumping', 'Rafting', 'Ultralight let'],
    priceLevel: '€',
    difficulty: 'Střední',
    imageUrl: 'https://picsum.photos/seed/river/800/600'
  }
];
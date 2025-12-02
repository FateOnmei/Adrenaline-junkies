import { Adventure } from './types';

export const adventures: Adventure[] = [
  {
    id: 'iceland-lava',
    title: 'Vulkanická výprava – Iceland Lava Rush',
    description: 'Kombinace výstupu na aktivní sopky, superjeep expedice, lávových jeskyní a arktického potápění.',
    activities: ['Superjeep', 'Lávové jeskyně', 'Arktické potápění', 'Sopky'],
    priceLevel: '€€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80' // Magma/Volcano
  },
  {
    id: 'greenland-survival',
    title: 'Greenland Ice Survival Challenge',
    description: '5denní kurz přežití na ledové plošině, stavba iglú, navigation training, závěrečný „escape mission“.',
    activities: ['Survival kurz', 'Stavba iglú', 'Navigace', 'Escape mission'],
    priceLevel: '€€€',
    difficulty: 'Extrémní',
    imageUrl: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=800&q=80' // Ice/Arctic Fixed
  },
  {
    id: 'morocco-desert',
    title: 'Moroccan Desert Rally Week',
    description: 'Jízda na dunách v buggy, sandboarding, pouštní noc v Berber campu, off-road orientační závod.',
    activities: ['Buggy', 'Sandboarding', 'Berber camp', 'Off-road'],
    priceLevel: '€€',
    difficulty: 'Střední',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80' // Desert Dunes
  },
  {
    id: 'alpine-trio',
    title: 'Alpine Fearless Trio – Skok, Let, Výstup',
    description: 'Kombo: canyoning + via ferrata + paragliding z alpského vrcholu.',
    activities: ['Canyoning', 'Via Ferrata', 'Paragliding'],
    priceLevel: '€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80' // High Alps
  },
  {
    id: 'amazonas-jungle',
    title: 'Amazonas Jungle Expedition',
    description: 'Průzkum džungle s lokálními průvodci, řeka Rio Negro, survival techniky + hledání divoké zvěře.',
    activities: ['Jungle trek', 'Rio Negro', 'Survival', 'Divoká zvěř'],
    priceLevel: '€€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://images.unsplash.com/photo-1546633634-1c44754d922a?auto=format&fit=crop&w=800&q=80' // Jungle River/Green
  },
  {
    id: 'norway-fjord',
    title: 'Norský Fjord Drop – Vodopádová mise',
    description: 'Sjezd vodopádu (guided), sea-kayak, cliff-jumping, zipline přes fjord.',
    activities: ['Sjezd vodopádu', 'Sea-kayak', 'Cliff-jumping', 'Zipline'],
    priceLevel: '€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80' // Norway Fjord
  },
  {
    id: 'japan-circuit',
    title: 'Japan Adrenaline Circuit',
    description: 'Snowboard v Hakubě → parkour v Tokiu → horská kola v Naganu → samurajský survival trénink.',
    activities: ['Snowboard', 'Parkour', 'MTB', 'Samurajský trénink'],
    priceLevel: '€€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80' // Mt Fuji/Japan
  },
  {
    id: 'bali-water',
    title: 'Bali Extreme Water Combo',
    description: 'Kitesurf, freediving (level 1), rafting Ayung River, sunset cliff dive.',
    activities: ['Kitesurf', 'Freediving', 'Rafting', 'Cliff dive'],
    priceLevel: '€€',
    difficulty: 'Střední',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80' // Bali Temple/Water
  },
  {
    id: 'peru-heights',
    title: 'Peru Heights & Depths',
    description: 'Machu Picchu trek → zipline přes Sacred Valley → výstup na Rainbow Mountain → oceánský sharksnorkel.',
    activities: ['Trek', 'Zipline', 'Horský výstup', 'Shark snorkel'],
    priceLevel: '€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80' // Peru/Llama
  },
  {
    id: 'slovenia-adrenopack',
    title: 'Slovinsko AdrenoPack',
    description: 'Levný evropský balíček: Canyoning + bungee jumping + raft na Soče + horský ultralight let.',
    activities: ['Canyoning', 'Bungee jumping', 'Rafting', 'Ultralight let'],
    priceLevel: '€',
    difficulty: 'Střední',
    imageUrl: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=800&q=80' // Rafting/River Fixed
  }
];
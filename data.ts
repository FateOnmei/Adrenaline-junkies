import { Adventure } from './types';

export const adventures: Adventure[] = [
  {
    id: 'iceland-lava',
    title: 'Vulkanická výprava – Iceland Lava Rush',
    description: 'Kombinace výstupu na aktivní sopky, superjeep expedice, lávových jeskyní a arktického potápění.',
    longDescription: 'Island není pro slabé povahy. Tato expedice vás zavede do srdce ohně a ledu. Budete se plazit v čerstvě utuhlých lávových polích, potápět se v tektonické puklině Silfra s viditelností 100 metrů a zdolávat ledovce na speciálně upravených Superjeepech.',
    activities: ['Superjeep', 'Lávové jeskyně', 'Arktické potápění', 'Sopky'],
    priceLevel: '€€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80',
    itinerary: [
      { day: 1, title: 'Přílet a Superjeep transfer', description: 'Vyzvednutí na letišti v Keflavíku monstrozními trucky. Divoká jízda přes lávová pole do basecampu v horách.' },
      { day: 2, title: 'Into the Volcano', description: 'Sestup do spícího magmatického krbu sopky Thrihnukagigur. 120 metrů hluboko ve výtahu.' },
      { day: 3, title: 'Led a Oheň', description: 'Výstup na ledovec Sólheimajökull s mačkami a cepíny. Odpoledne relax v tajných horkých pramenech.' },
      { day: 4, title: 'Silfra Diving', description: 'Potápění v suchém obleku mezi kontinenty (Severní Amerika a Eurasie). Teplota vody 2°C.' },
      { day: 5, title: 'Odlet', description: 'Návrat do civilizace a odlet.' }
    ],
    included: ['Zapůjčení suchých obleků', 'Všechny transfery Superjeepem', 'Vstupy do národních parků', 'Ubytování v horských srubech', 'Plná penze'],
    requirements: ['Dobrá fyzická kondice', 'Zkušenost s chladem', 'Potápěčská licence (OWD) výhodou, ne nutností']
  },
  {
    id: 'greenland-survival',
    title: 'Greenland Ice Survival Challenge',
    description: '5denní kurz přežití na ledové plošině, stavba iglú, navigation training, závěrečný „escape mission“.',
    longDescription: 'Zapomeňte na hotel. Tady spíte v tom, co si postavíte. Grónsko je neúprosné a my vás naučíme, jak v něm nejen přežít, ale prosperovat. Čeká vás absolutní izolace, ticho a polární záře.',
    activities: ['Survival kurz', 'Stavba iglú', 'Navigace', 'Escape mission'],
    priceLevel: '€€€',
    difficulty: 'Extrémní',
    imageUrl: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=800&q=80',
    itinerary: [
      { day: 1, title: 'Drop-off', description: 'Vrtulník vás vysadí na ledovci. Instruktáž a stavba základního tábora.' },
      { day: 2, title: 'Stavba Iglú', description: 'Celodenní workshop řezání sněhu. Pokud to nepostavíte, mrznete ve stanu.' },
      { day: 3, title: 'Lov a Voda', description: 'Jak získat vodu z ledu a základy arktického rybolovu pod ledem.' },
      { day: 4, title: 'Escape Mission', description: 'Simulace krizové situace. Máte 12 hodin na to se dostat na extraction point pomocí mapy a kompasu.' },
      { day: 5, title: 'Oslava přežití', description: 'Návrat do Nuuku, sauna a tradiční inuitská večeře.' }
    ],
    included: ['Vrtulníkový transfer', 'Polární spacáky (-40°C)', 'Saturní telefon pro nouzi', 'Instruktoři bývalých speciálních jednotek'],
    requirements: ['Psychická odolnost', 'Žádné kardiovaskulární problémy', 'Předchozí zkušenost s kempováním']
  },
  {
    id: 'morocco-desert',
    title: 'Moroccan Desert Rally Week',
    description: 'Jízda na dunách v buggy, sandboarding, pouštní noc v Berber campu, off-road orientační závod.',
    longDescription: 'Rychlost, prach a nekonečné duny Sahary. Usednete za volant výkonných buggy a motorek, vyzkoušíte si sjíždění dun na prkně a strávíte noci pod nejjasnější hvězdnou oblohou na světě.',
    activities: ['Buggy', 'Sandboarding', 'Berber camp', 'Off-road'],
    priceLevel: '€€',
    difficulty: 'Střední',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    itinerary: [
      { day: 1, title: 'Marrakech Express', description: 'Přesun z Marrakeche přes pohoří Atlas do pouště Merzouga.' },
      { day: 2, title: 'Buggy Training', description: 'Seznámení se stroji a technika jízdy v hlubokém písku.' },
      { day: 3, title: 'Dune Bashing', description: 'Celodenní expedice do vysokých dun Erg Chebbi. Sandboarding při západu slunce.' },
      { day: 4, title: 'Dakar Style', description: 'Amatérský orientační závod podle GPS bodů.' },
      { day: 5, title: 'Návrat', description: 'Ranní jízda na velbloudech a transfer zpět.' }
    ],
    included: ['Pronájem Buggy/Moto', 'Palivo', 'Ubytování v luxusních stanech', 'Tradiční strava', 'Mechanik'],
    requirements: ['Řidičský průkaz sk. B', 'Ochranné brýle', 'Tolerance horka']
  },
  {
    id: 'alpine-trio',
    title: 'Alpine Fearless Trio – Skok, Let, Výstup',
    description: 'Kombo: canyoning + via ferrata + paragliding z alpského vrcholu.',
    longDescription: 'Tři živly během jednoho víkendu. Voda v dravém kaňonu, skála na vertikální stěně a vzduch při letu z třítisícovky. Rakouské Alpy v té nejčistší, nejadrenalinovější podobě.',
    activities: ['Canyoning', 'Via Ferrata', 'Paragliding'],
    priceLevel: '€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    itinerary: [
      { day: 1, title: 'Canyoning Extreme', description: 'Slaňování vodopádů a skoky do tůní (až 12 metrů) v kaňonu Auerklamm.' },
      { day: 2, title: 'Sky Walk', description: 'Via Ferrata obtížnosti D/E. Kolmé stěny, ocelová lana.' },
      { day: 3, title: 'Paragliding', description: 'Výstup lanovkou a tandemový let dolů do údolí s akrobatickými prvky.' }
    ],
    included: ['Veškeré lezecké vybavení', 'Neopreny', 'Lístky na lanovky', 'Licencovaní piloti'],
    requirements: ['Žádný strach z výšek', 'Schopnost uplavat 200m', 'Síla v pažích']
  },
  {
    id: 'amazonas-jungle',
    title: 'Amazonas Jungle Expedition',
    description: 'Průzkum džungle s lokálními průvodci, řeka Rio Negro, survival techniky + hledání divoké zvěře.',
    longDescription: 'Vstupte do plic světa. Žádné turistické chodníčky, ale mačety a prosekávání cesty. Budete lovit piraně, hledat kajmany v noci a učit se, které rostliny vás vyléčí a které zabijí.',
    activities: ['Jungle trek', 'Rio Negro', 'Survival', 'Divoká zvěř'],
    priceLevel: '€€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://images.unsplash.com/photo-1546633634-1c44754d922a?auto=format&fit=crop&w=800&q=80',
    itinerary: [
      { day: 1, title: 'Manaus', description: 'Přílet a plavba po Rio Negro do plovoucího basecampu.' },
      { day: 2, title: 'Deep Jungle', description: 'Vstup do pralesa. Stavba přístřešku z palmových listů.' },
      { day: 3, title: 'Lov a sběr', description: 'Lov piraní na večeři, hledání larev (protein) a pitné vody.' },
      { day: 4, title: 'Noční hlídka', description: 'Pozorování kajmanů a jaguárů (s trochou štěstí) v noci.' },
      { day: 5, title: 'Návrat', description: 'Návštěva domorodé komunity a návrat do civilizace.' }
    ],
    included: ['Očkovací konzultace', 'Lokální průvodci', 'Hamaky a moskytiéry', 'Satelitní SOS'],
    requirements: ['Očkování (Žlutá zimnice atd.)', 'Vysoká tolerance hmyzu a vlhka', 'Psychická stabilita']
  },
  {
    id: 'norway-fjord',
    title: 'Norský Fjord Drop – Vodopádová mise',
    description: 'Sjezd vodopádu (guided), sea-kayak, cliff-jumping, zipline přes fjord.',
    longDescription: 'Norsko je hřiště pro obry. My si ho zmenšíme na lidskou velikost. Slaníte vodopád přímo do kajaku, skočíte ze skály do ledového fjordu a proletíte se na nejdelší zipline ve Skandinávii.',
    activities: ['Sjezd vodopádu', 'Sea-kayak', 'Cliff-jumping', 'Zipline'],
    priceLevel: '€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    itinerary: [
      { day: 1, title: 'Bergen', description: 'Přílet a přesun do oblasti Hardangerfjord.' },
      { day: 2, title: 'Waterfall Rappel', description: 'Slaňování 40m vodopádu. Mokré a intenzivní.' },
      { day: 3, title: 'Sea Kayak', description: 'Expedice po fjordu, pozorování tuleňů.' },
      { day: 4, title: 'Adrenalin Park', description: 'Cliff-jumping (10m) a Zipline přes údolí.' }
    ],
    included: ['Ubytování v rybářských chatkách', 'Vybavení na vodu', 'Transfery lodí'],
    requirements: ['Schopnost plavat', 'Otužilost (voda je studená i v létě)']
  },
  {
    id: 'japan-circuit',
    title: 'Japan Adrenaline Circuit',
    description: 'Snowboard v Hakubě → parkour v Tokiu → horská kola v Naganu → samurajský survival trénink.',
    longDescription: 'Kontrast starého a futuristického Japonska. Z neonového Tokia, kde si zkusíte urban parkour, vás vezmeme do prašanu v Japonských Alpách a nakonec do historického dojo na trénink s katanou.',
    activities: ['Snowboard', 'Parkour', 'MTB', 'Samurajský trénink'],
    priceLevel: '€€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    itinerary: [
      { day: 1, title: 'Tokyo Drift', description: 'Urban exploration a trénink základů parkouru v Shinjuku.' },
      { day: 2, title: 'Shinkansen', description: 'Přesun rychlovlakem do Nagana.' },
      { day: 3, title: 'Japow', description: 'Freeride snowboarding v Hakubě (v zimě) nebo MTB (v létě).' },
      { day: 4, title: 'Samurai Spirit', description: 'Meditace pod vodopádem a trénink s mečem (Kenjutsu).' },
      { day: 5, title: 'Onsen & Sushi', description: 'Zasloužený relax v horkých pramenech.' }
    ],
    included: ['JR Pass (vlaky)', 'Skipass/Bike rental', 'Soukromý Sensei na bojová umění', 'Ubytování v Ryokanu'],
    requirements: ['Respekt k tradicím', 'Dobrá fyzička', 'Otevřená mysl']
  },
  {
    id: 'bali-water',
    title: 'Bali Extreme Water Combo',
    description: 'Kitesurf, freediving (level 1), rafting Ayung River, sunset cliff dive.',
    longDescription: 'Bali není jen o józe. Ukážeme vám jeho divokou stránku. Naučíte se zadržet dech na 3 minuty, zkrotit vítr na kitu a sjedete divokou řeku Ayung.',
    activities: ['Kitesurf', 'Freediving', 'Rafting', 'Cliff dive'],
    priceLevel: '€€',
    difficulty: 'Střední',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    itinerary: [
      { day: 1, title: 'Canggu Kitesurf', description: 'Intenzivní kurz ovládání draka na pláži a ve vodě.' },
      { day: 2, title: 'Amed Freedive', description: 'Teorie a praxe freedivingu. Cíl: 20 metrů hloubka.' },
      { day: 3, title: 'Ayung Rafting', description: 'Sjezd divoké řeky v džungli.' },
      { day: 4, title: 'Nusa Penida', description: 'Výlet lodí a skoky z útesů (Mahana Point).' }
    ],
    included: ['Vybavení na potápění', 'Instruktoři', 'Rychločluny', 'Ubytování ve vile s bazénem'],
    requirements: ['Plavecké schopnosti', 'Láska k vodě']
  },
  {
    id: 'peru-heights',
    title: 'Peru Heights & Depths',
    description: 'Machu Picchu trek → zipline přes Sacred Valley → výstup na Rainbow Mountain → oceánský sharksnorkel.',
    longDescription: 'Od 5000 metrů nad mořem až na úroveň hladiny. Peru nabízí vše. Fyzicky náročný trek po stopách Inků vystřídá adrenalin na zipline a setkání se žraloky v Pacifiku.',
    activities: ['Trek', 'Zipline', 'Horský výstup', 'Shark snorkel'],
    priceLevel: '€€',
    difficulty: 'Vysoká',
    imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80',
    itinerary: [
      { day: 1, title: 'Cusco Aklimatizace', description: 'Prohlídka města a coca tea na zvládnutí výšky.' },
      { day: 2, title: 'Sacred Valley Zipline', description: 'Via ferrata nahoru, zipline dolů.' },
      { day: 3, title: 'Salkantay Trek', description: 'Zkrácená verze treku k Machu Picchu.' },
      { day: 4, title: 'Rainbow Mountain', description: 'Výstup do 5200 m.n.m.' },
      { day: 5, title: 'Lima Coast', description: 'Přelet k oceánu a šnorchlování.' }
    ],
    included: ['Vnitrostátní přelety', 'Permity na Machu Picchu', 'Nosiči na treku'],
    requirements: ['Výborná kondice', 'Odolnost vůči výškové nemoci']
  },
  {
    id: 'slovenia-adrenopack',
    title: 'Slovinsko AdrenoPack',
    description: 'Levný evropský balíček: Canyoning + bungee jumping + raft na Soče + horský ultralight let.',
    longDescription: 'Nejlepší poměr cena/výkon v Evropě. Údolí řeky Soča je mekkou adrenalinových sportů. Tyrkysová voda, bílé vápencové skály a mosty, ze kterých se skáče dolů.',
    activities: ['Canyoning', 'Bungee jumping', 'Rafting', 'Ultralight let'],
    priceLevel: '€',
    difficulty: 'Střední',
    imageUrl: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=800&q=80',
    itinerary: [
      { day: 1, title: 'Bovec', description: 'Příjezd a rafting na řece Soča.' },
      { day: 2, title: 'Sušec Canyoning', description: 'Přírodní tobogány a skoky do vody.' },
      { day: 3, title: 'Solkan Bridge Bungee', description: 'Skok z 55 metrů nad řekou.' },
      { day: 4, title: 'Sky View', description: 'Let ultralightem nad Julskými Alpami.' }
    ],
    included: ['Veškeré vybavení', 'GoPro záznamy', 'Kempovné'],
    requirements: ['Vlastní doprava do Slovinska', 'Odvaha']
  }
];
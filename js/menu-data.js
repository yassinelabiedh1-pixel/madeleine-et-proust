/* ============================================================
   MENU DE MADELEINE ET PROUST
   ------------------------------------------------------------
   C'est ICI que vous modifiez votre menu.
   - Chaque article a : nom fr / en, description fr / en
     (mettre "" si pas de description) et un prix (texte libre).
   - PHOTOS : chaque article trouve automatiquement sa photo dans
     images/plats/ si le fichier porte le bon nom (liste complète
     dans images/LISEZ-MOI.txt). Pour forcer un autre fichier,
     ajouter à l'article :  photo: "images/plats/monfichier.jpg"
   - "layout" : "plates" = grandes cartes, "drinks" = petites cartes.
   - "band" : "cream" (fond clair) ou "olive" (fond vert olive).
   ============================================================ */

const MENU = [
  {
    id: "entree",
    band: "cream",
    layout: "plates",
    name: { fr: "Entrée", en: "Starters" },
    items: [
      {
        name: { fr: "Omelette palace aux œufs bio", en: "Palace omelette with organic eggs" },
        desc: {
          fr: "Salade roquette basilic carotte et noisette, vinaigrette à l'huile de noisette et crème de fromage blanc citronnée aux herbes.",
          en: "Rocket, basil, carrot and hazelnut salad, hazelnut oil vinaigrette, lemony herbed fromage blanc cream.",
        },
        price: "21",
      },
      {
        name: { fr: "Tatin Tomate", en: "Tomato Tatin" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/tatin-tomate-1.webp",
          "images/plats/tatin-tomate-2.webp",
        ],
        desc: {
          fr: "Tarte fine, crème de stracciatella, basilic frais & sauce vierge (tomates, olives, pignons).",
          en: "Thin tart, stracciatella cream, fresh basil & sauce vierge (tomatoes, olives, pine nuts).",
        },
        price: "25",
      },
      {
        name: { fr: "Salade patate douce & poulet", en: "Sweet potato & chicken salad" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/salade-patate-douce-poulet-1.webp",
          "images/plats/salade-patate-douce-poulet-2.webp",
        ],
        desc: {
          fr: "Salade iceberg, poitrine de poulet, patate douce rôtie au four, pois chiches, œuf mollet, fruits de saison, amandes blanches et noix de cajou grillées.",
          en: "Iceberg lettuce, chicken breast, oven-roasted sweet potato, chickpeas, soft-boiled egg, seasonal fruit, blanched almonds and roasted cashews.",
        },
        price: "32",
      },
      {
        name: { fr: "Feuilleté au brie et champignons (fruits de saison)", en: "Brie & mushroom puff pastry (seasonal fruit)" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/feuillete-au-brie-et-champignons-1.webp",
          "images/plats/feuillete-au-brie-et-champignons-2.webp",
          "images/plats/feuillete-au-brie-et-champignons-3.webp",
        ],
        desc: {
          fr: "Base de pâte feuilletée, compotée d'oignons et de raisins secs noirs, champignons, brie et caramel au miso.",
          en: "Puff pastry base, onion and black raisin compote, mushrooms, brie and miso caramel.",
        },
        price: "29",
      },
      {
        name: { fr: "L'aubergine fumée", en: "Smoked aubergine" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/l-aubergine-fumee-1.webp",
          "images/plats/l-aubergine-fumee-2.webp",
          "images/plats/l-aubergine-fumee-3.webp",
        ],
        desc: {
          fr: "Aubergine fumée, mousseline de petits pois et de pois chiches parfumée au cumin, sauce au labné et au tahini, sauce vierge aux deux poivrons, condiment de pois chiches au romarin et à l'ail confit.",
          en: "Smoked aubergine, cumin-scented pea and chickpea mousseline, labneh and tahini sauce, two-pepper sauce vierge, rosemary chickpea condiment and garlic confit.",
        },
        price: "30",
      },
    ],
  },
  {
    id: "suite",
    band: "cream",
    layout: "plates",
    name: { fr: "Suite", en: "Mains" },
    items: [
      {
        isNew: true,
        name: { fr: "Raviolis au saumon", en: "Salmon ravioli" },
        desc: {
          fr: "Pâtes fraîches faites maison, farcis au saumon, à l'aneth et au fromage blanc, servis avec une sauce rosée à la tomate confite, saumon en deux textures et micropousses.",
          en: "Fresh homemade pasta filled with salmon, dill and fromage blanc, served with a rosé sauce of confit tomato, salmon two ways and microgreens.",
        },
        price: "42",
      },
      {
        name: { fr: "Poulet basse température", en: "Slow-cooked chicken" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/poulet-basse-temperature-1.webp",
          "images/plats/poulet-basse-temperature-2.webp",
        ],
        desc: {
          fr: "Champignon à la crème, œufs bio brouillés au persil, sauce césar maison aux anchois, roquette et pain toasté à l'huile d'olive.",
          en: "Creamed mushrooms, organic scrambled eggs with parsley, house Caesar sauce with anchovies, rocket and olive-oil toast.",
        },
        price: "28",
      },
      {
        name: { fr: "Guacamole et crevettes confites au beurre saté", en: "Guacamole & shrimp confit in satay butter" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/guacamole-et-crevettes-confites-au-beurre-sate-1.webp",
          "images/plats/guacamole-et-crevettes-confites-au-beurre-sate-2.webp",
        ],
        desc: {
          fr: "Gaufre à l'avoine bio, œuf au plat bio, salade d'herbes et pickles d'oignon.",
          en: "Organic oat waffle, organic fried egg, herb salad and pickled onions.",
        },
        price: "33",
      },
      {
        name: { fr: "Saumon gravlax guacamole", en: "Salmon gravlax & guacamole" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/saumon-gravlax-guacamole-1.webp",
          "images/plats/saumon-gravlax-guacamole-2.webp",
          "images/plats/saumon-gravlax-guacamole-3.webp",
        ],
        desc: {
          fr: "Œufs brouillés bio, salade de roquette et aneth, citron confit.",
          en: "Organic scrambled eggs, rocket and dill salad, lemon confit.",
        },
        price: "34",
      },
      {
        name: { fr: "Le poulpe", en: "The octopus" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/le-poulpe-1.webp",
          "images/plats/le-poulpe-2.webp",
        ],
        desc: {
          fr: "Poulpe en deux cuissons, mousseline de patate douce, courgettes et poivron rouge grillés, sauce vierge à la betterave, olives et aneth, crumble d'amandes.",
          en: "Octopus cooked two ways, sweet potato mousseline, grilled courgettes and red pepper, beetroot sauce vierge, olives and dill, almond crumble.",
        },
        price: "49",
      },
      {
        name: { fr: "Vitello tonnato", en: "Vitello tonnato" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/vitello-tonnato-1.webp",
          "images/plats/vitello-tonnato-2.webp",
          "images/plats/vitello-tonnato-3.webp",
        ],
        desc: {
          fr: "Noix de bœuf cuite à basse température, sauce vitello tonnato en espuma aérienne, câprons, pickles d'oignons et crumble de pignons.",
          en: "Slow-cooked beef, airy vitello tonnato espuma, caper berries, pickled onions and pine nut crumble.",
        },
        price: "38",
      },
      {
        name: { fr: "Salade Bowl Asiatique", en: "Asian salad bowl" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/salade-bowl-asiatique-1.webp",
          "images/plats/salade-bowl-asiatique-2.webp",
        ],
        desc: {
          fr: "Vermicelles de riz et légumes croquants, pickles de chou et de carottes, rouleau de printemps aux crevettes, champignons, carottes et menthe, œuf façon ramen, crevettes poêlées au citron et cacahuètes grillées.",
          en: "Rice vermicelli and crunchy vegetables, pickled cabbage and carrot, shrimp spring roll, mushrooms, carrot and mint, ramen-style egg, lemon-seared shrimp and roasted peanuts.",
        },
        price: "39",
      },
    ],
  },
  {
    id: "sandwichs",
    band: "cream",
    layout: "plates",
    name: { fr: "Sandwichs", en: "Sandwiches" },
    items: [
      {
        name: { fr: "Sandwich jambon-beurre", en: "Ham & butter sandwich" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/sandwich-jambon-beurre-1.webp",
          "images/plats/sandwich-jambon-beurre-2.webp",
        ],
        desc: { fr: "Comté & cornichon.", en: "Comté & gherkin." },
        price: "21",
      },
      {
        name: { fr: "Croque-monsieur truffé", en: "Truffle croque-monsieur" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/croque-monsieur-truffe-1.webp",
          "images/plats/croque-monsieur-truffe-2.webp",
        ],
        desc: {
          fr: "Comté, filet de poulet fumé, roquette, copeaux de champignons.",
          en: "Comté, smoked chicken fillet, rocket, mushroom shavings.",
        },
        price: "24",
      },
      {
        name: { fr: "Focaccia", en: "Focaccia" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/focaccia-1.webp",
          "images/plats/focaccia-2.webp",
          "images/plats/focaccia-3.webp",
        ],
        desc: {
          fr: "Jambon traditionnel, burrata, pesto, tomate & roquette.",
          en: "Traditional ham, burrata, pesto, tomato & rocket.",
        },
        price: "26",
      },
    ],
  },
  {
    id: "dessert",
    band: "olive",
    layout: "plates",
    name: { fr: "Dessert", en: "Desserts" },
    items: [
      {
        isNew: true,
        name: { fr: "Mousse au chocolat noir Caraïbe 66%", en: "Caraïbe 66% dark chocolate mousse" },
        photo: "images/plats/mousse-au-chocolat-noir-caraibe.webp",
        desc: {
          fr: "Praliné noisettes et amandes caramélisées, croustillant praliné et fleur de sel.",
          en: "Hazelnut praline and caramelised almonds, praline crunch and fleur de sel.",
        },
        price: "26",
      },
      {
        isNew: true,
        name: { fr: "Big lava cookie", en: "Big lava cookie" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/big-lava-cookie-1.webp",
          "images/plats/big-lava-cookie-2.webp",
        ],
        desc: {
          fr: "Un mi-cuit de pâte à cookie et de fondant au chocolat agrémenté d'éclats de noisettes et de chocolat noir, accompagné de sa boule de glace à la vanille Bourbon.",
          en: "A half-baked blend of cookie dough and chocolate fondant with hazelnut pieces and dark chocolate, served with a scoop of Bourbon vanilla ice cream.",
        },
        price: "38",
      },
      {
        name: { fr: "Bol de granola maison", en: "House granola bowl" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/bol-de-granola-maison-1.webp",
          "images/plats/bol-de-granola-maison-2.webp",
        ],
        desc: {
          fr: "Yaourt brebis, miel, fruits et graines de chia.",
          en: "Sheep's milk yogurt, honey, fruit and chia seeds.",
        },
        price: "22",
      },
      {
        name: { fr: "Pain perdu", en: "French toast" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/pain-perdu-1.webp",
          "images/plats/pain-perdu-2.webp",
        ],
        desc: {
          fr: "Caramel au beurre salé et chantilly à la vanille de Madagascar.",
          en: "Salted butter caramel and Madagascar vanilla whipped cream.",
        },
        price: "24",
      },
      {
        name: { fr: "Pain perdu pistache framboise", en: "Pistachio & raspberry french toast" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/pain-perdu-pistache-framboise-1.webp",
          "images/plats/pain-perdu-pistache-framboise-2.webp",
        ],
        desc: {
          fr: "Pistache crémeuse, framboise en coulis, glace à la pistache, éclats de pistache et muesli.",
          en: "Creamy pistachio, raspberry coulis, pistachio ice cream, pistachio shards and muesli.",
        },
        price: "28",
      },
      {
        name: { fr: "Tiramisu", en: "Tiramisu" },
        /* plusieurs photos = diaporama automatique */
        photos: [
          "images/plats/tiramisu-1.webp",
          "images/plats/tiramisu-2.webp",
          "images/plats/tiramisu-3.webp",
          "images/plats/tiramisu-4.webp",
        ],
        desc: {
          fr: "Mousse onctueuse à la vanille, crèmeux café, biscuit et extrait de café maison, mousse café ultra légère.",
          en: "Silky vanilla mousse, coffee crémeux, biscuit with house coffee extract, ultra-light coffee mousse.",
        },
        price: "24",
      },
      {
        name: { fr: "Madeleine Givrée", en: "Frosted Madeleine" },
        desc: {
          fr: "Coupe de glace du jour, accompagnée de sa légère chantilly et de sa sauce gourmande.",
          en: "Ice cream cup of the day, served with light whipped cream and its gourmet sauce.",
        },
        price: "24",
      },
    ],
  },
  {
    id: "patisserie",
    band: "cream",
    layout: "gallery",
    name: { fr: "Pâtisserie", en: "Patisserie" },
    note: {
      fr: "Faites glisser pour découvrir nos douceurs du moment,<br>à choisir en vitrine.",
      en: "Swipe through our sweet creations of the moment,<br>pick yours at the counter.",
    },
    /* Une douceur par bloc : photo obligatoire, nom et prix
       optionnels (affichés en bas de la photo si présents).
       Exemple avec nom :
       { name: { fr: "Paris-Brest", en: "Paris-Brest" }, price: "12",
         photo: "images/patisserie/douceur-01.webp" },  */
    items: [
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-01.webp" },
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-02.webp" },
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-03.webp" },
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-04.webp" },
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-05.webp" },
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-06.webp" },
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-07.webp" },
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-08.webp" },
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-09.webp" },
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-10.webp" },
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-11.webp" },
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-12.webp" },
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-13.webp" },
      { name: { fr: "", en: "" }, photo: "images/patisserie/douceur-14.webp" },
    ],
  },
  {
    id: "cocktails",
    band: "cream",
    layout: "drinks",
    simple: true,
    name: { fr: "Cocktails", en: "Cocktails" },
    items: [
      { name: { fr: "Orange Juice", en: "Orange juice" }, desc: { fr: "", en: "" }, price: "8" },
      { name: { fr: "Lemonade", en: "Lemonade" }, desc: { fr: "", en: "" }, price: "10" },
      { name: { fr: "Frutti Rossi", en: "Frutti Rossi" }, photos: ["images/plats/frutti-rossi-1.webp", "images/plats/frutti-rossi-2.webp"], desc: { fr: "Framboise, fraise, menthe et orange.", en: "Raspberry, strawberry, mint and orange." }, price: "16" },
      { name: { fr: "Vert Glow", en: "Vert Glow" }, desc: { fr: "Basilic, pomme, concombre, agrumes, gingembre et miel.", en: "Basil, apple, cucumber, citrus, ginger and honey." }, price: "16" },
      { name: { fr: "Golden nut", en: "Golden nut" }, desc: { fr: "Banane, noix, datte et lait.", en: "Banana, walnut, date and milk." }, price: "16" },
      { name: { fr: "Smoothie glacé gourmand", en: "Iced gourmet smoothie" }, desc: { fr: "Préparé avec la glace du jour de votre choix.", en: "Made with the ice cream of the day, your choice." }, price: "18" },
      { name: { fr: "Jaune soleil", en: "Jaune soleil" }, desc: { fr: "Ananas, mangue et orange.", en: "Pineapple, mango and orange." }, price: "21" },
    ],
  },
  {
    id: "cafe",
    band: "cream",
    layout: "drinks",
    name: { fr: "Café", en: "Coffee" },
    /* simple: true = liste nom + prix, sans photos */
    simple: true,
    note: {
      fr: "Tous nos cafés sont préparés à partir de capsules Nespresso.",
      en: "All our coffees are brewed from Nespresso capsules.",
    },
    items: [
      { name: { fr: "Espresso", en: "Espresso" }, desc: { fr: "", en: "" }, price: "8" },
      { name: { fr: "Lungo", en: "Lungo" }, desc: { fr: "", en: "" }, price: "8" },
      { name: { fr: "Americano", en: "Americano" }, desc: { fr: "", en: "" }, price: "8" },
      { name: { fr: "Café crème", en: "Café crème" }, desc: { fr: "", en: "" }, price: "8" },
      { name: { fr: "Cappucino", en: "Cappuccino" }, desc: { fr: "", en: "" }, price: "8" },
      { name: { fr: "Espresso macchiato", en: "Espresso macchiato" }, desc: { fr: "", en: "" }, price: "8" },
      { name: { fr: "Double espresso", en: "Double espresso" }, desc: { fr: "", en: "" }, price: "12" },
    ],
  },
  {
    id: "signature-froide",
    band: "cream",
    layout: "drinks",
    simple: true,
    name: { fr: "Signature", en: "Signature" },
    accent: { fr: "Froide", en: "Cold" },
    items: [
      { name: { fr: "Iced Pistachio latté", en: "Iced pistachio latte" }, desc: { fr: "", en: "" }, price: "16" },
      { name: { fr: "Iced americano", en: "Iced americano" }, desc: { fr: "", en: "" }, price: "12" },
      { name: { fr: "Iced caramel", en: "Iced caramel" }, desc: { fr: "", en: "" }, price: "14" },
      { name: { fr: "Iced latté noisette", en: "Iced hazelnut latte" }, photo: "images/plats/iced-latte-noisette.webp", desc: { fr: "", en: "" }, price: "13" },
      { name: { fr: "Iced tea", en: "Iced tea" }, desc: { fr: "", en: "" }, price: "13" },
      { name: { fr: "Iced tea signature", en: "Signature iced tea" }, photos: ["images/plats/iced-tea-signature-1.webp", "images/plats/iced-tea-signature-2.webp"], desc: { fr: "Pêche et abricot, vanille, fraise.", en: "Peach and apricot, vanilla, strawberry." }, price: "16" },
      { name: { fr: "Chocolat glacé", en: "Iced chocolate" }, desc: { fr: "", en: "" }, price: "18" },
      { name: { fr: "Affogato", en: "Affogato" }, desc: { fr: "", en: "" }, price: "18" },
      { name: { fr: "Kombucha", en: "Kombucha" }, desc: { fr: "Infusion fermentée, fine et naturellement pétillante.", en: "Fermented infusion, delicate and naturally sparkling." }, price: "16" },
      { name: { fr: "Berry Blush", en: "Berry Blush" }, desc: { fr: "Banane, cassis, framboise, betterave en poudre et lait d'amande maison.", en: "Banana, blackcurrant, raspberry, beetroot powder and house almond milk." }, price: "18" },
    ],
  },
  {
    id: "signature-chaude",
    band: "cream",
    layout: "drinks",
    simple: true,
    name: { fr: "Signature", en: "Signature" },
    accent: { fr: "Chaude", en: "Hot" },
    items: [
      { isNew: true, name: { fr: "Sélection de thés et tisanes Bio", en: "Organic tea & herbal tea selection" }, desc: { fr: "", en: "" }, price: "12" },
      { name: { fr: "Thé Kyufi", en: "Kyufi tea" }, desc: { fr: "", en: "" }, price: "8,5" },
      { name: { fr: "Caramel latté", en: "Caramel latte" }, desc: { fr: "", en: "" }, price: "12" },
      { name: { fr: "Latté noisette", en: "Hazelnut latte" }, desc: { fr: "", en: "" }, price: "13" },
      { name: { fr: "Espresso Pistache", en: "Pistachio espresso" }, photos: ["images/plats/espresso-pistache-1.webp", "images/plats/espresso-pistache-2.webp"], desc: { fr: "", en: "" }, price: "15" },
      { name: { fr: "Chocolat chaud", en: "Hot chocolate" }, desc: { fr: "", en: "" }, price: "18" },
      { name: { fr: "Chocolat au lait", en: "Milk chocolate" }, desc: { fr: "", en: "" }, price: "12" },
    ],
  },
  {
    id: "supplement",
    band: "cream",
    layout: "drinks",
    simple: true,
    name: { fr: "Supplément", en: "Extras" },
    items: [
      { name: { fr: "Chantilly vanille de Madagascar", en: "Madagascar vanilla whipped cream" }, desc: { fr: "", en: "" }, price: "6" },
      { name: { fr: "Praliné, caramel, framboise", en: "Praline, caramel, raspberry" }, photos: ["images/plats/praline-caramel-framboise-1.webp", "images/plats/praline-caramel-framboise-2.webp"], desc: { fr: "", en: "" }, price: "8" },
    ],
  },
];

/* ============================================================
   AVIS CLIENTS (bandeau défilant en bas de page)
   ⚠ Ce sont des EXEMPLES : remplacez le texte par vos vrais
   avis Google / Instagram. "stars" accepte 4, 4.5 ou 5.
   ============================================================ */
const REVIEWS = {
  title: { fr: "Ce que disent nos clients", en: "What our customers say" },
  note: {
    fr: "Merci pour vos mots doux, ils nous portent chaque jour.",
    en: "Thank you for your kind words, they carry us every day.",
  },
  /* ⚠ Ces avis sont des EXEMPLES rédigés pour la maquette.
     Avant la mise en ligne, remplacez-les par de vrais avis
     de vos clients (mot pour mot). */
  items: [
    {
      stars: 5,
      text: {
        fr: "Le meilleur brunch de la ville, et le cadre est magnifique.",
        en: "The best brunch in town, and the setting is gorgeous.",
      },
      name: "Yasmine B.",
    },
    {
      stars: 5,
      text: {
        fr: "Le poulpe est incroyable et l'équipe est adorable.",
        en: "The octopus is incredible and the team is lovely.",
      },
      name: "Mehdi K.",
    },
    {
      stars: 4.5,
      text: {
        fr: "Pâtisseries fines et café parfait. Ma nouvelle adresse préférée.",
        en: "Fine pastries and perfect coffee. My new favourite spot.",
      },
      name: "Sarra T.",
    },
    {
      stars: 5,
      text: {
        fr: "Un petit coin de Paris. Le pain perdu est à tomber.",
        en: "A little corner of Paris. The french toast is to die for.",
      },
      name: "Amine J.",
    },
    {
      stars: 5,
      text: {
        fr: "Tout est fait avec soin, du dressage au service.",
        en: "Everything is done with care, from plating to service.",
      },
      name: "Leïla M.",
    },
    {
      stars: 4.5,
      text: {
        fr: "L'iced tea signature vaut le détour à lui seul.",
        en: "The signature iced tea alone is worth the trip.",
      },
      name: "Karim S.",
    },
  ],
};

/* Textes de l'interface (hors menu) */
const UI_TEXT = {
  eyebrow: { fr: "Artisan Pâtissière", en: "Artisan Pâtissière" },
  tagline: {
    fr: "Notre cuisine célèbre la finesse des saveurs, la fraîcheur des produits et le plaisir du partage.",
    en: "Our kitchen celebrates delicate flavours, fresh produce and the joy of sharing.",
  },
  cta: { fr: "Découvrir le menu", en: "Discover the menu" },
  coverMenu: { fr: "MENU", en: "MENU" },
  newBadge: { fr: "Nouveau", en: "New" },
  coverFoot: { fr: "Haute pâtisserie française.", en: "Haute pâtisserie française." },
  footerText: {
    fr: "Notre cuisine célèbre la finesse des saveurs, la fraîcheur des produits et le plaisir du partage. Chaque plat est préparé avec passion et exigence.",
    en: "Our kitchen celebrates delicate flavours, fresh produce and the joy of sharing. Every dish is prepared with passion and care.",
  },
  priceNote: { fr: "Prix en dinars (DT)", en: "Prices in Tunisian dinars (DT)" },
  social: { fr: "Rejoignez notre communauté sur Instagram", en: "Join our community on Instagram" },
};

/* Photo du haut de page : déposez votre plus belle photo dans
   images/hero.jpg et elle apparaîtra automatiquement derrière le titre. */
const HERO_IMAGE = "images/hero.jpg";

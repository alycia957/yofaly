const mongoose = require('mongoose');
const Recipe = require('../models/recipes');

// URL de connexion à MongoDB
const mongoURI = 'mongodb+srv://alycia:Mama270682.@cluster0.18x60.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0';

const recipes = [
    // recettes algerienne 
    {
      id: 1,
      title: 'Couscous Algérien',
      preptime: 120,
      ingredients: [
        { name: 'Semoule', quantity: 500 },
        { name: 'Agneau', quantity: 600 },
        { name: 'Pois chiches', quantity: 200 },
        { name: 'Carottes', quantity: 300 },
        { name: 'Courgettes', quantity: 300 },
        { name: 'Navets', quantity: 200 },
        { name: 'Oignons', quantity: 200 },
        { name: 'Tomates', quantity: 300 },
        { name: 'Concentré de tomate', quantity: 50 },
        { name: 'Huile d\'olive', quantity: 50 },
        { name: 'Sel', quantity: 10 },
        { name: 'Poivre', quantity: 5 },
        { name: 'Cumin', quantity: 5 },
        { name: 'Paprika', quantity: 5 }
      ],
      origins: ['Algérie'],
      servings: 6,
      description: 'Le couscous algérien traditionnel est préparé avec de la semoule de blé dur, des légumes de saison et de la viande d\'agneau. La semoule est cuite à la vapeur dans un couscoussier, tandis que les légumes mijotent dans un bouillon épicé avec la viande pour créer un plat savoureux et nourrissant.'
    },
    {
      id: 2,
      title: 'Berkoukes',
      preptime: 90,
      ingredients: [
        { name: 'Berkoukes (pâtes en forme de gros grain)', quantity: 400 },
        { name: 'Poulet', quantity: 500 },
        { name: 'Pois chiches', quantity: 200 },
        { name: 'Oignons', quantity: 200 },
        { name: 'Tomates', quantity: 300 },
        { name: 'Carottes', quantity: 200 },
        { name: 'Céleri', quantity: 100 },
        { name: 'Concentré de tomate', quantity: 50 },
        { name: 'Huile d\'olive', quantity: 30 },
        { name: 'Sel', quantity: 10 },
        { name: 'Poivre', quantity: 5 },
        { name: 'Paprika', quantity: 5 },
        { name: 'Cumin', quantity: 5 }
      ],
      origins: ['Algérie'],
      servings: 4,
      description: 'Le Berkoukes est un plat traditionnel algérien à base de grosses pâtes en forme de grains et d\'un ragoût de légumes et de viande. Les pâtes sont cuites dans le bouillon pour absorber toutes les saveurs des épices et des légumes.'
    },
    {
      id: 3,
      title: 'Lham Lahlou',
      preptime: 60,
      ingredients: [
        { name: 'Viande d\'agneau', quantity: 500 },
        { name: 'Pruneaux secs', quantity: 200 },
        { name: 'Abricots secs', quantity: 200 },
        { name: 'Raisins secs', quantity: 100 },
        { name: 'Sucre', quantity: 100 },
        { name: 'Cannelle', quantity: 10 },
        { name: 'Eau de fleur d\'oranger', quantity: 20 },
        { name: 'Beurre', quantity: 30 },
        { name: 'Sel', quantity: 5 }
      ],
      origins: ['Algérie'],
      servings: 4,
      description: 'L\'ham Lahlou est un plat sucré-salé traditionnel algérien, composé de viande d\'agneau cuite avec des fruits secs et des épices douces. Ce mélange de sucré et de salé est particulièrement apprécié pendant le Ramadan.'
    },
    {
      id: 4,
      title: 'Mtewem',
      preptime: 70,
      ingredients: [
        { name: 'Poulet', quantity: 800 },
        { name: 'Ail', quantity: 50 },
        { name: 'Oignon', quantity: 200 },
        { name: 'Citron confit', quantity: 100 },
        { name: 'Olives vertes', quantity: 100 },
        { name: 'Huile d\'olive', quantity: 30 },
        { name: 'Sel', quantity: 10 },
        { name: 'Poivre', quantity: 5 },
        { name: 'Cumin', quantity: 5 },
        { name: 'Coriandre fraîche', quantity: 20 }
      ],
      origins: ['Algérie'],
      servings: 4,
      description: 'Le Mtewem est un plat algérien à base de poulet mijoté dans une sauce à l\'ail. Le poulet est d\'abord doré puis cuit lentement avec des épices, de l\'ail écrasé et des olives pour créer un plat savoureux et parfumé.'
    },
    {
      id: 5,
      title: 'Tajine Zitoun',
      preptime: 80,
      ingredients: [
        { name: 'Viande d\'agneau', quantity: 600 },
        { name: 'Olives vertes', quantity: 200 },
        { name: 'Citron confit', quantity: 100 },
        { name: 'Oignons', quantity: 200 },
        { name: 'Concentré de tomate', quantity: 30 },
        { name: 'Ail', quantity: 20 },
        { name: 'Huile d\'olive', quantity: 40 },
        { name: 'Sel', quantity: 10 },
        { name: 'Poivre', quantity: 5 },
        { name: 'Cumin', quantity: 5 },
        { name: 'Coriandre fraîche', quantity: 20 }
      ],
      origins: ['Algérie'],
      servings: 4,
      description: 'Le Tajine Zitoun est un plat algérien composé de viande mijotée avec des olives et du citron confit. La cuisson lente permet aux saveurs de se mélanger parfaitement, créant un plat riche et savoureux.'
    },
    {
      id: 6,
      title: 'Rechta',
      preptime: 90,
      ingredients: [
        { name: 'Pâtes Rechta', quantity: 500 },
        { name: 'Poulet', quantity: 600 },
        { name: 'Pois chiches', quantity: 200 },
        { name: 'Navet', quantity: 200 },
        { name: 'Courgette', quantity: 200 },
        { name: 'Carotte', quantity: 200 },
        { name: 'Oignon', quantity: 200 },
        { name: 'Cannelle', quantity: 5 },
        { name: 'Huile d\'olive', quantity: 30 },
        { name: 'Sel', quantity: 10 },
        { name: 'Poivre', quantity: 5 }
      ],
      origins: ['Algérie'],
      servings: 6,
      description: 'La Rechta est un plat festif algérien composé de fines pâtes artisanales servies avec une sauce blanche au poulet et aux légumes. Ce plat est traditionnellement préparé pour les célébrations et événements spéciaux.'
    },
    // Algerian Desserts
    {
      id: 7,
      title: 'Kalb El Louz',
      preptime: 60,
      ingredients: [
        { name: 'Semoule fine', quantity: 500 },
        { name: 'Amandes en poudre', quantity: 300 },
        { name: 'Sucre', quantity: 300 },
        { name: 'Beurre', quantity: 200 },
        { name: 'Eau de fleur d\'oranger', quantity: 50 },
        { name: 'Eau', quantity: 500 },
        { name: 'Amandes effilées', quantity: 100 }
      ],
      origins: ['Algérie'],
      servings: 8,
      description: 'Kalb El Louz (cœur d\'amande) est un dessert algérien à base de semoule et d\'amandes, imbibé d\'un sirop parfumé à l\'eau de fleur d\'oranger. Ce gâteau moelleux et fondant est souvent servi pendant le Ramadan.'
    },
    {
      id: 8,
      title: 'Mhalbi',
      image: '/images/mhalbi.jpg',
      preptime: 40,
      ingredients: [
        { name: 'Lait', quantity: 1000 },
        { name: 'Maïzena', quantity: 80 },
        { name: 'Sucre', quantity: 150 },
        { name: 'Eau de fleur d\'oranger', quantity: 15 },
        { name: 'Cannelle en poudre', quantity: 5 },
        { name: 'Pistaches concassées', quantity: 50 }
      ],
      origins: ['Algérie'],
      servings: 6,
      description: 'Le Mhalbi est un dessert crémeux algérien à base de lait et de maïzena, parfumé à l\'eau de fleur d\'oranger et saupoudré de cannelle. Sa texture douce et son goût léger en font un dessert rafraîchissant parfait après un repas.'
    },
    {
      id: 9,
      title: 'Makrout aux Amandes',
      image: '/images/makrout-amandes.jpg',
      preptime: 90,
      ingredients: [
        { name: 'Semoule fine', quantity: 500 },
        { name: 'Beurre', quantity: 200 },
        { name: 'Amandes en poudre', quantity: 300 },
        { name: 'Sucre', quantity: 200 },
        { name: 'Eau de fleur d\'oranger', quantity: 30 },
        { name: 'Miel', quantity: 300 },
        { name: 'Huile pour friture', quantity: 500 }
      ],
      origins:['Algérie'] ,
      servings: 30,
      description: 'Le Makrout aux amandes est un gâteau traditionnel algérien à base de semoule et farci d\'une pâte d\'amandes sucrée. Ces petits losanges sont frits puis trempés dans du miel parfumé, créant un délicieux contraste de textures.'
    },
    {
      id: 10,
      title: 'Baklawa Algérienne',
      image: '/images/baklawa-algerienne.jpg',
      preptime: 120,
      ingredients: [
        { name: 'Pâte filo', quantity: 500 },
        { name: 'Amandes moulues', quantity: 400 },
        { name: 'Sucre', quantity: 200 },
        { name: 'Beurre fondu', quantity: 250 },
        { name: 'Eau de fleur d\'oranger', quantity: 30 },
        { name: 'Miel', quantity: 300 },
        { name: 'Pistaches concassées', quantity: 100 }
      ],
      origins: ['Algérie'],
      servings: 24,
      description: 'La Baklawa algérienne est un dessert feuilleté à base de pâte filo et d\'amandes, imbibé de sirop parfumé. Ces petites pâtisseries en forme de losanges sont riches et sucrées, idéales pour accompagner un thé à la menthe.'
    },
    {
      id: 11,
      title: 'Tamina',
      image: '/images/tamina.jpg',
      preptime: 30,
      ingredients: [
        { name: 'Semoule moyenne', quantity: 300 },
        { name: 'Beurre', quantity: 150 },
        { name: 'Miel', quantity: 200 },
        { name: 'Cannelle en poudre', quantity: 10 },
        { name: 'Amandes effilées', quantity: 50 }
      ],
      origins: ['Algérie'],
      servings: 6,
      description: 'La Tamina est un dessert algérien simple à base de semoule grillée mélangée avec du beurre et du miel. Parfumée à la cannelle et décorée d\'amandes, cette pâte sucrée est traditionnellement servie lors des célébrations familiales.'
    },
    {
      id: 12,
      title: 'Dziriyette',
      image: '/images/dziriyette.jpg',
      preptime: 90,
      ingredients: [
        { name: 'Amandes moulues', quantity: 400 },
        { name: 'Sucre glace', quantity: 200 },
        { name: 'Blanc d\'œuf', quantity: 100 },
        { name: 'Eau de fleur d\'oranger', quantity: 15 },
        { name: 'Pâte d\'amande', quantity: 200 },
        { name: 'Colorant alimentaire rouge', quantity: 2 }
      ],
      origins: ['Algérie'],
      servings: 20,
      description: 'Les Dziriyettes sont des petits gâteaux algériens à base d\'amandes, reconnaissables à leur belle couleur rose. Ces douceurs fondantes sont parfumées à l\'eau de fleur d\'oranger et enrobées de pâte d\'amande colorée.'
    },
  
    // Moroccan Dishes
    {
      id: 13,
      title: 'Pastilla au Poulet',
      image: '/images/pastilla-poulet.jpg',
      preptime: 120,
      ingredients: [
        { name: 'Poulet', quantity: 800 },
        { name: 'Oignons', quantity: 300 },
        { name: 'Amandes effilées', quantity: 200 },
        { name: 'Œufs', quantity: 300 },
        { name: 'Feuilles de brick', quantity: 300 },
        { name: 'Cannelle', quantity: 10 },
        { name: 'Gingembre', quantity: 10 },
        { name: 'Safran', quantity: 2 },
        { name: 'Persil', quantity: 50 },
        { name: 'Coriandre', quantity: 50 },
        { name: 'Beurre', quantity: 100 },
        { name: 'Sucre glace', quantity: 50 },
        { name: 'Huile d\'olive', quantity: 50 }
      ],
      origins: ['Maroc'],
      servings: 8,
      description: 'La pastilla au poulet est un plat marocain festif, mêlant le sucré et le salé. Cette tourte feuilletée contient du poulet émincé, des œufs, des amandes et des épices, le tout saupoudré de sucre glace et de cannelle.'
    },
    {
      id: 14,
      title: 'Tajine de Poulet',
      image: '/images/tajine-poulet.jpg',
      preptime: 90,
      ingredients: [
        { name: 'Poulet', quantity: 800 },
        { name: 'Oignons', quantity: 300 },
        { name: 'Olives vertes', quantity: 100 },
        { name: 'Citron confit', quantity: 100 },
        { name: 'Gingembre', quantity: 10 },
        { name: 'Safran', quantity: 1 },
        { name: 'Curcuma', quantity: 5 },
        { name: 'Coriandre fraîche', quantity: 30 },
        { name: 'Huile d\'olive', quantity: 50 },
        { name: 'Ail', quantity: 20 },
        { name: 'Sel', quantity: 10 },
        { name: 'Poivre', quantity: 5 }
      ],
      origins: ['Maroc'],
      servings: 4,
      description: 'Le tajine de poulet marocain est un plat mijoté lentement dans un plat en terre cuite traditionnel. Le poulet est tendre et parfumé par les épices, les olives et le citron confit, créant un mélange savoureux de saveurs.'
    },
    {
      id: 15,
      title: 'Tajine Viande et Pommes de Terre',
      image: '/images/tajine-viande-pdt.jpg',
      preptime: 100,
      ingredients: [
        { name: 'Viande de bœuf', quantity: 700 },
        { name: 'Pommes de terre', quantity: 600 },
        { name: 'Oignons', quantity: 300 },
        { name: 'Tomates', quantity: 300 },
        { name: 'Ail', quantity: 20 },
        { name: 'Cumin', quantity: 10 },
        { name: 'Paprika', quantity: 10 },
        { name: 'Gingembre', quantity: 10 },
        { name: 'Persil', quantity: 30 },
        { name: 'Coriandre', quantity: 30 },
        { name: 'Huile d\'olive', quantity: 50 },
        { name: 'Sel', quantity: 10 },
        { name: 'Poivre', quantity: 5 }
      ],
      origins: ['Maroc'],
      servings: 4,
      description: 'Ce tajine marocain combine la tendreté de la viande de bœuf avec des pommes de terre fondantes, le tout mijoté dans une sauce richement épicée. Ce plat réconfortant est parfait pour un repas familial.'
    },
    {
      id: 16,
      title: 'Couscous Marocain',
      preptime: 120,
      ingredients: [
        { name: 'Semoule de couscous', quantity: 500 },
        { name: 'Agneau', quantity: 700 },
        { name: 'Pois chiches', quantity: 200 },
        { name: 'Courgettes', quantity: 300 },
        { name: 'Carottes', quantity: 300 },
        { name: 'Navets', quantity: 200 },
        { name: 'Citrouille', quantity: 300 },
        { name: 'Oignons', quantity: 200 },
        { name: 'Tomates', quantity: 300 },
        { name: 'Concentré de tomate', quantity: 50 },
        { name: 'Ras el hanout', quantity: 15 },
        { name: 'Cannelle', quantity: 5 },
        { name: 'Huile d\'olive', quantity: 50 },
        { name: 'Sel', quantity: 10 },
        { name: 'Poivre', quantity: 5 }
      ],
      origins: ['Maroc'],
      servings: 6,
      description: 'Le couscous marocain est célèbre pour sa semoule fine et légère accompagnée d\'un riche ragoût de viande et de légumes. Les légumes variés et les épices comme le ras el hanout donnent à ce plat sa saveur distinctive et authentique.'
    },
    // recettes marocaines 
    {
      id: 17,
      title: 'Kaab El Ghzal',
      preptime: 90,
      ingredients: [
        { name: 'Farine', quantity: 500 },
        { name: 'Beurre', quantity: 200 },
        { name: 'Amandes moulues', quantity: 400 },
        { name: 'Sucre glace', quantity: 200 },
        { name: 'Eau de fleur d\'oranger', quantity: 20 },
        { name: 'Cannelle', quantity: 5 },
        { name: 'Œuf', quantity: 50 }
      ],
      origins: ['Maroc'],
      servings: 24,
      description: 'Kaab El Ghzal, aussi appelé "cornes de gazelle", est un célèbre gâteau marocain en forme de croissant fourré d\'une délicieuse pâte d\'amandes parfumée. La pâtisserie est légèrement dorée puis saupoudrée de sucre glace.'
    },
    {
      id: 18,
      title: 'Fekkas',
      preptime: 120,
      ingredients: [
        { name: 'Farine', quantity: 500 },
        { name: 'Sucre', quantity: 200 },
        { name: 'Beurre', quantity: 150 },
        { name: 'Œufs', quantity: 150 },
        { name: 'Amandes', quantity: 300 },
        { name: 'Levure chimique', quantity: 10 },
        { name: 'Vanille', quantity: 5 },
        { name: 'Eau de fleur d\'oranger', quantity: 10 },
        { name: 'Graines d\'anis', quantity: 10 }
      ],
      origins: ['Maroc'],
      servings: 40,
      description: 'Les Fekkas sont des biscuits marocains croquants similaires aux biscottis italiens. Préparés avec des amandes entières et parfois des raisins secs, ils sont cuits deux fois pour obtenir ce croquant caractéristique, parfait pour accompagner le thé.'
    },
    {
      id: 19,
      title: 'Chebakia',
      preptime: 150,
      ingredients: [
        { name: 'Farine', quantity: 500 },
        { name: 'Graines de sésame grillées', quantity: 200 },
        { name: 'Beurre', quantity: 150 },
        { name: 'Levure de boulanger', quantity: 10 },
        { name: 'Cannelle', quantity: 5 },
        { name: 'Anis', quantity: 5 },
        { name: 'Gomme arabique', quantity: 5 },
        { name: 'Miel', quantity: 500 },
        { name: 'Eau de fleur d\'oranger', quantity: 30 },
        { name: 'Huile pour friture', quantity: 500 }
      ],
      origins: ['Maroc'],
      servings: 30,
      description: 'La Chebakia est une pâtisserie marocaine traditionnelle, en forme de fleur, frite et trempée dans du miel parfumé à l\'eau de fleur d\'oranger. Ces gâteaux sont particulièrement populaires pendant le Ramadan.'
    },
    {
      id: 20,
      title: 'Ghraiba à la Semoule et Noix de Coco',
      image: '/images/ghraiba-coco.jpg',
      preptime: 60,
      ingredients: [
        { name: 'Semoule fine', quantity: 300 },
        { name: 'Noix de coco râpée', quantity: 150 },
        { name: 'Beurre', quantity: 150 },
        { name: 'Sucre glace', quantity: 150 },
        { name: 'Levure chimique', quantity: 5 },
        { name: 'Vanille', quantity: 5 },
        { name: 'Œuf', quantity: 50 },
        { name: 'Amandes entières', quantity: 30 }
      ],
      origins: ['Maroc'],
      servings: 20,
      description: 'Les Ghraibia sont des biscuits sablés marocains, légers et fondants en bouche. Cette variante à la semoule et noix de coco offre une texture particulièrement friable et un goût délicat, parfait pour accompagner un thé à la menthe.'
    },
  
    // recette tunisienne 
    {
      id: 21,
      title: 'Couscous au Poisson',
      image: '/images/couscous-poisson.jpg',
      preptime: 90,
      ingredients: [
        { name: 'Semoule de couscous', quantity: 500 },
        { name: 'Poisson (mérou ou dorade)', quantity: 800 },
        { name: 'Pois chiches', quantity: 200 },
        { name: 'Carottes', quantity: 300 },
        { name: 'Courgettes', quantity: 300 },
        { name: 'Oignons', quantity: 200 },
        { name: 'Tomates', quantity: 300 },
        { name: 'Harissa', quantity: 20 },
        { name: 'Ail', quantity: 30 },
        { name: 'Concentré de tomate', quantity: 50 },
        { name: 'Cumin', quantity: 10 },
        { name: 'Coriandre fraîche', quantity: 30 },
        { name: 'Huile d\'olive', quantity: 50 },
        { name: 'Sel', quantity: 10 },
        { name: 'Poivre', quantity: 5 }
      ],
      origins: ['Tunisie'],
      servings: 6,
      description: 'Le couscous au poisson est une spécialité tunisienne provenant des régions côtières. La semoule est servie avec un bouillon épicé à la harissa, des légumes et du poisson frais. Ce plat léger et parfumé est particulièrement apprécié en été.'
    },
    {
      id: 22,
      title: 'Mloukhiya',
      image: '/images/mloukhiya.jpg',
      preptime: 120,
      ingredients: [
        { name: 'Viande d\'agneau', quantity: 700 },
        { name: 'Feuilles de mloukhiya séchées et réduites en poudre', quantity: 200 },
        { name: 'Pois chiches', quantity: 200 },
        { name: 'Oignons', quantity: 200 },
        { name: 'Ail', quantity: 30 },
        { name: 'Tomate concentrée', quantity: 50 },
        { name: 'Cumin', quantity: 10 },
        { name: 'Coriandre en poudre', quantity: 10 },
        { name: 'Huile d\'olive', quantity: 50 },
        { name: 'Sel', quantity: 10 },
        { name: 'Poivre', quantity: 5 }
      ],
      origins: ['Tunisie'],
      servings: 6,
      description: 'La Mloukhiya est un plat traditionnel tunisien à base de feuilles de corète séchées et réduites en poudre, mijotées avec de la viande d\'agneau. Cette sauce épaisse et savoureuse est généralement servie avec du riz ou du pain.'
    },
    {
      id: 23,
      title: 'Tajine El Bey',
      image: '/images/tajine-el-bey.jpg',
      preptime: 90,
      ingredients: [
        { name: 'Viande d\'agneau hachée', quantity: 500 },
        { name: 'Œufs', quantity: 300 },
        { name: 'Fromage râpé', quantity: 200 },
        { name: 'Persil', quantity: 50 },
        { name: 'Oignons', quantity: 200 },
        { name: 'Pommes de terre', quantity: 300 },
        { name: 'Huile d\'olive', quantity: 50 },
        { name: 'Cannelle', quantity: 5 },
        { name: 'Cumin', quantity: 5 },
        { name: 'Sel', quantity: 10 },
        { name: 'Poivre', quantity: 5 }
      ],
      origins: ['Tunisie'],
      servings: 6,
      description: 'Le Tajine El Bey est un gratin tunisien à base de viande hachée, de pommes de terre et d\'œufs. Ce plat riche est parfumé avec des épices et garni de fromage râpé pour créer une croûte dorée délicieuse.'
    },
    {
      id: 24,
    title: "Fricassée tunisienne",
    preptime: 60,
    ingredients: [
      { name: "Farine", quantity: 500 },
      { name: "Levure de boulanger", quantity: 1 },
      { name: "Sel", quantity: 1 },
      { name: "Huile", quantity: 3 },
      { name: "Œufs", quantity: 3 },
      { name: "Thon", quantity: 200 },
      { name: "Pommes de terre", quantity: 3 },
      { name: "Olives", quantity: 100 },
      { name: "Harissa", quantity: 2 },
      { name: "Câpres", quantity: 50 }
    ],
    origins: ['Tunisie'],
    servings: 8,
    description: "La fricassée tunisienne est un sandwich populaire composé d'un petit pain frit garni de thon, d'œufs durs, de pommes de terre, d'olives et d'harissa. C'est un en-cas très apprécié dans toute la Tunisie, notamment comme street food."
  },
  {
    id: 25,
    title: "Mlawi tunisien",
    preptime: 90,
    ingredients: [
      { name: "Farine", quantity: 500 },
      { name: "Sel", quantity: 1 },
      { name: "Eau", quantity: 250 },
      { name: "Huile", quantity: 4 },
      { name: "Margarine", quantity: 200 }
    ],
    origins: ['Tunisie'],
    servings: 6,
    description: "Le mlawi est une sorte de crêpe feuilletée tunisienne qui ressemble au msemen marocain. Ces galettes sont préparées avec de la pâte très fine étalée puis pliée plusieurs fois avant d'être cuite sur une plaque chaude. Elles sont généralement servies au petit-déjeuner ou pour accompagner des plats en sauce."
  },
  {
    id: 26,
    title: "Baklawa tunisienne",
    preptime: 120,
    ingredients: [
      { name: "Pâte filo", quantity: 500 },
      { name: "Amandes moulues", quantity: 500 },
      { name: "Sucre", quantity: 300 },
      { name: "Eau de fleur d'oranger", quantity: 2 },
      { name: "Beurre fondu", quantity: 250 },
      { name: "Miel", quantity: 200 },
      { name: "Pistaches concassées", quantity: 100 }
    ],
    origins: ['Tunisie'],
    servings: 20,
    description: "La baklawa tunisienne est un dessert traditionnel composé de fines couches de pâte filo beurrées, farcies d'amandes moulues et nappées de sirop sucré. La version tunisienne se distingue souvent par l'utilisation d'eau de fleur d'oranger et une forme différente de la version turque ou libanaise."
  },
  {
    id: 27,
    title: "Zlabia tunisienne",
    preptime: 60,
    ingredients: [
      { name: "Farine", quantity: 500 },
      { name: "Levure de boulanger", quantity: 1 },
      { name: "Eau", quantity: 300 },
      { name: "Huile pour friture", quantity: 1000 },
      { name: "Sucre", quantity: 500 },
      { name: "Eau de rose", quantity: 2 },
      { name: "Colorant alimentaire", quantity: 1 }
    ],
    origins: ['Tunisie'],
    servings: 15,
    description: "La zlabia est un dessert traditionnel tunisien très populaire pendant le mois de Ramadan. Il s'agit de beignets spiralés frits puis trempés dans un sirop sucré parfumé à l'eau de rose. Ils sont reconnaissables à leur forme et leur couleur vive, souvent orange ou rouge."
  },
  {
    id: 28,
    title: "Kâak warka",
    image: "kaak_warka.jpg",
    preptime: 120,
    ingredients: [
      { name: "Farine", quantity: 500 },
      { name: "Beurre", quantity: 200 },
      { name: "Sucre", quantity: 100 },
      { name: "Œufs", quantity: 2 },
      { name: "Amandes moulues", quantity: 300 },
      { name: "Sucre glace", quantity: 100 },
      { name: "Eau de fleur d'oranger", quantity: 2 }
    ],
    origins: ['Tunisie'],
    servings: 12,
    description: "Le kâak warka est une pâtisserie tunisienne en forme d'anneau, garnie d'une délicieuse farce aux amandes parfumée à l'eau de fleur d'oranger. Ce gâteau est traditionnellement servi lors des fêtes et des cérémonies, notamment les mariages."
  },
  {
    id: 29,
    title: "Zouza tunisienne",
    preptime: 90,
    ingredients: [
      { name: "Farine", quantity: 500 },
      { name: "Beurre", quantity: 250 },
      { name: "Sucre", quantity: 200 },
      { name: "Œufs", quantity: 3 },
      { name: "Amandes moulues", quantity: 400 },
      { name: "Eau de fleur d'oranger", quantity: 3 },
      { name: "Sucre glace", quantity: 100 }
    ],
    origins: ['Tunisie'],
    servings: 15,
    description: "La zouza est une pâtisserie tunisienne délicate composée de deux biscuits en forme de demi-lunes collés ensemble avec une garniture aux amandes. Ces petits gâteaux sont généralement recouverts de sucre glace et sont très populaires lors des fêtes de l'Aïd."
  },
  {
    id: 30,
    title: "Mkharek tunisiens",
    preptime: 75,
    ingredients: [
      { name: "Farine", quantity: 500 },
      { name: "Beurre", quantity: 200 },
      { name: "Huile", quantity: 3 },
      { name: "Œufs", quantity: 2 },
      { name: "Sucre", quantity: 150 },
      { name: "Levure chimique", quantity: 1 },
      { name: "Vanille", quantity: 1 },
      { name: "Sucre glace", quantity: 100 }
    ],
    origins: ['Tunisie'],
    servings: 20,
    description: "Les mkharek sont des biscuits tunisiens torsadés ou en forme de 8, très appréciés pour leur texture friable et leur goût délicat. Ils sont souvent saupoudrés de sucre glace et servis avec du thé à la menthe lors des occasions spéciales et des réunions familiales."
  }
];
// Fonction pour peupler la base de données
async function seedDatabase() {
    try {
      // Connexion à MongoDB
      await mongoose.connect(mongoURI);
      console.log('Connecté à MongoDB');
      
      // Supprimer toutes les recettes existantes
      await Recipe.deleteMany({});
      console.log('Base de données nettoyée');
      
      // Ajouter les nouvelles recettes
      await Recipe.insertMany(recipes);
      console.log('Base de données peuplée avec succès: ' + recipes.length + ' recettes ajoutées');
      
      // Déconnexion
      await mongoose.disconnect();
      console.log('Déconnecté de MongoDB');
      
    } catch (error) {
      console.error('Erreur lors du peuplement de la base de données:', error);
    }
  }
  
  // Exécuter la fonction
  seedDatabase();
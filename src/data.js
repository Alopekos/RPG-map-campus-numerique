const data = [
  {
    id: 0,
    path: "/img/Assets/ShopRoom.png",
    up: false,
    down: "false",
    left: false,
    right: false,
    shop: true,
    description: "unavailable if everything goes right",
  },
  {
    id: 1,
    path: "/img/maps/map_0/Map1.png",
    up: false,
    down: false,
    left: false,
    right: "/map/2",
    shop: false,
    description:
      "Nos aventuriers se retrouvent dans une salle contenant moult objets. De ce fait, ils fouillèrent l'endroit, cette fouille leur octroya de multiples objets tels que des épées🗡️, des arcs🏹, un bâton🏒, une paire de gants de boxe🥊 et autres. Armées pour affronter le donjon, ils avancèrent dans la deuxième salle.",
  },
  {
    id: 2,
    path: "/img/maps/map_0/Map2.png",
    up: "/map/3",
    down: false,
    left: "/map/1",
    right: false,
    shop: false,
    description:
      "À peine arrivés, une salle emplie de moisissures, une odeur putride arriva aux naseaux de nos aventuriers. Puis, comme s'ils arrivèrent de nulle part, trois squelettes💀 se jetèrent sur l'équipe des quatorze braves. Mais loin d'être submergés, nos aventuriers battèrent les ignobles et continuèrent leur chemin.",
  },
  {
    id: 3,
    path: "/img/maps/map_0/Map3.png",
    up: false,
    down: "/map/2",
    left: false,
    right: "/map/4",
    shop: false,
    description:
      "Dans cette salle étriquée et poussièreuse, de terrifiants bruits se font entendre au loin. Vous pourriez apercevoir au mur une énigme㊙️. Nos aventuriers, malgré leurs airs décrépits, résolurent l'énigme et la porte en chêne massif s'ouvrit d'un bruit sourd.",
  },
  {
    id: 4,
    path: "/img/maps/map_0/Map4.png",
    up: false,
    down: "/map/5",
    left: "/map/3",
    right: false,
    shop: false,
    description:
      "Se hâtant vers la troisième salle, il ne fallut que peu de temps au serpent 'Boss Snake'🐍, protecteur de ce lieu, pour s'attaquer aux aventuriers. Se laissant surprendre, l'un d'eux se fit avaler. Mais, le reste de la troupe, après une bataille légendaire, pourfenda la bête et libéra l'aventurier avâlé.",
  },
  {
    id: 5,
    path: "/img/maps/map_0/Map5.png",
    up: "/map/4",
    down: "/map/6",
    left: false,
    right: false,
    shop: false,
    description:
      "Nos aventuriers arrivèrent dans une salle remplie de pièges🪤 qu'ils durent éviter afin de progresser.",
  },
  {
    id: 6,
    path: "/img/maps/map_0/Map6.png",
    up: "/map/5",
    down: "/map/7",
    left: false,
    right: false,
    shop: true,
    description:
      "Au centre de cette salle, un homme était assis, en tailleur. Des marchandises💰 surgissaient de ses côtés et assaillaient de leur brillance les yeux de la troupe. Ils décidèrent de marchander avec lui...",
  },
  {
    id: 7,
    path: "/img/maps/map_0/Map7.png",
    up: "/map/6",
    down: "/map/8",
    left: false,
    right: false,
    shop: false,
    description:
      "Ambuscade !! Nos héros sont assaillis par des goblins👺. Ces petites créatures vicieuses tentent de profiter de l'effet de surprise, malheureusement pour eux, nos héros ne sont pas dupes et la bataille tourna à leur avantage. Victorieux, ils fouillèrent le corps de leur victime pour y trouver des objets et de l'or. Dans leurs effets personnels, un vieux parchemin se différencia du reste, mais dès son utilisation, un des aventuriers se vit maudit et transformé en chèvre🐐 !",
  },
  {
    id: 8,
    path: "/img/maps/map_0/Map8.png",
    up: "/map/7",
    down: "/map/9",
    left: "/map/13",
    right: false,
    shop: false,
    description:
      "Un long couloir devenant de plus en plus étroit et de plus en plus sombre s'étend devant nos aventuriers, au fond de la salle se trouve trois rochers, sur l'un est écrit 'Aqua🌊' sur un autre est inscrit 'Ignis🔥' et enfin, sur le dernier, 'Ventus💨'.",
  },
  {
    id: 9,
    path: "/img/maps/map_0/Map9.png",
    up: "/map/8",
    down: "/map/12",
    left: "/map/10",
    right: "/map/11",
    shop: false,
    description:
      "Lorsqu'un héros s'approche d'un rocher, il peut remarquer que le sol devient incandescent sous ses pieds. De ce fait, le groupe décida de se séparer en trois et chaque escouade disparut d'un seul coup à la suite d'un bruit sourd et mystique...",
  },
  {
    id: 10,
    path: "/img/maps/map_0/Map10.png",
    up: false,
    down: false,
    left: false,
    right: "/map/9",
    shop: false,
    description:
      "Salle de Golemus Ignis, le golem de feu🔥. Un tiers des aventuriers eut un combat légendaire contre la bête.",
  },
  {
    id: 11,
    path: "/img/maps/map_0/Map11.png",
    up: false,
    down: false,
    left: "/map/9",
    right: false,
    shop: false,
    description:
      "Salle de Golemino Aqua, le golem d'eau🌊. Un tiers des aventuriers eut un combat légendaire contre la bête.",
  },
  {
    id: 12,
    path: "/img/maps/map_0/Map12.png",
    up: "/map/9",
    down: false,
    left: false,
    right: false,
    shop: false,
    description:
      "Salle de Golemitte Ventus, le golem d'air💨. Un tiers des aventuriers eut un combat légendaire contre la bête.",
  },
  {
    id: 13,
    path: "/img/maps/map_0/Map13.png",
    up: false,
    down: false,
    left: "/map/14",
    right: "/map/8",
    shop: false,
    description:
      "Une porte dérobé s'ouvre vers un endroit très lumineux.. Vous vous y approchez, et après une bouché d'air frais vous arrivez donc dans un champ à l'air libre, (le donjon est vraiment énorme ?!) le vent vous fait un bien fou ! Une fée 🧚 apparaît devant les aventuriers ous le savez, les fées sont des créatures légendaires ! Certaines légendes racontent même qu'elles auraient façonné le monde 🌍. Apprendre qu'une fée a été faite prisonnière vous noue l'estomac, car cela signifie qu'Alduin est incroyablement puissant !",
  },
  {
    id: 14,
    path: "/img/maps/map_0/Map14.png",
    up: "/map/15",
    down: false,
    left: false,
    right: "/map/13",
    shop: false,
    description:
      "Les aventuriers ouvrent ensuite la porte de la cour qui mène au donjon 🏰. Un petit couloir les conduit dans une pièce assez spacieuse, où il y a suffisamment de place pour ne pas gêner les uns les autres. Ils y aperçoivent quelques meubles et une sorte de fenêtre de toit qui laisse entrer la lumière, rendant l'endroit plutôt agréable, bien que la pièce semble tout de même assez vide. Deux portes se trouvent de l'autre côté de la pièce. L'une des deux 🚪, encrypté d'une éngime, ne manque pas d'attirer la curiosité du groupe.",
  },
  {
    id: 15,
    path: "/img/maps/map_0/Map15.png",
    up: "/map/16",
    down: "/map/14",
    left: false,
    right: false,
    shop: false,
    description:
      "À la réponse de l'énigme, la compagnie voit la porte de droite s'ouvrir. Ils s'enfoncent donc dans un couloir 🚶‍♂️, bien éclairé tout de même, mais aucune âme qui vive ou de trace sur le sol. Alors que la clique ne cesse d'avancer, le couloir arrive à sa fin, un mur ? Pas de suite ? Vous n'avez pas trop le temps de réfléchir que le pire arrive: le sol s'ouvre sous vos pieds 🕳️.",
  },
  {
    id: 16,
    path: "/img/maps/map_0/Map16.png",
    up: "/map/17",
    down: "/map/15",
    left: false,
    right: false,
    shop: false,
    description:
      "Les aventuriers chutent tous dans un énorme toboggan 🛝! Et à la suite d'un court moment de gaieté et de jubilation, leur visage changea d'expression à la vue de leur destination.. Une salle remplie de piques 🌵?! Heureusement, grâce à la prouesse de certains, cette salle ne fit pas de morts mais certains tombèrent malades 🤢 en fouillant les cadavres déjà présents dans la salle. Ensuite, l'équipe continua de s'aventurer plus profondément dans le donjon.",
  },
  {
    id: 17,
    path: "/img/maps/map_0/Map17.png",
    up: false,
    down: "/map/16",
    left: false,
    right: false,
    shop: false,
    description:
      "Dans cette salle, il y a une petite cheminée 🔥, une graaande table 🪑, une cuisine, c'est un T2 quoi, avec deux portes dont une porte magique... Au fond de la salle, sur un lit de paille 🛏️, un Gobelours 🧸 fait la sieste. Le combat n'a pas le temps de se finir constre celui-ci qu'après une petite minute... Une porte s'ouvre, et 6 gobelours en sortent ! Le groupe regrette instantanément ses actions.. Des bruits retentissent : Capitaine de garde noooooon ??!!! Les aventuriers les ont réveillés de leur dortoir, et ils sont sacrément énervés. ",
  },
];

export default data;

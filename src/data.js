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
    left: false,
    right: "/map/8",
    shop: false,
    description:
      "Une porte dérobé s'ouvre vers un endroit très lumineux.. Vous vous y approchez, et après une bouché d'air frais vous arrivez donc dans un champ à l'air libre, (le donjon est vraiment énorme ?!) le vent vous fait un bien fou ! Une fée 🧚 apparaît devant les aventuriers ous le savez, les fées sont des créatures légendaires ! Certaines légendes racontent même qu'elles auraient façonné le monde 🌍. Apprendre qu'une fée a été faite prisonnière vous noue l'estomac, car cela signifie qu'Alduin est incroyablement puissant !",
  },
];

export default data;

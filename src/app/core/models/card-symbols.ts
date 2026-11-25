export interface CardSymbol {
  name: string;
  emoji: string;
  category: 'beast' | 'bird' | 'reptile' | 'nature' | 'element' | 'treasure' | 'mythical';
  imageUrl: string;
}

export const PREDEFINED_CARD_SYMBOLS: CardSymbol[] = [
  {
    "name": "TIGER",
    "emoji": "🐅",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "LION",
    "emoji": "🦁",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "PANTHER",
    "emoji": "🐆",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "JAGUAR",
    "emoji": "🐆",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "LEOPARD",
    "emoji": "🐆",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "CHEETAH",
    "emoji": "🐆",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "PUMA",
    "emoji": "🐈‍⬛",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "OCELOT",
    "emoji": "🐱",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "LYNX",
    "emoji": "🐱",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1513360309081-38f076278f1e?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "GORILLA",
    "emoji": "🦍",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "ORANGUTAN",
    "emoji": "🦧",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "CHIMP",
    "emoji": "🐵",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "MONKEY",
    "emoji": "🐒",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "BABOON",
    "emoji": "🐵",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1501705388883-4ed8a543392c?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "LEMUR",
    "emoji": "🦊",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "ELEPHANT",
    "emoji": "🐘",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "RHINO",
    "emoji": "🦏",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1534567059665-2a2979244670?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "HIPPO",
    "emoji": "🦛",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "BUFFALO",
    "emoji": "🦬",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "ZEBRA",
    "emoji": "🦓",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1526095179574-86e545346ae6?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "GIRAFFE",
    "emoji": "🦒",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "TAPIR",
    "emoji": "🐗",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "WARTHOG",
    "emoji": "🐗",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "SLOTH",
    "emoji": "🦥",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "ANTEATER",
    "emoji": "🦔",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "BEAR",
    "emoji": "🐻",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "PANDA",
    "emoji": "🐼",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1527118732049-c88155f2107c?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "KOALA",
    "emoji": "🐨",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "WOLF",
    "emoji": "🐺",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "FOX",
    "emoji": "🦊",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "OTTER",
    "emoji": "🦦",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "BEAVER",
    "emoji": "🦫",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "BADGER",
    "emoji": "🦡",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "HEDGEHOG",
    "emoji": "🦔",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "DEER",
    "emoji": "🦌",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "GAZELLE",
    "emoji": "🦌",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "KANGAROO",
    "emoji": "🦘",
    "category": "beast",
    "imageUrl": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "EAGLE",
    "emoji": "🦅",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "FALCON",
    "emoji": "🦅",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "HAWK",
    "emoji": "🦅",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "OWL",
    "emoji": "🦉",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "TOUCAN",
    "emoji": "🦜",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1550853024-fae734890940?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "PARROT",
    "emoji": "🦜",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "MACAW",
    "emoji": "🦜",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "PEACOCK",
    "emoji": "🦚",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "FLAMINGO",
    "emoji": "🦩",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1539418561314-565804e349c0?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "HORNBILL",
    "emoji": "🦜",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1550853024-fae734890940?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "HERON",
    "emoji": "🦩",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1539418561314-565804e349c0?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "KINGFISHER",
    "emoji": "🐦",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "WOODPECKER",
    "emoji": "🐦",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "SWAN",
    "emoji": "🦢",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "PELICAN",
    "emoji": "🦤",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1539418561314-565804e349c0?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "OSTRICH",
    "emoji": "🦤",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1539418561314-565804e349c0?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "CONDOR",
    "emoji": "🦅",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "HUMMINGBIRD",
    "emoji": "🐦",
    "category": "bird",
    "imageUrl": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "COBRA",
    "emoji": "🐍",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "PYTHON",
    "emoji": "🐍",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "VIPER",
    "emoji": "🐍",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "ANACONDA",
    "emoji": "🐍",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "CROCODILE",
    "emoji": "🐊",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "ALLIGATOR",
    "emoji": "🐊",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "CHAMELEON",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "IGUANA",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "GECKO",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "KOMODO",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "TURTLE",
    "emoji": "🐢",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "TORTOISE",
    "emoji": "🐢",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "TREEFROG",
    "emoji": "🐸",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "TOAD",
    "emoji": "🐸",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "SALAMANDER",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "LOTUS",
    "emoji": "🪷",
    "category": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "ORCHID",
    "emoji": "🌸",
    "category": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "HIBISCUS",
    "emoji": "🌺",
    "category": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "BAMBOO",
    "emoji": "🎍",
    "category": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "PALM",
    "emoji": "🌴",
    "category": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "FERN",
    "emoji": "🌿",
    "category": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "MUSHROOM",
    "emoji": "🍄",
    "category": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "VINE",
    "emoji": "🪴",
    "category": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "BAOBAB",
    "emoji": "🌳",
    "category": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "BANYAN",
    "emoji": "🌳",
    "category": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "CACTUS",
    "emoji": "🌵",
    "category": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "JUNGLE",
    "emoji": "🌴",
    "category": "nature",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "FIRE",
    "emoji": "🔥",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "WATER",
    "emoji": "💧",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "EARTH",
    "emoji": "🪨",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "WIND",
    "emoji": "💨",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "THUNDER",
    "emoji": "⚡",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "LIGHTNING",
    "emoji": "⚡",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "VOLCANO",
    "emoji": "🌋",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "ICE",
    "emoji": "🧊",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "STORM",
    "emoji": "🌩️",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "WAVE",
    "emoji": "🌊",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "METEOR",
    "emoji": "☄️",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "SUN",
    "emoji": "☀️",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "MOON",
    "emoji": "🌙",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "STAR",
    "emoji": "⭐",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "COMET",
    "emoji": "💫",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "RAINBOW",
    "emoji": "🌈",
    "category": "element",
    "imageUrl": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "EMERALD",
    "emoji": "💎",
    "category": "treasure",
    "imageUrl": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "RUBY",
    "emoji": "♦️",
    "category": "treasure",
    "imageUrl": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "SAPPHIRE",
    "emoji": "🔷",
    "category": "treasure",
    "imageUrl": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "DIAMOND",
    "emoji": "💎",
    "category": "treasure",
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "AMETHYST",
    "emoji": "🔮",
    "category": "treasure",
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "TOPAZ",
    "emoji": "🔶",
    "category": "treasure",
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "JADE",
    "emoji": "🟢",
    "category": "treasure",
    "imageUrl": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "AMULET",
    "emoji": "🧿",
    "category": "treasure",
    "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "TALISMAN",
    "emoji": "🪙",
    "category": "treasure",
    "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "TOTEM",
    "emoji": "🗿",
    "category": "treasure",
    "imageUrl": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "CROWN",
    "emoji": "👑",
    "category": "treasure",
    "imageUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "SHIELD",
    "emoji": "🛡️",
    "category": "treasure",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "DRAGON",
    "emoji": "🐉",
    "category": "mythical",
    "imageUrl": "https://images.unsplash.com/photo-1577493340887-b7bdef03097e?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "PHOENIX",
    "emoji": "🦅",
    "category": "mythical",
    "imageUrl": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "GRIFFIN",
    "emoji": "🦁",
    "category": "mythical",
    "imageUrl": "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "PEGASUS",
    "emoji": "🦄",
    "category": "mythical",
    "imageUrl": "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "HYDRA",
    "emoji": "🐍",
    "category": "mythical",
    "imageUrl": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=320&q=80"
  },
  {
    "name": "UNICORN",
    "emoji": "🦄",
    "category": "mythical",
    "imageUrl": "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=320&q=80"
  }
];

export function getRandomCardSymbol(excludeNames: string[] = []): CardSymbol {
  const normalizedExclude = new Set(excludeNames.map(n => (n || '').trim().toUpperCase()));
  const available = PREDEFINED_CARD_SYMBOLS.filter(
    s => !normalizedExclude.has(s.name.toUpperCase())
  );
  if (available.length > 0) {
    const idx = Math.floor(Math.random() * available.length);
    return available[idx];
  }
  return PREDEFINED_CARD_SYMBOLS[Math.floor(Math.random() * PREDEFINED_CARD_SYMBOLS.length)];
}

export function getCardEmoji(cardName?: string): string {
  if (!cardName) return '⭐';
  const found = PREDEFINED_CARD_SYMBOLS.find(
    s => s.name.toUpperCase() === cardName.trim().toUpperCase()
  );
  return found ? found.emoji : '🌿';
}

export function getCardRealImage(cardName?: string): string | undefined {
  if (!cardName) return undefined;
  const found = PREDEFINED_CARD_SYMBOLS.find(
    s => s.name.toUpperCase() === cardName.trim().toUpperCase()
  );
  return found ? found.imageUrl : undefined;
}

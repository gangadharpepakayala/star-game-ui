export interface CardSymbol {
  name: string;
  emoji: string;
  category: 'beast' | 'bird' | 'reptile' | 'nature' | 'element' | 'treasure' | 'mythical';
  imageUrl: string;
}

export const PREDEFINED_CARD_SYMBOLS: CardSymbol[] = [
  {
    "name": "LION",
    "emoji": "🦁",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/330px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg"
  },
  {
    "name": "TIGER",
    "emoji": "🐅",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg/330px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg"
  },
  {
    "name": "ELEPHANT",
    "emoji": "🐘",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/330px-African_Bush_Elephant.jpg"
  },
  {
    "name": "GIRAFFE",
    "emoji": "🦒",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/330px-Giraffe_Mikumi_National_Park.jpg"
  },
  {
    "name": "ZEBRA",
    "emoji": "🦓",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Equus_quagga_burchellii_-_Etosha%2C_2014.jpg/330px-Equus_quagga_burchellii_-_Etosha%2C_2014.jpg"
  },
  {
    "name": "LEOPARD",
    "emoji": "🐆",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/330px-African_leopard_male_%28cropped%29.jpg"
  },
  {
    "name": "CHEETAH",
    "emoji": "🐆",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/330px-Male_cheetah_facing_left_in_South_Africa.jpg"
  },
  {
    "name": "RHINOCEROS",
    "emoji": "🦏",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/081_White_rhinoceros_%28male%29_in_the_Kalahari_Desert_of_Namibia_Photo_by_Giles_Laurent.jpg/330px-081_White_rhinoceros_%28male%29_in_the_Kalahari_Desert_of_Namibia_Photo_by_Giles_Laurent.jpg"
  },
  {
    "name": "HIPPOPOTAMUS",
    "emoji": "🦛",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Portrait_Hippopotamus_in_the_water.jpg/330px-Portrait_Hippopotamus_in_the_water.jpg"
  },
  {
    "name": "BEAR",
    "emoji": "🐻",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/330px-2010-kodiak-bear-1.jpg"
  },
  {
    "name": "PANDA",
    "emoji": "🐼",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/330px-Grosser_Panda.JPG"
  },
  {
    "name": "POLAR BEAR",
    "emoji": "🐻‍❄️",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/330px-Polar_Bear_-_Alaska_%28cropped%29.jpg"
  },
  {
    "name": "WOLF",
    "emoji": "🐺",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Eurasian_wolf_2.jpg/330px-Eurasian_wolf_2.jpg"
  },
  {
    "name": "FOX",
    "emoji": "🦊",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Portrait_of_a_red_fox_in_Rautas_fj%C3%A4llurskog_%284%C3%973%29.jpg/330px-Portrait_of_a_red_fox_in_Rautas_fj%C3%A4llurskog_%284%C3%973%29.jpg"
  },
  {
    "name": "JACKAL",
    "emoji": "🐕",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/033_Golden_jackal_in_Keoladeo_National_Park_Photo_by_Giles_Laurent.jpg/330px-033_Golden_jackal_in_Keoladeo_National_Park_Photo_by_Giles_Laurent.jpg"
  },
  {
    "name": "HYENA",
    "emoji": "🦤",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Spotted_hyena_%28Crocuta_crocuta%29.jpg/330px-Spotted_hyena_%28Crocuta_crocuta%29.jpg"
  },
  {
    "name": "DEER",
    "emoji": "🦌",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Cervus_elaphus_Luc_Viatour_6.jpg/330px-Cervus_elaphus_Luc_Viatour_6.jpg"
  },
  {
    "name": "MOOSE",
    "emoji": "🫎",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Alaska_moose.jpg/330px-Alaska_moose.jpg"
  },
  {
    "name": "REINDEER",
    "emoji": "🦌",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Reinbukken_p%C3%A5_frisk_gr%C3%B8nt_beite._-_panoramio.jpg/330px-Reinbukken_p%C3%A5_frisk_gr%C3%B8nt_beite._-_panoramio.jpg"
  },
  {
    "name": "KANGAROO",
    "emoji": "🦘",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Red_kangaroo_-_melbourne_zoo.jpg/330px-Red_kangaroo_-_melbourne_zoo.jpg"
  },
  {
    "name": "KOALA",
    "emoji": "🐨",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/330px-Koala_climbing_tree.jpg"
  },
  {
    "name": "MONKEY",
    "emoji": "🐒",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Macaca_mulatta_%2822886604281%29.jpg/330px-Macaca_mulatta_%2822886604281%29.jpg"
  },
  {
    "name": "GORILLA",
    "emoji": "🦍",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg/330px-Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg"
  },
  {
    "name": "CHIMPANZEE",
    "emoji": "🐵",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/015_Chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg/330px-015_Chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg"
  },
  {
    "name": "ORANGUTAN",
    "emoji": "🦧",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Tanjung_Puting30477.jpg/330px-Tanjung_Puting30477.jpg"
  },
  {
    "name": "BABOON",
    "emoji": "🐒",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Olive_baboon_Ngorongoro.jpg/330px-Olive_baboon_Ngorongoro.jpg"
  },
  {
    "name": "LEMUR",
    "emoji": "🦊",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Ring-tailed_lemur_%28Lemur_catta%29.jpg/330px-Ring-tailed_lemur_%28Lemur_catta%29.jpg"
  },
  {
    "name": "SQUIRREL",
    "emoji": "🐿️",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Squirrel_posing.jpg/330px-Squirrel_posing.jpg"
  },
  {
    "name": "RABBIT",
    "emoji": "🐇",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Oryctolagus_cuniculus_-_euqirneto_-_419737670_%28cropped%29.jpeg/330px-Oryctolagus_cuniculus_-_euqirneto_-_419737670_%28cropped%29.jpeg"
  },
  {
    "name": "HARE",
    "emoji": "🐇",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/European_hare_%28_Lepus_europaeus%29.jpg/330px-European_hare_%28_Lepus_europaeus%29.jpg"
  },
  {
    "name": "MOUSE",
    "emoji": "🐁",
    "category": "beast",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Mouse_white_background.jpg"
  },
  {
    "name": "RAT",
    "emoji": "🐀",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Brown_Rat_%28Rattus_norvegicus%29.jpg/330px-Brown_Rat_%28Rattus_norvegicus%29.jpg"
  },
  {
    "name": "HAMSTER",
    "emoji": "🐹",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Golden_hamster_front_1.jpg/330px-Golden_hamster_front_1.jpg"
  },
  {
    "name": "GUINEA PIG",
    "emoji": "🐹",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/George_the_amazing_guinea_pig.jpg/330px-George_the_amazing_guinea_pig.jpg"
  },
  {
    "name": "PORCUPINE",
    "emoji": "🦔",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/North_American_porcupine_%28Erethizon_dorsatum_nigrescens%29_Yoho.jpg/330px-North_American_porcupine_%28Erethizon_dorsatum_nigrescens%29_Yoho.jpg"
  },
  {
    "name": "HEDGEHOG",
    "emoji": "🦔",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Erinaceus_europaeus_LC0119.jpg/330px-Erinaceus_europaeus_LC0119.jpg"
  },
  {
    "name": "BAT",
    "emoji": "🦇",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Big-eared-townsend-fledermaus.jpg/330px-Big-eared-townsend-fledermaus.jpg"
  },
  {
    "name": "SLOTH",
    "emoji": "🦥",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Bicho-pregui%C3%A7a_3.jpg/330px-Bicho-pregui%C3%A7a_3.jpg"
  },
  {
    "name": "ANTEATER",
    "emoji": "🦔",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Myresluger2.jpg/330px-Myresluger2.jpg"
  },
  {
    "name": "ARMADILLO",
    "emoji": "🦔",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Dasypus_novemcinctus_en_Zool%C3%B3gico_de_Paraguan%C3%A1.jpg/330px-Dasypus_novemcinctus_en_Zool%C3%B3gico_de_Paraguan%C3%A1.jpg"
  },
  {
    "name": "CAMEL",
    "emoji": "🐫",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Camelus_dromedarius_in_Nuweiba.jpg/330px-Camelus_dromedarius_in_Nuweiba.jpg"
  },
  {
    "name": "HORSE",
    "emoji": "🐎",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Nokota_Horses_cropped.jpg/330px-Nokota_Horses_cropped.jpg"
  },
  {
    "name": "DONKEY",
    "emoji": "🫏",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg/330px-Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg"
  },
  {
    "name": "BULL",
    "emoji": "🐂",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/A_Friesian_Bull%2C_Llandeilo_Graban_-_geograph.org.uk_-_579885.jpg/330px-A_Friesian_Bull%2C_Llandeilo_Graban_-_geograph.org.uk_-_579885.jpg"
  },
  {
    "name": "COW",
    "emoji": "🐄",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg/330px-Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg"
  },
  {
    "name": "BUFFALO",
    "emoji": "🐃",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/African_buffalo_%28Syncerus_caffer_caffer%29_male_with_cattle_egret.jpg/330px-African_buffalo_%28Syncerus_caffer_caffer%29_male_with_cattle_egret.jpg"
  },
  {
    "name": "BISON",
    "emoji": "🦬",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/American_bison_k5680-1.jpg/330px-American_bison_k5680-1.jpg"
  },
  {
    "name": "GOAT",
    "emoji": "🐐",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/330px-Hausziege_04.jpg"
  },
  {
    "name": "SHEEP",
    "emoji": "🐑",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Flock_of_sheep.jpg/330px-Flock_of_sheep.jpg"
  },
  {
    "name": "PIG",
    "emoji": "🐖",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Pig_farm_Vampula_1.jpg/330px-Pig_farm_Vampula_1.jpg"
  },
  {
    "name": "DOG",
    "emoji": "🐕",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Huskiesatrest.jpg/330px-Huskiesatrest.jpg"
  },
  {
    "name": "CAT",
    "emoji": "🐈",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Siam_lilacpoint.jpg/330px-Siam_lilacpoint.jpg"
  },
  {
    "name": "OTTER",
    "emoji": "🦦",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Fischotter%2C_Lutra_Lutra.JPG/330px-Fischotter%2C_Lutra_Lutra.JPG"
  },
  {
    "name": "BEAVER",
    "emoji": "🦫",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/330px-American_Beaver.jpg"
  },
  {
    "name": "RACCOON",
    "emoji": "🦝",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg/330px-Raccoon_in_Central_Park_%2835264%29.jpg"
  },
  {
    "name": "SKUNK",
    "emoji": "🦨",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Skunk_about_to_spray.jpg/330px-Skunk_about_to_spray.jpg"
  },
  {
    "name": "MEERKAT",
    "emoji": "🦦",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Meerkat_%28Suricata_suricatta%29_Tswalu.jpg/330px-Meerkat_%28Suricata_suricatta%29_Tswalu.jpg"
  },
  {
    "name": "MONGOOSE",
    "emoji": "🦦",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Dwarf_Mongoose_%28Helogale_parvula%29_%286002158282%29.jpg/330px-Dwarf_Mongoose_%28Helogale_parvula%29_%286002158282%29.jpg"
  },
  {
    "name": "BADGER",
    "emoji": "🦡",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/European_badger_%28Meles_meles_taxus%29_Drenthe.jpg/330px-European_badger_%28Meles_meles_taxus%29_Drenthe.jpg"
  },
  {
    "name": "WEASEL",
    "emoji": "🦡",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Mustela_nivalis_-British_Wildlife_Centre-4.jpg/330px-Mustela_nivalis_-British_Wildlife_Centre-4.jpg"
  },
  {
    "name": "CROCODILE",
    "emoji": "🐊",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/NileCrocodile.jpg/330px-NileCrocodile.jpg"
  },
  {
    "name": "ALLIGATOR",
    "emoji": "🐊",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/American_Alligator.jpg/330px-American_Alligator.jpg"
  },
  {
    "name": "SNAKE",
    "emoji": "🐍",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Thamnophis_sirtalis_sirtalis_Wooster.jpg/330px-Thamnophis_sirtalis_sirtalis_Wooster.jpg"
  },
  {
    "name": "PYTHON",
    "emoji": "🐍",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Ball_python_lucy.JPG/330px-Ball_python_lucy.JPG"
  },
  {
    "name": "COBRA",
    "emoji": "🐍",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg/330px-12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg"
  },
  {
    "name": "VIPER",
    "emoji": "🐍",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Common_European_viper_%28Vipera_berus%29_female_Pieniny.jpg/330px-Common_European_viper_%28Vipera_berus%29_female_Pieniny.jpg"
  },
  {
    "name": "LIZARD",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Lacerta_agilis_male_2014_G1.jpg/330px-Lacerta_agilis_male_2014_G1.jpg"
  },
  {
    "name": "CHAMELEON",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Yemen_Chameleon.jpg/330px-Yemen_Chameleon.jpg"
  },
  {
    "name": "GECKO",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/330px-Eublepharis_macularius_2009_G6.jpg"
  },
  {
    "name": "IGUANA",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Iguana_iguana_%28male_resting%29.jpg/330px-Iguana_iguana_%28male_resting%29.jpg"
  },
  {
    "name": "TURTLE",
    "emoji": "🐢",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Painted_turtle_%28Chrysemys_picta%29_Madden_Haag.jpg/330px-Painted_turtle_%28Chrysemys_picta%29_Madden_Haag.jpg"
  },
  {
    "name": "TORTOISE",
    "emoji": "🐢",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Giant_Tortoise.JPG/330px-Giant_Tortoise.JPG"
  },
  {
    "name": "FROG",
    "emoji": "🐸",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/European_Common_Frog_Rana_temporaria.jpg/330px-European_Common_Frog_Rana_temporaria.jpg"
  },
  {
    "name": "TOAD",
    "emoji": "🐸",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Common_Toad_Cornwall.jpeg/330px-Common_Toad_Cornwall.jpeg"
  },
  {
    "name": "SALAMANDER",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Salamandra_salamandra_MHNT_1.jpg/330px-Salamandra_salamandra_MHNT_1.jpg"
  },
  {
    "name": "NEWT",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Triturus_vulgaris_maennchen_cropped.jpg/330px-Triturus_vulgaris_maennchen_cropped.jpg"
  },
  {
    "name": "EAGLE",
    "emoji": "🦅",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg/330px-Bald_eagle_about_to_fly_in_Alaska_%282016%29.jpg"
  },
  {
    "name": "HAWK",
    "emoji": "🦅",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Red-tailed_Hawk_%2845812546121%29.jpg/330px-Red-tailed_Hawk_%2845812546121%29.jpg"
  },
  {
    "name": "FALCON",
    "emoji": "🦅",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Falco_peregrinus_m_Humber_Bay_Park_Toronto.jpg/330px-Falco_peregrinus_m_Humber_Bay_Park_Toronto.jpg"
  },
  {
    "name": "OWL",
    "emoji": "🦉",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/American_Barn_Owl_%28Tyto_furcata_guatemalae%29%2C_Orange_Walk.jpg/330px-American_Barn_Owl_%28Tyto_furcata_guatemalae%29%2C_Orange_Walk.jpg"
  },
  {
    "name": "PARROT",
    "emoji": "🦜",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Scarlet_macaw_%28Ara_macao_cyanopterus%29_Copan.jpg/330px-Scarlet_macaw_%28Ara_macao_cyanopterus%29_Copan.jpg"
  },
  {
    "name": "PEACOCK",
    "emoji": "🦚",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Peacock_on_tree_%2852077240794%29.jpg/330px-Peacock_on_tree_%2852077240794%29.jpg"
  },
  {
    "name": "PENGUIN",
    "emoji": "🐧",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg/330px-Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg"
  },
  {
    "name": "OSTRICH",
    "emoji": "🦤",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Struthio_camelus_-_Etosha_2014_%283%29.jpg/330px-Struthio_camelus_-_Etosha_2014_%283%29.jpg"
  },
  {
    "name": "EMU",
    "emoji": "🦤",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Emu_1_-_Tidbinbilla.jpg/330px-Emu_1_-_Tidbinbilla.jpg"
  },
  {
    "name": "FLAMINGO",
    "emoji": "🦩",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/010_Greater_flamingos_male_and_female_in_the_Camargue_during_mating_season_Photo_by_Giles_Laurent.jpg/330px-010_Greater_flamingos_male_and_female_in_the_Camargue_during_mating_season_Photo_by_Giles_Laurent.jpg"
  },
  {
    "name": "SWAN",
    "emoji": "🦢",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/CygneVaires.jpg/330px-CygneVaires.jpg"
  },
  {
    "name": "DUCK",
    "emoji": "🦆",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/330px-Anas_platyrhynchos_male_female_quadrat.jpg"
  },
  {
    "name": "GOOSE",
    "emoji": "🪿",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Greylag_Goose_-_St_James%27s_Park%2C_London_-_Nov_2006.jpg/330px-Greylag_Goose_-_St_James%27s_Park%2C_London_-_Nov_2006.jpg"
  },
  {
    "name": "HEN",
    "emoji": "🐔",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Male_and_female_chicken_sitting_together.jpg/330px-Male_and_female_chicken_sitting_together.jpg"
  },
  {
    "name": "ROOSTER",
    "emoji": "🐓",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Male_and_female_chicken_sitting_together.jpg/330px-Male_and_female_chicken_sitting_together.jpg"
  },
  {
    "name": "TURKEY",
    "emoji": "🦃",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/20260428_tom_wild_turkey_matthaei_botanical_gardens_PD08952.jpg/330px-20260428_tom_wild_turkey_matthaei_botanical_gardens_PD08952.jpg"
  },
  {
    "name": "PIGEON",
    "emoji": "🐦",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Columba_livia_%28Rock_Dove%2C_wild%29%2C_Duncansby_Head%2C_Caithness%2C_Scotland_1.jpg/330px-Columba_livia_%28Rock_Dove%2C_wild%29%2C_Duncansby_Head%2C_Caithness%2C_Scotland_1.jpg"
  },
  {
    "name": "SPARROW",
    "emoji": "🐦",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/House_sparrow_male_in_Prospect_Park_%2853532%29.jpg/330px-House_sparrow_male_in_Prospect_Park_%2853532%29.jpg"
  },
  {
    "name": "CROW",
    "emoji": "🐦‍⬛",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Carrion_crow_2022_04_05_05_02.jpg/330px-Carrion_crow_2022_04_05_05_02.jpg"
  },
  {
    "name": "RAVEN",
    "emoji": "🐦‍⬛",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Corvus_corax_clarionensis%2C_Point_Reyes_National_Seashore.jpg/330px-Corvus_corax_clarionensis%2C_Point_Reyes_National_Seashore.jpg"
  },
  {
    "name": "KINGFISHER",
    "emoji": "🐦",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Alcedo_atthis_-England-8_%28cropped%29.jpg/330px-Alcedo_atthis_-England-8_%28cropped%29.jpg"
  },
  {
    "name": "WOODPECKER",
    "emoji": "🐦",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Great_spotted_woodpecker_%28Dendrocopos_major%29_male_Drenthe.jpg/330px-Great_spotted_woodpecker_%28Dendrocopos_major%29_male_Drenthe.jpg"
  },
  {
    "name": "HUMMINGBIRD",
    "emoji": "🐦",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Archilochus_colubris_-flying_-male-8.jpg/330px-Archilochus_colubris_-flying_-male-8.jpg"
  },
  {
    "name": "SEAGULL",
    "emoji": "🕊️",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/European_herring_gull_vocalizing_%2800170%29.jpg/330px-European_herring_gull_vocalizing_%2800170%29.jpg"
  },
  {
    "name": "DOLPHIN",
    "emoji": "🐬",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Tursiops_truncatus_01-cropped.jpg/330px-Tursiops_truncatus_01-cropped.jpg"
  },
  {
    "name": "WHALE",
    "emoji": "🐋",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Humpback_whale_breaching_off_Cabo_San_Lucas.jpg/330px-Humpback_whale_breaching_off_Cabo_San_Lucas.jpg"
  },
  {
    "name": "SHARK",
    "emoji": "🦈",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/330px-White_shark.jpg"
  },
  {
    "name": "OCTOPUS",
    "emoji": "🐙",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/330px-Octopus2.jpg"
  },
  {
    "name": "SQUID",
    "emoji": "🦑",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Loligo_vulgaris.jpg/330px-Loligo_vulgaris.jpg"
  },
  {
    "name": "JELLYFISH",
    "emoji": "🪼",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Aurelia_aurita_%28Cnidaria%29_Luc_Viatour.jpg/330px-Aurelia_aurita_%28Cnidaria%29_Luc_Viatour.jpg"
  },
  {
    "name": "STARFISH",
    "emoji": "⭐",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Starfish_montage.png/330px-Starfish_montage.png"
  },
  {
    "name": "SEAHORSE",
    "emoji": "🐡",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Hippocampus_hippocampus_%28on_Ascophyllum_nodosum%29.jpg/330px-Hippocampus_hippocampus_%28on_Ascophyllum_nodosum%29.jpg"
  },
  {
    "name": "STINGRAY",
    "emoji": "🦈",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Black_sea_fauna_stingray_01.jpg/330px-Black_sea_fauna_stingray_01.jpg"
  },
  {
    "name": "EEL",
    "emoji": "🐍",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Anguilla_anguilla.jpg/330px-Anguilla_anguilla.jpg"
  },
  {
    "name": "TUNA",
    "emoji": "🐟",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Bluefin-big.jpg/330px-Bluefin-big.jpg"
  },
  {
    "name": "SALMON",
    "emoji": "🐟",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Wst_atlantischer_lachs_stoer_001.jpg/330px-Wst_atlantischer_lachs_stoer_001.jpg"
  },
  {
    "name": "SWORDFISH",
    "emoji": "🐟",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Xiphias_gladius_Linnaeus%2C_1758_2599925021.jpg/330px-Xiphias_gladius_Linnaeus%2C_1758_2599925021.jpg"
  },
  {
    "name": "CRAB",
    "emoji": "🦀",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/DungenessCrab.jpg/330px-DungenessCrab.jpg"
  },
  {
    "name": "LOBSTER",
    "emoji": "🦞",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/KreeftbijDenOsse.jpg/330px-KreeftbijDenOsse.jpg"
  },
  {
    "name": "SHRIMP",
    "emoji": "🦐",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Heterocarpus_ensifer.jpg/330px-Heterocarpus_ensifer.jpg"
  },
  {
    "name": "PRAWN",
    "emoji": "🦐",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Shrimp_body.jpg/330px-Shrimp_body.jpg"
  },
  {
    "name": "CLAM",
    "emoji": "🦪",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/LittleNeck_clams_USDA96c1862.jpg/330px-LittleNeck_clams_USDA96c1862.jpg"
  },
  {
    "name": "OYSTER",
    "emoji": "🦪",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Crassostrea_gigas_p1040847.jpg/330px-Crassostrea_gigas_p1040847.jpg"
  },
  {
    "name": "SEA TURTLE",
    "emoji": "🐢",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg/330px-Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg"
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
  return found ? found.emoji : '🐾';
}

export function getCardRealImage(cardName?: string): string | undefined {
  if (!cardName) return undefined;
  const found = PREDEFINED_CARD_SYMBOLS.find(
    s => s.name.toUpperCase() === cardName.trim().toUpperCase()
  );
  return found ? found.imageUrl : undefined;
}

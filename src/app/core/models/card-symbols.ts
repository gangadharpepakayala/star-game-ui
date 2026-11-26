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
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg/330px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg"
  },
  {
    "name": "LION",
    "emoji": "🦁",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/330px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg"
  },
  {
    "name": "PANTHER",
    "emoji": "🐆",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Black_Panther_-_India.jpg/330px-Black_Panther_-_India.jpg"
  },
  {
    "name": "JAGUAR",
    "emoji": "🐆",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/330px-Standing_jaguar.jpg"
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
    "name": "PUMA",
    "emoji": "🐈‍⬛",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/330px-Mountain_Lion_in_Glacier_National_Park.jpg"
  },
  {
    "name": "OCELOT",
    "emoji": "🐱",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/016_Ocelot_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent.jpg/330px-016_Ocelot_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent.jpg"
  },
  {
    "name": "LYNX",
    "emoji": "🐱",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Lynx_Nationalpark_Bayerischer_Wald_01.jpg/330px-Lynx_Nationalpark_Bayerischer_Wald_01.jpg"
  },
  {
    "name": "GORILLA",
    "emoji": "🦍",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg/330px-Gorille_des_plaines_de_l%27ouest_%C3%A0_l%27Espace_Zoologique.jpg"
  },
  {
    "name": "ORANGUTAN",
    "emoji": "🦧",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG/330px-Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG"
  },
  {
    "name": "CHIMP",
    "emoji": "🐵",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/015_Chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg/330px-015_Chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg"
  },
  {
    "name": "MONKEY",
    "emoji": "🐒",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Ubud_Monkey_Family.jpg/330px-Ubud_Monkey_Family.jpg"
  },
  {
    "name": "BABOON",
    "emoji": "🐵",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Olive_baboon_Ngorongoro.jpg/330px-Olive_baboon_Ngorongoro.jpg"
  },
  {
    "name": "LEMUR",
    "emoji": "🦊",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Coquerel%27s_sifaka_%28Propithecus_coquereli%29.jpg/330px-Coquerel%27s_sifaka_%28Propithecus_coquereli%29.jpg"
  },
  {
    "name": "ELEPHANT",
    "emoji": "🐘",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/330px-African_Bush_Elephant.jpg"
  },
  {
    "name": "RHINO",
    "emoji": "🦏",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/081_White_rhinoceros_%28male%29_in_the_Kalahari_Desert_of_Namibia_Photo_by_Giles_Laurent.jpg/330px-081_White_rhinoceros_%28male%29_in_the_Kalahari_Desert_of_Namibia_Photo_by_Giles_Laurent.jpg"
  },
  {
    "name": "HIPPO",
    "emoji": "🦛",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Portrait_Hippopotamus_in_the_water.jpg/330px-Portrait_Hippopotamus_in_the_water.jpg"
  },
  {
    "name": "BUFFALO",
    "emoji": "🦬",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/African_buffalo_%28Syncerus_caffer_caffer%29_male_with_cattle_egret.jpg/330px-African_buffalo_%28Syncerus_caffer_caffer%29_male_with_cattle_egret.jpg"
  },
  {
    "name": "ZEBRA",
    "emoji": "🦓",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Equus_quagga_burchellii_-_Etosha%2C_2014.jpg/330px-Equus_quagga_burchellii_-_Etosha%2C_2014.jpg"
  },
  {
    "name": "GIRAFFE",
    "emoji": "🦒",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/330px-Giraffe_Mikumi_National_Park.jpg"
  },
  {
    "name": "TAPIR",
    "emoji": "🐗",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Tapiridae.png/330px-Tapiridae.png"
  },
  {
    "name": "WARTHOG",
    "emoji": "🐗",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Southern_warthog_%28Phacochoerus_africanus_sundevallii%29_male.jpg/330px-Southern_warthog_%28Phacochoerus_africanus_sundevallii%29_male.jpg"
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
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Tamandu%C3%A1-bandeira_no_Parque_Nacional_da_Serra_da_Canastra_%28cropped%29.jpg/330px-Tamandu%C3%A1-bandeira_no_Parque_Nacional_da_Serra_da_Canastra_%28cropped%29.jpg"
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
    "name": "KOALA",
    "emoji": "🐨",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/330px-Koala_climbing_tree.jpg"
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
    "name": "BADGER",
    "emoji": "🦡",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/European_badger_%28Meles_meles_taxus%29_Drenthe.jpg/330px-European_badger_%28Meles_meles_taxus%29_Drenthe.jpg"
  },
  {
    "name": "HEDGEHOG",
    "emoji": "🦔",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Erinaceus_europaeus_LC0119.jpg/330px-Erinaceus_europaeus_LC0119.jpg"
  },
  {
    "name": "DEER",
    "emoji": "🦌",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Cervus_elaphus_Luc_Viatour_6.jpg/330px-Cervus_elaphus_Luc_Viatour_6.jpg"
  },
  {
    "name": "GAZELLE",
    "emoji": "🦌",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Chinkara_in_Tal_Chhapar_Sanctuary_November_2025_by_Tisha_Mukherjee_01.jpg/330px-Chinkara_in_Tal_Chhapar_Sanctuary_November_2025_by_Tisha_Mukherjee_01.jpg"
  },
  {
    "name": "KANGAROO",
    "emoji": "🦘",
    "category": "beast",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Forester_kangaroo_%28Macropus_giganteus_tasmaniensis%29_juvenile_hopping_Esk_Valley.jpg/330px-Forester_kangaroo_%28Macropus_giganteus_tasmaniensis%29_juvenile_hopping_Esk_Valley.jpg"
  },
  {
    "name": "EAGLE",
    "emoji": "🦅",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/330px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg"
  },
  {
    "name": "FALCON",
    "emoji": "🦅",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Falco_peregrinus_m_Humber_Bay_Park_Toronto.jpg/330px-Falco_peregrinus_m_Humber_Bay_Park_Toronto.jpg"
  },
  {
    "name": "HAWK",
    "emoji": "🦅",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Northern_Goshawk_ad_M2.jpg/330px-Northern_Goshawk_ad_M2.jpg"
  },
  {
    "name": "OWL",
    "emoji": "🦉",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/American_Barn_Owl_%28Tyto_furcata_guatemalae%29%2C_Orange_Walk.jpg/330px-American_Barn_Owl_%28Tyto_furcata_guatemalae%29%2C_Orange_Walk.jpg"
  },
  {
    "name": "TOUCAN",
    "emoji": "🦜",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/006_Toco_toucan_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent_%28cropped%29.jpg/330px-006_Toco_toucan_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent_%28cropped%29.jpg"
  },
  {
    "name": "PARROT",
    "emoji": "🦜",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Rainbow_lorikeet_%28Trichoglossus_moluccanus_moluccanus%29_Sydney.jpg/330px-Rainbow_lorikeet_%28Trichoglossus_moluccanus_moluccanus%29_Sydney.jpg"
  },
  {
    "name": "MACAW",
    "emoji": "🦜",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Scarlet_macaw_%28Ara_macao_cyanopterus%29_Copan.jpg/330px-Scarlet_macaw_%28Ara_macao_cyanopterus%29_Copan.jpg"
  },
  {
    "name": "PEACOCK",
    "emoji": "🦚",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Peacock_Plumage.jpg/330px-Peacock_Plumage.jpg"
  },
  {
    "name": "FLAMINGO",
    "emoji": "🦩",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/010_Greater_flamingos_male_and_female_in_the_Camargue_during_mating_season_Photo_by_Giles_Laurent.jpg/330px-010_Greater_flamingos_male_and_female_in_the_Camargue_during_mating_season_Photo_by_Giles_Laurent.jpg"
  },
  {
    "name": "HORNBILL",
    "emoji": "🦜",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Great_hornbill_Photograph_by_Shantanu_Kuveskar.jpg/330px-Great_hornbill_Photograph_by_Shantanu_Kuveskar.jpg"
  },
  {
    "name": "HERON",
    "emoji": "🦩",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Il_pescatore_solitario.jpg/330px-Il_pescatore_solitario.jpg"
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
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/PileatedWoodpeckerFeedingonTree%2C_crop.jpg/330px-PileatedWoodpeckerFeedingonTree%2C_crop.jpg"
  },
  {
    "name": "SWAN",
    "emoji": "🦢",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/CygneVaires.jpg/330px-CygneVaires.jpg"
  },
  {
    "name": "PELICAN",
    "emoji": "🦤",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Great_white_pelican_%28Pelecanus_onocrotalus%29.jpg/330px-Great_white_pelican_%28Pelecanus_onocrotalus%29.jpg"
  },
  {
    "name": "OSTRICH",
    "emoji": "🦤",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Struthio_camelus_-_Etosha_2014_%283%29.jpg/330px-Struthio_camelus_-_Etosha_2014_%283%29.jpg"
  },
  {
    "name": "CONDOR",
    "emoji": "🦅",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/AndeanCondorMale.jpg/330px-AndeanCondorMale.jpg"
  },
  {
    "name": "HUMMINGBIRD",
    "emoji": "🐦",
    "category": "bird",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Trinidad_and_Tobago_hummingbirds_composite.jpg/330px-Trinidad_and_Tobago_hummingbirds_composite.jpg"
  },
  {
    "name": "COBRA",
    "emoji": "🐍",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg/330px-12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg"
  },
  {
    "name": "PYTHON",
    "emoji": "🐍",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Python_molurus_molurus_2.jpg/330px-Python_molurus_molurus_2.jpg"
  },
  {
    "name": "VIPER",
    "emoji": "🐍",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Viperidae-01.jpg/330px-Viperidae-01.jpg"
  },
  {
    "name": "ANACONDA",
    "emoji": "🐍",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Sucuri_verde.jpg/330px-Sucuri_verde.jpg"
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
    "name": "CHAMELEON",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Panther_Chameleon_738367_%28cropped%29.jpg/330px-Panther_Chameleon_738367_%28cropped%29.jpg"
  },
  {
    "name": "IGUANA",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Iguana_iguana_%28male_resting%29.jpg/330px-Iguana_iguana_%28male_resting%29.jpg"
  },
  {
    "name": "GECKO",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Phelsuma_l._laticauda.jpg/330px-Phelsuma_l._laticauda.jpg"
  },
  {
    "name": "KOMODO",
    "emoji": "🦎",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/202306_Varanus_komodoensis.jpg/330px-202306_Varanus_komodoensis.jpg"
  },
  {
    "name": "TURTLE",
    "emoji": "🐢",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg/330px-Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg"
  },
  {
    "name": "TORTOISE",
    "emoji": "🐢",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Giant_Tortoise.JPG/330px-Giant_Tortoise.JPG"
  },
  {
    "name": "TREEFROG",
    "emoji": "🐸",
    "category": "reptile",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Laubfrosch_cropped.jpg/330px-Laubfrosch_cropped.jpg"
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
    "name": "LOTUS",
    "emoji": "🪷",
    "category": "nature",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Sacred_lotus_Nelumbo_nucifera.jpg/330px-Sacred_lotus_Nelumbo_nucifera.jpg"
  },
  {
    "name": "ORCHID",
    "emoji": "🌸",
    "category": "nature",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Plant_Orchid_Cymbidium_aloifolium_P1110661_05_-_cropped.jpg/330px-Plant_Orchid_Cymbidium_aloifolium_P1110661_05_-_cropped.jpg"
  },
  {
    "name": "HIBISCUS",
    "emoji": "🌺",
    "category": "nature",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Hibiscus_flower_TZ.jpg/330px-Hibiscus_flower_TZ.jpg"
  },
  {
    "name": "BAMBOO",
    "emoji": "🎍",
    "category": "nature",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Bamboo_forest.jpg/330px-Bamboo_forest.jpg"
  },
  {
    "name": "PALM",
    "emoji": "🌴",
    "category": "nature",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/1859-Martinique.web.jpg/330px-1859-Martinique.web.jpg"
  },
  {
    "name": "FERN",
    "emoji": "🌿",
    "category": "nature",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/The_ferns_of_Great_Britain%2C_and_their_allies_the_club-mosses%2C_pepperworts%2C_and_horsetails_%28Pl._2%29_%288515393495%29.jpg/330px-The_ferns_of_Great_Britain%2C_and_their_allies_the_club-mosses%2C_pepperworts%2C_and_horsetails_%28Pl._2%29_%288515393495%29.jpg"
  },
  {
    "name": "MUSHROOM",
    "emoji": "🍄",
    "category": "nature",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg/330px-Sparrige_Sch%C3%BCppling_%28Pholiota_squarrosa%29.jpg"
  },
  {
    "name": "VINE",
    "emoji": "🪴",
    "category": "nature",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/%22A_Momordica_charantia-_bitter_guard_plant%22.jpg/330px-%22A_Momordica_charantia-_bitter_guard_plant%22.jpg"
  },
  {
    "name": "BAOBAB",
    "emoji": "🌳",
    "category": "nature",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Baobab_Adansonia_digitata.jpg/330px-Baobab_Adansonia_digitata.jpg"
  },
  {
    "name": "BANYAN",
    "emoji": "🌳",
    "category": "nature",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Big_Banyan_Tree_at_Bangalore.jpg/330px-Big_Banyan_Tree_at_Bangalore.jpg"
  },
  {
    "name": "CACTUS",
    "emoji": "🌵",
    "category": "nature",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Various_Cactaceae.jpg/330px-Various_Cactaceae.jpg"
  },
  {
    "name": "JUNGLE",
    "emoji": "🌴",
    "category": "nature",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/%E1%9E%96%E1%9F%92%E1%9E%9A%E1%9F%83%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%96%E1%9E%BB%E1%9E%87%E1%9E%B6.jpg/330px-%E1%9E%96%E1%9F%92%E1%9E%9A%E1%9F%83%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%96%E1%9E%BB%E1%9E%87%E1%9E%B6.jpg"
  },
  {
    "name": "FIRE",
    "emoji": "🔥",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Large_bonfire.jpg/330px-Large_bonfire.jpg"
  },
  {
    "name": "WATER",
    "emoji": "💧",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/H2O_2D_labelled.svg/330px-H2O_2D_labelled.svg.png"
  },
  {
    "name": "EARTH",
    "emoji": "🪨",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Stagnogley.JPG/330px-Stagnogley.JPG"
  },
  {
    "name": "WIND",
    "emoji": "💨",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Cherry_tree_moving_in_the_wind_1.gif/330px-Cherry_tree_moving_in_the_wind_1.gif"
  },
  {
    "name": "THUNDER",
    "emoji": "⚡",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg/330px-Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg"
  },
  {
    "name": "LIGHTNING",
    "emoji": "⚡",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg/330px-Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg"
  },
  {
    "name": "VOLCANO",
    "emoji": "🌋",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Augustine_volcano_Jan_24_2006_-_Cyrus_Read.jpg/330px-Augustine_volcano_Jan_24_2006_-_Cyrus_Read.jpg"
  },
  {
    "name": "ICE",
    "emoji": "🧊",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Ice_Block%2C_Canal_Park%2C_Duluth_%2832752478892%29.jpg/330px-Ice_Block%2C_Canal_Park%2C_Duluth_%2832752478892%29.jpg"
  },
  {
    "name": "STORM",
    "emoji": "🌩️",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Cloud_cumulonimbus_at_baltic_sea%281%29.jpg/330px-Cloud_cumulonimbus_at_baltic_sea%281%29.jpg"
  },
  {
    "name": "WAVE",
    "emoji": "🌊",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Porto_Covo_Outubro_2014-3.jpg/330px-Porto_Covo_Outubro_2014-3.jpg"
  },
  {
    "name": "METEOR",
    "emoji": "☄️",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Meteoroid_meteor_meteorite.gif/330px-Meteoroid_meteor_meteorite.gif"
  },
  {
    "name": "SUN",
    "emoji": "☀️",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/The_Sun_in_white_light.jpg/330px-The_Sun_in_white_light.jpg"
  },
  {
    "name": "MOON",
    "emoji": "🌙",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/330px-FullMoon2010.jpg"
  },
  {
    "name": "STAR",
    "emoji": "⭐",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/The_Sun_in_white_light.jpg/330px-The_Sun_in_white_light.jpg"
  },
  {
    "name": "COMET",
    "emoji": "💫",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Comet_Hale-Bopp_1995O1.jpg/330px-Comet_Hale-Bopp_1995O1.jpg"
  },
  {
    "name": "RAINBOW",
    "emoji": "🌈",
    "category": "element",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Double-alaskan-rainbow.jpg/330px-Double-alaskan-rainbow.jpg"
  },
  {
    "name": "EMERALD",
    "emoji": "💎",
    "category": "treasure",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/B%C3%A9ryl_var._%C3%A9meraude_sur_gangue_%28Muzo_Mine_Boyaca_-_Colombie%29_2.jpg/330px-B%C3%A9ryl_var._%C3%A9meraude_sur_gangue_%28Muzo_Mine_Boyaca_-_Colombie%29_2.jpg"
  },
  {
    "name": "RUBY",
    "emoji": "♦️",
    "category": "treasure",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Corundum-215330.jpg/330px-Corundum-215330.jpg"
  },
  {
    "name": "SAPPHIRE",
    "emoji": "🔷",
    "category": "treasure",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Logan_Sapphire_10956420_cropped.png/330px-Logan_Sapphire_10956420_cropped.png"
  },
  {
    "name": "DIAMOND",
    "emoji": "💎",
    "category": "treasure",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Rough_Diamond.jpg/330px-Rough_Diamond.jpg"
  },
  {
    "name": "AMETHYST",
    "emoji": "🔮",
    "category": "treasure",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Amatista_Laye_2.jpg/330px-Amatista_Laye_2.jpg"
  },
  {
    "name": "TOPAZ",
    "emoji": "🔶",
    "category": "treasure",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Topaze%2C_quartz_fum%C3%A9_1.jpg/330px-Topaze%2C_quartz_fum%C3%A9_1.jpg"
  },
  {
    "name": "JADE",
    "emoji": "🟢",
    "category": "treasure",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Jadestein.jpg/330px-Jadestein.jpg"
  },
  {
    "name": "AMULET",
    "emoji": "🧿",
    "category": "treasure",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Cheshm-Nazar.JPG/330px-Cheshm-Nazar.JPG"
  },
  {
    "name": "TALISMAN",
    "emoji": "🪙",
    "category": "treasure",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Talisman_de_Charlemagne_Tau.jpg/330px-Talisman_de_Charlemagne_Tau.jpg"
  },
  {
    "name": "TOTEM",
    "emoji": "🗿",
    "category": "treasure",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Totem_RMBC_1.jpg/330px-Totem_RMBC_1.jpg"
  },
  {
    "name": "CROWN",
    "emoji": "👑",
    "category": "treasure",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Saint_Edward%27s_Crown.jpg/330px-Saint_Edward%27s_Crown.jpg"
  },
  {
    "name": "SHIELD",
    "emoji": "🛡️",
    "category": "treasure",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/The_uncivilized_races_of_men_in_all_countries_of_the_world%3B_being_a_comprehensive_account_of_their_manners_and_customs%2C_and_of_their_physical%2C_social%2C_mental%2C_moral_and_religious_characteristics._By_%2814762645001%29.jpg/330px-thumbnail.jpg"
  },
  {
    "name": "DRAGON",
    "emoji": "🐉",
    "category": "mythical",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/St_Catherine%2C_St_George_and_the_Dragon_%28M%C3%A4staren_fr%C3%A5n_Kappenberg%29_-_Nationalmuseum_-_18337_%28brightened%29%2C_draken.png/330px-St_Catherine%2C_St_George_and_the_Dragon_%28M%C3%A4staren_fr%C3%A5n_Kappenberg%29_-_Nationalmuseum_-_18337_%28brightened%29%2C_draken.png"
  },
  {
    "name": "PHOENIX",
    "emoji": "🦅",
    "category": "mythical",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Phoenix_%281583%29.svg/330px-Phoenix_%281583%29.svg.png"
  },
  {
    "name": "GRIFFIN",
    "emoji": "🦁",
    "category": "mythical",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Knossos_fresco_in_throne_palace.JPG/330px-Knossos_fresco_in_throne_palace.JPG"
  },
  {
    "name": "PEGASUS",
    "emoji": "🦄",
    "category": "mythical",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Lakonian_Black-Figure_Kylix%3B_detached_fragments.jpg/330px-Lakonian_Black-Figure_Kylix%3B_detached_fragments.jpg"
  },
  {
    "name": "HYDRA",
    "emoji": "🐍",
    "category": "mythical",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Lernaean_Hydra_Getty_Villa_83.AE.346.jpg/330px-Lernaean_Hydra_Getty_Villa_83.AE.346.jpg"
  },
  {
    "name": "UNICORN",
    "emoji": "🦄",
    "category": "mythical",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Oftheunicorn.jpg/330px-Oftheunicorn.jpg"
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

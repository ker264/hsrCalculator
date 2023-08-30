export enum possibleClass {
  destruction = "Destruction",
  hunt = "Hunt",
  erudition = "Erudition",
  harmony = "Harmony",
  nihility = "Nihility",
  preservation = "Preservation",
  abundance = "Abundance",
}

export enum rarity {
  blue = "blue",
  purple = "purple",
  gold = "gold",
}

export const allBaseStats = [
  {
    name: "Arlan",
    SPEED: 102,
    ENERGY: 110,
    HP: [163, 318, 383, 465, 530, 612, 677, 758, 824, 905, 971, 1052, 1117, 1199],
    ATK: [81, 159, 191, 232, 265, 306, 338, 379, 412, 452, 485, 526, 558, 599],
    DEF: [45, 87, 105, 128, 146, 168, 186, 209, 227, 249, 267, 290, 308, 330],
    rarity: rarity.purple,
    class: possibleClass.destruction,
  },
  {
    name: "Asta",
    SPEED: 106,
    ENERGY: 120,
    HP: [139, 271, 327, 396, 452, 522, 577, 647, 702, 772, 828, 897, 953, 1023],
    ATK: [69, 135, 163, 198, 226, 261, 288, 323, 351, 386, 414, 448, 476, 511],
    DEF: [63, 122, 148, 179, 204, 236, 261, 292, 318, 349, 374, 406, 431, 463],
    rarity: rarity.purple,
    class: possibleClass.harmony,
  },
  {
    name: "Bailu",
    SPEED: 98,
    ENERGY: 100,
    HP: [179, 350, 421, 511, 583, 673, 745, 834, 906, 996, 1068, 1157, 1229, 1319],
    ATK: [76, 149, 179, 218, 248, 287, 317, 356, 386, 424, 455, 493, 524, 562],
    DEF: [66, 128, 155, 188, 214, 247, 273, 306, 333, 366, 392, 425, 452, 485],
    rarity: rarity.gold,
    class: possibleClass.abundance,
  },
  {
    name: "Bronya",
    SPEED: 99,
    ENERGY: 120,
    HP: [168, 329, 397, 481, 549, 633, 701, 785, 853, 937, 1005, 1089, 1157, 1241],
    ATK: [79, 154, 186, 225, 257, 297, 328, 368, 399, 439, 471, 510, 542, 582],
    DEF: [72, 141, 170, 206, 235, 272, 301, 337, 366, 402, 431, 468, 497, 533],
    rarity: rarity.gold,
    class: possibleClass.harmony,
  },
  {
    name: "Clara",
    SPEED: 90,
    ENERGY: 110,
    HP: [179, 350, 421, 511, 583, 673, 745, 834, 906, 996, 1068, 1157, 1229, 1319],
    ATK: [100, 195, 235, 285, 326, 376, 416, 466, 506, 556, 596, 647, 687, 737],
    DEF: [66, 128, 155, 188, 214, 247, 273, 306, 333, 366, 392, 425, 452, 485],
    rarity: rarity.gold,
    class: possibleClass.destruction,
  },
  {
    name: "Dan Heng",
    SPEED: 110,
    ENERGY: 100,
    HP: [120, 234, 282, 342, 390, 450, 498, 558, 606, 666, 714, 774, 822, 882],
    ATK: [74, 145, 174, 212, 241, 279, 308, 345, 375, 412, 442, 479, 509, 546],
    DEF: [54, 105, 126, 153, 175, 202, 224, 251, 272, 299, 321, 348, 369, 396],
    rarity: rarity.purple,
    class: possibleClass.hunt,
  },
  {
    name: "Gepard",
    SPEED: 92,
    ENERGY: 100,
    HP: [190, 370, 446, 541, 617, 712, 788, 883, 959, 1054, 1130, 1226, 1302, 1397],
    ATK: [73, 144, 173, 210, 240, 277, 306, 343, 373, 410, 439, 476, 506, 543],
    DEF: [89, 173, 209, 253, 289, 334, 369, 414, 449, 494, 530, 574, 610, 654],
    rarity: rarity.gold,
    class: possibleClass.preservation,
  },
  {
    name: "Herta",
    SPEED: 100,
    ENERGY: 110,
    HP: [129, 252, 304, 369, 421, 486, 537, 602, 654, 719, 771, 835, 887, 952],
    ATK: [79, 154, 186, 225, 257, 297, 328, 368, 399, 439, 471, 510, 542, 582],
    DEF: [54, 105, 126, 153, 175, 202, 224, 251, 272, 299, 321, 348, 369, 396],
    rarity: rarity.purple,
    class: possibleClass.erudition,
  },
  {
    name: "Himeko",
    SPEED: 96,
    ENERGY: 120,
    HP: [142, 277, 335, 406, 463, 534, 591, 662, 719, 791, 848, 919, 976, 1047],
    ATK: [102, 200, 241, 293, 334, 386, 427, 478, 519, 571, 612, 664, 705, 756],
    DEF: [59, 115, 139, 169, 193, 222, 246, 276, 299, 329, 353, 383, 406, 436],
    rarity: rarity.gold,
    class: possibleClass.erudition,
  },
  {
    name: "Hook",
    SPEED: 94,
    ENERGY: 120,
    HP: [182, 355, 428, 519, 592, 684, 756, 848, 921, 1012, 1085, 1176, 1249, 1340],
    ATK: [84, 163, 197, 239, 273, 315, 348, 390, 424, 466, 499, 541, 575, 617],
    DEF: [48, 93, 112, 136, 156, 180, 199, 223, 242, 266, 285, 309, 328, 352],
    rarity: rarity.purple,
    class: possibleClass.destruction,
  },
  {
    name: "Jing Yuan",
    SPEED: 99,
    ENERGY: 130,
    HP: [158, 308, 372, 451, 514, 594, 657, 736, 799, 879, 942, 1021, 1085, 1164],
    ATK: [95, 185, 223, 270, 308, 356, 394, 441, 479, 527, 565, 613, 651, 698],
    DEF: [66, 128, 155, 188, 214, 247, 273, 306, 333, 366, 392, 425, 452, 485],
    rarity: rarity.gold,
    class: possibleClass.erudition,
  },
  {
    name: "Luocha",
    SPEED: 101,
    ENERGY: 100,
    HP: [174, 339, 409, 496, 566, 653, 723, 810, 879, 967, 1036, 1123, 1193, 1280],
    ATK: [102, 200, 241, 293, 334, 386, 427, 478, 519, 571, 612, 664, 705, 756],
    DEF: [49, 96, 116, 141, 160, 185, 205, 230, 249, 274, 294, 319, 339, 363],
    rarity: rarity.gold,
    class: possibleClass.abundance,
  },
  {
    name: "March 7th",
    SPEED: 101,
    ENERGY: 120,
    HP: [144, 280, 338, 410, 468, 540, 597, 669, 727, 799, 856, 928, 986, 1058],
    ATK: [69, 135, 163, 198, 226, 261, 288, 323, 351, 386, 414, 448, 476, 511],
    DEF: [78, 152, 183, 222, 253, 292, 323, 362, 393, 432, 464, 503, 534, 573],
    rarity: rarity.purple,
    class: possibleClass.preservation,
  },
  {
    name: "Natasha",
    SPEED: 98,
    ENERGY: 90,
    HP: [158, 308, 372, 451, 514, 594, 657, 736, 799, 879, 942, 1021, 1085, 1164],
    ATK: [64, 126, 152, 184, 210, 243, 268, 301, 327, 359, 385, 417, 443, 476],
    DEF: [69, 134, 162, 196, 224, 258, 286, 320, 348, 382, 410, 445, 472, 507],
    rarity: rarity.purple,
    class: possibleClass.abundance,
  },
  {
    name: "Pela",
    SPEED: 105,
    ENERGY: 110,
    HP: [134, 262, 315, 383, 436, 504, 557, 624, 678, 745, 799, 866, 920, 987],
    ATK: [74, 145, 174, 212, 241, 279, 308, 345, 375, 412, 442, 479, 509, 546],
    DEF: [63, 122, 148, 179, 204, 236, 261, 292, 318, 349, 374, 406, 431, 463],
    rarity: rarity.purple,
    class: possibleClass.nihility,
  },
  {
    name: "Qingque",
    SPEED: 98,
    ENERGY: 140,
    HP: [139, 271, 327, 396, 452, 522, 577, 647, 702, 772, 828, 897, 953, 1023],
    ATK: [88, 173, 208, 253, 288, 333, 368, 412, 448, 492, 528, 572, 608, 652],
    DEF: [60, 117, 141, 171, 195, 225, 249, 279, 303, 333, 357, 387, 411, 441],
    rarity: rarity.purple,
    class: possibleClass.erudition,
  },
  {
    name: "Sampo",
    SPEED: 102,
    ENERGY: 120,
    HP: [139, 271, 327, 396, 452, 522, 577, 647, 702, 772, 828, 897, 953, 1023],
    ATK: [84, 163, 197, 239, 273, 315, 348, 390, 424, 466, 499, 541, 575, 617],
    DEF: [54, 105, 126, 153, 175, 202, 224, 251, 272, 299, 321, 348, 369, 396],
    rarity: rarity.purple,
    class: possibleClass.nihility,
  },
  {
    name: "Seele",
    SPEED: 115,
    ENERGY: 120,
    HP: [126, 247, 297, 361, 411, 475, 525, 589, 639, 703, 753, 817, 868, 931],
    ATK: [87, 169, 204, 248, 283, 326, 361, 405, 439, 483, 518, 561, 596, 640],
    DEF: [49, 96, 116, 141, 160, 185, 205, 230, 249, 274, 294, 319, 339, 363],
    rarity: rarity.gold,
    class: possibleClass.hunt,
  },
  {
    name: "Serval",
    SPEED: 104,
    ENERGY: 100,
    HP: [124, 243, 293, 355, 405, 468, 517, 580, 630, 692, 742, 804, 854, 917],
    ATK: [88, 173, 208, 253, 288, 333, 368, 412, 448, 492, 528, 572, 608, 652],
    DEF: [51, 99, 119, 145, 165, 191, 211, 237, 257, 283, 303, 328, 349, 374],
    rarity: rarity.purple,
    class: possibleClass.erudition,
  },
  {
    name: "Silver Wolf",
    SPEED: 107,
    ENERGY: 110,
    HP: [142, 277, 335, 406, 463, 534, 591, 662, 719, 791, 848, 919, 976, 1047],
    ATK: [87, 169, 204, 248, 283, 326, 361, 405, 439, 483, 518, 561, 596, 640],
    DEF: [62, 122, 147, 178, 203, 235, 260, 291, 316, 347, 373, 404, 429, 460],
    rarity: rarity.gold,
    class: possibleClass.nihility,
  },
  {
    name: "Sushang",
    SPEED: 107,
    ENERGY: 120,
    HP: [124, 243, 293, 355, 405, 468, 517, 580, 630, 692, 742, 804, 854, 917],
    ATK: [76, 149, 180, 218, 249, 288, 318, 357, 387, 426, 456, 495, 526, 564],
    DEF: [57, 111, 133, 162, 185, 213, 236, 265, 287, 316, 339, 367, 390, 418],
    rarity: rarity.purple,
    class: possibleClass.hunt,
  },
  {
    name: "Tingyun",
    SPEED: 112,
    ENERGY: 130,
    HP: [115, 224, 270, 328, 374, 432, 478, 535, 581, 639, 685, 743, 789, 846],
    ATK: [72, 140, 169, 205, 234, 270, 298, 334, 363, 399, 428, 464, 493, 529],
    DEF: [54, 105, 126, 153, 175, 202, 224, 251, 272, 299, 321, 348, 369, 396],
    rarity: rarity.purple,
    class: possibleClass.harmony,
  },
  {
    name: "Trailblazer (Fire)",
    SPEED: 95,
    ENERGY: 120,
    HP: [168, 329, 397, 481, 549, 633, 701, 785, 853, 937, 1005, 1089, 1157, 1241],
    ATK: [81, 159, 192, 233, 265, 306, 339, 380, 413, 454, 486, 527, 560, 601],
    DEF: [82, 160, 193, 235, 268, 309, 342, 383, 416, 457, 490, 532, 565, 606],
    rarity: rarity.gold,
    class: possibleClass.preservation,
  },
  {
    name: "Trailblazer (Physical)",
    SPEED: 100,
    ENERGY: 120,
    HP: [163, 319, 384, 466, 531, 613, 679, 761, 826, 908, 973, 1055, 1121, 1203],
    ATK: [84, 164, 198, 240, 274, 316, 350, 392, 426, 468, 502, 544, 578, 620],
    DEF: [62, 122, 147, 178, 203, 235, 260, 291, 316, 347, 373, 404, 429, 460],
    rarity: rarity.gold,
    class: possibleClass.destruction,
  },
  {
    name: "Welt",
    SPEED: 102,
    ENERGY: 120,
    HP: [153, 298, 359, 436, 497, 574, 635, 712, 773, 849, 911, 987, 1048, 1125],
    ATK: [84, 164, 198, 240, 274, 316, 350, 392, 426, 468, 502, 544, 578, 620],
    DEF: [69, 135, 162, 197, 225, 259, 287, 322, 349, 384, 412, 446, 474, 509],
    rarity: rarity.gold,
    class: possibleClass.nihility,
  },
  {
    name: "Yanqing",
    SPEED: 109,
    ENERGY: 140,
    HP: [121, 236, 285, 346, 394, 455, 503, 564, 613, 673, 722, 783, 831, 892],
    ATK: [92, 180, 217, 263, 300, 346, 383, 429, 466, 512, 549, 595, 632, 679],
    DEF: [56, 109, 131, 159, 182, 210, 232, 260, 283, 311, 333, 361, 384, 412],
    rarity: rarity.gold,
    class: possibleClass.hunt,
  },
  {
    name: "Yukong",
    SPEED: 107,
    ENERGY: 130,
    HP: [124, 243, 293, 355, 405, 468, 517, 580, 630, 692, 742, 804, 854, 917],
    ATK: [81, 159, 191, 232, 265, 306, 338, 379, 412, 452, 485, 526, 558, 599],
    DEF: [51, 99, 119, 145, 165, 191, 211, 237, 257, 283, 303, 328, 349, 374],
    rarity: rarity.purple,
    class: possibleClass.erudition,
  },
];
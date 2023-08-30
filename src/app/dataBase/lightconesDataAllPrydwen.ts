export interface oneLcInterface {
  name: string;
  rarity: string;
  path: string;
  img: string;
  description: string;
  hp: number;
  atk: number;
  def: number;
}

export const lcAllData: oneLcInterface[] = [
  {
    name: "A Secret Vow",
    rarity: "purple",
    path: "Destruction",
    img: "assets/lightcones/A Secret Vow.webp",
    description:
      "Increases DMG dealt by the wearer by 20/25/30/35/40%. The wearer also deals an extra 20/25/30/35/40% of DMG to enemies with a higher HP percentage than the wearer.\n\n",
    hp: 1058,
    atk: 476,
    def: 264,
  },
  {
    name: "Adversarial",
    rarity: "blue",
    path: "Hunt",
    img: "assets/lightcones/Adversarial.webp",
    description: "When the wearer defeats an enemy, increases SPD by 10/12/14/16/18% for 2 turn(s)",
    hp: 740,
    atk: 370,
    def: 264,
  },
  {
    name: "Amber",
    rarity: "blue",
    path: "Preservation",
    img: "assets/lightcones/Amber.webp",
    description:
      "Increases the wearer's DEF by 16/20/24/28/32%. If the wearer's current HP is lower than 50%, increases their DEF by a further 16/20/24/28/32%.",
    hp: 846,
    atk: 264,
    def: 330,
  },
  {
    name: "Arrows",
    rarity: "blue",
    path: "Hunt",
    img: "assets/lightcones/Arrows.webp",
    description: "At the beginning of the battle, increases the wearer's CRIT Rate by 12/15/18/21/24% for 3 turn(s).",
    hp: 846,
    atk: 317,
    def: 264,
  },
  {
    name: "Before Dawn",
    rarity: "gold",
    path: "Erudition",
    img: "assets/lightcones/Before Dawn.webp",
    description:
      "Increases the wearer's CRIT DMG by 36/42/48/54/60%. Increases the wearer's Skill and Ultimate DMG by 18/21/24/27/30%. After the wearer uses their Skill or Ultimate, they gain Somnus Corpus. Upon triggering a follow-up attack, Somnus Corpus will be consumed and the follow-up attack DMG increases by 48/56/64/72/80%.\n\n\n",
    hp: 1058,
    atk: 582,
    def: 463,
  },
  {
    name: "Before the Tutorial Mission Starts",
    rarity: "purple",
    path: "Nihility",
    img: "assets/lightcones/Before the Tutorial Mission Starts.webp",
    description:
      "Increases the wearer's Effect Hit Rate by 20/25/30/35/40%. When the wearer attacks enemies that have reduced DEF, regenerates 4/5/6/7/8 Energy.",
    hp: 952,
    atk: 476,
    def: 330,
  },
  {
    name: "But the Battle Isn't Over",
    rarity: "gold",
    path: "Harmony",
    img: "assets/lightcones/But the Battle Isn't Over.webp",
    description:
      "Increases the wearer's Energy Regeneration Rate by 10/12/14/16/18% and regenerates 1 Skill Point when the wearer uses their Ultimate on an ally. This effect can be triggered after every 2 uses of the wearer's  Ultimate. When the wearer uses their Skill, the next ally taking action (except the wearer) deals 30/35/40/45/50% more DMG for 1 turn(s).",
    hp: 1164,
    atk: 529,
    def: 463,
  },
  {
    name: "Carve the Moon, Weave the Clouds",
    rarity: "purple",
    path: "Harmony",
    img: "assets/lightcones/Carve the Moon, Weave the Clouds.webp",
    description:
      "At the start of the battle and whenever the wearer's turn begins, one of the following effects is applied randomly: All allies' ATK increases by 10/12.5/15/17.5/20%, all allies' CRIT DMG increases by 12/15/18/21/24%, or all allies' Energy Regeneration Rate increases by 6/7.5/9/10.5/12%. The applied effect cannot be identical to the last effect applied, and will replace the previous effect. The applied effect will be removed when the wearer has been knocked down. Effects of the similar type cannot be stacked.\n\n\n\n",
    hp: 952,
    atk: 476,
    def: 330,
  },
  {
    name: "Chorus",
    rarity: "blue",
    path: "Harmony",
    img: "assets/lightcones/Chorus.webp",
    description: "After entering battle, increases the ATK of all allies by 8/9/10/11/12%. Effects of the same type cannot stack.",
    hp: 846,
    atk: 317,
    def: 264,
  },
  {
    name: "Collapsing Sky",
    rarity: "blue",
    path: "Destruction",
    img: "assets/lightcones/Collapsing Sky.webp",
    description: "Increases the wearer's Basic ATK and Skill DMG by 20/25/30/35/40%.",
    hp: 846,
    atk: 370,
    def: 198,
  },
  {
    name: "Cornucopia ",
    rarity: "blue",
    path: "Abundance",
    img: "assets/lightcones/Cornucopia .webp",
    description: "When the wearer uses their Skill or Ultimate, their Outgoing Healing increases by 12/15/18/21/24%.",
    hp: 952,
    atk: 264,
    def: 264,
  },
  {
    name: "Cruising in the Stellar Sea",
    rarity: "gold",
    path: "Hunt",
    img: "assets/lightcones/Cruising in the Stellar Sea.webp",
    description:
      "Increases the wearer's CRIT rate by 8/10/12/14/16%, and increases their CRIT rate against enemies with HP less than or equal to 50% by an extra 8/10/12/14/16%. When the wearer defeats an enemy, their ATK is increased by 20/25/30/35/40% for 2 turn(s).",
    hp: 952,
    atk: 529,
    def: 463,
  },
  {
    name: "Dance! Dance! Dance!",
    rarity: "purple",
    path: "Harmony",
    img: "assets/lightcones/Dance! Dance! Dance!.webp",
    description: "When the wearer uses their Ultimate, all allies' actions are Advanced Forward by 16/18/20/22/24%",
    hp: 952,
    atk: 423,
    def: 396,
  },
  {
    name: "Darting Arrow",
    rarity: "blue",
    path: "Hunt",
    img: "assets/lightcones/Darting Arrow.webp",
    description: "When the wearer defeats an enemy, increase ATK by 24/30/36/42/48% for 3 turn(s).",
    hp: 740,
    atk: 370,
    def: 264,
  },
  {
    name: "Data Bank",
    rarity: "blue",
    path: "Erudition",
    img: "assets/lightcones/Data Bank.webp",
    description: "Increases the wearer's Ultimate DMG by 28/35/42/49/56%.",
    hp: 740,
    atk: 370,
    def: 264,
  },
  {
    name: "Day One of My New Life ",
    rarity: "purple",
    path: "Preservation",
    img: "assets/lightcones/Day One of My New Life .webp",
    description:
      "Increases the wearer's DEF by 16/18/20/22/24%. After entering battle, increases DMG RES of all allies by 8/9/10/11/12%. Effects of the same type cannot stack.",
    hp: 952,
    atk: 370,
    def: 463,
  },
  {
    name: "Defense",
    rarity: "blue",
    path: "Preservation",
    img: "assets/lightcones/Defense.webp",
    description: "When the wearer unleashes their Ultimate, they restore HP by 18/21/24/27/30% of their Max HP.",
    hp: 952,
    atk: 264,
    def: 264,
  },
  {
    name: "Echoes of the Coffin ",
    rarity: "gold",
    path: "Abundance",
    img: "assets/lightcones/Echoes of the Coffin .webp",
    description:
      "Increases the wearer's ATK by 24/28/32/36/40%. After the wearer uses an attack, for each different enemy target the wearer hits, regenerates 3/3.5/4/4.5/5 Energy. Each attack can regenerate Energy up to 3 time(s) this way. After the wearer uses their Ultimate, all allies gain 12/14/16/18/20 SPD for 1 turn.",
    hp: 1164,
    atk: 582,
    def: 396,
  },
  {
    name: "Eyes of the Prey ",
    rarity: "purple",
    path: "Nihility",
    img: "assets/lightcones/Eyes of the Prey .webp",
    description: "Increases Effect Hit Rate of its wearer by 20/25/30/35/40% and increases DoT by 24/30/36/42/48%.\n\n",
    hp: 952,
    atk: 476,
    def: 330,
  },
  {
    name: "Fermata",
    rarity: "purple",
    path: "Nihility",
    img: "assets/lightcones/Fermata.webp",
    description:
      "Increases the Break Effect dealt by the wearer by 16/20/24/28/32%, and increases their DMG to enemies afflicted with Shock or Wind Shear by 16/20/24/28/32%. This also applies to DoT.",
    hp: 952,
    atk: 476,
    def: 330,
  },
  {
    name: "Fine Fruit",
    rarity: "blue",
    path: "Abundance",
    img: "assets/lightcones/Fine Fruit.webp",
    description: "At the beginning of battle, immediately regenerates 6/8/9/11/12 Energy for all allies.",
    hp: 952,
    atk: 317,
    def: 198,
  },
  {
    name: "Geniuses' Repose",
    rarity: "purple",
    path: "Erudition",
    img: "assets/lightcones/Geniuses' Repose.webp",
    description:
      "Increases the wearer's ATK by 16/20/24/28/32%. When the wearer defeats an enemy, the wearer's CRIT DMG increases by 24/30/36/42/48% for 3 turn(s).",
    hp: 846,
    atk: 476,
    def: 396,
  },
  {
    name: "Good Night and Sleep Well ",
    rarity: "purple",
    path: "Nihility",
    img: "assets/lightcones/Good Night and Sleep Well .webp",
    description:
      "For every debuff the target enemy has, the DMG dealt by the wearer increases by 12/15/18/21/24%, stacking up to 3 time(s). This effect also applies to DoT.",
    hp: 952,
    atk: 476,
    def: 330,
  },
  {
    name: "Hidden Shadow",
    rarity: "blue",
    path: "Nihility",
    img: "assets/lightcones/Hidden Shadow.webp",
    description: "After using Skill, the wearer's next Basic ATK deals Additional DMG equal to 60/75/90/105/120% of ATK to the target enemy.",
    hp: 846,
    atk: 317,
    def: 264,
  },
  {
    name: "In The Name of the World",
    rarity: "gold",
    path: "Nihility",
    img: "assets/lightcones/In The Name of the World.webp",
    description:
      "Increases the wearer's DMG to debuffed enemies by 24/28/32/36/40%. When the wearer uses their Skill, the Effect Hit Rate for this attack increases by 18/21/24/27/30%, and ATK increases by 24/28/32/36/40%.",
    hp: 1058,
    atk: 582,
    def: 463,
  },
  {
    name: "In the Night",
    rarity: "gold",
    path: "Hunt",
    img: "assets/lightcones/In the Night.webp",
    description:
      "Increases the wearer's CRIT Rate by 18/21/24/27/30%. While the wearer is in battle, for every 10 SPD that exceeds 100, the DMG of the wearer's Basic ATK and Skill is increased by 6/7/8/9/10% and the CRIT DMG of their Ultimate is increased by 12/14/16/18/20%. This effect can stack up to 6 time(s).",
    hp: 1058,
    atk: 582,
    def: 463,
  },
  {
    name: "Incessant Rain",
    rarity: "gold",
    path: "Nihility",
    img: "assets/lightcones/Incessant Rain.webp",
    description:
      "Increases the wearer's Effect Hit Rate by 24/28/32/36/40%. When the wearer deals DMG to an enemy with 3 or more debuffs, increases CRIT Rate by 12/14/16/18/20%. After the wearer uses their Basic ATK, Skill, or Ultimate, there is a 100% base chance to implant Aether Code on a random target that does not have it yet. Targets with Aether Code receive 12/14/16/18/20% increased DMG for 1 turn.",
    hp: 1058,
    atk: 582,
    def: 463,
  },
  {
    name: "Landau's Choice",
    rarity: "purple",
    path: "Preservation",
    img: "assets/lightcones/Landau's Choice.webp",
    description: "The wearer is more likely to be attacked, but DMG taken is reduced by 16/18/20/22/24%.",
    hp: 952,
    atk: 423,
    def: 396,
  },
  {
    name: "Loop",
    rarity: "blue",
    path: "Nihility",
    img: "assets/lightcones/Loop.webp",
    description: "Increases DMG dealt from its wearer to Slowed enemies by 24/30/36/42/48%",
    hp: 846,
    atk: 317,
    def: 264,
  },
  {
    name: "Make the World Clamor",
    rarity: "purple",
    path: "Erudition",
    img: "assets/lightcones/Make the World Clamor.webp",
    description: "The wearer regenerates 20/23/26/29/32 Energy immediately upon entering battle, and increases Ultimate DMG by 32/40/48/56/64%.",
    hp: 846,
    atk: 476,
    def: 396,
  },
  {
    name: "Mediation",
    rarity: "blue",
    path: "Harmony",
    img: "assets/lightcones/Mediation.webp",
    description: "Upon battle entry, all allies receive 12/14/16/18/20 increased SPD for 1 turn(s).",
    hp: 846,
    atk: 317,
    def: 264,
  },
  {
    name: "Memories of the Past ",
    rarity: "purple",
    path: "Harmony",
    img: "assets/lightcones/Memories of the Past .webp",
    description:
      "Increases the wearer's Break Effect by 28/35/42/49/56%. When the wearer attacks, additionally regenerates 4/5/6/7/8 Energy. This effect can only be triggered 1 time per turn.\n\n",
    hp: 952,
    atk: 423,
    def: 396,
  },
  {
    name: "Meshing Cogs",
    rarity: "blue",
    path: "Harmony",
    img: "assets/lightcones/Meshing Cogs.webp",
    description: "After the wearer uses attacks or gets hit, additionally regenerates 4/5/6/7/8 Energy. This effect can only be triggered 1 time per turn.",
    hp: 846,
    atk: 317,
    def: 264,
  },
  {
    name: "Moment of Victory",
    rarity: "gold",
    path: "Preservation",
    img: "assets/lightcones/Moment of Victory.webp",
    description:
      "Increases the wearer's DEF by 24/28/32/36/40% and Effect Hit Rate by 24/28/32/36/40%. Increases the chance for the wearer to be attacked by enemies. When the wearer is attacked, increase their DEF by an additional 24/28/32/36/40% until the end of the wearer's turn.\n",
    hp: 1058,
    atk: 476,
    def: 595,
  },
  {
    name: "Multiplication",
    rarity: "blue",
    path: "Abundance",
    img: "assets/lightcones/Multiplication.webp",
    description: "After the wearer uses their Basic ATK, their next action will be Advanced Forward by 12/14/16/18/20%.",
    hp: 952,
    atk: 317,
    def: 198,
  },
  {
    name: "Mutual Demise",
    rarity: "blue",
    path: "Destruction",
    img: "assets/lightcones/Mutual Demise.webp",
    description: "If the wearer's current HP is lower than 80%, CRIT Rate increases by 12/15/18/21/24%.",
    hp: 846,
    atk: 370,
    def: 198,
  },
  {
    name: "Night on the Milky Way",
    rarity: "gold",
    path: "Erudition",
    img: "assets/lightcones/Night on the Milky Way.webp",
    description:
      "For every enemy on the field, increases the wearer's ATK by 9/10.5/12/13.5/15%, up to 5 stacks. When an enemy is inflicted with Weakness Break, the DMG dealt by the wearer increases by 30/35/40/45/50% for 1 turn.",
    hp: 1164,
    atk: 582,
    def: 396,
  },
  {
    name: "Nowhere to Run",
    rarity: "purple",
    path: "Destruction",
    img: "assets/lightcones/Nowhere to Run.webp",
    description:
      "Increases the wearer's ATK by 24/30/36/42/48%. Whenever the wearer defeats an enemy, they restore HP equal to 12/15/18/21/24% of their ATK.\n",
    hp: 952,
    atk: 529,
    def: 264,
  },
  {
    name: "On the Fall of an Aeon",
    rarity: "gold",
    path: "Destruction",
    img: "assets/lightcones/On the Fall of an Aeon.webp",
    description:
      "Whenever the wearer attacks, their ATK is increased by 8/10/12/14/16% in this battle, up to 4 time(s). When the wearer inflicts Weakness Break on enemies, the wearer's DMG increases by 12/15/18/21/24% for 2 turn(s).",
    hp: 1058,
    atk: 529,
    def: 396,
  },
  {
    name: "Only Silence Remains",
    rarity: "purple",
    path: "Hunt",
    img: "assets/lightcones/Only Silence Remains.webp",
    description:
      "Increases ATK of its wearer by 16/20/24/28/32%. If there are 2 or fewer enemies on the field, increases wearer's CRIT Rate by 12/15/18/21/24%.",
    hp: 952,
    atk: 476,
    def: 330,
  },
  {
    name: "Passkey",
    rarity: "blue",
    path: "Erudition",
    img: "assets/lightcones/Passkey.webp",
    description: "After the wearer uses their Skill, additionally regenerates 8/9/10/11/12 Energy. This effect can only be triggered 1 time per turn.",
    hp: 740,
    atk: 370,
    def: 264,
  },
  {
    name: "Past and Future",
    rarity: "purple",
    path: "Harmony",
    img: "assets/lightcones/Past and Future.webp",
    description: "When the wearer uses their Skill, then the next ally taking action (except the wearer) deals 16/20/24/28/32% increased DMG for 1 turn(s).",
    hp: 952,
    atk: 423,
    def: 396,
  },
  {
    name: "Patience is All You Need",
    rarity: "gold",
    path: "Nihility",
    img: "assets/lightcones/Patience is All You Need.webp",
    description: "Unknown",
    hp: 0,
    atk: 0,
    def: 0,
  },
  {
    name: "Perfect Timing",
    rarity: "purple",
    path: "Abundance",
    img: "assets/lightcones/Perfect Timing.webp",
    description:
      "Increases the wearer's Effect RES by 16/20/24/28/32% and increases Outgoing Healing by an amount that is equal to 33/36/39/42/45% of Effect RES. Outgoing Healing can be increased this way by up to 15/18/21/24/27%.",
    hp: 952,
    atk: 423,
    def: 396,
  },
  {
    name: "Pioneering",
    rarity: "blue",
    path: "Preservation",
    img: "assets/lightcones/Pioneering.webp",
    description: "When the wearer Breaks an enemy's Weakness, the wearer restores HP by 12/14/16/18/20% of their Max HP.",
    hp: 952,
    atk: 264,
    def: 264,
  },
  {
    name: "Planetary Rendezvous ",
    rarity: "purple",
    path: "Harmony",
    img: "assets/lightcones/Planetary Rendezvous .webp",
    description: "Upon battle entry, if an ally deals the same DMG Type as the wearer, DMG dealt increases by 12/15/18/21/24%.",
    hp: 1058,
    atk: 423,
    def: 330,
  },
  {
    name: "Post-Op Conversation",
    rarity: "purple",
    path: "Abundance",
    img: "assets/lightcones/Post-Op Conversation.webp",
    description:
      "Increases Energy Regeneration Rate of its wearer by 8/10/12/14/16% and increases Outgoing Healing when they use their Ultimate by 12/15/18/21/24%.",
    hp: 1058,
    atk: 423,
    def: 330,
  },
  {
    name: "Quid Pro Quo",
    rarity: "purple",
    path: "Abundance",
    img: "assets/lightcones/Quid Pro Quo.webp",
    description:
      "At the start of the wearer's turn, regenerates 8/10/12/14/16 Energy for a randomly chosen ally (excluding the wearer) whose current Energy is lower than 50%.",
    hp: 952,
    atk: 423,
    def: 396,
  },
  {
    name: "Resolution Shines As Pearls of Sweat",
    rarity: "purple",
    path: "Nihility",
    img: "assets/lightcones/Resolution Shines As Pearls of Sweat.webp",
    description:
      "When the wearer hits an enemy and if the hit enemy is not already Ensnared, then there is a 60/70/80/90/100% base chance to Ensnare the hit enemy. Ensnared enemies' DEF decreases by 12/13/14/15/16% for 1 turn(s).",
    hp: 952,
    atk: 476,
    def: 330,
  },
  {
    name: "Return to Darkness",
    rarity: "purple",
    path: "Hunt",
    img: "assets/lightcones/Return to Darkness.webp",
    description:
      "Increases the wearer's CRIT Rate by 12/15/18/21/24%. After a CRIT Hit, there is a 16/20/24/28/32% fixed chance to dispel 1 buff on the target enemy. This effect can only trigger once per attack.",
    hp: 846,
    atk: 529,
    def: 330,
  },
  {
    name: "River Flows in Spring",
    rarity: "purple",
    path: "Hunt",
    img: "assets/lightcones/River Flows in Spring.webp",
    description:
      "After entering battle, increases the wearer's SPD by 8/9/10/11/12% and DMG by 12/15/18/21/24%. When the wearer takes DMG, this effect will disappear. This effect will resume after the end of the wearer's next turn.",
    hp: 846,
    atk: 476,
    def: 396,
  },
  {
    name: "Sagacity",
    rarity: "blue",
    path: "Erudition",
    img: "assets/lightcones/Sagacity.webp",
    description: "When the wearer uses their Ultimate, increases ATK by 24/30/36/42/48% for 2 turn(s).",
    hp: 740,
    atk: 370,
    def: 264,
  },
  {
    name: "Shared Feeling",
    rarity: "purple",
    path: "Abundance",
    img: "assets/lightcones/Shared Feeling.webp",
    description: "Increases the wearer's Outgoing Healing by 10/12.5/15/17.5/20%. When using Skill, regenerates 2/2/3/3/4 Energy for all allies.",
    hp: 952,
    atk: 423,
    def: 396,
  },
  {
    name: "Shattered Home",
    rarity: "blue",
    path: "Destruction",
    img: "assets/lightcones/Shattered Home.webp",
    description: "Deals 20/25/30/35/40% increased DMG to any enemies whose HP is above 50%.",
    hp: 846,
    atk: 370,
    def: 198,
  },
  {
    name: "Sleep Like the Dead",
    rarity: "gold",
    path: "Hunt",
    img: "assets/lightcones/Sleep Like the Dead.webp",
    description:
      "Increases the wearer's CRIT DMG by 30/35/40/45/50%. When the wearer's Basic ATK or Skill does not result in a CRIT Hit, increases their CRIT Rate by 36/42/48/54/60% for 1 turn(s). This effect can only trigger once every 3 turn(s).",
    hp: 1058,
    atk: 582,
    def: 463,
  },
  {
    name: "Something Irreplaceable",
    rarity: "gold",
    path: "Destruction",
    img: "assets/lightcones/Something Irreplaceable.webp",
    description:
      "Increases the wearer's ATK by 24/28/32/36/40%. When the wearer defeats an enemy or is hit, immediately restores HP equal to 8/9/10/11/12% of the wearer's ATK. At the same time, the wearer's DMG is increased by 24/28/32/36/40% until the end of their next turn. This effect cannot stack and can only trigger 1 time per turn.",
    hp: 1164,
    atk: 582,
    def: 396,
  },
  {
    name: "Subscribe for More!",
    rarity: "purple",
    path: "Hunt",
    img: "assets/lightcones/Subscribe for More!.webp",
    description:
      "Increases the DMG of the wearer's Basic ATK and Skill by 24/30/36/42/48%. This effect increases by an extra 24/30/36/42/48% when the wearer's current Energy reaches its max level.",
    hp: 952,
    atk: 476,
    def: 330,
  },
  {
    name: "Swordplay",
    rarity: "purple",
    path: "Hunt",
    img: "assets/lightcones/Swordplay.webp",
    description:
      "For each time the wearer hits the same target, DMG dealt increases by 8/10/12/14/16%, stacking up to 5 time(s). This effect will be dispelled when the wearer changes targets.",
    hp: 952,
    atk: 476,
    def: 330,
  },
  {
    name: "Texture of Memories",
    rarity: "gold",
    path: "Preservation",
    img: "assets/lightcones/Texture of Memories.webp",
    description:
      "Increases the wearer's Effect RES by 8/10/12/14/16%. If the wearer is attacked and has no Shield, they gain a Shield equal to 16/20/24/28/32% of their Max HP for 2 turn(s). This effect can only be triggered once every 3 turn(s). If the wearer has a Shield when attacked, the DMG they receive decreases by 12/15/18/21/24%.",
    hp: 1058,
    atk: 423,
    def: 529,
  },
  {
    name: "The Birth of the Self",
    rarity: "purple",
    path: "Erudition",
    img: "assets/lightcones/The Birth of the Self.webp",
    description:
      "Increases DMG dealt by the wearer's follow-up attacks by 24/30/36/42/48%. If the current HP of the target enemy is below 50% of their Max HP, increases DMG dealt by follow-up attacks by an extra 24/30/36/42/48%.",
    hp: 952,
    atk: 476,
    def: 330,
  },
  {
    name: "The Moles Welcome You",
    rarity: "purple",
    path: "Destruction",
    img: "assets/lightcones/The Moles Welcome You.webp",
    description:
      "When the wearer uses Basic ATK, Skill, or Ultimate to attack enemies, the wearer gains one stack of Mischievous. Each stack increases the wearer's ATK by 12/15/18/21/24%.\n\n",
    hp: 1058,
    atk: 476,
    def: 264,
  },
  {
    name: "The Seriousness of Breakfast",
    rarity: "purple",
    path: "Erudition",
    img: "assets/lightcones/The Seriousness of Breakfast.webp",
    description:
      "Increases the wearer's DMG by 12/15/18/21/24%. For every defeated enemy, the wearer's ATK increases by 4/5/6/7/8%, stacking up to 3 time(s).\n\n",
    hp: 846,
    atk: 476,
    def: 396,
  },
  {
    name: "The Unreachable Side",
    rarity: "gold",
    path: "Destruction",
    img: "assets/lightcones/The Unreachable Side.webp",
    description: "Unknown",
    hp: 0,
    atk: 0,
    def: 0,
  },
  {
    name: "This Is Me!",
    rarity: "purple",
    path: "Preservation",
    img: "assets/lightcones/This Is Me!.webp",
    description:
      "Increases the wearer's DEF by 16/20/24/28/32%. Increases the DMG of the wearer when they use their Ultimate by 60/75/90/105/120% of the wearer's DEF. This effect only apply 1 time per enemy target.",
    hp: 846,
    atk: 370,
    def: 529,
  },
  {
    name: "Time Waits for No One",
    rarity: "gold",
    path: "Abundance",
    img: "assets/lightcones/Time Waits for No One.webp",
    description:
      "Increases the wearer's Max HP by 18/21/24/27/30% and Outgoing Healing by 12/14/16/18/20%. When the wearer heals allies, record the amount of Outgoing Healing. When any ally launches an attack, a random attacked enemy takes Additional DMG equal to 36/42/48/54/60% of the recorded Outgoing Healing value. This Additional DMG is of the same Type as the wearer's, is not affected by other buffs, and can only occur 1 time per turn\n\n\n",
    hp: 1270,
    atk: 476,
    def: 463,
  },
  {
    name: "Today Is Another Peaceful Day",
    rarity: "purple",
    path: "Erudition",
    img: "assets/lightcones/Today Is Another Peaceful Day.webp",
    description:
      "After entering battle, increases the wearer's DMG based on their Max Energy. DMG increases by 0.2/0.25/0.3/0.35/0.4% per point of Energy, up to 160 Energy.",
    hp: 846,
    atk: 529,
    def: 330,
  },
  {
    name: "Trend of the Universal Market",
    rarity: "purple",
    path: "Preservation",
    img: "assets/lightcones/Trend of the Universal Market.webp",
    description:
      "Increases the wearer's DEF by 16/20/24/28/32%. When the wearer is attacked, there is a 100/105/110/115/120% base chance to Burn the enemy. For each turn, the wearer deals DoT that is equal to 40/50/60/70/80% of the wearer's DEF for 2 turn(s).",
    hp: 1058,
    atk: 370,
    def: 396,
  },
  {
    name: "Under the Blue Sky",
    rarity: "purple",
    path: "Destruction",
    img: "assets/lightcones/Under the Blue Sky.webp",
    description:
      "Increases the wearer's ATK by 16/20/24/28/32%. When the wearer defeats an enemy, the wearer's CRIT Rate increases by 12/15/18/21/24% for 3 turn(s).",
    hp: 952,
    atk: 476,
    def: 330,
  },
  {
    name: "Void",
    rarity: "blue",
    path: "Nihility",
    img: "assets/lightcones/Void.webp",
    description: "At the start of battle, increases the wearer's Effect Hit Rate by 20/25/30/35/40% for 3 turn(s).",
    hp: 846,
    atk: 317,
    def: 264,
  },
  {
    name: "Warmth Shortens Cold Nights",
    rarity: "purple",
    path: "Abundance",
    img: "assets/lightcones/Warmth Shortens Cold Nights.webp",
    description:
      "Increases the wearer's Max HP by 16/20/24/28/32%. When using Basic ATK or Skill, restores all allies' HP by an amount equal to 2/2.5/3/3.5/4% of their respective Max HP.",
    hp: 1058,
    atk: 370,
    def: 396,
  },
  {
    name: "We Are Wildfire",
    rarity: "purple",
    path: "Preservation",
    img: "assets/lightcones/We Are Wildfire.webp",
    description:
      "At the start of the battle, the DMG dealt to all allies decreases by 8/10/12/14/16% for 5 turn(s). At the same time, immediately restores HP to all allies equal to 30/35/40/45/50% of the respective HP difference between the characters' Max HP and current HP.",
    hp: 740,
    atk: 476,
    def: 463,
  },
  {
    name: "We Will Meet Again",
    rarity: "purple",
    path: "Nihility",
    img: "assets/lightcones/We Will Meet Again.webp",
    description:
      "After the wearer uses Basic ATK or Skill, the wearer deals 48/60/72/84/96% of ATK as additional DMG to a random enemy that is attacked by abilities.",
    hp: 846,
    atk: 529,
    def: 330,
  },
  {
    name: "Woof! Walk Time!",
    rarity: "purple",
    path: "Destruction",
    img: "assets/lightcones/Woof! Walk Time!.webp",
    description:
      "Increases the wearer's ATK by 10/12.5/15/17.5/20%, and increases their DMG to enemies afflicted with Burn or Bleed by 16/20/24/28/32%. This also applies to DoT.",
    hp: 952,
    atk: 476,
    def: 330,
  },
];
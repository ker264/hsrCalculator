export class baseRelic {
  possibleMainStat: possibleStats[] = [];
  mainStat?: possibleStats;

  mainStatValue?: number;

  subStats: subStatInterface[] = new Array(4);

  subRolls: subRollsInterface[] = [
    { name: "HP", lowRoll: 33.87, midRoll: 38.1, highRoll: 42.34 },
    { name: "ATK", lowRoll: 16.94, midRoll: 19.05, highRoll: 21.17 },
    { name: "DEF", lowRoll: 16.94, midRoll: 19.05, highRoll: 21.17 },
    { name: "HP%", lowRoll: 3.46, midRoll: 3.89, highRoll: 4.32 },
    { name: "ATK%", lowRoll: 3.46, midRoll: 3.89, highRoll: 4.32 },
    { name: "DEF%", lowRoll: 4.32, midRoll: 4.86, highRoll: 5.4 },
    { name: "SPD", lowRoll: 2, midRoll: 2.3, highRoll: 2.6 },
    { name: "critRate", lowRoll: 2.59, midRoll: 2.92, highRoll: 3.24 },
    { name: "critDMG", lowRoll: 5.18, midRoll: 5.83, highRoll: 6.48 },
    { name: "hitRateEffectiveness", lowRoll: 3.46, midRoll: 3.89, highRoll: 4.32 },
    { name: "breakEffect", lowRoll: 5.18, midRoll: 5.83, highRoll: 6.48 },
    { name: "effectResistance", lowRoll: 3.46, midRoll: 3.89, highRoll: 4.32 },
  ];

  mainStatRolls = [
    { name: "HP", maxStat: 705.5 },
    { name: "ATK", maxStat: 352.7 },
    { name: "HP%", maxStat: 43.2 },
    { name: "ATK%", maxStat: 43.2 },
    { name: "DEF%", maxStat: 54 },
    { name: "SPD", maxStat: 25 },
    { name: "critRate", maxStat: 32.4 },
    { name: "critDMG", maxStat: 64.8 },
    { name: "healingBonus", maxStat: 34.56 },
    { name: "breakEffect", maxStat: 64.8 },
    { name: "hitRateEffectiveness", maxStat: 43.2 },
    { name: "dmgBonus", maxStat: 38.8 },
    { name: "energyRechargeRate", maxStat: 19.44 },
  ];

  constructor(bodyPart: string) {
    switch (bodyPart) {
      case "head":
        this.mainStat = possibleStats.hp;
        this.mainStatValue = this.mainStatRolls.find((a) => a.name == this.mainStat)?.maxStat;
        break;
      case "hands":
        this.mainStat = possibleStats.atk;
        this.mainStatValue = this.mainStatRolls.find((a) => a.name == this.mainStat)?.maxStat;
        break;
      case "body":
        this.possibleMainStat = [
          possibleStats.hpPercentage,
          possibleStats.atkPercentage,
          possibleStats.defPercentage,
          possibleStats.critRate,
          possibleStats.critDMG,
          possibleStats.healingBonus,
          possibleStats.energyRechargeRate,
          possibleStats.hitRateEffectiveness,
        ];
        break;
      case "boots":
        this.possibleMainStat = [possibleStats.hpPercentage, possibleStats.atkPercentage, possibleStats.defPercentage, possibleStats.speed];
        break;
      case "sphere":
        this.possibleMainStat = [possibleStats.hpPercentage, possibleStats.atkPercentage, possibleStats.defPercentage, possibleStats.dmgBonus];
        break;
      case "rope":
        this.possibleMainStat = [
          possibleStats.breakEffect,
          possibleStats.energyRechargeRate,
          possibleStats.hpPercentage,
          possibleStats.atkPercentage,
          possibleStats.defPercentage,
        ];
        break;
    }
  }
}

export enum possibleStats {
  hp = "HP",
  hpPercentage = "HP%",
  atk = "ATK",
  atkPercentage = "ATK%",
  def = "DEF",
  defPercentage = "DEF%",
  speed = "SPD",
  critRate = "critRate",
  critDMG = "critDMG",
  healingBonus = "healingBonus",
  hitRateEffectiveness = "hitRateEffectiveness",
  breakEffect = "breakEffect",
  effectResistance = "effectResistance",

  dmgBonus = "dmgBonus",
  energyRechargeRate = "energyRechargeRate",
}

export interface subStatInterface {
  name: string;
  value: number;
}

export interface subRollsInterface {
  name: string;
  lowRoll: number;
  midRoll: number;
  highRoll: number;
}

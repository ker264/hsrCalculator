class baseRelic {
  possibleMainStat: possibleStats[] = [];
  mainStat!: possibleStats;
}

export class RelicBoots extends baseRelic {
  constructor() {
    super();

    this.possibleMainStat = [possibleStats.hpPercentage, possibleStats.atkPercentage, possibleStats.defPercentage, possibleStats.speed];
  }
}
export class RelicHands extends baseRelic {
  constructor() {
    super();

    this.mainStat = possibleStats.atk;
  }
}
export class RelicHead extends baseRelic {
  constructor() {
    super();

    this.mainStat = possibleStats.hp;
  }
}
export class RelicBody extends baseRelic {
  constructor() {
    super();

    this.possibleMainStat = [
      possibleStats.hpPercentage,
      possibleStats.atkPercentage,
      possibleStats.defPercentage,
      possibleStats.critRate,
      possibleStats.critDMG,
      possibleStats.healingBonus,
      possibleStats.energyRechargeRate,
    ];
  }
}
export class RelicRope extends baseRelic {
  constructor() {
    super();

    this.possibleMainStat = [
      possibleStats.breakEffect,
      possibleStats.energyRechargeRate,
      possibleStats.hpPercentage,
      possibleStats.atkPercentage,
      possibleStats.defPercentage,
    ];
  }
}
export class RelicSphere extends baseRelic {
  constructor() {
    super();

    this.possibleMainStat = [possibleStats.hpPercentage, possibleStats.atkPercentage, possibleStats.defPercentage, possibleStats.dmgBonus];
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

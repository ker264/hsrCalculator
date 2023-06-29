import { AllyBaseStats } from "./ally-base-stats";

export class AllyCombatStats {
  atk: baseStat;
  hp: baseStat;
  def: baseStat;

  speed: number;

  effectHitRate: number;
  effectRes: number;

  energyCurrent: number;
  energyMax: number;

  critRate: number;
  critDmg: number;

  dmgBoost: number;

  outgoingHealing: number;

  breakEffect: number;

  constructor(character: AllyBaseStats) {
    this.atk = { base: character.atk[character.lvl + character.ascention], flatIncrease: 0, percentageIncrease: 0 };
    this.hp = { base: character.hp[character.lvl + character.ascention], flatIncrease: 0, percentageIncrease: 0 };
    this.def = { base: character.def[character.lvl + character.ascention], flatIncrease: 0, percentageIncrease: 0 };

    this.speed = character.speed;

    this.effectHitRate = 0;
    this.effectRes = 0;

    this.energyMax = character.energyMax;
    this.energyCurrent = this.energyMax / 2;

    this.critRate = 0.05;
    this.critDmg = 0.5;

    this.dmgBoost = 0;

    this.outgoingHealing = 0;

    this.breakEffect = 0;
  }
}

interface baseStat {
  base: number;
  percentageIncrease: number;
  flatIncrease: number;
}

import { allBaseStats, possibleClass, rarity } from "../dataBase/allCharsBaseStats";
import { oneLcInterface } from "../dataBase/lightconesDataAllPrydwen";
import { ArtifactSet } from "./artifact-set";
import { possibleStats } from "./relic";

export class AllyBaseStats {
  name: string = "";
  lvl: number = possibleLevel.lvl_80;

  atk: number[] = [];
  hp: number[] = [];
  def: number[] = [];

  speed: number = 0;
  energyMax: number = 0;

  critRate = 0.05;
  critDmg = 0.5;
  dmgBoost = 0;

  breakEffect = 0;
  effectHitRate = 0;
  effectRes = 0;
  outgoingHealing = 0;

  rarity = rarity.gold;
  class = possibleClass.preservation;

  lightCone?: oneLcInterface;

  atkIncFlat = 0;
  atkIncPercentage = 0;
  defIncFlat = 0;
  defIncPercentage = 0;
  hpIncFlat = 0;
  hpIncPercentage = 0;
  speedIncFlat = 0;
  critRateIncFlat = 0;
  critDmgIncFlat = 0;
  breakEffectIncFlat = 0;
  effectHitRateIncFlat = 0;
  dmgBonusIncFlat = 0;

  artifactSet: ArtifactSet = new ArtifactSet();

  /**
   *
   * @param name
   * @param atk
   * @param hp
   * @param def
   * @param speed
   * @param energyMax
   */
  constructor(characterName: string) {
    let tmp = allBaseStats.find((item) => item.name == characterName);
    if (!tmp) {
      return;
    }

    this.name = tmp.name;
    this.atk = tmp.ATK;
    this.hp = tmp.HP;
    this.def = tmp.DEF;
    this.speed = tmp.SPEED;
    this.energyMax = tmp.ENERGY;

    this.rarity = tmp.rarity;
    this.class = tmp.class;
  }

  calcInc() {
    this.clearStatsInc();
    this.artifactSet.getAsArray().forEach((relic) => {
      if (relic.mainStat) {
        this.calcOneStat({ name: relic.mainStat, value: relic.mainStatValue! });
      }

      relic.subStats.forEach((subStat) => {
        if (subStat) {
          this.calcOneStat(subStat);
        }
      });
    });
  }

  private clearStatsInc() {
    this.atkIncFlat = 0;
    this.atkIncPercentage = 0;
    this.defIncFlat = 0;
    this.defIncPercentage = 0;
    this.hpIncFlat = 0;
    this.hpIncPercentage = 0;
    this.speedIncFlat = 0;
    this.critRateIncFlat = 0;
    this.critDmgIncFlat = 0;
    this.breakEffectIncFlat = 0;
    this.effectHitRateIncFlat = 0;
    this.dmgBonusIncFlat = 0;
  }

  private calcOneStat(stat: { name: string; value: number }) {
    switch (stat.name) {
      case possibleStats.atk:
        this.atkIncFlat += stat.value;
        break;
      case possibleStats.hp:
        this.hpIncFlat += stat.value;
        break;
      case possibleStats.def:
        this.defIncFlat += stat.value;
        break;
      case possibleStats.atkPercentage:
        this.atkIncPercentage += stat.value / 100;
        break;
      case possibleStats.hpPercentage:
        this.hpIncPercentage += stat.value / 100;
        break;
      case possibleStats.defPercentage:
        this.defIncPercentage += stat.value / 100;
        break;
      case possibleStats.critRate:
        this.critRateIncFlat += stat.value / 100;
        break;
      case possibleStats.critDMG:
        this.critDmgIncFlat += stat.value / 100;
        break;
      case possibleStats.dmgBonus:
        this.dmgBonusIncFlat += stat.value / 100;
        break;
      case possibleStats.speed:
        this.speedIncFlat += stat.value;
        break;
      case possibleStats.effectResistance:
        ///////////////////////////////////////////////
        break;
      case possibleStats.hitRateEffectiveness:
        this.effectHitRateIncFlat += stat.value / 100;
        break;
      case possibleStats.healingBonus:
        // this.effectHitRateIncFlat += stat.value;
        break;
      case possibleStats.breakEffect:
        this.breakEffectIncFlat += stat.value / 100;
        break;
      case possibleStats.energyRechargeRate:
        // this.breakEffectIncFlat += stat.value;
        break;

      default:
        alert("Непонятная собака при подсчете!");
        break;
    }
  }
}

export enum possibleLevel {
  lvl_1_20,
  lvl_20_20,
  lvl_20_30,
  lvl_30_30,
  lvl_30_40,
  lvl_40_40,
  lvl_40_50,
  lvl_50_50,
  lvl_50_60,
  lvl_60_60,
  lvl_60_70,
  lvl_70_70,
  lvl_70_80,
  lvl_80,
}

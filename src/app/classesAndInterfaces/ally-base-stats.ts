import { allBaseStats, possibleClass, rarity } from "../dataBase/allCharsBaseStats";
import { ArtifactSet } from "./artifact-set";

export class AllyBaseStats {
  name: string = "";
  lvl: number = possibleLevel.lvl_1_20;

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

  artifactSet: ArtifactSet[] = [];
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

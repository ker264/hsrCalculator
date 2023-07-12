import { ArtifactSet } from "./artifact-set";

export class AllyBaseStats {
  name: string = "";
  lvl: number = possibleLevel.lvl_1_20;

  atk: number[];
  hp: number[];
  def: number[];

  speed: number;
  energyMax: number;

  /**
   *
   * @param name
   * @param atk
   * @param hp
   * @param def
   * @param speed
   * @param energyMax
   */
  constructor(name: string, atk: number[], hp: number[], def: number[], speed: number, energyMax: number) {
    this.name = name;
    this.atk = atk;
    this.hp = hp;
    this.def = def;
    this.speed = speed;
    this.energyMax = energyMax;
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

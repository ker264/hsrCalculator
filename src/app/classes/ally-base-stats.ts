import { ArtifactSet } from "./artifact-set";

export class AllyBaseStats {
  name: string = "";
  lvl: number = possibleLevel.lvl_1;
  ascention: number = 0;

  atk: number[];
  hp: number[];
  def: number[];

  speed: number;
  taunt: number;
  energyMax: number;

  constructor(atk: number[], hp: number[], def: number[], speed: number, taunt: number, energyMax: number) {
    this.atk = atk;
    this.hp = hp;
    this.def = def;
    this.speed = speed;
    this.taunt = taunt;
    this.energyMax = energyMax;
  }

  artifactSet: ArtifactSet[] = [];
}

export enum possibleLevel {
  lvl_1,
  lvl_20,
  lvl_30,
  lvl_40,
  lvl_50,
  lvl_60,
  lvl_70,
  lvl_80,
}

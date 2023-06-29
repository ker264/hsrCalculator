export class AllyBaseStats {
  name: string = "";
  lvl: number = 1;
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
}

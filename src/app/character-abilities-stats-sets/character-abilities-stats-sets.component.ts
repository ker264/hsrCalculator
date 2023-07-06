import { Component, Input } from "@angular/core";
import { CharBaseStats } from "../classesAndInterfaces/char-base-stats";

@Component({
  selector: "app-character-abilities-stats-sets",
  templateUrl: "./character-abilities-stats-sets.component.html",
  styleUrls: ["./character-abilities-stats-sets.component.scss"],
})
export class CharacterAbilitiesStatsSetsComponent {
  @Input() charBaseStats?: CharBaseStats;

  name: string;
  lvlIndex: number;

  atk: number;
  hp: number;
  def: number;
  spd: number;
  critRate: number;
  critDmg: number;
  effectHitRate: number;
  breakEffect: number;
  maxEnergy: number;

  constructor() {
    this.critRate = 5;
    this.critDmg = 50;
    this.effectHitRate = 0;
    this.breakEffect = 0;
    this.lvlIndex = 0;

    if (!this.charBaseStats) {
      this.name = "error";
      this.atk = 0;
      this.hp = 0;
      this.def = 0;
      this.spd = 0;
      this.maxEnergy = 0;
      return;
    }

    this.name = this.charBaseStats.name;
    this.atk = this.charBaseStats.atk[this.lvlIndex];
    this.hp = this.charBaseStats.hp[this.lvlIndex];
    this.def = this.charBaseStats.def[this.lvlIndex];
    this.spd = this.charBaseStats.speed;
    this.maxEnergy = this.charBaseStats.energy;
  }
}

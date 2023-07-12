import { Component, Input } from "@angular/core";
import { AllyBaseStats, possibleLevel } from "src/app/classesAndInterfaces/ally-base-stats";
import { CharBaseStats } from "src/app/classesAndInterfaces/char-base-stats";

@Component({
  selector: "app-character-abilities-stats-sets",
  templateUrl: "./character-abilities-stats-sets.component.html",
  styleUrls: ["./character-abilities-stats-sets.component.scss"],
})
export class CharacterAbilitiesStatsSetsComponent {
  @Input() charBaseStats!: AllyBaseStats;

  // name: string = this.charBaseStats.name;
  lvlIndex: number = possibleLevel.lvl_1_20;

  // atk: number;
  // hp: number;
  // def: number;
  // spd: number;
  // critRate: number;
  // critDmg: number;
  // effectHitRate: number;
  // breakEffect: number;
  // maxEnergy: number;
}

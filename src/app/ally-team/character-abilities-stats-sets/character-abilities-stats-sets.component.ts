import { Component, Input } from "@angular/core";
import { AllyBaseStats, possibleLevel } from "src/app/classesAndInterfaces/ally-base-stats";
import { CharBaseStats } from "src/app/classesAndInterfaces/char-base-stats";
import { lcAllData } from "src/app/dataBase/lightconesDataAllPrydwen";

@Component({
  selector: "app-character-abilities-stats-sets",
  templateUrl: "./character-abilities-stats-sets.component.html",
  styleUrls: ["./character-abilities-stats-sets.component.scss"],
})
export class CharacterAbilitiesStatsSetsComponent {
  @Input() charBaseStats!: AllyBaseStats;

  lcAllData = lcAllData;

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

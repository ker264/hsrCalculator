import { Component, Input } from "@angular/core";
import { baseRelic } from "src/app/classesAndInterfaces/relic";
import { DmgAndStatCalculationService } from "src/app/services/dmg-and-stat-calculation.service";

@Component({
  selector: "app-relic-sub-stats",
  templateUrl: "./relic-sub-stats.component.html",
  styleUrls: ["./relic-sub-stats.component.scss"],
})
export class RelicSubStatsComponent {
  @Input() relicPart!: baseRelic;

  possibleSubStats: any;

  constructor(private calcManager: DmgAndStatCalculationService) {}

  chooseMainStat(name: string) {
    this.relicPart.mainStat = this.relicPart.possibleMainStat.find((v) => v == name);
    this.relicPart.mainStatValue = this.relicPart.mainStatRolls.find((v) => v.name == this.relicPart.mainStat)?.maxStat;
    this.calcManager.reCalc();
  }

  chooseSubStat(name: string, index: number) {
    this.relicPart.subStats[index] = { name, value: 0 };
  }

  updatePossibleSubStats() {
    let tmpSubList = this.relicPart.subRolls.filter((a) => a.name != this.relicPart.mainStat);

    this.relicPart.subStats.forEach((a) => {
      if (!a) return;

      tmpSubList = tmpSubList.filter((b) => {
        return b.name != a.name;
      });
    });

    this.possibleSubStats = tmpSubList;
  }

  calculateStats() {
    this.calcManager.reCalc();
  }
}

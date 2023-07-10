import { Component } from "@angular/core";
import { allBaseStats } from "src/app/charactersData/allCharsBaseStats";
import { AllyBaseStats } from "src/app/classesAndInterfaces/ally-base-stats";

@Component({
  selector: "app-one-ally-in-team",
  templateUrl: "./one-ally-in-team.component.html",
  styleUrls: ["./one-ally-in-team.component.scss"],
})
export class OneAllyInTeamComponent {
  hero?: AllyBaseStats;

  chooseHero() {
    let tmp = allBaseStats.find((item) => (item.name = "Seele"));
    if (!tmp) {
      console.log("Ацаца");
      return;
    }
    this.hero = new AllyBaseStats(tmp.name, tmp.ATK, tmp.HP, tmp.DEF, tmp.SPEED, tmp.ENERGY);
  }
}

import { Component } from "@angular/core";
import { AllyBaseStats } from "../classesAndInterfaces/ally-base-stats";
import { ControlServiceService } from "../services/control-service.service";

@Component({
  selector: "app-ally-team",
  templateUrl: "./ally-team.component.html",
  styleUrls: ["./ally-team.component.scss"],
})
export class AllyTeamComponent {
  team: (AllyBaseStats | undefined)[] = Array(4);

  pickForPosition?: number;
  showStatsForPosition?: number;

  constructor(private controlManager: ControlServiceService) {
    this.team.fill(undefined);
  }

  setCharacterForCurrentPosition(name: string) {
    if (this.pickForPosition == undefined) return;
    this.team[this.pickForPosition] = new AllyBaseStats(name);

    this.pickForPosition = undefined;
  }

  chooseCharacter(position: number) {
    this.showStatsForPosition = undefined;
    this.pickForPosition = position;
  }

  showStats(position: number) {
    this.pickForPosition = undefined;
    if (this.showStatsForPosition == position) {
      this.showStatsForPosition = undefined;
      return;
    }
    this.showStatsForPosition = position;
  }
}

import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AllyBaseStats } from "src/app/classesAndInterfaces/ally-base-stats";
import { ControlServiceService } from "src/app/services/control-service.service";

@Component({
  selector: "app-one-ally-in-team",
  templateUrl: "./one-ally-in-team.component.html",
  styleUrls: ["./one-ally-in-team.component.scss"],
})
export class OneAllyInTeamComponent {
  @Output() pickCharacterForPosition = new EventEmitter<void>();
  @Output() showStatsForPosition = new EventEmitter<void>();

  @Input() hero?: AllyBaseStats;

  chooseCharacter = true;

  constructor(private controlManager: ControlServiceService) {}

  chooseHero() {
    this.pickCharacterForPosition.emit();
  }

  showStats() {
    this.showStatsForPosition.emit();
  }
}

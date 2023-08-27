import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { DmgAndStatCalculationService, dmgLogMsgI } from "../services/dmg-and-stat-calculation.service";

@Component({
  selector: "app-dmg-log",
  templateUrl: "./dmg-log.component.html",
  styleUrls: ["./dmg-log.component.scss"],
})
export class DmgLogComponent implements OnDestroy {
  subs: Subscription;

  log: dmgLogMsgI[];

  constructor(private calcManager: DmgAndStatCalculationService) {
    this.subs = calcManager.newDmgCalcMsg$.subscribe((item) => this.newMsg(item));
    this.log = JSON.parse(localStorage.getItem("dmgLog") ?? "[]");
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  newMsg(item: dmgLogMsgI) {
    this.log.push(item);
    localStorage.setItem("dmgLog", JSON.stringify(this.log));
  }

  clearLog() {
    this.log = [];
    localStorage.removeItem("dmgLog");
  }

  clearMsg(i: number) {
    this.log = this.log.filter((item, index) => index != i);
    localStorage.setItem("dmgLog", JSON.stringify(this.log));
  }
}

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AllyBaseStats } from "../classesAndInterfaces/ally-base-stats";

@Injectable({
  providedIn: "root",
})
export class DmgAndStatCalculationService {
  private recalculateStats = new Subject<boolean>();
  public recalculateStats$ = this.recalculateStats.asObservable();

  private getCharData = new Subject<boolean>();
  public getCharData$ = this.getCharData.asObservable();

  private sendCharData = new Subject<AllyBaseStats>();
  public sendCharData$ = this.sendCharData.asObservable();

  private newDmgCalcMsg = new Subject<dmgLogMsgI>();
  public newDmgCalcMsg$ = this.newDmgCalcMsg.asObservable();

  public reCalc() {
    this.recalculateStats.next(true);
  }

  public getData() {
    this.getCharData.next(true);
  }

  public sendData(data: AllyBaseStats) {
    this.sendCharData.next(data);
  }

  public newMsg(msg: dmgLogMsgI) {
    this.newDmgCalcMsg.next(msg);
  }

  constructor() {}
}

export interface dmgLogMsgI {
  charName: string;
  setName: string;
  nonCrit: number;
  crit: number;
  averageCrit: number;
  spd: number;
  atk: number;
  critRate: number;
  critDmg: number;
}

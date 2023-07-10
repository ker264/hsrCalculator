import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ControlServiceService {
  private pickOrShowControl = new Subject<string>();
  public pickOrShowStat$ = this.pickOrShowControl.asObservable();

  public pickCharacter() {
    this.pickOrShowControl.next("pick");
  }

  public showStats(name: string) {
    this.pickOrShowControl.next(name);
  }

  constructor() {}
}

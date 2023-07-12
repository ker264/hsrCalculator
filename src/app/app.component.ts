import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { ControlServiceService } from "./services/control-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "hsr-calculator";

  pickOrShow: string = "nothing";

  subs: Subscription;

  constructor(private controlManager: ControlServiceService) {
    this.subs = controlManager.pickOrShowStat$.subscribe((value) => (this.pickOrShow = value));
  }
}

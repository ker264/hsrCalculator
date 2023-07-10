import { Component } from "@angular/core";
import { allBaseStats } from "../charactersData/allCharsBaseStats";

@Component({
  selector: "app-hero-picker",
  templateUrl: "./hero-picker.component.html",
  styleUrls: ["./hero-picker.component.scss"],
})
export class HeroPickerComponent {
  charsName: string[] = [];

  constructor() {
    allBaseStats.forEach((oneChar) => this.charsName.push(oneChar.name));
  }
}

import { Component, EventEmitter, Output } from "@angular/core";
import { allBaseStats } from "src/app/dataBase/allCharsBaseStats";

@Component({
  selector: "app-hero-picker",
  templateUrl: "./hero-picker.component.html",
  styleUrls: ["./hero-picker.component.scss"],
})
export class HeroPickerComponent {
  charsName: string[] = [];
  @Output() chooseCharacterName = new EventEmitter<string>();

  constructor() {
    allBaseStats.forEach((oneChar) => this.charsName.push(oneChar.name));
  }

  chooseMe(name: string) {
    this.chooseCharacterName.emit(name);
  }
}

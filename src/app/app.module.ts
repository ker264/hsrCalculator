import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AllyTeamComponent } from "./ally-team/ally-team.component";
import { OneAllyInTeamComponent } from "./ally-team/one-ally-in-team/one-ally-in-team.component";
import { HeroPickerComponent } from "./ally-team/hero-picker/hero-picker.component";
import { CharacterAbilitiesStatsSetsComponent } from "./ally-team/character-abilities-stats-sets/character-abilities-stats-sets.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, CharacterAbilitiesStatsSetsComponent, AllyTeamComponent, OneAllyInTeamComponent, HeroPickerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

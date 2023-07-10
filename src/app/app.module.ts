import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CharacterAbilitiesStatsSetsComponent } from "./character-abilities-stats-sets/character-abilities-stats-sets.component";
import { AllyTeamComponent } from "./ally-team/ally-team.component";
import { OneAllyInTeamComponent } from "./ally-team/one-ally-in-team/one-ally-in-team.component";
import { HeroPickerComponent } from './hero-picker/hero-picker.component';

@NgModule({
  declarations: [AppComponent, CharacterAbilitiesStatsSetsComponent, AllyTeamComponent, OneAllyInTeamComponent, HeroPickerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

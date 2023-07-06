import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterAbilitiesStatsSetsComponent } from './character-abilities-stats-sets/character-abilities-stats-sets.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterAbilitiesStatsSetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

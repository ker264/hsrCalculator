import { ApplicationRef, ChangeDetectorRef, Component, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { AllyBaseStats, possibleLevel } from "src/app/classesAndInterfaces/ally-base-stats";
import { ArtifactSet } from "src/app/classesAndInterfaces/artifact-set";
import { CharBaseStats } from "src/app/classesAndInterfaces/char-base-stats";
import { baseRelic, possibleStats } from "src/app/classesAndInterfaces/relic";
import { lcAllData, oneLcInterface } from "src/app/dataBase/lightconesDataAllPrydwen";
import { DmgAndStatCalculationService } from "src/app/services/dmg-and-stat-calculation.service";

@Component({
  selector: "app-character-abilities-stats-sets",
  templateUrl: "./character-abilities-stats-sets.component.html",
  styleUrls: ["./character-abilities-stats-sets.component.scss"],
})
export class CharacterAbilitiesStatsSetsComponent implements OnDestroy {
  @Input() charBaseStats!: AllyBaseStats;

  lcAllData = lcAllData;
  showWeaponStats = false;
  relicPartToShow?: baseRelic = undefined;

  lvlToLvl = ["1", "20/20", "20/30", "30/30", "30/40", "40/40", "40/50", "50/50", "50/60", "60/60", "60/70", "70/70", "70/80", "80"];

  subs: Subscription;

  charSavedSets: ArtifactSet[] = [];
  changeName: boolean[] = [];

  constructor(private calcManager: DmgAndStatCalculationService) {
    this.subs = this.calcManager.recalculateStats$.subscribe((a) => {
      this.charBaseStats.calcInc();
    });

    this.subs = this.calcManager.getCharData$.subscribe((a) => {
      calcManager.sendData(this.charBaseStats);
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  chooseWeapon(lc: oneLcInterface) {
    this.charBaseStats.lightCone = lc;
    this.charBaseStats.lightCone.refLvl = 1;
  }

  switchShowWeapon() {
    this.showWeaponStats = !this.showWeaponStats;
    this.relicPartToShow = undefined;
  }

  setRefLvl(lvl: number) {
    this.charBaseStats.lightCone!.refLvl = lvl;
  }

  showRelic(relicPart: string) {
    this.showWeaponStats = false;

    switch (relicPart) {
      case "head":
        this.relicPartToShow = this.charBaseStats.artifactSet.head;
        break;
      case "hands":
        this.relicPartToShow = this.charBaseStats.artifactSet.hands;
        break;
      case "body":
        this.relicPartToShow = this.charBaseStats.artifactSet.body;
        break;
      case "legs":
        this.relicPartToShow = this.charBaseStats.artifactSet.boots;
        break;
      case "sphere":
        this.relicPartToShow = this.charBaseStats.artifactSet.sphere;
        break;
      case "rope":
        this.relicPartToShow = this.charBaseStats.artifactSet.rope;
        break;
    }
  }

  saveSet() {
    let relicsRaw = localStorage.getItem(`${this.charBaseStats.name}_relicSets`);
    let lcsRaw = localStorage.getItem(`${this.charBaseStats.name}_lc`);

    let relics: ArtifactSet[] = relicsRaw ? JSON.parse(relicsRaw) : [];
    let lcs: any[] = lcsRaw ? JSON.parse(lcsRaw) : [];

    this.charBaseStats.artifactSet.name = "newName";

    relics.push(this.charBaseStats.artifactSet);
    lcs.push(this.charBaseStats.lightCone ?? undefined);

    localStorage.setItem(`${this.charBaseStats.name}_relicSets`, JSON.stringify(relics));
    localStorage.setItem(`${this.charBaseStats.name}_lc`, JSON.stringify(lcs));
  }

  chooseSet() {
    let relicsRaw = localStorage.getItem(`${this.charBaseStats.name}_relicSets`);
    let relics: ArtifactSet[] = relicsRaw ? JSON.parse(relicsRaw) : [];

    this.charSavedSets = relics;

    this.changeName = new Array(relics.length);
    this.changeName.fill(false);
  }

  deleteItemFromSavedSets(event: any, i: number) {
    event.stopPropagation();

    this.charSavedSets = this.charSavedSets.filter((a, index) => index != i);

    localStorage.setItem(`${this.charBaseStats.name}_relicSets`, JSON.stringify(this.charSavedSets));

    let lcsRaw: oneLcInterface[] = JSON.parse(localStorage.getItem(`${this.charBaseStats.name}_lc`)!);
    lcsRaw = lcsRaw.filter((item, index) => index != i);
    localStorage.setItem(`${this.charBaseStats.name}_lc`, JSON.stringify(lcsRaw));

    this.changeName = new Array(this.charSavedSets.length);
    this.changeName.fill(false);
  }

  changeSetName(event: any, i: number) {
    event.stopPropagation();

    this.changeName[i] = !this.changeName[i];

    if (this.changeName[i]) return;
    this.charBaseStats.artifactSet.name = this.charSavedSets[i].name;
    localStorage.setItem(`${this.charBaseStats.name}_relicSets`, JSON.stringify(this.charSavedSets));
    this.changeName = new Array(this.charSavedSets.length);
    this.changeName.fill(false);
  }

  chooseSavedSet(i: number) {
    this.charBaseStats.artifactSet.setSetFromSavedSet(this.charSavedSets[i]);

    // console.log(JSON.parse(localStorage.getItem(`${this.charBaseStats.name}_lc`)!)[i]);

    this.charBaseStats.lightCone = JSON.parse(localStorage.getItem(`${this.charBaseStats.name}_lc`)!)[i];
    this.relicPartToShow = undefined;
    this.charBaseStats.calcInc();
  }
}

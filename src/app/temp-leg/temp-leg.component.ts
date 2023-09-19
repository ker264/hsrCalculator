import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { AllyBaseStats } from "../classesAndInterfaces/ally-base-stats";
import { DmgAndStatCalculationService } from "../services/dmg-and-stat-calculation.service";

@Component({
  selector: "app-temp-leg",
  templateUrl: "./temp-leg.component.html",
  styleUrls: ["./temp-leg.component.scss"],
})
export class TempLegComponent {
  name: string = "newName";

  atkScale: number = 0;
  hpScale: number = 0;
  defScale: number = 0;
  flatScale: number = 0;

  extraAtk: number = 0;
  extraHp: number = 0;
  extraDef: number = 0;
  extraAtkPercentage: number = 0;
  extraHpPercentage: number = 0;
  extraDefPercentage: number = 0;
  extraCritRate: number = 0;
  extraCritDmg: number = 0;
  extraDmgBonus: number = 0;

  armorPen: number = 0;
  armorIgnore: number = 0;
  resPen: number = 0;
  dmgTaken: number = 0;

  enemyLvl: number = 80;
  enemtRes: number = 20;
  enemyToughness: number = 360;
  enemyToughnessBroken: boolean = false;

  charSavedCrutches: TempLegComponent[] = [];

  subs: Subscription;
  constructor(private calcManager: DmgAndStatCalculationService) {
    this.subs = calcManager.sendCharData$.subscribe((data) => this.continueCalc(data));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  lookForCharCrutches() {
    let crutchesRaw = localStorage.getItem(`allCrutches`);
    let crutches: TempLegComponent[] = crutchesRaw ? JSON.parse(crutchesRaw) : [];

    this.charSavedCrutches = crutches;

    console.log(this.charSavedCrutches);
  }

  chooseSavedCrutch(i: number) {
    this.name = this.charSavedCrutches[i].name;

    this.atkScale = this.charSavedCrutches[i].atkScale;
    this.hpScale = this.charSavedCrutches[i].hpScale;
    this.defScale = this.charSavedCrutches[i].defScale;
    this.flatScale = this.charSavedCrutches[i].flatScale;

    this.extraAtk = this.charSavedCrutches[i].extraAtk;
    this.extraHp = this.charSavedCrutches[i].extraHp;
    this.extraDef = this.charSavedCrutches[i].extraDef;
    this.extraAtkPercentage = this.charSavedCrutches[i].extraAtkPercentage;
    this.extraHpPercentage = this.charSavedCrutches[i].extraHpPercentage;
    this.extraDefPercentage = this.charSavedCrutches[i].extraDefPercentage;
    this.extraCritRate = this.charSavedCrutches[i].extraCritRate;
    this.extraCritDmg = this.charSavedCrutches[i].extraCritDmg;
    this.extraDmgBonus = this.charSavedCrutches[i].extraDmgBonus;

    this.armorPen = this.charSavedCrutches[i].armorPen;
    this.armorIgnore = this.charSavedCrutches[i].armorIgnore;
    this.resPen = this.charSavedCrutches[i].resPen;
    this.dmgTaken = this.charSavedCrutches[i].dmgTaken;

    this.enemyLvl = this.charSavedCrutches[i].enemyLvl;
    this.enemtRes = this.charSavedCrutches[i].enemtRes;
    this.enemyToughness = this.charSavedCrutches[i].enemyToughness;
    this.enemyToughnessBroken = this.charSavedCrutches[i].enemyToughnessBroken;
  }

  deleteItemFromSavedCrutches(event: any, i: number) {
    event.stopPropagation();
    this.charSavedCrutches = this.charSavedCrutches.filter((a, index) => index != i);
    localStorage.setItem(`allCrutches`, JSON.stringify(this.charSavedCrutches));
  }

  saveCrutch() {
    let crutchesRaw = localStorage.getItem(`allCrutches`);
    let crutches: any[] = crutchesRaw ? JSON.parse(crutchesRaw) : [];

    this.charSavedCrutches = crutches;

    crutches.push({
      name: this.name,

      atkScale: this.atkScale,
      hpScale: this.hpScale,
      defScale: this.defScale,
      flatScale: this.flatScale,

      extraAtk: this.extraAtk,
      extraHp: this.extraHp,
      extraDef: this.extraDef,
      extraAtkPercentage: this.extraAtkPercentage,
      extraHpPercentage: this.extraHpPercentage,
      extraDefPercentage: this.extraDefPercentage,
      extraCritRate: this.extraCritRate,
      extraCritDmg: this.extraCritDmg,
      extraDmgBonus: this.extraDmgBonus,

      armorPen: this.armorPen,
      armorIgnore: this.armorIgnore,
      resPen: this.resPen,
      dmgTaken: this.dmgTaken,

      enemyLvl: this.enemyLvl,
      enemtRes: this.enemtRes,
      enemyToughness: this.enemyToughness,
      enemyToughnessBroken: this.enemyToughnessBroken,
    });

    localStorage.setItem(`allCrutches`, JSON.stringify(crutches));
  }

  calcDmg() {
    this.calcManager.getData();
  }

  continueCalc(charData: AllyBaseStats) {
    let lcAtk = charData.lightCone ? charData.lightCone?.atk : 0;
    let lcHp = charData.lightCone ? charData.lightCone?.hp : 0;
    let lcDef = charData.lightCone ? charData.lightCone?.def : 0;

    let baseAtk = lcAtk + charData.atk[charData.lvl];
    let baseHp = lcHp + charData.hp[charData.lvl];
    let baseDef = lcDef + charData.def[charData.lvl];

    let atkFinal = baseAtk * (1 + charData.atkIncPercentage + this.extraAtkPercentage / 100) + charData.atkIncFlat + this.extraAtk;
    let hpFinal = baseHp * (1 + charData.hpIncPercentage + this.extraHpPercentage / 100) + charData.hpIncFlat + this.extraHp;
    let defFinal = baseDef * (1 + charData.defIncPercentage + this.extraDefPercentage / 100) + charData.defIncFlat + this.extraDef;

    let critRateFinal = charData.critRate + charData.critRateIncFlat + this.extraCritRate / 100;
    let critDmgFinal = charData.critDmg + charData.critDmgIncFlat + this.extraCritDmg / 100;
    let dmgBonusFinal = charData.dmgBoost + charData.dmgBonusIncFlat + this.extraDmgBonus / 100;

    let lvlToLvl = [1, 20, 20, 30, 30, 40, 40, 50, 50, 60, 60, 70, 70, 80];
    let realLvl = lvlToLvl[charData.lvl];

    let baseDmg = (this.atkScale / 100) * atkFinal + (this.hpScale / 100) * hpFinal + (this.defScale / 100) * defFinal + this.flatScale;
    let dmgMultiplier = 1 + dmgBonusFinal;
    let defMultiplier = (realLvl + 20) / ((this.enemyLvl + 20) * (1 - this.armorPen / 100 - this.armorIgnore / 100) + realLvl + 20);
    let resMultiplier = 1 - (this.enemtRes / 100 - this.resPen / 100);
    let dmgTakenMultiplier = 1 + this.dmgTaken / 100;
    let brokenMultiplier = this.enemyToughnessBroken ? 1 : 0.9;

    let nonCritAffectedDmg = baseDmg * dmgMultiplier * defMultiplier * resMultiplier * dmgTakenMultiplier * brokenMultiplier;
    let critAffectedDmg = nonCritAffectedDmg * (1 + critDmgFinal);
    let averageCritAffectedDmg = nonCritAffectedDmg * (1 + critDmgFinal * critRateFinal);

    // console.log("atkBase", baseAtk);
    // console.log("atkFinal", atkFinal);
    // console.log("critRateFinal", critRateFinal);
    // console.log("critDmgFinal", critDmgFinal);
    // console.log("dmgBonusFinal", dmgBonusFinal);
    // console.log(nonCritAffectedDmg, critAffectedDmg, averageCritAffectedDmg);

    this.calcManager.newMsg({
      charName: charData.name,
      setName: charData.artifactSet.name,
      nonCrit: nonCritAffectedDmg,
      crit: critAffectedDmg,
      averageCrit: averageCritAffectedDmg,
      atk: atkFinal,
      critRate: critRateFinal,
      critDmg: critDmgFinal,
      spd: charData.speed + charData.speedIncFlat,
    });
  }
}

import { Pipe, PipeTransform } from "@angular/core";
import { oneLcInterface } from "src/app/dataBase/lightconesDataAllPrydwen";

@Pipe({
  name: "lcForPath",
})
export class LcForPathPipe implements PipeTransform {
  transform(lcs: oneLcInterface[], path: string): oneLcInterface[] {
    return lcs.filter((lc) => {
      return lc.path == path;
    });
  }
}

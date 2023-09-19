import { baseRelic } from "./relic";

export class ArtifactSet {
  name: string = "";
  head: baseRelic = new baseRelic("head");
  hands: baseRelic = new baseRelic("hands");
  body: baseRelic = new baseRelic("body");
  boots: baseRelic = new baseRelic("boots");
  sphere: baseRelic = new baseRelic("sphere");
  rope: baseRelic = new baseRelic("rope");

  getAsArray() {
    let relics: baseRelic[] = [];
    relics.push(this.head, this.hands, this.body, this.boots, this.sphere, this.rope);
    return relics;
  }

  setSetFromSavedSet(newSet: ArtifactSet) {
    this.name = newSet.name;
    this.head = newSet.head;
    this.hands = newSet.hands;
    this.body = newSet.body;
    this.boots = newSet.boots;
    this.sphere = newSet.sphere;
    this.rope = newSet.rope;
  }
}

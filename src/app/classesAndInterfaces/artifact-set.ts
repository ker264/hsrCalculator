import { RelicBody, RelicBoots, RelicHands, RelicHead, RelicRope, RelicSphere } from "./relic";

export class ArtifactSet {
  name: string = "";
  head: RelicHead = new RelicHead();
  hands: RelicHands = new RelicHands();
  body: RelicBody = new RelicBody();
  boots: RelicBoots = new RelicBoots();
  sphere: RelicSphere = new RelicSphere();
  rope: RelicRope = new RelicRope();
}

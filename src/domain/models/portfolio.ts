import { Share } from "./share";

export class Portfolio {
  constructor(
    public id: number,
    public userId: number,
    public shares: Share[]
  ) {}
}

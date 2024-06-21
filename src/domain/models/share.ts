export class Share {
    constructor(
      public id: number,
      public symbol: string,
      public price: number,
      public portfolioId: number,
      public quantity: number
    ) {}
}
  
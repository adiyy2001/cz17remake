export class RatesTableApiModel {
  // public effectiveDate: Date;
  // public no: string;
  public rates: RateApiModel[];
  // public table: string;
}

export class RateApiModel {
  public currency: string;
  public code: string;
  public mid: number;
}

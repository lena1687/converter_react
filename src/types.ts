export type CurrencyData = { date: string } & CurrencyOption;

export interface CurrencyOption {
  [key: string]: number;
}

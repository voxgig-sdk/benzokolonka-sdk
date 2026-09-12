export interface FuelPrice {
    address?: string;
    id?: number;
    lastUpdated?: string;
    name?: string;
    price?: number;
    priceChange?: number;
    region?: number;
}
export interface FuelPriceListMatch {
    fuel: string;
    period?: number;
    region?: number;
}

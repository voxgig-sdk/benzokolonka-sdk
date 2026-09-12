import { BenzokolonkaEntityBase } from '../BenzokolonkaEntityBase';
import type { BenzokolonkaSDK } from '../BenzokolonkaSDK';
import type { Control } from '../types';
import type { FuelPrice, FuelPriceListMatch } from '../BenzokolonkaTypes';
declare class FuelPriceEntity extends BenzokolonkaEntityBase<FuelPrice> {
    constructor(client: BenzokolonkaSDK, entopts: any);
    make(this: FuelPriceEntity): FuelPriceEntity;
    list(this: any, reqmatch?: FuelPriceListMatch, ctrl?: Control): Promise<FuelPriceEntity[]>;
}
export { FuelPriceEntity };

import { Context } from './Context';
declare class BenzokolonkaError extends Error {
    isBenzokolonkaError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { BenzokolonkaError };

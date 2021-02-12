import { Entity_passport_strategie } from "./passport_strategie";
/**
  Passport strategies for authenticating with local call
*/
export declare class Entity_passport_strategie_local extends Entity_passport_strategie {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checklib(val: any, path?: string): string[];
    static checkstrategieName(val: any, path?: string): string[];
    static checkCBLib(val: any, path?: string): string[];
    static checkcbConf(val: any, path?: string): string[];
    static checkusernameField(val: any, path?: string): string[];
    static checkpasswordField(val: any, path?: string): string[];
    static checksession(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

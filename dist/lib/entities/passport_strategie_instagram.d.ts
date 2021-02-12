import { Entity_passport_strategie } from "./passport_strategie";
/**
  Passport strategy for authenticating with Instagram using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-instagram)
*/
export declare class Entity_passport_strategie_instagram extends Entity_passport_strategie {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checklib(val: any, path?: string): string[];
    static checkstrategieName(val: any, path?: string): string[];
    static checkclientID(val: any, path?: string): string[];
    static checkclientSecret(val: any, path?: string): string[];
    static checkcallbackURL(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

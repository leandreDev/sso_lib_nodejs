import { Entity_passport_strategie } from "./passport_strategie";
/**
  Passport strategies for authenticating with Google using OAuth 1.0a and OAuth 2.0 (https://github.com/jaredhanson/passport-google-oauth)
*/
export declare class Entity_passport_strategie_google extends Entity_passport_strategie {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checklib(val: any, path?: string): string[];
    static checkstrategieName(val: any, path?: string): string[];
    static checkclientID(val: any, path?: string): string[];
    static checkclientSecret(val: any, path?: string): string[];
    static checkcallbackURL(val: any, path?: string): string[];
    static checkscope(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

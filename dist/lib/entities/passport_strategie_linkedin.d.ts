import { Entity_passport_strategie } from "./passport_strategie";
/**
  Passport strategy for authenticating with LinkedIn using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-linkedin)
*/
export declare class Entity_passport_strategie_linkedin extends Entity_passport_strategie {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checklib(val: any, path?: string): string[];
    static checkstrategieName(val: any, path?: string): string[];
    static checkconsumerKey(val: any, path?: string): string[];
    static checkconsumerSecret(val: any, path?: string): string[];
    static checkcallbackURL(val: any, path?: string): string[];
    static checkscope(val: any, path?: string): string[];
    static checkprofileFields(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

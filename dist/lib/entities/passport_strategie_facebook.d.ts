import { Entity_passport_strategie } from "./passport_strategie";
/**
  Facebook authentication strategy for Passport  (https://github.com/jaredhanson/passport-facebook)
*/
export declare class Entity_passport_strategie_facebook extends Entity_passport_strategie {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checklib(val: any, path?: string): string[];
    static checkstrategieName(val: any, path?: string): string[];
    static checkclientID(val: any, path?: string): string[];
    static checkclientSecret(val: any, path?: string): string[];
    static checkcallbackURL(val: any, path?: string): string[];
    static checkscope(val: any, path?: string): string[];
    static checkprofileFields(val: any, path?: string): string[];
    static checkenableProof(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

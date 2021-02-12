import { Entity_field } from "./field";
/**
  ce champ représente les dates
*/
export declare class Entity_date extends Entity_field {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkdefault(val: any, path?: string): string[];
    static checkmin(val: any, path?: string): string[];
    static checkmax(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

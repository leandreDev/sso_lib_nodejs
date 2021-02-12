import { Entity_field } from "./field";
/**
  ce champ représente les booléains
*/
export declare class Entity_boolean extends Entity_field {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkdefault(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

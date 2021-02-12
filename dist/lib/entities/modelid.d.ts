import { Entity_field } from "./field";
/**
  modelid
*/
export declare class Entity_modelid extends Entity_field {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkref(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

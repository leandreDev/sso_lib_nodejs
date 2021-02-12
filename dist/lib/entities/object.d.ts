import { Entity_field } from "./field";
/**
  ce champ représente les objets
*/
export declare class Entity_object extends Entity_field {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

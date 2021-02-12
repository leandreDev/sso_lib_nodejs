import { Entity_string } from "./string";
/**
  champ pour le html
*/
export declare class Entity_htmltexte extends Entity_string {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

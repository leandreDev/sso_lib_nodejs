import { Entity } from "@leandreDev/utils";
/**
  ce champ est le champ représente les champs de la base. Il est abstrait, vous devez utiliser ces enfants
*/
export declare class Entity_field extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checkdescription(val: any, path?: string): string[];
    static checkisArrayOf(val: any, path?: string): string[];
    static checkrequired(val: any, path?: string): string[];
    static checkunique(val: any, path?: string): string[];
    static checkindex(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

import { Entity } from "@hfdev/utils";
/**
  configuration d'une stratégie passport à déployer sur le sso
*/
export declare class Entity_passport_strategie extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checkautoCreate(val: any, path?: string): string[];
    static checkautoLoginWMail(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

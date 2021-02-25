import { Entity } from "@leandredev/utils";
/**
  protoschema est un méta modéle. il permet de créer les autres modèle de la base
*/
export declare class Entity_protoschema extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkname(val: any, path?: string): string[];
    static checkdescription(val: any, path?: string): string[];
    static checkisAbstract(val: any, path?: string): string[];
    static checkisSchema(val: any, path?: string): string[];
    static checkparentModel(val: any, path?: string): string[];
    static checkfields(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

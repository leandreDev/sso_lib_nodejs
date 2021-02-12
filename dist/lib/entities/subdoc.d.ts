import { Entity_field } from "./field";
/**
  ce champ permet d'insérer un document dans un autre
*/
export declare class Entity_subdoc extends Entity_field {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkprotoSchemaId(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

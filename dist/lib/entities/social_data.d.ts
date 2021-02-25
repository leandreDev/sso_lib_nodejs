import { Entity } from "@leandreDev/utils";
/**
  donnée des connecteur sociaux
*/
export declare class Entity_social_data extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

import { Entity } from "@leandreDev/utils";
/**
  JSON Web Key Set (JWK Set)
*/
export declare class Entity_jwks extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkkeys(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

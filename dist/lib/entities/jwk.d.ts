import { Entity } from "@hfdev/utils";
/**
  JSON Web Key
*/
export declare class Entity_jwk extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkkty(val: any, path?: string): string[];
    static checkuse(val: any, path?: string): string[];
    static checkkey_ops(val: any, path?: string): string[];
    static checkalg(val: any, path?: string): string[];
    static checkkid(val: any, path?: string): string[];
    static checkx5u(val: any, path?: string): string[];
    static checkx5c(val: any, path?: string): string[];
    static checkx5t(val: any, path?: string): string[];
    static ["checkx5t#S256"](val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

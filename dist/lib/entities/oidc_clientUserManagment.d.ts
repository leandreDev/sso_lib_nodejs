import { Entity } from "@leandredev/utils";
/**
  configuration du gestionnaire d'utilisateur
*/
export declare class Entity_oidc_clientUserManagment extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checksign_in_uri(val: any, path?: string): string[];
    static checkpassword_recovery_uri(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

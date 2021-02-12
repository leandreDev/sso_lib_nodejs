import { Entity } from "@hfdev/utils";
/**
  compte de l'utilisateur
*/
export declare class Entity_oidc_account extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkaccount_id(val: any, path?: string): string[];
    static checkbirthdate(val: any, path?: string): string[];
    static checkemail(val: any, path?: string): string[];
    static checkemail_verified(val: any, path?: string): string[];
    static checkfamily_name(val: any, path?: string): string[];
    static checkgender(val: any, path?: string): string[];
    static checkgiven_name(val: any, path?: string): string[];
    static checklocale(val: any, path?: string): string[];
    static checkmiddle_name(val: any, path?: string): string[];
    static checkname(val: any, path?: string): string[];
    static checknickname(val: any, path?: string): string[];
    static checkphone_number(val: any, path?: string): string[];
    static checkphone_number_verified(val: any, path?: string): string[];
    static checkpassword(val: any, path?: string): string[];
    static checkpicture(val: any, path?: string): string[];
    static checkconnector(val: any, path?: string): string[];
    static checkresetPasswordKey(val: any, path?: string): string[];
    static checkresetPasswordEndDate(val: any, path?: string): string[];
    static checkresetPasswordReturn(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

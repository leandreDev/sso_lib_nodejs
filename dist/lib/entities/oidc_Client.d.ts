import { Entity } from "@hfdev/utils";
/**
  description d'un client openId (c'est une application)
*/
export declare class Entity_oidc_Client extends Entity {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checkclient_id(val: any, path?: string): string[];
    static checkclient_secret(val: any, path?: string): string[];
    static checkgrant_types(val: any, path?: string): string[];
    static checkredirect_uris(val: any, path?: string): string[];
    static checkresponse_types(val: any, path?: string): string[];
    static checkapplication_type(val: any, path?: string): string[];
    static checkcontacts(val: any, path?: string): string[];
    static checkclient_name(val: any, path?: string): string[];
    static checklogo_uri(val: any, path?: string): string[];
    static checkclient_uri(val: any, path?: string): string[];
    static checkpolicy_uri(val: any, path?: string): string[];
    static checktos_uri(val: any, path?: string): string[];
    static checkjwks_uri(val: any, path?: string): string[];
    static checkjwks(val: any, path?: string): string[];
    static checksector_identifier_uri(val: any, path?: string): string[];
    static checksubject_type(val: any, path?: string): string[];
    static checkid_token_signed_response_alg(val: any, path?: string): string[];
    static checkid_token_encrypted_response_alg(val: any, path?: string): string[];
    static checkid_token_encrypted_response_enc(val: any, path?: string): string[];
    static checkuserinfo_signed_response_alg(val: any, path?: string): string[];
    static checkuserinfo_encrypted_response_alg(val: any, path?: string): string[];
    static checkuserinfo_encrypted_response_enc(val: any, path?: string): string[];
    static checkrequest_object_signing_alg(val: any, path?: string): string[];
    static checkrequest_object_encryption_alg(val: any, path?: string): string[];
    static checkrequest_object_encryption_enc(val: any, path?: string): string[];
    static checktoken_endpoint_auth_method(val: any, path?: string): string[];
    static checktoken_endpoint_auth_signing_alg(val: any, path?: string): string[];
    static checkdefault_max_age(val: any, path?: string): string[];
    static checkrequire_auth_time(val: any, path?: string): string[];
    static checkdefault_acr_values(val: any, path?: string): string[];
    static checkinitiate_login_uri(val: any, path?: string): string[];
    static checkrequest_uris(val: any, path?: string): string[];
    static checkpost_logout_redirect_uris(val: any, path?: string): string[];
    static checkpassportConfig(val: any, path?: string): string[];
    static checkuserManagment(val: any, path?: string): string[];
    static checkredirectSso(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

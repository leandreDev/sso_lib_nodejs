import { Entity_passport_strategie } from "./passport_strategie";
/**
  strategie saml pour passport (https://github.com/bergie/passport-saml)
*/
export declare class Entity_passport_strategie_saml extends Entity_passport_strategie {
    static cast(obj?: any, castChildClass?: boolean): void;
    static checklib(val: any, path?: string): string[];
    static checkstrategieName(val: any, path?: string): string[];
    static checkcallbackUrl(val: any, path?: string): string[];
    static checkentryPoint(val: any, path?: string): string[];
    static checkissuer(val: any, path?: string): string[];
    static checkcert(val: any, path?: string): string[];
    static checkprivateCert(val: any, path?: string): string[];
    static checkdecryptionPvk(val: any, path?: string): string[];
    static checksignatureAlgorithm(val: any, path?: string): string[];
    static checkadditionalParams(val: any, path?: string): string[];
    static checkidentifierFormat(val: any, path?: string): string[];
    static checkacceptedClockSkewMs(val: any, path?: string): string[];
    static checkattributeConsumingServiceIndex(val: any, path?: string): string[];
    static checkdisableRequestedAuthnContext(val: any, path?: string): string[];
    static checkauthnContext(val: any, path?: string): string[];
    static checkforceAuthn(val: any, path?: string): string[];
    static checkskipRequestCompression(val: any, path?: string): string[];
    static checkvalidateInResponseTo(val: any, path?: string): string[];
    static checkrequestIdExpirationPeriodMs(val: any, path?: string): string[];
    static checkpassReqToCallback(val: any, path?: string): string[];
    static checklogoutUrl(val: any, path?: string): string[];
    static checkadditionalLogoutParams(val: any, path?: string): string[];
    static checklogoutCallbackUrl(val: any, path?: string): string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): string[];
    static castQueryParam(path: string, value: any): any;
    static getClassNameOfProp(path: string): string;
}

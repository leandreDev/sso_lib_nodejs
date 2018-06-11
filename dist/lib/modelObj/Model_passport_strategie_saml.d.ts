import * as Interface from "./Interfaces";
import { Model_passport_strategie } from "./Model_passport_strategie";
/**
  strategie saml pour passport (https://github.com/bergie/passport-saml)
*/
export declare class Model_passport_strategie_saml extends Model_passport_strategie implements Interface.Ipassport_strategie_saml {
    /**
      strategie saml pour passport (https://github.com/bergie/passport-saml)
    */
    constructor(obj?: any);
    _class: string;
    /**
librairie a appeller
*/
    "lib": string;
    /**
la class de stratégie à appeler dans la lib
*/
    "strategieName": string;
    /**
full callbackUrl
*/
    "callbackUrl": string;
    /**
identity provider entrypoint
*/
    "entryPoint"?: string;
    /**
issuer string to supply to identity provider
*/
    "issuer"?: string;
    /**
see 'security and signatures'
*/
    "cert"?: string;
    /**
see 'security and signatures'
*/
    "privateCert"?: string;
    /**
optional private key that will be used to attempt to decrypt any encrypted assertions that are received
*/
    "decryptionPvk"?: string;
    /**
optionally set the signature algorithm for signing requests, valid values are 'sha1' (default), 'sha256', or 'sha512'
*/
    "signatureAlgorithm"?: string;
    /**
dictionary of additional query params to add to all requests
*/
    "additionalParams"?: string;
    /**
if truthy, name identifier format to request from identity provider (default: urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress)
*/
    "identifierFormat"?: string;
    /**
Time in milliseconds of skew that is acceptable between client and server when checking OnBefore and NotOnOrAfter assertion condition validity timestamps. Setting to -1 will disable checking these conditions entirely. Default is 0
*/
    "acceptedClockSkewMs"?: number;
    /**
optional AttributeConsumingServiceIndex attribute to add to AuthnRequest to instruct the IDP which attribute set to attach to the response (link)
*/
    "attributeConsumingServiceIndex"?: string;
    /**
if truthy, do not request a specific auth context
*/
    "disableRequestedAuthnContext"?: boolean;
    /**
if truthy, name identifier format to request auth context (default: urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport)
*/
    "authnContext"?: string;
    /**
if set to true, the initial SAML request from the service provider specifies that the IdP should force re-authentication of the user, even if they possess a valid session.
*/
    "forceAuthn"?: boolean;
    /**
if set to true, the SAML request from the service provider won't be compressed. authnRequestBinding: if set to HTTP-POST, will request authentication from IDP via HTTP POST binding, otherwise defaults to HTTP Redirect
*/
    "skipRequestCompression"?: boolean;
    /**
if truthy, then InResponseTo will be validated from incoming SAML responses
*/
    "validateInResponseTo"?: string;
    /**
Defines the expiration time when a Request ID generated for a SAML request will not be valid if seen in a SAML response in the InResponseTo field. Default is 8 hours.
*/
    "requestIdExpirationPeriodMs"?: number;
    /**
if truthy, req will be passed as the first argument to the verify callback (default: false)
*/
    "passReqToCallback"?: boolean;
    /**
base address to call with logout requests (default: entryPoint)
*/
    "logoutUrl"?: string;
    /**
dictionary of additional query params to add to 'logout' requests
*/
    "additionalLogoutParams"?: string;
    /**
The value with which to populate the Location attribute in the SingleLogoutService elements in the generated service provider metadata.
*/
    "logoutCallbackUrl"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_passport_strategie_saml>;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_passport_strategie_saml = void 0;
const Model_passport_strategie_1 = require("./Model_passport_strategie");
/**
  strategie saml pour passport (https://github.com/bergie/passport-saml)
*/
class Model_passport_strategie_saml extends Model_passport_strategie_1.Model_passport_strategie {
    /**
      strategie saml pour passport (https://github.com/bergie/passport-saml)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "passport_strategie_saml";
        /**
  librairie a appeller
  */
        this["lib"] = "passport-saml";
        /**
  la class de stratégie à appeler dans la lib
  */
        this["strategieName"] = "Strategy";
        if (obj["lib"] != undefined) {
            this["lib"] = obj["lib"].toString();
        }
        if (obj["strategieName"] != undefined) {
            this["strategieName"] = obj["strategieName"].toString();
        }
        if (obj["callbackUrl"] != undefined) {
            this["callbackUrl"] = obj["callbackUrl"].toString();
        }
        if (obj["entryPoint"] != undefined) {
            this["entryPoint"] = obj["entryPoint"].toString();
        }
        if (obj["issuer"] != undefined) {
            this["issuer"] = obj["issuer"].toString();
        }
        if (obj["cert"] != undefined) {
            this["cert"] = obj["cert"].toString();
        }
        if (obj["privateCert"] != undefined) {
            this["privateCert"] = obj["privateCert"].toString();
        }
        if (obj["decryptionPvk"] != undefined) {
            this["decryptionPvk"] = obj["decryptionPvk"].toString();
        }
        if (obj["signatureAlgorithm"] != undefined) {
            this["signatureAlgorithm"] = obj["signatureAlgorithm"].toString();
        }
        if (obj["additionalParams"] != undefined) {
            this["additionalParams"] = obj["additionalParams"].toString();
        }
        if (obj["identifierFormat"] != undefined) {
            this["identifierFormat"] = obj["identifierFormat"].toString();
        }
        if (obj["acceptedClockSkewMs"] != undefined) {
            this["acceptedClockSkewMs"] = new Number(obj["acceptedClockSkewMs"]).valueOf();
        }
        if (obj["attributeConsumingServiceIndex"] != undefined) {
            this["attributeConsumingServiceIndex"] = obj["attributeConsumingServiceIndex"].toString();
        }
        if (obj["disableRequestedAuthnContext"] != undefined) {
            this["disableRequestedAuthnContext"] = new Boolean(obj["disableRequestedAuthnContext"]).valueOf();
        }
        if (obj["authnContext"] != undefined) {
            this["authnContext"] = obj["authnContext"].toString();
        }
        if (obj["forceAuthn"] != undefined) {
            this["forceAuthn"] = new Boolean(obj["forceAuthn"]).valueOf();
        }
        if (obj["skipRequestCompression"] != undefined) {
            this["skipRequestCompression"] = new Boolean(obj["skipRequestCompression"]).valueOf();
        }
        if (obj["validateInResponseTo"] != undefined) {
            this["validateInResponseTo"] = obj["validateInResponseTo"].toString();
        }
        if (obj["requestIdExpirationPeriodMs"] != undefined) {
            this["requestIdExpirationPeriodMs"] = new Number(obj["requestIdExpirationPeriodMs"]).valueOf();
        }
        if (obj["passReqToCallback"] != undefined) {
            this["passReqToCallback"] = new Boolean(obj["passReqToCallback"]).valueOf();
        }
        if (obj["logoutUrl"] != undefined) {
            this["logoutUrl"] = obj["logoutUrl"].toString();
        }
        if (obj["additionalLogoutParams"] != undefined) {
            this["additionalLogoutParams"] = obj["additionalLogoutParams"].toString();
        }
        if (obj["logoutCallbackUrl"] != undefined) {
            this["logoutCallbackUrl"] = obj["logoutCallbackUrl"].toString();
        }
    }
}
exports.Model_passport_strategie_saml = Model_passport_strategie_saml;
//# sourceMappingURL=Model_passport_strategie_saml.js.map
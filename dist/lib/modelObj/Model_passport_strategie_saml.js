"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_passport_strategie_saml = void 0;
const _ = require("lodash");
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["lib"] == null || target["lib"] == undefined)) {
                throw new Error(path + "lib is required");
            }
            if (target["lib"] != null && target["lib"] != undefined) {
                let _lib = target["lib"];
                if (!_.isString(_lib)) {
                    throw new Error(path + "lib is not a string");
                }
            }
            if (isCompleteObj && (target["strategieName"] == null || target["strategieName"] == undefined)) {
                throw new Error(path + "strategieName is required");
            }
            if (target["strategieName"] != null && target["strategieName"] != undefined) {
                let _strategieName = target["strategieName"];
                if (!_.isString(_strategieName)) {
                    throw new Error(path + "strategieName is not a string");
                }
            }
            if (isCompleteObj && (target["callbackUrl"] == null || target["callbackUrl"] == undefined)) {
                throw new Error(path + "callbackUrl is required");
            }
            if (target["callbackUrl"] != null && target["callbackUrl"] != undefined) {
                let _callbackUrl = target["callbackUrl"];
                if (!_.isString(_callbackUrl)) {
                    throw new Error(path + "callbackUrl is not a string");
                }
            }
            if (target["entryPoint"] != null && target["entryPoint"] != undefined) {
                let _entryPoint = target["entryPoint"];
                if (!_.isString(_entryPoint)) {
                    throw new Error(path + "entryPoint is not a string");
                }
            }
            if (target["issuer"] != null && target["issuer"] != undefined) {
                let _issuer = target["issuer"];
                if (!_.isString(_issuer)) {
                    throw new Error(path + "issuer is not a string");
                }
            }
            if (target["cert"] != null && target["cert"] != undefined) {
                let _cert = target["cert"];
                if (!_.isString(_cert)) {
                    throw new Error(path + "cert is not a string");
                }
            }
            if (target["privateCert"] != null && target["privateCert"] != undefined) {
                let _privateCert = target["privateCert"];
                if (!_.isString(_privateCert)) {
                    throw new Error(path + "privateCert is not a string");
                }
            }
            if (target["decryptionPvk"] != null && target["decryptionPvk"] != undefined) {
                let _decryptionPvk = target["decryptionPvk"];
                if (!_.isString(_decryptionPvk)) {
                    throw new Error(path + "decryptionPvk is not a string");
                }
            }
            if (target["signatureAlgorithm"] != null && target["signatureAlgorithm"] != undefined) {
                let _signatureAlgorithm = target["signatureAlgorithm"];
                if (!_.isString(_signatureAlgorithm)) {
                    throw new Error(path + "signatureAlgorithm is not a string");
                }
                let _enum_signatureAlgorithm = ["sha1", "sha256", "sha512"];
                if (_enum_signatureAlgorithm.indexOf(_signatureAlgorithm) == -1) {
                    throw new Error(path + "signatureAlgorithm dont match one of sha1 , sha256 , sha512");
                }
            }
            if (target["additionalParams"] != null && target["additionalParams"] != undefined) {
                let _additionalParams = target["additionalParams"];
                if (!_.isString(_additionalParams)) {
                    throw new Error(path + "additionalParams is not a string");
                }
            }
            if (target["identifierFormat"] != null && target["identifierFormat"] != undefined) {
                let _identifierFormat = target["identifierFormat"];
                if (!_.isString(_identifierFormat)) {
                    throw new Error(path + "identifierFormat is not a string");
                }
            }
            if (target["acceptedClockSkewMs"] != null && target["acceptedClockSkewMs"] != undefined) {
                let _acceptedClockSkewMs = target["acceptedClockSkewMs"];
                if (!_.isNumber(_acceptedClockSkewMs)) {
                    throw new Error(path + "acceptedClockSkewMs is not a number");
                }
            }
            if (target["attributeConsumingServiceIndex"] != null && target["attributeConsumingServiceIndex"] != undefined) {
                let _attributeConsumingServiceIndex = target["attributeConsumingServiceIndex"];
                if (!_.isString(_attributeConsumingServiceIndex)) {
                    throw new Error(path + "attributeConsumingServiceIndex is not a string");
                }
            }
            if (target["disableRequestedAuthnContext"] != null && target["disableRequestedAuthnContext"] != undefined) {
                let _disableRequestedAuthnContext = target["disableRequestedAuthnContext"];
                if (!_.isBoolean(_disableRequestedAuthnContext)) {
                    throw new Error(path + "disableRequestedAuthnContext is not a boolean");
                }
            }
            if (target["authnContext"] != null && target["authnContext"] != undefined) {
                let _authnContext = target["authnContext"];
                if (!_.isString(_authnContext)) {
                    throw new Error(path + "authnContext is not a string");
                }
            }
            if (target["forceAuthn"] != null && target["forceAuthn"] != undefined) {
                let _forceAuthn = target["forceAuthn"];
                if (!_.isBoolean(_forceAuthn)) {
                    throw new Error(path + "forceAuthn is not a boolean");
                }
            }
            if (target["skipRequestCompression"] != null && target["skipRequestCompression"] != undefined) {
                let _skipRequestCompression = target["skipRequestCompression"];
                if (!_.isBoolean(_skipRequestCompression)) {
                    throw new Error(path + "skipRequestCompression is not a boolean");
                }
            }
            if (target["validateInResponseTo"] != null && target["validateInResponseTo"] != undefined) {
                let _validateInResponseTo = target["validateInResponseTo"];
                if (!_.isString(_validateInResponseTo)) {
                    throw new Error(path + "validateInResponseTo is not a string");
                }
            }
            if (target["requestIdExpirationPeriodMs"] != null && target["requestIdExpirationPeriodMs"] != undefined) {
                let _requestIdExpirationPeriodMs = target["requestIdExpirationPeriodMs"];
                if (!_.isNumber(_requestIdExpirationPeriodMs)) {
                    throw new Error(path + "requestIdExpirationPeriodMs is not a number");
                }
            }
            if (target["passReqToCallback"] != null && target["passReqToCallback"] != undefined) {
                let _passReqToCallback = target["passReqToCallback"];
                if (!_.isBoolean(_passReqToCallback)) {
                    throw new Error(path + "passReqToCallback is not a boolean");
                }
            }
            if (target["logoutUrl"] != null && target["logoutUrl"] != undefined) {
                let _logoutUrl = target["logoutUrl"];
                if (!_.isString(_logoutUrl)) {
                    throw new Error(path + "logoutUrl is not a string");
                }
            }
            if (target["additionalLogoutParams"] != null && target["additionalLogoutParams"] != undefined) {
                let _additionalLogoutParams = target["additionalLogoutParams"];
                if (!_.isString(_additionalLogoutParams)) {
                    throw new Error(path + "additionalLogoutParams is not a string");
                }
            }
            if (target["logoutCallbackUrl"] != null && target["logoutCallbackUrl"] != undefined) {
                let _logoutCallbackUrl = target["logoutCallbackUrl"];
                if (!_.isString(_logoutCallbackUrl)) {
                    throw new Error(path + "logoutCallbackUrl is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_passport_strategie_saml.check(target, true, path).then(() => {
            return new Model_passport_strategie_saml(target);
        });
    }
}
exports.Model_passport_strategie_saml = Model_passport_strategie_saml;
//# sourceMappingURL=Model_passport_strategie_saml.js.map
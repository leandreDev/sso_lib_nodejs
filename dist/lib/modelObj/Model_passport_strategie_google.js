"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_passport_strategie_google = void 0;
const _ = require("lodash");
const Model_passport_strategie_1 = require("./Model_passport_strategie");
/**
  Passport strategies for authenticating with Google using OAuth 1.0a and OAuth 2.0 (https://github.com/jaredhanson/passport-google-oauth)
*/
class Model_passport_strategie_google extends Model_passport_strategie_1.Model_passport_strategie {
    /**
      Passport strategies for authenticating with Google using OAuth 1.0a and OAuth 2.0 (https://github.com/jaredhanson/passport-google-oauth)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "passport_strategie_google";
        /**
  lib
  */
        this["lib"] = "passport-google-oauth";
        /**
  la class de stratégie à appeler dans la lib
  */
        this["strategieName"] = "OAuth2Strategy";
        if (obj["lib"] != undefined) {
            this["lib"] = obj["lib"].toString();
        }
        if (obj["strategieName"] != undefined) {
            this["strategieName"] = obj["strategieName"].toString();
        }
        if (obj["clientID"] != undefined) {
            this["clientID"] = obj["clientID"].toString();
        }
        if (obj["clientSecret"] != undefined) {
            this["clientSecret"] = obj["clientSecret"].toString();
        }
        if (obj["callbackURL"] != undefined) {
            this["callbackURL"] = obj["callbackURL"].toString();
        }
        if (obj["scope"] != undefined && obj["scope"] != null && _.isArray(obj["scope"])) {
            this["scope"] = obj["scope"].map((value) => {
                return value.toString();
            });
        }
    }
}
exports.Model_passport_strategie_google = Model_passport_strategie_google;
//# sourceMappingURL=Model_passport_strategie_google.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_passport_strategie_linkedin = void 0;
const _ = require("lodash");
const Model_passport_strategie_1 = require("./Model_passport_strategie");
/**
  Passport strategy for authenticating with LinkedIn using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-linkedin)
*/
class Model_passport_strategie_linkedin extends Model_passport_strategie_1.Model_passport_strategie {
    /**
      Passport strategy for authenticating with LinkedIn using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-linkedin)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "passport_strategie_linkedin";
        /**
  lib
  */
        this["lib"] = "passport-linkedin";
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
        if (obj["consumerKey"] != undefined) {
            this["consumerKey"] = obj["consumerKey"].toString();
        }
        if (obj["consumerSecret"] != undefined) {
            this["consumerSecret"] = obj["consumerSecret"].toString();
        }
        if (obj["callbackURL"] != undefined) {
            this["callbackURL"] = obj["callbackURL"].toString();
        }
        if (obj["scope"] != undefined && obj["scope"] != null && _.isArray(obj["scope"])) {
            this["scope"] = obj["scope"].map((value) => {
                return value.toString();
            });
        }
        if (obj["profileFields"] != undefined && obj["profileFields"] != null && _.isArray(obj["profileFields"])) {
            this["profileFields"] = obj["profileFields"].map((value) => {
                return value.toString();
            });
        }
    }
}
exports.Model_passport_strategie_linkedin = Model_passport_strategie_linkedin;
//# sourceMappingURL=Model_passport_strategie_linkedin.js.map
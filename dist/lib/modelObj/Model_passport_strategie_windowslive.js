"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_passport_strategie_windowslive = void 0;
const Model_passport_strategie_1 = require("./Model_passport_strategie");
/**
  Passport strategy for authenticating with Microsoft accounts (aka Windows Live) using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-windowslive)
*/
class Model_passport_strategie_windowslive extends Model_passport_strategie_1.Model_passport_strategie {
    /**
      Passport strategy for authenticating with Microsoft accounts (aka Windows Live) using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-windowslive)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "passport_strategie_windowslive";
        /**
  lib
  */
        this["lib"] = "passport-windowslive";
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
        if (obj["clientID"] != undefined) {
            this["clientID"] = obj["clientID"].toString();
        }
        if (obj["clientSecret"] != undefined) {
            this["clientSecret"] = obj["clientSecret"].toString();
        }
        if (obj["callbackURL"] != undefined) {
            this["callbackURL"] = obj["callbackURL"].toString();
        }
        if (obj["scope"] != undefined) {
            this["scope"] = obj["scope"].toString();
        }
    }
}
exports.Model_passport_strategie_windowslive = Model_passport_strategie_windowslive;
//# sourceMappingURL=Model_passport_strategie_windowslive.js.map
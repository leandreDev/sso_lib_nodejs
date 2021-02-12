"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_passport_strategie_instagram = void 0;
const Model_passport_strategie_1 = require("./Model_passport_strategie");
/**
  Passport strategy for authenticating with Instagram using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-instagram)
*/
class Model_passport_strategie_instagram extends Model_passport_strategie_1.Model_passport_strategie {
    /**
      Passport strategy for authenticating with Instagram using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-instagram)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "passport_strategie_instagram";
        /**
  lib
  */
        this["lib"] = "passport-instagram";
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
    }
}
exports.Model_passport_strategie_instagram = Model_passport_strategie_instagram;
//# sourceMappingURL=Model_passport_strategie_instagram.js.map
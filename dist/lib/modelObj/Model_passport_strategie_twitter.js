"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_passport_strategie_twitter = void 0;
const Model_passport_strategie_1 = require("./Model_passport_strategie");
/**
  Passport strategy for authenticating with Twitter using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-twitter)
*/
class Model_passport_strategie_twitter extends Model_passport_strategie_1.Model_passport_strategie {
    /**
      Passport strategy for authenticating with Twitter using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-twitter)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "passport_strategie_twitter";
        /**
  lib
  */
        this["lib"] = "passport-twitter";
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
    }
}
exports.Model_passport_strategie_twitter = Model_passport_strategie_twitter;
//# sourceMappingURL=Model_passport_strategie_twitter.js.map
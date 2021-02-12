"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_passport_strategie_dropbox = void 0;
const Model_passport_strategie_1 = require("./Model_passport_strategie");
/**
  Passport strategy for authenticating with Dropbox using the OAuth 2.0 API. (https://github.com/florianheinemann/passport-dropbox-oauth2)
*/
class Model_passport_strategie_dropbox extends Model_passport_strategie_1.Model_passport_strategie {
    /**
      Passport strategy for authenticating with Dropbox using the OAuth 2.0 API. (https://github.com/florianheinemann/passport-dropbox-oauth2)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "passport_strategie_dropbox";
        /**
  lib
  */
        this["lib"] = "passport-dropbox-oauth2";
        /**
  la class de stratégie à appeler dans la lib
  */
        this["strategieName"] = "Strategy";
        /**
  apiVersion
  */
        this["apiVersion"] = 2;
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
        if (obj["apiVersion"] != undefined) {
            this["apiVersion"] = new Number(obj["apiVersion"]).valueOf();
        }
    }
}
exports.Model_passport_strategie_dropbox = Model_passport_strategie_dropbox;
//# sourceMappingURL=Model_passport_strategie_dropbox.js.map
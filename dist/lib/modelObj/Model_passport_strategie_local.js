"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_passport_strategie_local = void 0;
const Model_passport_strategie_1 = require("./Model_passport_strategie");
/**
  Passport strategies for authenticating with local call
*/
class Model_passport_strategie_local extends Model_passport_strategie_1.Model_passport_strategie {
    /**
      Passport strategies for authenticating with local call
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "passport_strategie_local";
        /**
  lib
  */
        this["lib"] = "passport-local";
        /**
  la class de stratégie à appeler dans la lib
  */
        this["strategieName"] = "Strategy";
        /**
  usernameField
  */
        this["usernameField"] = "email";
        /**
  passwordField
  */
        this["passwordField"] = "passwd";
        /**
  session
  */
        this["session"] = false;
        if (obj["lib"] != undefined) {
            this["lib"] = obj["lib"].toString();
        }
        if (obj["strategieName"] != undefined) {
            this["strategieName"] = obj["strategieName"].toString();
        }
        if (obj["CBLib"] != undefined) {
            this["CBLib"] = obj["CBLib"].toString();
        }
        if (obj["cbConf"] != undefined) {
            this["cbConf"] = obj["cbConf"];
        }
        if (obj["usernameField"] != undefined) {
            this["usernameField"] = obj["usernameField"].toString();
        }
        if (obj["passwordField"] != undefined) {
            this["passwordField"] = obj["passwordField"].toString();
        }
        if (obj["session"] != undefined) {
            this["session"] = new Boolean(obj["session"]).valueOf();
        }
    }
}
exports.Model_passport_strategie_local = Model_passport_strategie_local;
//# sourceMappingURL=Model_passport_strategie_local.js.map
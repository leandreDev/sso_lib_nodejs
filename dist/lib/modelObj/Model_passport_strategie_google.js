"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
                let _enum_strategieName = ["OAuth2Strategy", "OAuthStrategy"];
                if (_enum_strategieName.indexOf(_strategieName) == -1) {
                    throw new Error(path + "strategieName dont match one of OAuth2Strategy , OAuthStrategy");
                }
            }
            if (isCompleteObj && (target["clientID"] == null || target["clientID"] == undefined)) {
                throw new Error(path + "clientID is required");
            }
            if (target["clientID"] != null && target["clientID"] != undefined) {
                let _clientID = target["clientID"];
                if (!_.isString(_clientID)) {
                    throw new Error(path + "clientID is not a string");
                }
            }
            if (isCompleteObj && (target["clientSecret"] == null || target["clientSecret"] == undefined)) {
                throw new Error(path + "clientSecret is required");
            }
            if (target["clientSecret"] != null && target["clientSecret"] != undefined) {
                let _clientSecret = target["clientSecret"];
                if (!_.isString(_clientSecret)) {
                    throw new Error(path + "clientSecret is not a string");
                }
            }
            if (isCompleteObj && (target["callbackURL"] == null || target["callbackURL"] == undefined)) {
                throw new Error(path + "callbackURL is required");
            }
            if (target["callbackURL"] != null && target["callbackURL"] != undefined) {
                let _callbackURL = target["callbackURL"];
                if (!_.isString(_callbackURL)) {
                    throw new Error(path + "callbackURL is not a string");
                }
            }
            if (isCompleteObj && (target["scope"] == null || target["scope"] == undefined)) {
                throw new Error(path + "scope is required");
            }
            if (target["scope"] != null && target["scope"] != undefined) {
                target["scope"].forEach((_scope, index) => {
                    if (!_.isString(_scope)) {
                        throw new Error(path + "scope index: " + index + "is not a string");
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_passport_strategie_google.check(target, true, path).then(() => {
            return new Model_passport_strategie_google(target);
        });
    }
}
exports.Model_passport_strategie_google = Model_passport_strategie_google;
//# sourceMappingURL=Model_passport_strategie_google.js.map
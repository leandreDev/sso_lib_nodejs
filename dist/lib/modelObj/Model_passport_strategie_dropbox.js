"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_passport_strategie_dropbox = void 0;
const _ = require("lodash");
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
            if (target["apiVersion"] != null && target["apiVersion"] != undefined) {
                let _apiVersion = target["apiVersion"];
                if (!_.isNumber(_apiVersion)) {
                    throw new Error(path + "apiVersion is not a number");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_passport_strategie_dropbox.check(target, true, path).then(() => {
            return new Model_passport_strategie_dropbox(target);
        });
    }
}
exports.Model_passport_strategie_dropbox = Model_passport_strategie_dropbox;
//# sourceMappingURL=Model_passport_strategie_dropbox.js.map
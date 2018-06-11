"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
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
            if (isCompleteObj && (target["consumerKey"] == null || target["consumerKey"] == undefined)) {
                throw new Error(path + "consumerKey is required");
            }
            if (target["consumerKey"] != null && target["consumerKey"] != undefined) {
                let _consumerKey = target["consumerKey"];
                if (!_.isString(_consumerKey)) {
                    throw new Error(path + "consumerKey is not a string");
                }
            }
            if (isCompleteObj && (target["consumerSecret"] == null || target["consumerSecret"] == undefined)) {
                throw new Error(path + "consumerSecret is required");
            }
            if (target["consumerSecret"] != null && target["consumerSecret"] != undefined) {
                let _consumerSecret = target["consumerSecret"];
                if (!_.isString(_consumerSecret)) {
                    throw new Error(path + "consumerSecret is not a string");
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
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_passport_strategie_twitter.check(target, true, path).then(() => {
            return new Model_passport_strategie_twitter(target);
        });
    }
}
exports.Model_passport_strategie_twitter = Model_passport_strategie_twitter;
//# sourceMappingURL=Model_passport_strategie_twitter.js.map
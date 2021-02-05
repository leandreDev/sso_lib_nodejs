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
            if (target["profileFields"] != null && target["profileFields"] != undefined) {
                target["profileFields"].forEach((_profileFields, index) => {
                    if (!_.isString(_profileFields)) {
                        throw new Error(path + "profileFields index: " + index + "is not a string");
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_passport_strategie_linkedin.check(target, true, path).then(() => {
            return new Model_passport_strategie_linkedin(target);
        });
    }
}
exports.Model_passport_strategie_linkedin = Model_passport_strategie_linkedin;
//# sourceMappingURL=Model_passport_strategie_linkedin.js.map
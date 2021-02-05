"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_passport_strategie_facebook = void 0;
const _ = require("lodash");
const Model_passport_strategie_1 = require("./Model_passport_strategie");
/**
  Facebook authentication strategy for Passport  (https://github.com/jaredhanson/passport-facebook)
*/
class Model_passport_strategie_facebook extends Model_passport_strategie_1.Model_passport_strategie {
    /**
      Facebook authentication strategy for Passport  (https://github.com/jaredhanson/passport-facebook)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "passport_strategie_facebook";
        /**
  lib
  */
        this["lib"] = "passport-facebook";
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
        if (obj["enableProof"] != undefined) {
            this["enableProof"] = new Boolean(obj["enableProof"]).valueOf();
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
            if (target["enableProof"] != null && target["enableProof"] != undefined) {
                let _enableProof = target["enableProof"];
                if (!_.isBoolean(_enableProof)) {
                    throw new Error(path + "enableProof is not a boolean");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_passport_strategie_facebook.check(target, true, path).then(() => {
            return new Model_passport_strategie_facebook(target);
        });
    }
}
exports.Model_passport_strategie_facebook = Model_passport_strategie_facebook;
//# sourceMappingURL=Model_passport_strategie_facebook.js.map
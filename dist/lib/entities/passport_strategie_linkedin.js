"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_passport_strategie_linkedin = void 0;
const _ = require("lodash");
const Index = require("./Index");
const passport_strategie_1 = require("./passport_strategie");
/**
  Passport strategy for authenticating with LinkedIn using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-linkedin)
*/
class Entity_passport_strategie_linkedin extends passport_strategie_1.Entity_passport_strategie {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'passport_strategie_linkedin' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        passport_strategie_1.Entity_passport_strategie.cast(obj, true);
        if (obj["lib"] != undefined) {
            obj["lib"] = obj["lib"].toString();
        }
        if (obj["strategieName"] != undefined) {
            obj["strategieName"] = obj["strategieName"].toString();
        }
        if (obj["consumerKey"] != undefined) {
            obj["consumerKey"] = obj["consumerKey"].toString();
        }
        if (obj["consumerSecret"] != undefined) {
            obj["consumerSecret"] = obj["consumerSecret"].toString();
        }
        if (obj["callbackURL"] != undefined) {
            obj["callbackURL"] = obj["callbackURL"].toString();
        }
        if (obj["scope"] != undefined && obj["scope"] != null && _.isArray(obj["scope"])) {
            obj["scope"] = obj["scope"].map((value) => {
                return value.toString();
            });
        }
        if (obj["profileFields"] != undefined && obj["profileFields"] != null && _.isArray(obj["profileFields"])) {
            obj["profileFields"] = obj["profileFields"].map((value) => {
                return value.toString();
            });
        }
    }
    static checklib(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkstrategieName(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkconsumerKey(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkconsumerSecret(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkcallbackURL(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkscope(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkprofileFields(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = passport_strategie_1.Entity_passport_strategie.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.lib == null || target.lib == undefined)) {
            err.push(path + ".lib is required");
        }
        if (target.lib != null && target.lib != undefined) {
            res = Entity_passport_strategie_linkedin.checklib(target.lib, `${path}.lib`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.strategieName == null || target.strategieName == undefined)) {
            err.push(path + ".strategieName is required");
        }
        if (target.strategieName != null && target.strategieName != undefined) {
            res = Entity_passport_strategie_linkedin.checkstrategieName(target.strategieName, `${path}.strategieName`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.consumerKey == null || target.consumerKey == undefined)) {
            err.push(path + ".consumerKey is required");
        }
        if (target.consumerKey != null && target.consumerKey != undefined) {
            res = Entity_passport_strategie_linkedin.checkconsumerKey(target.consumerKey, `${path}.consumerKey`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.consumerSecret == null || target.consumerSecret == undefined)) {
            err.push(path + ".consumerSecret is required");
        }
        if (target.consumerSecret != null && target.consumerSecret != undefined) {
            res = Entity_passport_strategie_linkedin.checkconsumerSecret(target.consumerSecret, `${path}.consumerSecret`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.callbackURL == null || target.callbackURL == undefined)) {
            err.push(path + ".callbackURL is required");
        }
        if (target.callbackURL != null && target.callbackURL != undefined) {
            res = Entity_passport_strategie_linkedin.checkcallbackURL(target.callbackURL, `${path}.callbackURL`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.scope == null || target.scope == undefined)) {
            err.push(path + ".scope is required");
        }
        if (target.scope != null && target.scope != undefined) {
            target.scope.forEach((data, index) => {
                res = Entity_passport_strategie_linkedin.checkscope(target.scope[index], `${path}.scope.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.profileFields != null && target.profileFields != undefined) {
            target.profileFields.forEach((data, index) => {
                res = Entity_passport_strategie_linkedin.checkprofileFields(target.profileFields[index], `${path}.profileFields.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        return err;
    }
    static castQueryParam(path, value) {
        let key = '';
        let subPath = '';
        if (value === null) {
            return null;
        }
        if (path.indexOf('.') === -1) {
            key = path;
        }
        else {
            let arr = path.split('.');
            key = arr.shift();
            subPath = arr.join('.');
            if (subPath === null || subPath.trim() === '') {
                throw new Error(`subPath is empty for ${path} ${value}`);
            }
        }
        if (key === null || key.trim() === '') {
            throw new Error(`key path is empty for ${path} ${value}`);
        }
        switch (key) {
            case 'lib':
                //string
                return new String(value).valueOf();
                break;
            case 'strategieName':
                //string
                return new String(value).valueOf();
                break;
            case 'consumerKey':
                //string
                return new String(value).valueOf();
                break;
            case 'consumerSecret':
                //string
                return new String(value).valueOf();
                break;
            case 'callbackURL':
                //string
                return new String(value).valueOf();
                break;
            case 'scope':
                //string
                return new String(value).valueOf();
                break;
            case 'profileFields':
                //string
                return new String(value).valueOf();
                break;
            default:
                return passport_strategie_1.Entity_passport_strategie.castQueryParam(key, value);
                break;
        }
    }
    static getClassNameOfProp(path) {
        let key = '';
        let subPath = '';
        if (path.indexOf('.') === -1) {
            key = path;
        }
        else {
            let arr = path.split('.');
            key = arr.shift();
            subPath = arr.join('.');
            if (subPath === null || subPath.trim() === '') {
                throw new Error(`subPath is empty for ${path} `);
            }
        }
        if (key === null || key.trim() === '') {
            throw new Error(`key path is empty for ${path}`);
        }
        switch (key) {
            case 'lib':
                return null;
            case 'strategieName':
                return null;
            case 'consumerKey':
                return null;
            case 'consumerSecret':
                return null;
            case 'callbackURL':
                return null;
            case 'scope':
                return null;
            case 'profileFields':
                return null;
            default:
                return passport_strategie_1.Entity_passport_strategie.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_passport_strategie_linkedin = Entity_passport_strategie_linkedin;
//# sourceMappingURL=passport_strategie_linkedin.js.map
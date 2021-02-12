"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_passport_strategie_instagram = void 0;
const Index = require("./Index");
const passport_strategie_1 = require("./passport_strategie");
/**
  Passport strategy for authenticating with Instagram using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-instagram)
*/
class Entity_passport_strategie_instagram extends passport_strategie_1.Entity_passport_strategie {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'passport_strategie_instagram' && [].indexOf(obj._class) !== -1) {
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
        if (obj["clientID"] != undefined) {
            obj["clientID"] = obj["clientID"].toString();
        }
        if (obj["clientSecret"] != undefined) {
            obj["clientSecret"] = obj["clientSecret"].toString();
        }
        if (obj["callbackURL"] != undefined) {
            obj["callbackURL"] = obj["callbackURL"].toString();
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
    static checkclientID(val, path = null) {
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
    static checkclientSecret(val, path = null) {
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
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = passport_strategie_1.Entity_passport_strategie.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.lib == null || target.lib == undefined)) {
            err.push(path + ".lib is required");
        }
        if (target.lib != null && target.lib != undefined) {
            res = Entity_passport_strategie_instagram.checklib(target.lib, `${path}.lib`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.strategieName == null || target.strategieName == undefined)) {
            err.push(path + ".strategieName is required");
        }
        if (target.strategieName != null && target.strategieName != undefined) {
            res = Entity_passport_strategie_instagram.checkstrategieName(target.strategieName, `${path}.strategieName`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.clientID == null || target.clientID == undefined)) {
            err.push(path + ".clientID is required");
        }
        if (target.clientID != null && target.clientID != undefined) {
            res = Entity_passport_strategie_instagram.checkclientID(target.clientID, `${path}.clientID`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.clientSecret == null || target.clientSecret == undefined)) {
            err.push(path + ".clientSecret is required");
        }
        if (target.clientSecret != null && target.clientSecret != undefined) {
            res = Entity_passport_strategie_instagram.checkclientSecret(target.clientSecret, `${path}.clientSecret`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.callbackURL == null || target.callbackURL == undefined)) {
            err.push(path + ".callbackURL is required");
        }
        if (target.callbackURL != null && target.callbackURL != undefined) {
            res = Entity_passport_strategie_instagram.checkcallbackURL(target.callbackURL, `${path}.callbackURL`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
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
            case 'clientID':
                //string
                return new String(value).valueOf();
                break;
            case 'clientSecret':
                //string
                return new String(value).valueOf();
                break;
            case 'callbackURL':
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
            case 'clientID':
                return null;
            case 'clientSecret':
                return null;
            case 'callbackURL':
                return null;
            default:
                return passport_strategie_1.Entity_passport_strategie.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_passport_strategie_instagram = Entity_passport_strategie_instagram;
//# sourceMappingURL=passport_strategie_instagram.js.map
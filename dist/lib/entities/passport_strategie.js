"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_passport_strategie = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@hfdev/utils");
/**
  configuration d'une stratégie passport à déployer sur le sso
*/
class Entity_passport_strategie extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'passport_strategie' && ['passport_strategie_facebook', 'passport_strategie_linkedin', 'passport_strategie_google', 'passport_strategie_twitter', 'passport_strategie_instagram', 'passport_strategie_windowslive', 'passport_strategie_dropbox', 'passport_strategie_local', 'passport_strategie_saml',].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["name"] != undefined) {
            obj["name"] = obj["name"].toString();
        }
        if (obj["autoCreate"] != undefined) {
            obj["autoCreate"] = new Boolean(obj["autoCreate"]).valueOf();
        }
        if (obj["autoLoginWMail"] != undefined) {
            obj["autoLoginWMail"] = new Boolean(obj["autoLoginWMail"]).valueOf();
        }
    }
    static checkname(val, path = null) {
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
    static checkautoCreate(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isBoolean(val)) {
            res.push(`${path}  is not a boolean`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkautoLoginWMail(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isBoolean(val)) {
            res.push(`${path}  is not a boolean`);
        }
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
        if (isCompleteObj && (target.name == null || target.name == undefined)) {
            err.push(path + ".name is required");
        }
        if (target.name != null && target.name != undefined) {
            res = Entity_passport_strategie.checkname(target.name, `${path}.name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.autoCreate != null && target.autoCreate != undefined) {
            res = Entity_passport_strategie.checkautoCreate(target.autoCreate, `${path}.autoCreate`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.autoLoginWMail != null && target.autoLoginWMail != undefined) {
            res = Entity_passport_strategie.checkautoLoginWMail(target.autoLoginWMail, `${path}.autoLoginWMail`);
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
            case 'name':
                //string
                return new String(value).valueOf();
                break;
            case 'autoCreate':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'autoLoginWMail':
                //boolean
                return new Boolean(value).valueOf();
                break;
            default:
                return utils_1.Entity.castQueryParam(key, value);
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
            case 'name':
                return null;
            case 'autoCreate':
                return null;
            case 'autoLoginWMail':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_passport_strategie = Entity_passport_strategie;
//# sourceMappingURL=passport_strategie.js.map
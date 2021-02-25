"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_oidc_clientUserManagment = void 0;
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  configuration du gestionnaire d'utilisateur
*/
class Entity_oidc_clientUserManagment extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'oidc_clientUserManagment' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["sign_in_uri"] != undefined) {
            obj["sign_in_uri"] = obj["sign_in_uri"].toString();
        }
        if (obj["password_recovery_uri"] != undefined) {
            obj["password_recovery_uri"] = obj["password_recovery_uri"].toString();
        }
    }
    static checksign_in_uri(val, path = null) {
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
    static checkpassword_recovery_uri(val, path = null) {
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
        if (target.sign_in_uri != null && target.sign_in_uri != undefined) {
            res = Entity_oidc_clientUserManagment.checksign_in_uri(target.sign_in_uri, `${path}.sign_in_uri`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.password_recovery_uri == null || target.password_recovery_uri == undefined)) {
            err.push(path + ".password_recovery_uri is required");
        }
        if (target.password_recovery_uri != null && target.password_recovery_uri != undefined) {
            res = Entity_oidc_clientUserManagment.checkpassword_recovery_uri(target.password_recovery_uri, `${path}.password_recovery_uri`);
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
            case 'sign_in_uri':
                //string
                return new String(value).valueOf();
                break;
            case 'password_recovery_uri':
                //string
                return new String(value).valueOf();
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
            case 'sign_in_uri':
                return null;
            case 'password_recovery_uri':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_oidc_clientUserManagment = Entity_oidc_clientUserManagment;
//# sourceMappingURL=oidc_clientUserManagment.js.map
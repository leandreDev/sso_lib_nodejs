"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_oidc_account = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  compte de l'utilisateur
*/
class Entity_oidc_account extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'oidc_account' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["account_id"] != undefined) {
            obj["account_id"] = obj["account_id"].toString();
        }
        if (obj["birthdate"] != undefined) {
            obj["birthdate"] = new Date(obj["birthdate"]);
        }
        if (obj["email"] != undefined) {
            obj["email"] = obj["email"].toString();
        }
        if (obj["email_verified"] != undefined) {
            obj["email_verified"] = new Boolean(obj["email_verified"]).valueOf();
        }
        if (obj["family_name"] != undefined) {
            obj["family_name"] = obj["family_name"].toString();
        }
        if (obj["gender"] != undefined) {
            obj["gender"] = obj["gender"].toString();
        }
        if (obj["given_name"] != undefined) {
            obj["given_name"] = obj["given_name"].toString();
        }
        if (obj["locale"] != undefined) {
            obj["locale"] = obj["locale"].toString();
        }
        if (obj["middle_name"] != undefined) {
            obj["middle_name"] = obj["middle_name"].toString();
        }
        if (obj["name"] != undefined) {
            obj["name"] = obj["name"].toString();
        }
        if (obj["nickname"] != undefined) {
            obj["nickname"] = obj["nickname"].toString();
        }
        if (obj["phone_number"] != undefined) {
            obj["phone_number"] = obj["phone_number"].toString();
        }
        if (obj["phone_number_verified"] != undefined) {
            obj["phone_number_verified"] = new Boolean(obj["phone_number_verified"]).valueOf();
        }
        if (obj["password"] != undefined) {
            obj["password"] = obj["password"].toString();
        }
        if (obj["picture"] != undefined) {
            obj["picture"] = obj["picture"].toString();
        }
        if (obj["connector"] != undefined && obj["connector"] != null && _.isArray(obj["connector"])) {
            obj["connector"].forEach((value) => {
                Index.Entity_social_data.cast(value);
            });
        }
        if (obj["resetPasswordKey"] != undefined) {
            obj["resetPasswordKey"] = obj["resetPasswordKey"].toString();
        }
        if (obj["resetPasswordEndDate"] != undefined) {
            obj["resetPasswordEndDate"] = obj["resetPasswordEndDate"].toString();
        }
        if (obj["resetPasswordReturn"] != undefined) {
            obj["resetPasswordReturn"] = obj["resetPasswordReturn"].toString();
        }
    }
    static checkaccount_id(val, path = null) {
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
    static checkbirthdate(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isDate(val)) {
            res.push(`${path}  is not a Date`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkemail(val, path = null) {
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
    static checkemail_verified(val, path = null) {
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
    static checkfamily_name(val, path = null) {
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
    static checkgender(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let _enum = ["Mr", "M.", "Mme"];
        if (_enum.indexOf(val) == -1) {
            res.push(`${path} dont match one of Mr , M. , Mme`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkgiven_name(val, path = null) {
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
    static checklocale(val, path = null) {
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
    static checkmiddle_name(val, path = null) {
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
    static checknickname(val, path = null) {
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
    static checkphone_number(val, path = null) {
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
    static checkphone_number_verified(val, path = null) {
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
    static checkpassword(val, path = null) {
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
    static checkpicture(val, path = null) {
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
    static checkconnector(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_social_data.check(val, false, path);
            //597f6a2a390e82408a4c9c14
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkresetPasswordKey(val, path = null) {
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
    static checkresetPasswordEndDate(val, path = null) {
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
    static checkresetPasswordReturn(val, path = null) {
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
        if (isCompleteObj && (target.account_id == null || target.account_id == undefined)) {
            err.push(path + ".account_id is required");
        }
        if (target.account_id != null && target.account_id != undefined) {
            res = Entity_oidc_account.checkaccount_id(target.account_id, `${path}.account_id`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.birthdate != null && target.birthdate != undefined) {
            res = Entity_oidc_account.checkbirthdate(target.birthdate, `${path}.birthdate`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.email == null || target.email == undefined)) {
            err.push(path + ".email is required");
        }
        if (target.email != null && target.email != undefined) {
            res = Entity_oidc_account.checkemail(target.email, `${path}.email`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.email_verified != null && target.email_verified != undefined) {
            res = Entity_oidc_account.checkemail_verified(target.email_verified, `${path}.email_verified`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.family_name != null && target.family_name != undefined) {
            res = Entity_oidc_account.checkfamily_name(target.family_name, `${path}.family_name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.gender != null && target.gender != undefined) {
            res = Entity_oidc_account.checkgender(target.gender, `${path}.gender`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.given_name != null && target.given_name != undefined) {
            res = Entity_oidc_account.checkgiven_name(target.given_name, `${path}.given_name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.locale != null && target.locale != undefined) {
            res = Entity_oidc_account.checklocale(target.locale, `${path}.locale`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.middle_name != null && target.middle_name != undefined) {
            res = Entity_oidc_account.checkmiddle_name(target.middle_name, `${path}.middle_name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.name != null && target.name != undefined) {
            res = Entity_oidc_account.checkname(target.name, `${path}.name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.nickname != null && target.nickname != undefined) {
            res = Entity_oidc_account.checknickname(target.nickname, `${path}.nickname`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.phone_number != null && target.phone_number != undefined) {
            res = Entity_oidc_account.checkphone_number(target.phone_number, `${path}.phone_number`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.phone_number_verified != null && target.phone_number_verified != undefined) {
            res = Entity_oidc_account.checkphone_number_verified(target.phone_number_verified, `${path}.phone_number_verified`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.password != null && target.password != undefined) {
            res = Entity_oidc_account.checkpassword(target.password, `${path}.password`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.picture != null && target.picture != undefined) {
            res = Entity_oidc_account.checkpicture(target.picture, `${path}.picture`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.connector != null && target.connector != undefined) {
            target.connector.forEach((data, index) => {
                res = Entity_oidc_account.checkconnector(target.connector[index], `${path}.connector.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.resetPasswordKey != null && target.resetPasswordKey != undefined) {
            res = Entity_oidc_account.checkresetPasswordKey(target.resetPasswordKey, `${path}.resetPasswordKey`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.resetPasswordEndDate != null && target.resetPasswordEndDate != undefined) {
            res = Entity_oidc_account.checkresetPasswordEndDate(target.resetPasswordEndDate, `${path}.resetPasswordEndDate`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.resetPasswordReturn != null && target.resetPasswordReturn != undefined) {
            res = Entity_oidc_account.checkresetPasswordReturn(target.resetPasswordReturn, `${path}.resetPasswordReturn`);
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
            case 'account_id':
                //string
                return new String(value).valueOf();
                break;
            case 'birthdate':
                //date
                return new Date(value);
                break;
            case 'email':
                //string
                return new String(value).valueOf();
                break;
            case 'email_verified':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'family_name':
                //string
                return new String(value).valueOf();
                break;
            case 'gender':
                //string
                return new String(value).valueOf();
                break;
            case 'given_name':
                //string
                return new String(value).valueOf();
                break;
            case 'locale':
                //string
                return new String(value).valueOf();
                break;
            case 'middle_name':
                //string
                return new String(value).valueOf();
                break;
            case 'name':
                //string
                return new String(value).valueOf();
                break;
            case 'nickname':
                //string
                return new String(value).valueOf();
                break;
            case 'phone_number':
                //string
                return new String(value).valueOf();
                break;
            case 'phone_number_verified':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'password':
                //password
                return new String(value).valueOf();
                break;
            case 'picture':
                //string
                return new String(value).valueOf();
                break;
            case 'connector':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_social_data.castQueryParam(subPath, value);
                }
                break;
            case 'resetPasswordKey':
                //string
                return new String(value).valueOf();
                break;
            case 'resetPasswordEndDate':
                //string
                return new String(value).valueOf();
                break;
            case 'resetPasswordReturn':
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
            case 'account_id':
                return null;
            case 'birthdate':
                return null;
            case 'email':
                return null;
            case 'email_verified':
                return null;
            case 'family_name':
                return null;
            case 'gender':
                return null;
            case 'given_name':
                return null;
            case 'locale':
                return null;
            case 'middle_name':
                return null;
            case 'name':
                return null;
            case 'nickname':
                return null;
            case 'phone_number':
                return null;
            case 'phone_number_verified':
                return null;
            case 'password':
                return null;
            case 'picture':
                return null;
            case 'connector':
                return Index.Entity_social_data.getClassNameOfProp(subPath);
            case 'resetPasswordKey':
                return null;
            case 'resetPasswordEndDate':
                return null;
            case 'resetPasswordReturn':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_oidc_account = Entity_oidc_account;
//# sourceMappingURL=oidc_account.js.map
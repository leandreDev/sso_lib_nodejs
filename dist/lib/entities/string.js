"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_string = void 0;
const _ = require("lodash");
const Index = require("./Index");
const field_1 = require("./field");
/**
  string est un type de base qui permet de représenter les champ de type string
*/
class Entity_string extends field_1.Entity_field {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'string' && ['htmltexte', 'texte', 'password',].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        field_1.Entity_field.cast(obj, true);
        if (obj["default"] != undefined) {
            obj["default"] = obj["default"].toString();
        }
        if (obj["lowercase"] != undefined) {
            obj["lowercase"] = new Boolean(obj["lowercase"]).valueOf();
        }
        if (obj["uppercase"] != undefined) {
            obj["uppercase"] = new Boolean(obj["uppercase"]).valueOf();
        }
        if (obj["trim"] != undefined) {
            obj["trim"] = new Boolean(obj["trim"]).valueOf();
        }
        if (obj["match"] != undefined) {
            obj["match"] = obj["match"].toString();
        }
        if (obj["enum"] != undefined && obj["enum"] != null && _.isArray(obj["enum"])) {
            obj["enum"] = obj["enum"].map((value) => {
                return value.toString();
            });
        }
    }
    static checkdefault(val, path = null) {
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
    static checklowercase(val, path = null) {
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
    static checkuppercase(val, path = null) {
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
    static checktrim(val, path = null) {
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
    static checkmatch(val, path = null) {
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
    static checkenum(val, path = null) {
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
        err = field_1.Entity_field.check(target, isCompleteObj, path);
        if (target.default != null && target.default != undefined) {
            res = Entity_string.checkdefault(target.default, `${path}.default`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.lowercase != null && target.lowercase != undefined) {
            res = Entity_string.checklowercase(target.lowercase, `${path}.lowercase`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.uppercase != null && target.uppercase != undefined) {
            res = Entity_string.checkuppercase(target.uppercase, `${path}.uppercase`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.trim != null && target.trim != undefined) {
            res = Entity_string.checktrim(target.trim, `${path}.trim`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.match != null && target.match != undefined) {
            res = Entity_string.checkmatch(target.match, `${path}.match`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.enum != null && target.enum != undefined) {
            target.enum.forEach((data, index) => {
                res = Entity_string.checkenum(target.enum[index], `${path}.enum.${index}`);
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
            case 'default':
                //string
                return new String(value).valueOf();
                break;
            case 'lowercase':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'uppercase':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'trim':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'match':
                //string
                return new String(value).valueOf();
                break;
            case 'enum':
                //string
                return new String(value).valueOf();
                break;
            default:
                return field_1.Entity_field.castQueryParam(key, value);
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
            case 'default':
                return null;
            case 'lowercase':
                return null;
            case 'uppercase':
                return null;
            case 'trim':
                return null;
            case 'match':
                return null;
            case 'enum':
                return null;
            default:
                return field_1.Entity_field.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_string = Entity_string;
//# sourceMappingURL=string.js.map
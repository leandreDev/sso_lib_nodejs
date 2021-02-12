"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_date = void 0;
const _ = require("lodash");
const Index = require("./Index");
const field_1 = require("./field");
/**
  ce champ représente les dates
*/
class Entity_date extends field_1.Entity_field {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'date' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        field_1.Entity_field.cast(obj, true);
        if (obj["default"] != undefined) {
            obj["default"] = new Date(obj["default"]);
        }
        if (obj["min"] != undefined) {
            obj["min"] = new Date(obj["min"]);
        }
        if (obj["max"] != undefined) {
            obj["max"] = new Date(obj["max"]);
        }
    }
    static checkdefault(val, path = null) {
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
    static checkmin(val, path = null) {
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
    static checkmax(val, path = null) {
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
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = field_1.Entity_field.check(target, isCompleteObj, path);
        if (target.default != null && target.default != undefined) {
            res = Entity_date.checkdefault(target.default, `${path}.default`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.min != null && target.min != undefined) {
            res = Entity_date.checkmin(target.min, `${path}.min`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.max != null && target.max != undefined) {
            res = Entity_date.checkmax(target.max, `${path}.max`);
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
            case 'default':
                //date
                return new Date(value);
                break;
            case 'min':
                //date
                return new Date(value);
                break;
            case 'max':
                //date
                return new Date(value);
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
            case 'min':
                return null;
            case 'max':
                return null;
            default:
                return field_1.Entity_field.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_date = Entity_date;
//# sourceMappingURL=date.js.map
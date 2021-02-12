"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_number = void 0;
const _ = require("lodash");
const Index = require("./Index");
const field_1 = require("./field");
/**
  ce champ représente les valeurs numériques
*/
class Entity_number extends field_1.Entity_field {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'number' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        field_1.Entity_field.cast(obj, true);
        if (obj["default"] != undefined) {
            obj["default"] = new Number(obj["default"]).valueOf();
        }
        if (obj["min"] != undefined) {
            obj["min"] = new Number(obj["min"]).valueOf();
        }
        if (obj["max"] != undefined) {
            obj["max"] = new Number(obj["max"]).valueOf();
        }
        if (obj["step"] != undefined) {
            obj["step"] = new Number(obj["step"]).valueOf();
        }
    }
    static checkdefault(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
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
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
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
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkstep(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
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
            res = Entity_number.checkdefault(target.default, `${path}.default`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.min != null && target.min != undefined) {
            res = Entity_number.checkmin(target.min, `${path}.min`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.max != null && target.max != undefined) {
            res = Entity_number.checkmax(target.max, `${path}.max`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.step != null && target.step != undefined) {
            res = Entity_number.checkstep(target.step, `${path}.step`);
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
                //number
                return new Number(value).valueOf();
                break;
            case 'min':
                //number
                return new Number(value).valueOf();
                break;
            case 'max':
                //number
                return new Number(value).valueOf();
                break;
            case 'step':
                //number
                return new Number(value).valueOf();
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
            case 'step':
                return null;
            default:
                return field_1.Entity_field.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_number = Entity_number;
//# sourceMappingURL=number.js.map
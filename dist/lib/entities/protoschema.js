"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_protoschema = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandreDev/utils");
/**
  protoschema est un méta modéle. il permet de créer les autres modèle de la base
*/
class Entity_protoschema extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'protoschema' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["name"] != undefined) {
            obj["name"] = obj["name"].toString();
        }
        if (obj["description"] != undefined) {
            obj["description"] = obj["description"].toString();
        }
        if (obj["isAbstract"] != undefined) {
            obj["isAbstract"] = new Boolean(obj["isAbstract"]).valueOf();
        }
        if (obj["isSchema"] != undefined) {
            obj["isSchema"] = new Boolean(obj["isSchema"]).valueOf();
        }
        if (obj["parentModel"] != undefined) {
            if (_.isString(obj["parentModel"])) {
                obj["parentModel"] = new utils_1.mongo.ObjectId(obj["parentModel"]);
            }
            else if (obj["parentModel"]._id) {
                obj["parentModel"] = new utils_1.mongo.ObjectId(obj["parentModel"]._id);
            }
        }
        if (obj["fields"] != undefined && obj["fields"] != null && _.isArray(obj["fields"])) {
            obj["fields"].forEach((value) => {
                Index.Entity_field.cast(value);
            });
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
    static checkdescription(val, path = null) {
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
    static checkisAbstract(val, path = null) {
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
    static checkisSchema(val, path = null) {
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
    static checkparentModel(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!utils_1.mongo.ObjectId.isValid(val)) {
            res.push(`${path}  is not an ObjectId`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkfields(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_field.check(val, false, path);
            //58bd97fab60f11401e1e38f5
        }
        res = [...res, ...result];
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
            res = Entity_protoschema.checkname(target.name, `${path}.name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.description == null || target.description == undefined)) {
            err.push(path + ".description is required");
        }
        if (target.description != null && target.description != undefined) {
            res = Entity_protoschema.checkdescription(target.description, `${path}.description`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.isAbstract != null && target.isAbstract != undefined) {
            res = Entity_protoschema.checkisAbstract(target.isAbstract, `${path}.isAbstract`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.isSchema != null && target.isSchema != undefined) {
            res = Entity_protoschema.checkisSchema(target.isSchema, `${path}.isSchema`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.parentModel != null && target.parentModel != undefined) {
            res = Entity_protoschema.checkparentModel(target.parentModel, `${path}.parentModel`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.fields != null && target.fields != undefined) {
            target.fields.forEach((data, index) => {
                res = Entity_protoschema.checkfields(target.fields[index], `${path}.fields.${index}`);
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
            case 'name':
                //string
                return new String(value).valueOf();
                break;
            case 'description':
                //string
                return new String(value).valueOf();
                break;
            case 'isAbstract':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'isSchema':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'parentModel':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'fields':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_field.castQueryParam(subPath, value);
                }
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
            case 'description':
                return null;
            case 'isAbstract':
                return null;
            case 'isSchema':
                return null;
            case 'parentModel':
                return 'protoschema';
            case 'fields':
                return Index.Entity_field.getClassNameOfProp(subPath);
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_protoschema = Entity_protoschema;
//# sourceMappingURL=protoschema.js.map
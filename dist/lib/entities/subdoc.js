"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_subdoc = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandreDev/utils");
const field_1 = require("./field");
/**
  ce champ permet d'insérer un document dans un autre
*/
class Entity_subdoc extends field_1.Entity_field {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'subdoc' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        field_1.Entity_field.cast(obj, true);
        if (obj["protoSchemaId"] != undefined) {
            if (_.isString(obj["protoSchemaId"])) {
                obj["protoSchemaId"] = new utils_1.mongo.ObjectId(obj["protoSchemaId"]);
            }
            else if (obj["protoSchemaId"]._id) {
                obj["protoSchemaId"] = new utils_1.mongo.ObjectId(obj["protoSchemaId"]._id);
            }
        }
    }
    static checkprotoSchemaId(val, path = null) {
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
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = field_1.Entity_field.check(target, isCompleteObj, path);
        if (target.protoSchemaId != null && target.protoSchemaId != undefined) {
            res = Entity_subdoc.checkprotoSchemaId(target.protoSchemaId, `${path}.protoSchemaId`);
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
            case 'protoSchemaId':
                //modelid
                return new utils_1.mongo.ObjectId(value);
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
            case 'protoSchemaId':
                return 'protoschema';
            default:
                return field_1.Entity_field.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_subdoc = Entity_subdoc;
//# sourceMappingURL=subdoc.js.map
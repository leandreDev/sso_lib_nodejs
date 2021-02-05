"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_string = void 0;
const _ = require("lodash");
const Model_field_1 = require("./Model_field");
/**
  string est un type de base qui permet de représenter les champ de type string
*/
class Model_string extends Model_field_1.Model_field {
    /**
      string est un type de base qui permet de représenter les champ de type string
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "string";
        if (obj["default"] != undefined) {
            this["default"] = obj["default"].toString();
        }
        if (obj["lowercase"] != undefined) {
            this["lowercase"] = new Boolean(obj["lowercase"]).valueOf();
        }
        if (obj["uppercase"] != undefined) {
            this["uppercase"] = new Boolean(obj["uppercase"]).valueOf();
        }
        if (obj["trim"] != undefined) {
            this["trim"] = new Boolean(obj["trim"]).valueOf();
        }
        if (obj["match"] != undefined) {
            this["match"] = obj["match"].toString();
        }
        if (obj["enum"] != undefined && obj["enum"] != null && _.isArray(obj["enum"])) {
            this["enum"] = obj["enum"].map((value) => {
                return value.toString();
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["default"] != null && target["default"] != undefined) {
                let _default = target["default"];
                if (!_.isString(_default)) {
                    throw new Error(path + "default is not a string");
                }
            }
            if (target["lowercase"] != null && target["lowercase"] != undefined) {
                let _lowercase = target["lowercase"];
                if (!_.isBoolean(_lowercase)) {
                    throw new Error(path + "lowercase is not a boolean");
                }
            }
            if (target["uppercase"] != null && target["uppercase"] != undefined) {
                let _uppercase = target["uppercase"];
                if (!_.isBoolean(_uppercase)) {
                    throw new Error(path + "uppercase is not a boolean");
                }
            }
            if (target["trim"] != null && target["trim"] != undefined) {
                let _trim = target["trim"];
                if (!_.isBoolean(_trim)) {
                    throw new Error(path + "trim is not a boolean");
                }
            }
            if (target["match"] != null && target["match"] != undefined) {
                let _match = target["match"];
                if (!_.isString(_match)) {
                    throw new Error(path + "match is not a string");
                }
            }
            if (target["enum"] != null && target["enum"] != undefined) {
                target["enum"].forEach((_enum, index) => {
                    if (!_.isString(_enum)) {
                        throw new Error(path + "enum index: " + index + "is not a string");
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_string.check(target, true, path).then(() => {
            return new Model_string(target);
        });
    }
}
exports.Model_string = Model_string;
//# sourceMappingURL=Model_string.js.map
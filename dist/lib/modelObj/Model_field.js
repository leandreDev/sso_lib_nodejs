"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Base_1 = require("../Base");
/**
  ce champ est le champ représente les champs de la base. Il est abstrait, vous devez utiliser ces enfants
*/
class Model_field extends Base_1.Base {
    /**
      ce champ est le champ représente les champs de la base. Il est abstrait, vous devez utiliser ces enfants
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "field";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["description"] != undefined) {
            this["description"] = obj["description"].toString();
        }
        if (obj["isArrayOf"] != undefined) {
            this["isArrayOf"] = new Boolean(obj["isArrayOf"]).valueOf();
        }
        if (obj["required"] != undefined) {
            this["required"] = new Boolean(obj["required"]).valueOf();
        }
        if (obj["unique"] != undefined) {
            this["unique"] = new Boolean(obj["unique"]).valueOf();
        }
        if (obj["index"] != undefined) {
            this["index"] = new Boolean(obj["index"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["name"] == null || target["name"] == undefined)) {
                throw new Error(path + "name is required");
            }
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (isCompleteObj && (target["description"] == null || target["description"] == undefined)) {
                throw new Error(path + "description is required");
            }
            if (target["description"] != null && target["description"] != undefined) {
                let _description = target["description"];
                if (!_.isString(_description)) {
                    throw new Error(path + "description is not a string");
                }
            }
            if (target["isArrayOf"] != null && target["isArrayOf"] != undefined) {
                let _isArrayOf = target["isArrayOf"];
                if (!_.isBoolean(_isArrayOf)) {
                    throw new Error(path + "isArrayOf is not a boolean");
                }
            }
            if (target["required"] != null && target["required"] != undefined) {
                let _required = target["required"];
                if (!_.isBoolean(_required)) {
                    throw new Error(path + "required is not a boolean");
                }
            }
            if (target["unique"] != null && target["unique"] != undefined) {
                let _unique = target["unique"];
                if (!_.isBoolean(_unique)) {
                    throw new Error(path + "unique is not a boolean");
                }
            }
            if (target["index"] != null && target["index"] != undefined) {
                let _index = target["index"];
                if (!_.isBoolean(_index)) {
                    throw new Error(path + "index is not a boolean");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_field.check(target, true, path).then(() => {
            return new Model_field(target);
        });
    }
}
exports.Model_field = Model_field;
//# sourceMappingURL=Model_field.js.map
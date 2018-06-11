"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_field_1 = require("./Model_field");
/**
  ce champ représente les booléains
*/
class Model_boolean extends Model_field_1.Model_field {
    /**
      ce champ représente les booléains
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "boolean";
        if (obj["default"] != undefined) {
            this["default"] = new Boolean(obj["default"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["default"] != null && target["default"] != undefined) {
                let _default = target["default"];
                if (!_.isBoolean(_default)) {
                    throw new Error(path + "default is not a boolean");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_boolean.check(target, true, path).then(() => {
            return new Model_boolean(target);
        });
    }
}
exports.Model_boolean = Model_boolean;
//# sourceMappingURL=Model_boolean.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_number = void 0;
const _ = require("lodash");
const Model_field_1 = require("./Model_field");
/**
  ce champ représente les valeurs numériques
*/
class Model_number extends Model_field_1.Model_field {
    /**
      ce champ représente les valeurs numériques
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "number";
        if (obj["default"] != undefined) {
            this["default"] = new Number(obj["default"]).valueOf();
        }
        if (obj["min"] != undefined) {
            this["min"] = new Number(obj["min"]).valueOf();
        }
        if (obj["max"] != undefined) {
            this["max"] = new Number(obj["max"]).valueOf();
        }
        if (obj["step"] != undefined) {
            this["step"] = new Number(obj["step"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["default"] != null && target["default"] != undefined) {
                let _default = target["default"];
                if (!_.isNumber(_default)) {
                    throw new Error(path + "default is not a number");
                }
            }
            if (target["min"] != null && target["min"] != undefined) {
                let _min = target["min"];
                if (!_.isNumber(_min)) {
                    throw new Error(path + "min is not a number");
                }
            }
            if (target["max"] != null && target["max"] != undefined) {
                let _max = target["max"];
                if (!_.isNumber(_max)) {
                    throw new Error(path + "max is not a number");
                }
            }
            if (target["step"] != null && target["step"] != undefined) {
                let _step = target["step"];
                if (!_.isNumber(_step)) {
                    throw new Error(path + "step is not a number");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_number.check(target, true, path).then(() => {
            return new Model_number(target);
        });
    }
}
exports.Model_number = Model_number;
//# sourceMappingURL=Model_number.js.map
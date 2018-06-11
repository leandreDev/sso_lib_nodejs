"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_field_1 = require("./Model_field");
/**
  ce champ représente les dates
*/
class Model_date extends Model_field_1.Model_field {
    /**
      ce champ représente les dates
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "date";
        if (obj["default"] != undefined) {
            this["default"] = new Date(obj["default"]);
        }
        if (obj["min"] != undefined) {
            this["min"] = new Date(obj["min"]);
        }
        if (obj["max"] != undefined) {
            this["max"] = new Date(obj["max"]);
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["default"] != null && target["default"] != undefined) {
                let _default = target["default"];
                if (!_.isDate(_default)) {
                    throw new Error(path + "default is not a Date");
                }
            }
            if (target["min"] != null && target["min"] != undefined) {
                let _min = target["min"];
                if (!_.isDate(_min)) {
                    throw new Error(path + "min is not a Date");
                }
            }
            if (target["max"] != null && target["max"] != undefined) {
                let _max = target["max"];
                if (!_.isDate(_max)) {
                    throw new Error(path + "max is not a Date");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_date.check(target, true, path).then(() => {
            return new Model_date(target);
        });
    }
}
exports.Model_date = Model_date;
//# sourceMappingURL=Model_date.js.map
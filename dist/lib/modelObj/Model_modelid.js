"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_modelid = void 0;
const _ = require("lodash");
const Model_field_1 = require("./Model_field");
/**
  modelid
*/
class Model_modelid extends Model_field_1.Model_field {
    /**
      modelid
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "modelid";
        if (obj["ref"] != undefined) {
            this["ref"] = obj["ref"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["ref"] != null && target["ref"] != undefined) {
                let _ref = target["ref"];
                if (!_.isString(_ref)) {
                    throw new Error(path + "ref is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_modelid.check(target, true, path).then(() => {
            return new Model_modelid(target);
        });
    }
}
exports.Model_modelid = Model_modelid;
//# sourceMappingURL=Model_modelid.js.map
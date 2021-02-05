"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_objectid = void 0;
const _ = require("lodash");
const Model_field_1 = require("./Model_field");
/**
  c'est un champ de base qui permet de référence un document d'une autre base.
*/
class Model_objectid extends Model_field_1.Model_field {
    /**
      c'est un champ de base qui permet de référence un document d'une autre base.
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "objectid";
        if (obj["ref"] != undefined) {
            if (_.isString(obj["ref"])) {
                this["ref"] = obj["ref"];
            }
            else if (obj["ref"]._id) {
                this["ref"] = obj["ref"]._id;
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["ref"] == null || target["ref"] == undefined)) {
                throw new Error(path + "ref is required");
            }
            if (target["ref"] != null && target["ref"] != undefined) {
                let _ref = target["ref"];
                if (!_.isString(_ref)) {
                    if (!_.isString(_ref)) {
                        throw new Error(path + "ref is not a string");
                    }
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_objectid.check(target, true, path).then(() => {
            return new Model_objectid(target);
        });
    }
}
exports.Model_objectid = Model_objectid;
//# sourceMappingURL=Model_objectid.js.map
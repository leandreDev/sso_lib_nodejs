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
        if (obj["ref"] != undefined) {
            if (_.isString(obj["ref"])) {
                this["ref"] = obj["ref"];
            }
            else if (obj["ref"]._id) {
                this["ref"] = obj["ref"]._id;
            }
        }
    }
}
exports.Model_objectid = Model_objectid;
//# sourceMappingURL=Model_objectid.js.map
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
}
exports.Model_string = Model_string;
//# sourceMappingURL=Model_string.js.map
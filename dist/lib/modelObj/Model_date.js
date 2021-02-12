"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_date = void 0;
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
}
exports.Model_date = Model_date;
//# sourceMappingURL=Model_date.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_number = void 0;
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
}
exports.Model_number = Model_number;
//# sourceMappingURL=Model_number.js.map
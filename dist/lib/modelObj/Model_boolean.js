"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_boolean = void 0;
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
}
exports.Model_boolean = Model_boolean;
//# sourceMappingURL=Model_boolean.js.map
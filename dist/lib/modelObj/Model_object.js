"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_object = void 0;
const Model_field_1 = require("./Model_field");
/**
  ce champ représente les objets
*/
class Model_object extends Model_field_1.Model_field {
    /**
      ce champ représente les objets
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "object";
    }
}
exports.Model_object = Model_object;
//# sourceMappingURL=Model_object.js.map
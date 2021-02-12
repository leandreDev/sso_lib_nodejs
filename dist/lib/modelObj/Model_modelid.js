"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_modelid = void 0;
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
}
exports.Model_modelid = Model_modelid;
//# sourceMappingURL=Model_modelid.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_field = void 0;
const utils_1 = require("@hfdev/utils");
/**
  ce champ est le champ représente les champs de la base. Il est abstrait, vous devez utiliser ces enfants
*/
class Model_field extends utils_1.Base {
    /**
      ce champ est le champ représente les champs de la base. Il est abstrait, vous devez utiliser ces enfants
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "field";
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
    }
}
exports.Model_field = Model_field;
//# sourceMappingURL=Model_field.js.map
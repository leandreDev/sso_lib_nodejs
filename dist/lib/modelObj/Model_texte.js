"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_texte = void 0;
const Model_string_1 = require("./Model_string");
/**
  champ pour texte long
*/
class Model_texte extends Model_string_1.Model_string {
    /**
      champ pour texte long
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "texte";
    }
}
exports.Model_texte = Model_texte;
//# sourceMappingURL=Model_texte.js.map
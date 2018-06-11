"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_texte.check(target, true, path).then(() => {
            return new Model_texte(target);
        });
    }
}
exports.Model_texte = Model_texte;
//# sourceMappingURL=Model_texte.js.map
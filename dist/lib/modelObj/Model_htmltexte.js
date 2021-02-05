"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_htmltexte = void 0;
const Model_string_1 = require("./Model_string");
/**
  champ pour le html
*/
class Model_htmltexte extends Model_string_1.Model_string {
    /**
      champ pour le html
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "htmltexte";
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
        return Model_htmltexte.check(target, true, path).then(() => {
            return new Model_htmltexte(target);
        });
    }
}
exports.Model_htmltexte = Model_htmltexte;
//# sourceMappingURL=Model_htmltexte.js.map
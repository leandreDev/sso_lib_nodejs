"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("../Base");
/**
  donnée des connecteur sociaux
*/
class Model_social_data extends Base_1.Base {
    /**
      donnée des connecteur sociaux
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "social_data";
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
        return Model_social_data.check(target, true, path).then(() => {
            return new Model_social_data(target);
        });
    }
}
exports.Model_social_data = Model_social_data;
//# sourceMappingURL=Model_social_data.js.map
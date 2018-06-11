"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_string_1 = require("./Model_string");
/**
  password
*/
class Model_password extends Model_string_1.Model_string {
    /**
      password
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "password";
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
        return Model_password.check(target, true, path).then(() => {
            return new Model_password(target);
        });
    }
}
exports.Model_password = Model_password;
//# sourceMappingURL=Model_password.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_password = void 0;
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
}
exports.Model_password = Model_password;
//# sourceMappingURL=Model_password.js.map
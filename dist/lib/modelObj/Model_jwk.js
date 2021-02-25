"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_jwk = void 0;
const _ = require("lodash");
const utils_1 = require("@leandredev/utils");
/**
  JSON Web Key
*/
class Model_jwk extends utils_1.Base {
    /**
      JSON Web Key
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "jwk";
        if (obj["kty"] != undefined) {
            this["kty"] = obj["kty"].toString();
        }
        if (obj["use"] != undefined) {
            this["use"] = obj["use"].toString();
        }
        if (obj["key_ops"] != undefined && obj["key_ops"] != null && _.isArray(obj["key_ops"])) {
            this["key_ops"] = obj["key_ops"].map((value) => {
                return value.toString();
            });
        }
        if (obj["alg"] != undefined) {
            this["alg"] = obj["alg"].toString();
        }
        if (obj["kid"] != undefined) {
            this["kid"] = obj["kid"].toString();
        }
        if (obj["x5u"] != undefined) {
            this["x5u"] = obj["x5u"].toString();
        }
        if (obj["x5c"] != undefined && obj["x5c"] != null && _.isArray(obj["x5c"])) {
            this["x5c"] = obj["x5c"].map((value) => {
                return value.toString();
            });
        }
        if (obj["x5t"] != undefined) {
            this["x5t"] = obj["x5t"].toString();
        }
        if (obj["x5t#S256"] != undefined) {
            this["x5t#S256"] = obj["x5t#S256"].toString();
        }
    }
}
exports.Model_jwk = Model_jwk;
//# sourceMappingURL=Model_jwk.js.map
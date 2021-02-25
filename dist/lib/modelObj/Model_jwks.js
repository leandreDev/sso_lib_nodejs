"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_jwks = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  JSON Web Key Set (JWK Set)
*/
class Model_jwks extends utils_1.Base {
    /**
      JSON Web Key Set (JWK Set)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "jwks";
        if (obj["keys"] != undefined && obj["keys"] != null && _.isArray(obj["keys"])) {
            this["keys"] = obj["keys"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["jwk"](value);
                }
            });
        }
    }
}
exports.Model_jwks = Model_jwks;
//# sourceMappingURL=Model_jwks.js.map
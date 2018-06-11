"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Base_1 = require("../Base");
/**
  JSON Web Key Set (JWK Set)
*/
class Model_jwks extends Base_1.Base {
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["keys"] != null && target["keys"] != undefined) {
                target["keys"].forEach((_keys, index) => {
                    promArr.push(Index["jwk"].check(_keys, isCompleteObj, path + "keys.")
                        .catch((err) => {
                        throw new Error(path + "keys index: " + index + "is not jwk");
                    }));
                    if (_keys._class != null && _keys._class != undefined) {
                        promArr.push(Index[_keys._class].check(_keys, isCompleteObj, path + "keys.")
                            .catch((err) => {
                            throw new Error(path + "keys index: " + index + "is not a " + _keys._class);
                        }));
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_jwks.check(target, true, path).then(() => {
            return new Model_jwks(target);
        });
    }
}
exports.Model_jwks = Model_jwks;
//# sourceMappingURL=Model_jwks.js.map
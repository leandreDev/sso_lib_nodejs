"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_protoschema = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  protoschema est un méta modéle. il permet de créer les autres modèle de la base
*/
class Model_protoschema extends utils_1.Base {
    /**
      protoschema est un méta modéle. il permet de créer les autres modèle de la base
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "protoschema";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["description"] != undefined) {
            this["description"] = obj["description"].toString();
        }
        if (obj["isAbstract"] != undefined) {
            this["isAbstract"] = new Boolean(obj["isAbstract"]).valueOf();
        }
        if (obj["isSchema"] != undefined) {
            this["isSchema"] = new Boolean(obj["isSchema"]).valueOf();
        }
        if (obj["parentModel"] != undefined) {
            if (_.isString(obj["parentModel"])) {
                this["parentModel"] = obj["parentModel"];
            }
            else if (obj["parentModel"]._id) {
                this["parentModel"] = obj["parentModel"]._id;
            }
        }
        if (obj["fields"] != undefined && obj["fields"] != null && _.isArray(obj["fields"])) {
            this["fields"] = obj["fields"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["field"](value);
                }
            });
        }
    }
}
exports.Model_protoschema = Model_protoschema;
//# sourceMappingURL=Model_protoschema.js.map
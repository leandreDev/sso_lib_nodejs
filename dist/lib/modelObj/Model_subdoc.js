"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_subdoc = void 0;
const _ = require("lodash");
const Model_field_1 = require("./Model_field");
/**
  ce champ permet d'insérer un document dans un autre
*/
class Model_subdoc extends Model_field_1.Model_field {
    /**
      ce champ permet d'insérer un document dans un autre
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "subdoc";
        if (obj["protoSchemaId"] != undefined) {
            if (_.isString(obj["protoSchemaId"])) {
                this["protoSchemaId"] = obj["protoSchemaId"];
            }
            else if (obj["protoSchemaId"]._id) {
                this["protoSchemaId"] = obj["protoSchemaId"]._id;
            }
        }
    }
}
exports.Model_subdoc = Model_subdoc;
//# sourceMappingURL=Model_subdoc.js.map
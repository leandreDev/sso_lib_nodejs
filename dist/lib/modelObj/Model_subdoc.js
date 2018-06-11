"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["protoSchemaId"] != null && target["protoSchemaId"] != undefined) {
                let _protoSchemaId = target["protoSchemaId"];
                if (!_.isString(_protoSchemaId)) {
                    if (!_.isString(_protoSchemaId)) {
                        throw new Error(path + "protoSchemaId is not a string");
                    }
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_subdoc.check(target, true, path).then(() => {
            return new Model_subdoc(target);
        });
    }
}
exports.Model_subdoc = Model_subdoc;
//# sourceMappingURL=Model_subdoc.js.map
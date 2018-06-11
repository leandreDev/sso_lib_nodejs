"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Base_1 = require("../Base");
/**
  protoschema est un méta modéle. il permet de créer les autres modèle de la base
*/
class Model_protoschema extends Base_1.Base {
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["name"] == null || target["name"] == undefined)) {
                throw new Error(path + "name is required");
            }
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (isCompleteObj && (target["description"] == null || target["description"] == undefined)) {
                throw new Error(path + "description is required");
            }
            if (target["description"] != null && target["description"] != undefined) {
                let _description = target["description"];
                if (!_.isString(_description)) {
                    throw new Error(path + "description is not a string");
                }
            }
            if (target["isAbstract"] != null && target["isAbstract"] != undefined) {
                let _isAbstract = target["isAbstract"];
                if (!_.isBoolean(_isAbstract)) {
                    throw new Error(path + "isAbstract is not a boolean");
                }
            }
            if (target["isSchema"] != null && target["isSchema"] != undefined) {
                let _isSchema = target["isSchema"];
                if (!_.isBoolean(_isSchema)) {
                    throw new Error(path + "isSchema is not a boolean");
                }
            }
            if (target["parentModel"] != null && target["parentModel"] != undefined) {
                let _parentModel = target["parentModel"];
                if (!_.isString(_parentModel)) {
                    throw new Error(path + "parentModel is not a string");
                }
            }
            if (target["fields"] != null && target["fields"] != undefined) {
                target["fields"].forEach((_fields, index) => {
                    promArr.push(Index["field"].check(_fields, isCompleteObj, path + "fields.")
                        .catch((err) => {
                        throw new Error(path + "fields index: " + index + "is not field");
                    }));
                    if (_fields._class != null && _fields._class != undefined) {
                        promArr.push(Index[_fields._class].check(_fields, isCompleteObj, path + "fields.")
                            .catch((err) => {
                            throw new Error(path + "fields index: " + index + "is not a " + _fields._class);
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
        return Model_protoschema.check(target, true, path).then(() => {
            return new Model_protoschema(target);
        });
    }
}
exports.Model_protoschema = Model_protoschema;
//# sourceMappingURL=Model_protoschema.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Base_1 = require("../Base");
/**
  configuration du gestionnaire d'utilisateur
*/
class Model_oidc_clientUserManagment extends Base_1.Base {
    /**
      configuration du gestionnaire d'utilisateur
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "oidc_clientUserManagment";
        if (obj["sign_in_uri"] != undefined) {
            this["sign_in_uri"] = obj["sign_in_uri"].toString();
        }
        if (obj["password_recovery_uri"] != undefined) {
            this["password_recovery_uri"] = obj["password_recovery_uri"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["sign_in_uri"] == null || target["sign_in_uri"] == undefined)) {
                throw new Error(path + "sign_in_uri is required");
            }
            if (target["sign_in_uri"] != null && target["sign_in_uri"] != undefined) {
                let _sign_in_uri = target["sign_in_uri"];
                if (!_.isString(_sign_in_uri)) {
                    throw new Error(path + "sign_in_uri is not a string");
                }
            }
            if (isCompleteObj && (target["password_recovery_uri"] == null || target["password_recovery_uri"] == undefined)) {
                throw new Error(path + "password_recovery_uri is required");
            }
            if (target["password_recovery_uri"] != null && target["password_recovery_uri"] != undefined) {
                let _password_recovery_uri = target["password_recovery_uri"];
                if (!_.isString(_password_recovery_uri)) {
                    throw new Error(path + "password_recovery_uri is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_oidc_clientUserManagment.check(target, true, path).then(() => {
            return new Model_oidc_clientUserManagment(target);
        });
    }
}
exports.Model_oidc_clientUserManagment = Model_oidc_clientUserManagment;
//# sourceMappingURL=Model_oidc_clientUserManagment.js.map
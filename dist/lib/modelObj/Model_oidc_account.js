"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_oidc_account = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@hfdev/utils");
/**
  compte de l'utilisateur
*/
class Model_oidc_account extends utils_1.Base {
    /**
      compte de l'utilisateur
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "oidc_account";
        if (obj["account_id"] != undefined) {
            this["account_id"] = obj["account_id"].toString();
        }
        if (obj["birthdate"] != undefined) {
            this["birthdate"] = new Date(obj["birthdate"]);
        }
        if (obj["email"] != undefined) {
            this["email"] = obj["email"].toString();
        }
        if (obj["email_verified"] != undefined) {
            this["email_verified"] = new Boolean(obj["email_verified"]).valueOf();
        }
        if (obj["family_name"] != undefined) {
            this["family_name"] = obj["family_name"].toString();
        }
        if (obj["gender"] != undefined) {
            this["gender"] = obj["gender"].toString();
        }
        if (obj["given_name"] != undefined) {
            this["given_name"] = obj["given_name"].toString();
        }
        if (obj["locale"] != undefined) {
            this["locale"] = obj["locale"].toString();
        }
        if (obj["middle_name"] != undefined) {
            this["middle_name"] = obj["middle_name"].toString();
        }
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["nickname"] != undefined) {
            this["nickname"] = obj["nickname"].toString();
        }
        if (obj["phone_number"] != undefined) {
            this["phone_number"] = obj["phone_number"].toString();
        }
        if (obj["phone_number_verified"] != undefined) {
            this["phone_number_verified"] = new Boolean(obj["phone_number_verified"]).valueOf();
        }
        if (obj["password"] != undefined) {
            this["password"] = obj["password"].toString();
        }
        if (obj["picture"] != undefined) {
            this["picture"] = obj["picture"].toString();
        }
        if (obj["connector"] != undefined && obj["connector"] != null && _.isArray(obj["connector"])) {
            this["connector"] = obj["connector"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["social_data"](value);
                }
            });
        }
        if (obj["resetPasswordKey"] != undefined) {
            this["resetPasswordKey"] = obj["resetPasswordKey"].toString();
        }
        if (obj["resetPasswordEndDate"] != undefined) {
            this["resetPasswordEndDate"] = obj["resetPasswordEndDate"].toString();
        }
        if (obj["resetPasswordReturn"] != undefined) {
            this["resetPasswordReturn"] = obj["resetPasswordReturn"].toString();
        }
    }
}
exports.Model_oidc_account = Model_oidc_account;
//# sourceMappingURL=Model_oidc_account.js.map
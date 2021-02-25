"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_oidc_Client = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandreDev/utils");
/**
  description d'un client openId (c'est une application)
*/
class Model_oidc_Client extends utils_1.Base {
    /**
      description d'un client openId (c'est une application)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "oidc_Client";
        if (obj["client_id"] != undefined) {
            this["client_id"] = obj["client_id"].toString();
        }
        if (obj["client_secret"] != undefined) {
            this["client_secret"] = obj["client_secret"].toString();
        }
        if (obj["grant_types"] != undefined && obj["grant_types"] != null && _.isArray(obj["grant_types"])) {
            this["grant_types"] = obj["grant_types"].map((value) => {
                return value.toString();
            });
        }
        if (obj["redirect_uris"] != undefined && obj["redirect_uris"] != null && _.isArray(obj["redirect_uris"])) {
            this["redirect_uris"] = obj["redirect_uris"].map((value) => {
                return value.toString();
            });
        }
        if (obj["response_types"] != undefined && obj["response_types"] != null && _.isArray(obj["response_types"])) {
            this["response_types"] = obj["response_types"].map((value) => {
                return value.toString();
            });
        }
        if (obj["application_type"] != undefined) {
            this["application_type"] = obj["application_type"].toString();
        }
        if (obj["contacts"] != undefined && obj["contacts"] != null && _.isArray(obj["contacts"])) {
            this["contacts"] = obj["contacts"].map((value) => {
                return value.toString();
            });
        }
        if (obj["client_name"] != undefined) {
            this["client_name"] = obj["client_name"].toString();
        }
        if (obj["logo_uri"] != undefined) {
            this["logo_uri"] = obj["logo_uri"].toString();
        }
        if (obj["client_uri"] != undefined) {
            this["client_uri"] = obj["client_uri"].toString();
        }
        if (obj["policy_uri"] != undefined) {
            this["policy_uri"] = obj["policy_uri"].toString();
        }
        if (obj["tos_uri"] != undefined) {
            this["tos_uri"] = obj["tos_uri"].toString();
        }
        if (obj["jwks_uri"] != undefined) {
            this["jwks_uri"] = obj["jwks_uri"].toString();
        }
        if (obj["jwks"] != undefined) {
            if (obj["jwks"]._class) {
                this["jwks"] = new Index[obj["jwks"]._class](obj["jwks"]);
            }
            else {
                this["jwks"] = new Index["jwks"](obj["jwks"]);
            }
        }
        if (obj["sector_identifier_uri"] != undefined) {
            this["sector_identifier_uri"] = obj["sector_identifier_uri"].toString();
        }
        if (obj["subject_type"] != undefined) {
            this["subject_type"] = obj["subject_type"].toString();
        }
        if (obj["id_token_signed_response_alg"] != undefined) {
            this["id_token_signed_response_alg"] = obj["id_token_signed_response_alg"].toString();
        }
        if (obj["id_token_encrypted_response_alg"] != undefined) {
            this["id_token_encrypted_response_alg"] = obj["id_token_encrypted_response_alg"].toString();
        }
        if (obj["id_token_encrypted_response_enc"] != undefined) {
            this["id_token_encrypted_response_enc"] = obj["id_token_encrypted_response_enc"].toString();
        }
        if (obj["userinfo_signed_response_alg"] != undefined) {
            this["userinfo_signed_response_alg"] = obj["userinfo_signed_response_alg"].toString();
        }
        if (obj["userinfo_encrypted_response_alg"] != undefined) {
            this["userinfo_encrypted_response_alg"] = obj["userinfo_encrypted_response_alg"].toString();
        }
        if (obj["userinfo_encrypted_response_enc"] != undefined) {
            this["userinfo_encrypted_response_enc"] = obj["userinfo_encrypted_response_enc"].toString();
        }
        if (obj["request_object_signing_alg"] != undefined) {
            this["request_object_signing_alg"] = obj["request_object_signing_alg"].toString();
        }
        if (obj["request_object_encryption_alg"] != undefined) {
            this["request_object_encryption_alg"] = obj["request_object_encryption_alg"].toString();
        }
        if (obj["request_object_encryption_enc"] != undefined) {
            this["request_object_encryption_enc"] = obj["request_object_encryption_enc"].toString();
        }
        if (obj["token_endpoint_auth_method"] != undefined) {
            this["token_endpoint_auth_method"] = obj["token_endpoint_auth_method"].toString();
        }
        if (obj["token_endpoint_auth_signing_alg"] != undefined) {
            this["token_endpoint_auth_signing_alg"] = obj["token_endpoint_auth_signing_alg"].toString();
        }
        if (obj["default_max_age"] != undefined) {
            this["default_max_age"] = new Number(obj["default_max_age"]).valueOf();
        }
        if (obj["require_auth_time"] != undefined) {
            this["require_auth_time"] = new Boolean(obj["require_auth_time"]).valueOf();
        }
        if (obj["default_acr_values"] != undefined && obj["default_acr_values"] != null && _.isArray(obj["default_acr_values"])) {
            this["default_acr_values"] = obj["default_acr_values"].map((value) => {
                return value.toString();
            });
        }
        if (obj["initiate_login_uri"] != undefined) {
            this["initiate_login_uri"] = obj["initiate_login_uri"].toString();
        }
        if (obj["request_uris"] != undefined && obj["request_uris"] != null && _.isArray(obj["request_uris"])) {
            this["request_uris"] = obj["request_uris"].map((value) => {
                return value.toString();
            });
        }
        if (obj["post_logout_redirect_uris"] != undefined && obj["post_logout_redirect_uris"] != null && _.isArray(obj["post_logout_redirect_uris"])) {
            this["post_logout_redirect_uris"] = obj["post_logout_redirect_uris"].map((value) => {
                return value.toString();
            });
        }
        if (obj["passportConfig"] != undefined && obj["passportConfig"] != null && _.isArray(obj["passportConfig"])) {
            this["passportConfig"] = obj["passportConfig"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["passport_strategie"](value);
                }
            });
        }
        if (obj["userManagment"] != undefined) {
            if (obj["userManagment"]._class) {
                this["userManagment"] = new Index[obj["userManagment"]._class](obj["userManagment"]);
            }
            else {
                this["userManagment"] = new Index["oidc_clientUserManagment"](obj["userManagment"]);
            }
        }
        if (obj["redirectSso"] != undefined) {
            this["redirectSso"] = new Boolean(obj["redirectSso"]).valueOf();
        }
    }
}
exports.Model_oidc_Client = Model_oidc_Client;
//# sourceMappingURL=Model_oidc_Client.js.map
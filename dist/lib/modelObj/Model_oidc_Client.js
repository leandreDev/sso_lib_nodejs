"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_oidc_Client = void 0;
const _ = require("lodash");
const Index = require("./Index");
const Base_1 = require("../Base");
/**
  description d'un client openId (c'est une application)
*/
class Model_oidc_Client extends Base_1.Base {
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
            if (obj._class) {
                this["jwks"] = new Index[obj._class](obj["jwks"]);
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
            if (obj._class) {
                this["userManagment"] = new Index[obj._class](obj["userManagment"]);
            }
            else {
                this["userManagment"] = new Index["oidc_clientUserManagment"](obj["userManagment"]);
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["client_id"] == null || target["client_id"] == undefined)) {
                throw new Error(path + "client_id is required");
            }
            if (target["client_id"] != null && target["client_id"] != undefined) {
                let _client_id = target["client_id"];
                if (!_.isString(_client_id)) {
                    throw new Error(path + "client_id is not a string");
                }
            }
            if (isCompleteObj && (target["client_secret"] == null || target["client_secret"] == undefined)) {
                throw new Error(path + "client_secret is required");
            }
            if (target["client_secret"] != null && target["client_secret"] != undefined) {
                let _client_secret = target["client_secret"];
                if (!_.isString(_client_secret)) {
                    throw new Error(path + "client_secret is not a string");
                }
            }
            if (isCompleteObj && (target["grant_types"] == null || target["grant_types"] == undefined)) {
                throw new Error(path + "grant_types is required");
            }
            if (target["grant_types"] != null && target["grant_types"] != undefined) {
                target["grant_types"].forEach((_grant_types, index) => {
                    if (!_.isString(_grant_types)) {
                        throw new Error(path + "grant_types index: " + index + "is not a string");
                    }
                    let _enum_grant_types = ["authorization_code", "refresh_token", "client_credentials", "implicit"];
                    if (_enum_grant_types.indexOf(_grant_types) == -1) {
                        throw new Error(path + "grant_types index: " + index + " dont match one of authorization_code , refresh_token , client_credentials , implicit");
                    }
                });
            }
            if (isCompleteObj && (target["redirect_uris"] == null || target["redirect_uris"] == undefined)) {
                throw new Error(path + "redirect_uris is required");
            }
            if (target["redirect_uris"] != null && target["redirect_uris"] != undefined) {
                target["redirect_uris"].forEach((_redirect_uris, index) => {
                    if (!_.isString(_redirect_uris)) {
                        throw new Error(path + "redirect_uris index: " + index + "is not a string");
                    }
                });
            }
            if (target["response_types"] != null && target["response_types"] != undefined) {
                target["response_types"].forEach((_response_types, index) => {
                    if (!_.isString(_response_types)) {
                        throw new Error(path + "response_types index: " + index + "is not a string");
                    }
                });
            }
            if (target["application_type"] != null && target["application_type"] != undefined) {
                let _application_type = target["application_type"];
                if (!_.isString(_application_type)) {
                    throw new Error(path + "application_type is not a string");
                }
            }
            if (target["contacts"] != null && target["contacts"] != undefined) {
                target["contacts"].forEach((_contacts, index) => {
                    if (!_.isString(_contacts)) {
                        throw new Error(path + "contacts index: " + index + "is not a string");
                    }
                });
            }
            if (target["client_name"] != null && target["client_name"] != undefined) {
                let _client_name = target["client_name"];
                if (!_.isString(_client_name)) {
                    throw new Error(path + "client_name is not a string");
                }
            }
            if (target["logo_uri"] != null && target["logo_uri"] != undefined) {
                let _logo_uri = target["logo_uri"];
                if (!_.isString(_logo_uri)) {
                    throw new Error(path + "logo_uri is not a string");
                }
            }
            if (target["client_uri"] != null && target["client_uri"] != undefined) {
                let _client_uri = target["client_uri"];
                if (!_.isString(_client_uri)) {
                    throw new Error(path + "client_uri is not a string");
                }
            }
            if (target["policy_uri"] != null && target["policy_uri"] != undefined) {
                let _policy_uri = target["policy_uri"];
                if (!_.isString(_policy_uri)) {
                    throw new Error(path + "policy_uri is not a string");
                }
            }
            if (target["tos_uri"] != null && target["tos_uri"] != undefined) {
                let _tos_uri = target["tos_uri"];
                if (!_.isString(_tos_uri)) {
                    throw new Error(path + "tos_uri is not a string");
                }
            }
            if (target["jwks_uri"] != null && target["jwks_uri"] != undefined) {
                let _jwks_uri = target["jwks_uri"];
                if (!_.isString(_jwks_uri)) {
                    throw new Error(path + "jwks_uri is not a string");
                }
            }
            if (target["jwks"] != null && target["jwks"] != undefined) {
                let _jwks = target["jwks"];
                promArr.push(Index["jwks"].check(_jwks, isCompleteObj, path + "jwks.")
                    .catch((err) => {
                    throw new Error(path + "jwks is not ");
                }));
                if (_jwks._class != null && _jwks._class != undefined) {
                    promArr.push(Index[_jwks._class].check(_jwks, isCompleteObj, path + "jwks.")
                        .catch((err) => {
                        throw new Error(path + "jwks is not a " + _jwks._class);
                    }));
                }
            }
            if (target["sector_identifier_uri"] != null && target["sector_identifier_uri"] != undefined) {
                let _sector_identifier_uri = target["sector_identifier_uri"];
                if (!_.isString(_sector_identifier_uri)) {
                    throw new Error(path + "sector_identifier_uri is not a string");
                }
            }
            if (target["subject_type"] != null && target["subject_type"] != undefined) {
                let _subject_type = target["subject_type"];
                if (!_.isString(_subject_type)) {
                    throw new Error(path + "subject_type is not a string");
                }
            }
            if (target["id_token_signed_response_alg"] != null && target["id_token_signed_response_alg"] != undefined) {
                let _id_token_signed_response_alg = target["id_token_signed_response_alg"];
                if (!_.isString(_id_token_signed_response_alg)) {
                    throw new Error(path + "id_token_signed_response_alg is not a string");
                }
            }
            if (target["id_token_encrypted_response_alg"] != null && target["id_token_encrypted_response_alg"] != undefined) {
                let _id_token_encrypted_response_alg = target["id_token_encrypted_response_alg"];
                if (!_.isString(_id_token_encrypted_response_alg)) {
                    throw new Error(path + "id_token_encrypted_response_alg is not a string");
                }
            }
            if (target["id_token_encrypted_response_enc"] != null && target["id_token_encrypted_response_enc"] != undefined) {
                let _id_token_encrypted_response_enc = target["id_token_encrypted_response_enc"];
                if (!_.isString(_id_token_encrypted_response_enc)) {
                    throw new Error(path + "id_token_encrypted_response_enc is not a string");
                }
            }
            if (target["userinfo_signed_response_alg"] != null && target["userinfo_signed_response_alg"] != undefined) {
                let _userinfo_signed_response_alg = target["userinfo_signed_response_alg"];
                if (!_.isString(_userinfo_signed_response_alg)) {
                    throw new Error(path + "userinfo_signed_response_alg is not a string");
                }
            }
            if (target["userinfo_encrypted_response_alg"] != null && target["userinfo_encrypted_response_alg"] != undefined) {
                let _userinfo_encrypted_response_alg = target["userinfo_encrypted_response_alg"];
                if (!_.isString(_userinfo_encrypted_response_alg)) {
                    throw new Error(path + "userinfo_encrypted_response_alg is not a string");
                }
            }
            if (target["userinfo_encrypted_response_enc"] != null && target["userinfo_encrypted_response_enc"] != undefined) {
                let _userinfo_encrypted_response_enc = target["userinfo_encrypted_response_enc"];
                if (!_.isString(_userinfo_encrypted_response_enc)) {
                    throw new Error(path + "userinfo_encrypted_response_enc is not a string");
                }
            }
            if (target["request_object_signing_alg"] != null && target["request_object_signing_alg"] != undefined) {
                let _request_object_signing_alg = target["request_object_signing_alg"];
                if (!_.isString(_request_object_signing_alg)) {
                    throw new Error(path + "request_object_signing_alg is not a string");
                }
            }
            if (target["request_object_encryption_alg"] != null && target["request_object_encryption_alg"] != undefined) {
                let _request_object_encryption_alg = target["request_object_encryption_alg"];
                if (!_.isString(_request_object_encryption_alg)) {
                    throw new Error(path + "request_object_encryption_alg is not a string");
                }
            }
            if (target["request_object_encryption_enc"] != null && target["request_object_encryption_enc"] != undefined) {
                let _request_object_encryption_enc = target["request_object_encryption_enc"];
                if (!_.isString(_request_object_encryption_enc)) {
                    throw new Error(path + "request_object_encryption_enc is not a string");
                }
            }
            if (target["token_endpoint_auth_method"] != null && target["token_endpoint_auth_method"] != undefined) {
                let _token_endpoint_auth_method = target["token_endpoint_auth_method"];
                if (!_.isString(_token_endpoint_auth_method)) {
                    throw new Error(path + "token_endpoint_auth_method is not a string");
                }
            }
            if (target["token_endpoint_auth_signing_alg"] != null && target["token_endpoint_auth_signing_alg"] != undefined) {
                let _token_endpoint_auth_signing_alg = target["token_endpoint_auth_signing_alg"];
                if (!_.isString(_token_endpoint_auth_signing_alg)) {
                    throw new Error(path + "token_endpoint_auth_signing_alg is not a string");
                }
            }
            if (target["default_max_age"] != null && target["default_max_age"] != undefined) {
                let _default_max_age = target["default_max_age"];
                if (!_.isNumber(_default_max_age)) {
                    throw new Error(path + "default_max_age is not a number");
                }
            }
            if (target["require_auth_time"] != null && target["require_auth_time"] != undefined) {
                let _require_auth_time = target["require_auth_time"];
                if (!_.isBoolean(_require_auth_time)) {
                    throw new Error(path + "require_auth_time is not a boolean");
                }
            }
            if (target["default_acr_values"] != null && target["default_acr_values"] != undefined) {
                target["default_acr_values"].forEach((_default_acr_values, index) => {
                    if (!_.isString(_default_acr_values)) {
                        throw new Error(path + "default_acr_values index: " + index + "is not a string");
                    }
                });
            }
            if (target["initiate_login_uri"] != null && target["initiate_login_uri"] != undefined) {
                let _initiate_login_uri = target["initiate_login_uri"];
                if (!_.isString(_initiate_login_uri)) {
                    throw new Error(path + "initiate_login_uri is not a string");
                }
            }
            if (target["request_uris"] != null && target["request_uris"] != undefined) {
                target["request_uris"].forEach((_request_uris, index) => {
                    if (!_.isString(_request_uris)) {
                        throw new Error(path + "request_uris index: " + index + "is not a string");
                    }
                });
            }
            if (target["post_logout_redirect_uris"] != null && target["post_logout_redirect_uris"] != undefined) {
                target["post_logout_redirect_uris"].forEach((_post_logout_redirect_uris, index) => {
                    if (!_.isString(_post_logout_redirect_uris)) {
                        throw new Error(path + "post_logout_redirect_uris index: " + index + "is not a string");
                    }
                });
            }
            if (target["passportConfig"] != null && target["passportConfig"] != undefined) {
                target["passportConfig"].forEach((_passportConfig, index) => {
                    promArr.push(Index["passport_strategie"].check(_passportConfig, isCompleteObj, path + "passportConfig.")
                        .catch((err) => {
                        throw new Error(path + "passportConfig index: " + index + "is not passport_strategie");
                    }));
                    if (_passportConfig._class != null && _passportConfig._class != undefined) {
                        promArr.push(Index[_passportConfig._class].check(_passportConfig, isCompleteObj, path + "passportConfig.")
                            .catch((err) => {
                            throw new Error(path + "passportConfig index: " + index + "is not a " + _passportConfig._class);
                        }));
                    }
                });
            }
            if (target["userManagment"] != null && target["userManagment"] != undefined) {
                let _userManagment = target["userManagment"];
                promArr.push(Index["oidc_clientUserManagment"].check(_userManagment, isCompleteObj, path + "userManagment.")
                    .catch((err) => {
                    throw new Error(path + "userManagment is not ");
                }));
                if (_userManagment._class != null && _userManagment._class != undefined) {
                    promArr.push(Index[_userManagment._class].check(_userManagment, isCompleteObj, path + "userManagment.")
                        .catch((err) => {
                        throw new Error(path + "userManagment is not a " + _userManagment._class);
                    }));
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_oidc_Client.check(target, true, path).then(() => {
            return new Model_oidc_Client(target);
        });
    }
}
exports.Model_oidc_Client = Model_oidc_Client;
//# sourceMappingURL=Model_oidc_Client.js.map
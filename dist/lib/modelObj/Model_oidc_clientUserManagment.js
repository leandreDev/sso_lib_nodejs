"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_oidc_clientUserManagment = void 0;
const utils_1 = require("@leandreDev/utils");
/**
  configuration du gestionnaire d'utilisateur
*/
class Model_oidc_clientUserManagment extends utils_1.Base {
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
}
exports.Model_oidc_clientUserManagment = Model_oidc_clientUserManagment;
//# sourceMappingURL=Model_oidc_clientUserManagment.js.map
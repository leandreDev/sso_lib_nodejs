"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api_plateforme = exports.api_view_plateform = exports.api_collection_plateform = void 0;
const utils_1 = require("@leandreDev/utils");
class api_collection_plateform {
    constructor(conf) {
        this.secure = null;
        this.url = conf.url;
        this.secure = conf.secure;
        this.protoschema = new utils_1.HttpServiceBase({ url: conf.url + "collection/protoschema/", secure: conf.secure });
        this.admin_protoschema = new utils_1.HttpServiceAdminBase({ url: conf.url + "admin/protoschema/", secure: conf.secure });
        this.oidc_account = new utils_1.HttpServiceBase({ url: conf.url + "collection/oidc_account/", secure: conf.secure });
        this.admin_oidc_account = new utils_1.HttpServiceAdminBase({ url: conf.url + "admin/oidc_account/", secure: conf.secure });
        this.oidc_Client = new utils_1.HttpServiceBase({ url: conf.url + "collection/oidc_Client/", secure: conf.secure });
        this.admin_oidc_Client = new utils_1.HttpServiceAdminBase({ url: conf.url + "admin/oidc_Client/", secure: conf.secure });
    }
}
exports.api_collection_plateform = api_collection_plateform;
class api_view_plateform {
    constructor(conf) {
        this.conf = conf;
    }
}
exports.api_view_plateform = api_view_plateform;
class Api_plateforme {
    constructor(conf) {
        this.conf = conf;
        this.collections = new api_collection_plateform(conf);
        this.views = new api_view_plateform(conf);
    }
}
exports.Api_plateforme = Api_plateforme;
//# sourceMappingURL=Api_plateforme.js.map
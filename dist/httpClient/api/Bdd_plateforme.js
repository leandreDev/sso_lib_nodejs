"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bdd_plateforme = exports.bdd_view_plateform = exports.bdd_collection_plateform = void 0;
const utils_1 = require("@hfdev/utils");
const Index = require("../../lib/entities/Index");
const fs = require("fs");
class bdd_collection_plateform {
    constructor(conf) {
        this.secure = null;
        this.url = conf.url;
        this.secure = conf.secure;
        this.protoschema = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'protoschemas', entity: Index.Entity_protoschema, debug: conf.debug, collections: this });
        this.admin_protoschema = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'protoschemas', entity: Index.Entity_protoschema, debug: conf.debug });
        this.oidc_account = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'oidc_accounts', entity: Index.Entity_oidc_account, debug: conf.debug, collections: this });
        this.admin_oidc_account = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'oidc_accounts', entity: Index.Entity_oidc_account, debug: conf.debug });
        this.oidc_Client = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'oidc_clients', entity: Index.Entity_oidc_Client, debug: conf.debug, collections: this });
        this.admin_oidc_Client = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'oidc_clients', entity: Index.Entity_oidc_Client, debug: conf.debug });
    }
    getHttpService(colName) {
        return this[colName];
    }
}
exports.bdd_collection_plateform = bdd_collection_plateform;
class bdd_view_plateform {
    constructor(conf, collections) {
        this.conf = conf;
    }
}
exports.bdd_view_plateform = bdd_view_plateform;
class Bdd_plateforme {
    constructor(conf) {
        this.conf = conf;
        if (!conf.bdd) {
            conf.bdd = new Promise((resolve, reject) => {
                if (conf.caPath) {
                    var ca = [fs.readFileSync(conf.caPath)];
                    utils_1.mongo.MongoClient.connect(conf.url, {
                        sslValidate: true,
                        sslCA: ca,
                        useNewUrlParser: true
                    })
                        .then(mongoCLient => {
                        resolve(mongoCLient.db());
                    });
                }
                else {
                    utils_1.mongo.MongoClient.connect(conf.url)
                        .then(mongoCLient => {
                        resolve(mongoCLient.db());
                    });
                }
            });
        }
        this.collections = new bdd_collection_plateform(conf);
        this.views = new bdd_view_plateform(conf, this.collections);
    }
}
exports.Bdd_plateforme = Bdd_plateforme;
//# sourceMappingURL=Bdd_plateforme.js.map
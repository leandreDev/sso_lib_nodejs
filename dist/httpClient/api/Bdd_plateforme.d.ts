import { UtilsSecu, HttpServiceBddBase, HttpServiceBddAdminBase, mongo, IBase } from "@leandredev/utils";
import * as Interfaces from "../../lib/modelObj/Interfaces";
import { IPlateforme } from './IPlateforme';
export declare class bdd_collection_plateform {
    constructor(conf: any);
    getHttpService(colName: string): HttpServiceBddBase<IBase>;
    protected url: string;
    protected secure: UtilsSecu;
    /**
     service d'accès à la collection :protoschema
     desc: protoschema est un méta modéle. il permet de créer les autres modèle de la base
     

     
    */
    protoschema: HttpServiceBddBase<Interfaces.Iprotoschema>;
    admin_protoschema: HttpServiceBddAdminBase<Interfaces.Iprotoschema>;
    /**
     service d'accès à la collection :oidc_account
     desc: compte de l'utilisateur
     

     
    */
    oidc_account: HttpServiceBddBase<Interfaces.Ioidc_account>;
    admin_oidc_account: HttpServiceBddAdminBase<Interfaces.Ioidc_account>;
    /**
     service d'accès à la collection :oidc_Client
     desc: description d'un client openId (c'est une application)
     

     
    */
    oidc_Client: HttpServiceBddBase<Interfaces.Ioidc_Client>;
    admin_oidc_Client: HttpServiceBddAdminBase<Interfaces.Ioidc_Client>;
}
export declare class bdd_view_plateform {
    conf: any;
    constructor(conf: any, collections: any);
}
export declare class Bdd_plateforme implements IPlateforme {
    conf: {
        url: string;
        secure: any;
        debug?: boolean;
        bdd?: Promise<mongo.Db>;
        caPath?: string;
    };
    constructor(conf: {
        url: string;
        secure: any;
        debug?: boolean;
        bdd?: Promise<mongo.Db>;
        caPath?: string;
    });
    /**
        liste des collections de l'api
    */
    collections: bdd_collection_plateform;
    /**
        liste des vues de l'api
    */
    views: bdd_view_plateform;
}

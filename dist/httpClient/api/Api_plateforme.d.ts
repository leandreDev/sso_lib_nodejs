import { UtilsSecu, HttpServiceBase, HttpServiceAdminBase } from "@hfdev/utils";
import * as Interfaces from "../../lib/modelObj/Interfaces";
import { IPlateforme } from './IPlateforme';
export declare class api_collection_plateform {
    constructor(conf: any);
    protected url: string;
    protected secure: UtilsSecu;
    /**
     service d'accès à la collection :protoschema
     desc: protoschema est un méta modéle. il permet de créer les autres modèle de la base
     

     
    */
    protoschema: HttpServiceBase<Interfaces.Iprotoschema>;
    admin_protoschema: HttpServiceAdminBase<Interfaces.Iprotoschema>;
    /**
     service d'accès à la collection :oidc_account
     desc: compte de l'utilisateur
     

     
    */
    oidc_account: HttpServiceBase<Interfaces.Ioidc_account>;
    admin_oidc_account: HttpServiceAdminBase<Interfaces.Ioidc_account>;
    /**
     service d'accès à la collection :oidc_Client
     desc: description d'un client openId (c'est une application)
     

     
    */
    oidc_Client: HttpServiceBase<Interfaces.Ioidc_Client>;
    admin_oidc_Client: HttpServiceAdminBase<Interfaces.Ioidc_Client>;
}
export declare class api_view_plateform {
    conf: any;
    constructor(conf: any);
}
export declare class Api_plateforme implements IPlateforme {
    conf: any;
    constructor(conf: any);
    /**
        liste des collections de l'api
    */
    collections: api_collection_plateform;
    /**
        liste des vues de l'api
    */
    views: api_view_plateform;
}

import { IHttpServiceBase, IHttpServiceAdminBase } from "@hfdev/utils";
import * as Interfaces from "../../lib/modelObj/Interfaces";
export interface IView_plateform {
}
export interface IPlateforme {
    collections: {
        protoschema: IHttpServiceBase<Interfaces.Iprotoschema>;
        admin_protoschema: IHttpServiceAdminBase<Interfaces.Iprotoschema>;
        oidc_account: IHttpServiceBase<Interfaces.Ioidc_account>;
        admin_oidc_account: IHttpServiceAdminBase<Interfaces.Ioidc_account>;
        oidc_Client: IHttpServiceBase<Interfaces.Ioidc_Client>;
        admin_oidc_Client: IHttpServiceAdminBase<Interfaces.Ioidc_Client>;
    };
    views: IView_plateform;
}

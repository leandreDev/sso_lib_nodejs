import * as Interface from "./Interfaces";
import { Base } from "../Base";
/**
  configuration du gestionnaire d'utilisateur
*/
export declare class Model_oidc_clientUserManagment extends Base implements Interface.Ioidc_clientUserManagment {
    /**
      configuration du gestionnaire d'utilisateur
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service d'enregistrement
*/
    "sign_in_uri": string;
    /**
url du service de récupération de mot de passe
*/
    "password_recovery_uri": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_oidc_clientUserManagment>;
}

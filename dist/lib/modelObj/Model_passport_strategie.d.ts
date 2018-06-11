import * as Interface from "./Interfaces";
import { Base } from "../Base";
/**
  configuration d'une stratégie passport à déployer sur le sso
*/
export declare class Model_passport_strategie extends Base implements Interface.Ipassport_strategie {
    /**
      configuration d'une stratégie passport à déployer sur le sso
    */
    constructor(obj?: any);
    _class: string;
    /**
nom de la route
*/
    "name": string;
    /**
création automatique d'un compte si il n’existe pas
*/
    "autoCreate"?: boolean;
    /**
connexion automatique au compte contenant le même email
*/
    "autoLoginWMail"?: boolean;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_passport_strategie>;
}

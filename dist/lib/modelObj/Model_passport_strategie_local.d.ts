import * as Interface from "./Interfaces";
import { Model_passport_strategie } from "./Model_passport_strategie";
/**
  Passport strategies for authenticating with local call
*/
export declare class Model_passport_strategie_local extends Model_passport_strategie implements Interface.Ipassport_strategie_local {
    /**
      Passport strategies for authenticating with local call
    */
    constructor(obj?: any);
    _class: string;
    /**
lib
*/
    "lib": string;
    /**
la class de stratégie à appeler dans la lib
*/
    "strategieName": string;
    /**
nom de la bibliothèque contenant le callback
*/
    "CBLib": string;
    /**
configuration du callback
*/
    "cbConf"?: any;
    /**
usernameField
*/
    "usernameField": string;
    /**
passwordField
*/
    "passwordField": string;
    /**
session
*/
    "session"?: boolean;
}

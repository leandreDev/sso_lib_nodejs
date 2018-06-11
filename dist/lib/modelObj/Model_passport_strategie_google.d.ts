import * as Interface from "./Interfaces";
import { Model_passport_strategie } from "./Model_passport_strategie";
/**
  Passport strategies for authenticating with Google using OAuth 1.0a and OAuth 2.0 (https://github.com/jaredhanson/passport-google-oauth)
*/
export declare class Model_passport_strategie_google extends Model_passport_strategie implements Interface.Ipassport_strategie_google {
    /**
      Passport strategies for authenticating with Google using OAuth 1.0a and OAuth 2.0 (https://github.com/jaredhanson/passport-google-oauth)
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
GOOGLE_CLIENT_ID
*/
    "clientID": string;
    /**
GOOGLE_CLIENT_SECRET
*/
    "clientSecret": string;
    /**
url de callback
*/
    "callbackURL": string;
    /**
scope
*/
    "scope": string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_passport_strategie_google>;
}

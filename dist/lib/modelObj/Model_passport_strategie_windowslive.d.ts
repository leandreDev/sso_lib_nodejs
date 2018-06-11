import * as Interface from "./Interfaces";
import { Model_passport_strategie } from "./Model_passport_strategie";
/**
  Passport strategy for authenticating with Microsoft accounts (aka Windows Live) using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-windowslive)
*/
export declare class Model_passport_strategie_windowslive extends Model_passport_strategie implements Interface.Ipassport_strategie_windowslive {
    /**
      Passport strategy for authenticating with Microsoft accounts (aka Windows Live) using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-windowslive)
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
WINDOWS_LIVE_CLIENT_ID
*/
    "clientID": string;
    /**
WINDOWS_LIVE_CLIENT_SECRET
*/
    "clientSecret": string;
    /**
url de callback
*/
    "callbackURL": string;
    /**
scope
*/
    "scope"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_passport_strategie_windowslive>;
}

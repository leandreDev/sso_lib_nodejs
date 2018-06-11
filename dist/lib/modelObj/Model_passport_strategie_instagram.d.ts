import * as Interface from "./Interfaces";
import { Model_passport_strategie } from "./Model_passport_strategie";
/**
  Passport strategy for authenticating with Instagram using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-instagram)
*/
export declare class Model_passport_strategie_instagram extends Model_passport_strategie implements Interface.Ipassport_strategie_instagram {
    /**
      Passport strategy for authenticating with Instagram using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-instagram)
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
INSTAGRAM_CLIENT_ID
*/
    "clientID": string;
    /**
INSTAGRAM_CLIENT_SECRET
*/
    "clientSecret": string;
    /**
url de callback
*/
    "callbackURL": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_passport_strategie_instagram>;
}

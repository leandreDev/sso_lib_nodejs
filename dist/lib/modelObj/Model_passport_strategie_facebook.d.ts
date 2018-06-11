import * as Interface from "./Interfaces";
import { Model_passport_strategie } from "./Model_passport_strategie";
/**
  Facebook authentication strategy for Passport  (https://github.com/jaredhanson/passport-facebook)
*/
export declare class Model_passport_strategie_facebook extends Model_passport_strategie implements Interface.Ipassport_strategie_facebook {
    /**
      Facebook authentication strategy for Passport  (https://github.com/jaredhanson/passport-facebook)
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
FACEBOOK_APP_ID
*/
    "clientID": string;
    /**
FACEBOOK_APP_SECRET
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
    /**
The Facebook profile contains a lot of information about a user. By default, not all the fields in a profile are returned. The fields needed by an application can be indicated by setting the profileFields option.
*/
    "profileFields"?: string[];
    /**
enableProof
*/
    "enableProof"?: boolean;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_passport_strategie_facebook>;
}

import * as Interface from "./Interfaces";
import { Model_passport_strategie } from "./Model_passport_strategie";
/**
  Passport strategy for authenticating with Twitter using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-twitter)
*/
export declare class Model_passport_strategie_twitter extends Model_passport_strategie implements Interface.Ipassport_strategie_twitter {
    /**
      Passport strategy for authenticating with Twitter using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-twitter)
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
TWITTER_CONSUMER_KEY
*/
    "consumerKey": string;
    /**
TWITTER_CONSUMER_SECRET
*/
    "consumerSecret": string;
    /**
url de callback
*/
    "callbackURL": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_passport_strategie_twitter>;
}

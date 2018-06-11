import * as Interface from "./Interfaces";
import { Model_passport_strategie } from "./Model_passport_strategie";
/**
  Passport strategy for authenticating with LinkedIn using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-linkedin)
*/
export declare class Model_passport_strategie_linkedin extends Model_passport_strategie implements Interface.Ipassport_strategie_linkedin {
    /**
      Passport strategy for authenticating with LinkedIn using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-linkedin)
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
LINKEDIN_API_KEY
*/
    "consumerKey": string;
    /**
LINKEDIN_SECRET_KEY
*/
    "consumerSecret": string;
    /**
callbackURL
*/
    "callbackURL": string;
    /**
scope
*/
    "scope": string[];
    /**
The LinkedIn profile is very rich, and may contain a lot of information. The strategy can be configured with a profileFields parameter which specifies a list of fields your application needs. For example, to fetch the user's ID, name, email address, and headline, configure strategy like this.
*/
    "profileFields"?: string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_passport_strategie_linkedin>;
}

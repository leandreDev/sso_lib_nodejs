import * as Interface from "./Interfaces";
import { Model_passport_strategie } from "./Model_passport_strategie";
/**
  Passport strategy for authenticating with Dropbox using the OAuth 2.0 API. (https://github.com/florianheinemann/passport-dropbox-oauth2)
*/
export declare class Model_passport_strategie_dropbox extends Model_passport_strategie implements Interface.Ipassport_strategie_dropbox {
    /**
      Passport strategy for authenticating with Dropbox using the OAuth 2.0 API. (https://github.com/florianheinemann/passport-dropbox-oauth2)
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
DROPBOX_CLIENT_ID
*/
    "clientID": string;
    /**
DROPBOX_CLIENT_SECRET
*/
    "clientSecret": string;
    /**
url de callback
*/
    "callbackURL": string;
    /**
apiVersion
*/
    "apiVersion"?: number;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_passport_strategie_dropbox>;
}

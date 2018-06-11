import * as Interface from "./Interfaces";
import { Base } from "../Base";
/**
  JSON Web Key Set (JWK Set)
*/
export declare class Model_jwks extends Base implements Interface.Ijwks {
    /**
      JSON Web Key Set (JWK Set)
    */
    constructor(obj?: any);
    _class: string;
    /**
The value of the "keys" member is an array of JWK values.
*/
    "keys"?: Interface.Ijwk[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_jwks>;
}

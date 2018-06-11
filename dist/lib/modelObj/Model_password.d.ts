import * as Interface from "./Interfaces";
import { Model_string } from "./Model_string";
/**
  password
*/
export declare class Model_password extends Model_string implements Interface.Ipassword {
    /**
      password
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_password>;
}

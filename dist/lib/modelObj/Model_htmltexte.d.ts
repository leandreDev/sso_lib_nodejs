import * as Interface from "./Interfaces";
import { Model_string } from "./Model_string";
/**
  champ pour le html
*/
export declare class Model_htmltexte extends Model_string implements Interface.Ihtmltexte {
    /**
      champ pour le html
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_htmltexte>;
}

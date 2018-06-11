import * as Interface from "./Interfaces";
import { Model_string } from "./Model_string";
/**
  champ pour texte long
*/
export declare class Model_texte extends Model_string implements Interface.Itexte {
    /**
      champ pour texte long
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_texte>;
}

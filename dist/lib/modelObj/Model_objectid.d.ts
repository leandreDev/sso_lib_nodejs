import * as Interface from "./Interfaces";
import { Model_field } from "./Model_field";
/**
  c'est un champ de base qui permet de référence un document d'une autre base.
*/
export declare class Model_objectid extends Model_field implements Interface.Iobjectid {
    /**
      c'est un champ de base qui permet de référence un document d'une autre base.
    */
    constructor(obj?: any);
    _class: string;
    /**
c'est la référence a la collection dans lequelle  sont les document a référencer
*/
    "ref": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_objectid>;
}

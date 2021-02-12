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
représente le nom du champ
*/
    "name": string;
    /**
c'est la description du champ. il permet de générer l'aide ou la documentation
*/
    "description": string;
    /**
permet d'indiquer que le champ est un tableau
*/
    "isArrayOf"?: boolean;
    /**
si le champ est obligatoire
*/
    "required"?: boolean;
    /**
indique que la valeur du champ doit être unique
*/
    "unique"?: boolean;
    /**
????? je suis plus sure
*/
    "index"?: boolean;
    /**
c'est la référence a la collection dans lequelle  sont les document a référencer
*/
    "ref": string;
}

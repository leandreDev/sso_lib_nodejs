import * as Interface from "./Interfaces";
import { Base } from "../Base";
/**
  ce champ est le champ représente les champs de la base. Il est abstrait, vous devez utiliser ces enfants
*/
export declare class Model_field extends Base implements Interface.Ifield {
    /**
      ce champ est le champ représente les champs de la base. Il est abstrait, vous devez utiliser ces enfants
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
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_field>;
}

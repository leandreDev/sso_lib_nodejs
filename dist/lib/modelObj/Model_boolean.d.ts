import * as Interface from "./Interfaces";
import { Model_field } from "./Model_field";
/**
  ce champ représente les booléains
*/
export declare class Model_boolean extends Model_field implements Interface.Iboolean {
    /**
      ce champ représente les booléains
    */
    constructor(obj?: any);
    _class: string;
    /**
valeur par defaut
*/
    "default"?: boolean;
}

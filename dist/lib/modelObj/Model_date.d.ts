import * as Interface from "./Interfaces";
import { Model_field } from "./Model_field";
/**
  ce champ représente les dates
*/
export declare class Model_date extends Model_field implements Interface.Idate {
    /**
      ce champ représente les dates
    */
    constructor(obj?: any);
    _class: string;
    /**
valeur par défaut
*/
    "default"?: Date;
    /**
valeur minimum accepté
*/
    "min"?: Date;
    /**
valeur maximum accepté
*/
    "max"?: Date;
}

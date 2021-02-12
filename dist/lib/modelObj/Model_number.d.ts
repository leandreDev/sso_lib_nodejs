import * as Interface from "./Interfaces";
import { Model_field } from "./Model_field";
/**
  ce champ représente les valeurs numériques
*/
export declare class Model_number extends Model_field implements Interface.Inumber {
    /**
      ce champ représente les valeurs numériques
    */
    constructor(obj?: any);
    _class: string;
    /**
valeur par defaut
*/
    "default"?: number;
    /**
valeur minimum acceptée
*/
    "min"?: number;
    /**
valeur maximum acceptée
*/
    "max"?: number;
    /**
le pas d'incrément
*/
    "step"?: number;
}

import * as Interface from "./Interfaces";
import { Model_field } from "./Model_field";
/**
  ce champ représente les objets
*/
export declare class Model_object extends Model_field implements Interface.Iobject {
    /**
      ce champ représente les objets
    */
    constructor(obj?: any);
    _class: string;
}

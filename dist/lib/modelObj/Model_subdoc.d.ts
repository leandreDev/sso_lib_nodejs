import * as Interface from "./Interfaces";
import { Model_field } from "./Model_field";
/**
  ce champ permet d'insérer un document dans un autre
*/
export declare class Model_subdoc extends Model_field implements Interface.Isubdoc {
    /**
      ce champ permet d'insérer un document dans un autre
    */
    constructor(obj?: any);
    _class: string;
    /**
c'est la référence au schéma du ce sous objet
*/
    "protoSchemaId"?: string;
}

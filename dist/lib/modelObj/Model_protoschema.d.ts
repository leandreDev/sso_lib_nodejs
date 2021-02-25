import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  protoschema est un méta modéle. il permet de créer les autres modèle de la base
*/
export declare class Model_protoschema extends Base implements Interface.Iprotoschema {
    /**
      protoschema est un méta modéle. il permet de créer les autres modèle de la base
    */
    constructor(obj?: any);
    _class: string;
    /**
le nom du champ
*/
    "name": string;
    /**
la description de ce que représente le modéle
*/
    "description": string;
    /**
tag indiquant que l'objet est abstrait, seule ces enfants doivent être utilisé comme donnée
*/
    "isAbstract"?: boolean;
    /**
si il est activé le schéma ne crée pas de collection
*/
    "isSchema"?: boolean;
    /**
permet d'hériter du schema parentMadel
*/
    "parentModel"?: string;
    /**
liste des champs du documents
*/
    "fields"?: Interface.Ifield[];
}

import * as Interface from "./Interfaces";
import { Base } from "../Base";
/**
  donnée des connecteur sociaux
*/
export declare class Model_social_data extends Base implements Interface.Isocial_data {
    /**
      donnée des connecteur sociaux
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_social_data>;
}

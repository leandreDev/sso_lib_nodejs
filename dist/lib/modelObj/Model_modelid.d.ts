import * as Interface from "./Interfaces";
import { Model_field } from "./Model_field";
/**
  modelid
*/
export declare class Model_modelid extends Model_field implements Interface.Imodelid {
    /**
      modelid
    */
    constructor(obj?: any);
    _class: string;
    /**
ref
*/
    "ref"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_modelid>;
}

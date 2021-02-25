import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_field } from "./Model_field"


/**
  ce champ représente les objets
*/
export class Model_object extends   Model_field   implements Interface.Iobject {

/**
  ce champ représente les objets
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "object" ;

        


       

   }

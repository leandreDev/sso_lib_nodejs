import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandreDev/utils" ;


import {Model_field } from "./Model_field"


/**
  ce champ représente les booléains
*/
export class Model_boolean extends   Model_field   implements Interface.Iboolean {

/**
  ce champ représente les booléains
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["default"] != undefined){
          
           this["default"] = new Boolean(obj["default"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "boolean" ;

        
              /**
        valeur par defaut
        */
               public "default"?:boolean ;
              
       


       

   }

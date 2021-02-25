import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_field } from "./Model_field"


/**
  modelid
*/
export class Model_modelid extends   Model_field   implements Interface.Imodelid {

/**
  modelid
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["ref"] != undefined){
          
           this["ref"] = obj["ref"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "modelid" ;

        
              /**
        ref
        */
               public "ref"?:string ;
              
       


       

   }

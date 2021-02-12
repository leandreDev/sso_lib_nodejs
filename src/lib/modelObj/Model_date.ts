import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_field } from "./Model_field"


/**
  ce champ représente les dates
*/
export class Model_date extends   Model_field   implements Interface.Idate {

/**
  ce champ représente les dates
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["default"] != undefined){
          
            this["default"] = new Date(obj["default"]) ;
          
        }
        
    
        
        if(obj["min"] != undefined){
          
            this["min"] = new Date(obj["min"]) ;
          
        }
        
    
        
        if(obj["max"] != undefined){
          
            this["max"] = new Date(obj["max"]) ;
          
        }
        
    
  }
  

    public _class:string  = "date" ;

        
              /**
        valeur par défaut
        */
               public "default"?:Date ;
              
       
              /**
        valeur minimum accepté
        */
               public "min"?:Date ;
              
       
              /**
        valeur maximum accepté
        */
               public "max"?:Date ;
              
       


       

   }

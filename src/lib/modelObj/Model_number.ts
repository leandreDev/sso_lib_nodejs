import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_field } from "./Model_field"


/**
  ce champ représente les valeurs numériques
*/
export class Model_number extends   Model_field   implements Interface.Inumber {

/**
  ce champ représente les valeurs numériques
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["default"] != undefined){
          
           this["default"] = new Number(obj["default"]).valueOf();
          
        }
        
    
        
        if(obj["min"] != undefined){
          
           this["min"] = new Number(obj["min"]).valueOf();
          
        }
        
    
        
        if(obj["max"] != undefined){
          
           this["max"] = new Number(obj["max"]).valueOf();
          
        }
        
    
        
        if(obj["step"] != undefined){
          
           this["step"] = new Number(obj["step"]).valueOf();
          
        }
        
    
  }
  

    public _class:string  = "number" ;

        
              /**
        valeur par defaut
        */
               public "default"?:number ;
              
       
              /**
        valeur minimum acceptée
        */
               public "min"?:number ;
              
       
              /**
        valeur maximum acceptée
        */
               public "max"?:number ;
              
       
              /**
        le pas d'incrément
        */
               public "step"?:number ;
              
       


       

   }

import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_field } from "./Model_field"


/**
  string est un type de base qui permet de représenter les champ de type string
*/
export class Model_string extends   Model_field   implements Interface.Istring {

/**
  string est un type de base qui permet de représenter les champ de type string
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["default"] != undefined){
          
           this["default"] = obj["default"].toString() ;
           
        }
        
    
        
        if(obj["lowercase"] != undefined){
          
           this["lowercase"] = new Boolean(obj["lowercase"]).valueOf() ;
          
        }
        
    
        
        if(obj["uppercase"] != undefined){
          
           this["uppercase"] = new Boolean(obj["uppercase"]).valueOf() ;
          
        }
        
    
        
        if(obj["trim"] != undefined){
          
           this["trim"] = new Boolean(obj["trim"]).valueOf() ;
          
        }
        
    
        
        if(obj["match"] != undefined){
          
           this["match"] = obj["match"].toString() ;
           
        }
        
    
        
        if(obj["enum"] != undefined && obj["enum"] != null && _.isArray(obj["enum"])){
          
           this["enum"] = obj["enum"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "string" ;

        
              /**
        valeur par defaut
        */
               public "default"?:string ;
              
       
              /**
        convertie la donnée en minuscule
        */
               public "lowercase"?:boolean ;
              
       
              /**
        convertie la donnée en majuscule
        */
               public "uppercase"?:boolean ;
              
       
              /**
        élimine les espaces au début et a la fin de la valeur
        */
               public "trim"?:boolean ;
              
       
              /**
        ne pas utiliser pour l'instant ce doit être une expression regulière
        */
               public "match"?:string ;
              
       
              /**
        liste des valeur possible du champ
        */
               public "enum"?:string[];
              
       


       

   }

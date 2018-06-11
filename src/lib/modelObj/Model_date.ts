import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["default"] != null && target["default"] != undefined ){
              
                let _default  = target["default"] ;
                
                if(! _.isDate(_default)){

                      throw new Error(path+"default is not a Date") ;
                      
                }
                
                
                
              
              
           }
           
              
              if(target["min"] != null && target["min"] != undefined ){
              
                let _min  = target["min"] ;
                
                if(! _.isDate(_min)){

                      throw new Error(path+"min is not a Date") ;
                      
                }
                
                
                
              
              
           }
           
              
              if(target["max"] != null && target["max"] != undefined ){
              
                let _max  = target["max"] ;
                
                if(! _.isDate(_max)){

                      throw new Error(path+"max is not a Date") ;
                      
                }
                
                
                
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_date>{
        return Model_date.check(target, true, path).then(()=>{
          return new Model_date(target) ;
        })
      }

   }

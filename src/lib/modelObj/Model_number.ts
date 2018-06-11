import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["default"] != null && target["default"] != undefined ){
              
                let _default  = target["default"] ;
                
                  if(! _.isNumber(_default)){
                      throw new Error(path+"default is not a number") ;
                      
                  }
                  
                
                

                
              
              
           }
           
              
              if(target["min"] != null && target["min"] != undefined ){
              
                let _min  = target["min"] ;
                
                  if(! _.isNumber(_min)){
                      throw new Error(path+"min is not a number") ;
                      
                  }
                  
                
                

                
              
              
           }
           
              
              if(target["max"] != null && target["max"] != undefined ){
              
                let _max  = target["max"] ;
                
                  if(! _.isNumber(_max)){
                      throw new Error(path+"max is not a number") ;
                      
                  }
                  
                
                

                
              
              
           }
           
              
              if(target["step"] != null && target["step"] != undefined ){
              
                let _step  = target["step"] ;
                
                  if(! _.isNumber(_step)){
                      throw new Error(path+"step is not a number") ;
                      
                  }
                  
                
                

                
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_number>{
        return Model_number.check(target, true, path).then(()=>{
          return new Model_number(target) ;
        })
      }

   }

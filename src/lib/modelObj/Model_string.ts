import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["default"] != null && target["default"] != undefined ){
              
                let _default  = target["default"] ;
                

                 if(! _.isString(_default)){
                    throw new Error(path+"default is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["lowercase"] != null && target["lowercase"] != undefined ){
              
                let _lowercase  = target["lowercase"] ;
                
                  if(! _.isBoolean(_lowercase)){
                    throw new Error(path+"lowercase is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["uppercase"] != null && target["uppercase"] != undefined ){
              
                let _uppercase  = target["uppercase"] ;
                
                  if(! _.isBoolean(_uppercase)){
                    throw new Error(path+"uppercase is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["trim"] != null && target["trim"] != undefined ){
              
                let _trim  = target["trim"] ;
                
                  if(! _.isBoolean(_trim)){
                    throw new Error(path+"trim is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["match"] != null && target["match"] != undefined ){
              
                let _match  = target["match"] ;
                

                 if(! _.isString(_match)){
                    throw new Error(path+"match is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["enum"] != null && target["enum"] != undefined ){
              
                target["enum"].forEach((_enum , index:number)=>{
                

                 if(! _.isString(_enum)){
                    throw new Error(path+"enum index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_string>{
        return Model_string.check(target, true, path).then(()=>{
          return new Model_string(target) ;
        })
      }

   }

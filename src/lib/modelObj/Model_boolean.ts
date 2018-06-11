import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["default"] != null && target["default"] != undefined ){
              
                let _default  = target["default"] ;
                
                  if(! _.isBoolean(_default)){
                    throw new Error(path+"default is not a boolean") ;
                    
                  }
                

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_boolean>{
        return Model_boolean.check(target, true, path).then(()=>{
          return new Model_boolean(target) ;
        })
      }

   }

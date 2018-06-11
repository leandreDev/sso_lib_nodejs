import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["ref"] != null && target["ref"] != undefined ){
              
                let _ref  = target["ref"] ;
                

                 if(! _.isString(_ref)){
                    throw new Error(path+"ref is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_modelid>{
        return Model_modelid.check(target, true, path).then(()=>{
          return new Model_modelid(target) ;
        })
      }

   }

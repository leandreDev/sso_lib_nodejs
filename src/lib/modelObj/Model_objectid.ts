import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


import {Model_field } from "./Model_field"


/**
  c'est un champ de base qui permet de référence un document d'une autre base.
*/
export class Model_objectid extends   Model_field   implements Interface.Iobjectid {

/**
  c'est un champ de base qui permet de référence un document d'une autre base.
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["ref"] != undefined){
          
           if(_.isString(obj["ref"])){
              this["ref"] = obj["ref"] ;
            }else if(obj["ref"]._id){
              this["ref"] = obj["ref"]._id ;
            }
          
        }
        
    
  }
  

    public _class:string  = "objectid" ;

        
              /**
        c'est la référence a la collection dans lequelle  sont les document a référencer
        */
               public "ref":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["ref"] == null || target["ref"] == undefined) ){
                  throw new Error(path + "ref is required") ;
              }
              
              if(target["ref"] != null && target["ref"] != undefined ){
              
                  let _ref  = target["ref"] ;
                  
                  if( ! _.isString(_ref)){
                      if( ! _.isString(_ref)){
                       throw new Error(path + "ref is not a string") ;
                      }
                  }
                  
               
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_objectid>{
        return Model_objectid.check(target, true, path).then(()=>{
          return new Model_objectid(target) ;
        })
      }

   }

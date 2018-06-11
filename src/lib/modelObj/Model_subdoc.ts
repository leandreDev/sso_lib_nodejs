import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


import {Model_field } from "./Model_field"


/**
  ce champ permet d'insérer un document dans un autre
*/
export class Model_subdoc extends   Model_field   implements Interface.Isubdoc {

/**
  ce champ permet d'insérer un document dans un autre
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["protoSchemaId"] != undefined){
          
           if(_.isString(obj["protoSchemaId"])){
              this["protoSchemaId"] = obj["protoSchemaId"] ;
            }else if(obj["protoSchemaId"]._id){
              this["protoSchemaId"] = obj["protoSchemaId"]._id ;
            }
          
        }
        
    
  }
  

    public _class:string  = "subdoc" ;

        
              /**
        c'est la référence au schéma du ce sous objet
        */
               public "protoSchemaId"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["protoSchemaId"] != null && target["protoSchemaId"] != undefined ){
              
                  let _protoSchemaId  = target["protoSchemaId"] ;
                  
                  if( ! _.isString(_protoSchemaId)){
                      if( ! _.isString(_protoSchemaId)){
                       throw new Error(path + "protoSchemaId is not a string") ;
                      }
                  }
                  
               
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_subdoc>{
        return Model_subdoc.check(target, true, path).then(()=>{
          return new Model_subdoc(target) ;
        })
      }

   }

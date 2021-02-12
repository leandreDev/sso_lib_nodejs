import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


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
              
       


       

   }

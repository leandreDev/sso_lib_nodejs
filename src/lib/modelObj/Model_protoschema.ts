import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  protoschema est un méta modéle. il permet de créer les autres modèle de la base
*/
export class Model_protoschema extends  Base  implements Interface.Iprotoschema {

/**
  protoschema est un méta modéle. il permet de créer les autres modèle de la base
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["description"] != undefined){
          
           this["description"] = obj["description"].toString() ;
           
        }
        
    
        
        if(obj["isAbstract"] != undefined){
          
           this["isAbstract"] = new Boolean(obj["isAbstract"]).valueOf() ;
          
        }
        
    
        
        if(obj["isSchema"] != undefined){
          
           this["isSchema"] = new Boolean(obj["isSchema"]).valueOf() ;
          
        }
        
    
        
        if(obj["parentModel"] != undefined){
          
          if(_.isString(obj["parentModel"])){
            this["parentModel"] = obj["parentModel"];
          }else if(obj["parentModel"]._id){
            this["parentModel"] = obj["parentModel"]._id ;
          }
          
        }
        
    
        
        if(obj["fields"] != undefined && obj["fields"] != null && _.isArray(obj["fields"])){
          

            this["fields"] = obj["fields"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["field"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "protoschema" ;

        
              /**
        le nom du champ
        */
               public "name":string ;
              
       
              /**
        la description de ce que représente le modéle
        */
               public "description":string ;
              
       
              /**
        tag indiquant que l'objet est abstrait, seule ces enfants doivent être utilisé comme donnée
        */
               public "isAbstract"?:boolean ;
              
       
              /**
        si il est activé le schéma ne crée pas de collection 
        */
               public "isSchema"?:boolean ;
              
       
              /**
        permet d'hériter du schema parentMadel
        */
               public "parentModel"?:string ;
              
       
              /**
        liste des champs du documents
        */
               public "fields"?:Interface.Ifield[];
              
       


       

   }

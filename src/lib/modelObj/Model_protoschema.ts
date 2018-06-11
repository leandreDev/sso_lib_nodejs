import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;



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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["name"] == null || target["name"] == undefined) ){
                  throw new Error(path + "name is required") ;
              }
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["description"] == null || target["description"] == undefined) ){
                  throw new Error(path + "description is required") ;
              }
              
              if(target["description"] != null && target["description"] != undefined ){
              
                let _description  = target["description"] ;
                

                 if(! _.isString(_description)){
                    throw new Error(path+"description is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["isAbstract"] != null && target["isAbstract"] != undefined ){
              
                let _isAbstract  = target["isAbstract"] ;
                
                  if(! _.isBoolean(_isAbstract)){
                    throw new Error(path+"isAbstract is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["isSchema"] != null && target["isSchema"] != undefined ){
              
                let _isSchema  = target["isSchema"] ;
                
                  if(! _.isBoolean(_isSchema)){
                    throw new Error(path+"isSchema is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["parentModel"] != null && target["parentModel"] != undefined ){
              
                  let _parentModel  = target["parentModel"] ;
                  
                  if( ! _.isString(_parentModel)){
                   throw new Error(path + "parentModel is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["fields"] != null && target["fields"] != undefined ){
              
                  target["fields"].forEach((_fields , index:number)=>{
                  
                  
                    promArr.push( Index["field"].check(_fields, isCompleteObj , path+"fields.")
                      .catch((err)=>{
                        throw new Error(path+"fields index: "+ index +"is not field")
                        

                      }) )
                  if(_fields._class != null && _fields._class != undefined){
                    promArr.push( Index[_fields._class].check(_fields, isCompleteObj , path+"fields.")
                      .catch((err)=>{
                        throw new Error(path+"fields index: "+ index +"is not a " + _fields._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_protoschema>{
        return Model_protoschema.check(target, true, path).then(()=>{
          return new Model_protoschema(target) ;
        })
      }

   }

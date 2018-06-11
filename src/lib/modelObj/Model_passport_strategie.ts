import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;



/**
  configuration d'une stratégie passport à déployer sur le sso
*/
export class Model_passport_strategie extends  Base  implements Interface.Ipassport_strategie {

/**
  configuration d'une stratégie passport à déployer sur le sso
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["autoCreate"] != undefined){
          
           this["autoCreate"] = new Boolean(obj["autoCreate"]).valueOf() ;
          
        }
        
    
        
        if(obj["autoLoginWMail"] != undefined){
          
           this["autoLoginWMail"] = new Boolean(obj["autoLoginWMail"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "passport_strategie" ;

        
              /**
        nom de la route
        */
               public "name":string ;
              
       
              /**
        création automatique d'un compte si il n’existe pas
        */
               public "autoCreate"?:boolean ;
              
       
              /**
        connexion automatique au compte contenant le même email 
        */
               public "autoLoginWMail"?:boolean ;
              
       


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
           
              
              if(target["autoCreate"] != null && target["autoCreate"] != undefined ){
              
                let _autoCreate  = target["autoCreate"] ;
                
                  if(! _.isBoolean(_autoCreate)){
                    throw new Error(path+"autoCreate is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["autoLoginWMail"] != null && target["autoLoginWMail"] != undefined ){
              
                let _autoLoginWMail  = target["autoLoginWMail"] ;
                
                  if(! _.isBoolean(_autoLoginWMail)){
                    throw new Error(path+"autoLoginWMail is not a boolean") ;
                    
                  }
                

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_passport_strategie>{
        return Model_passport_strategie.check(target, true, path).then(()=>{
          return new Model_passport_strategie(target) ;
        })
      }

   }

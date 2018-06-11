import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;



/**
  configuration du gestionnaire d'utilisateur
*/
export class Model_oidc_clientUserManagment extends  Base  implements Interface.Ioidc_clientUserManagment {

/**
  configuration du gestionnaire d'utilisateur
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["sign_in_uri"] != undefined){
          
           this["sign_in_uri"] = obj["sign_in_uri"].toString() ;
           
        }
        
    
        
        if(obj["password_recovery_uri"] != undefined){
          
           this["password_recovery_uri"] = obj["password_recovery_uri"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "oidc_clientUserManagment" ;

        
              /**
        url du service d'enregistrement
        */
               public "sign_in_uri":string ;
              
       
              /**
        url du service de récupération de mot de passe
        */
               public "password_recovery_uri":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["sign_in_uri"] == null || target["sign_in_uri"] == undefined) ){
                  throw new Error(path + "sign_in_uri is required") ;
              }
              
              if(target["sign_in_uri"] != null && target["sign_in_uri"] != undefined ){
              
                let _sign_in_uri  = target["sign_in_uri"] ;
                

                 if(! _.isString(_sign_in_uri)){
                    throw new Error(path+"sign_in_uri is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["password_recovery_uri"] == null || target["password_recovery_uri"] == undefined) ){
                  throw new Error(path + "password_recovery_uri is required") ;
              }
              
              if(target["password_recovery_uri"] != null && target["password_recovery_uri"] != undefined ){
              
                let _password_recovery_uri  = target["password_recovery_uri"] ;
                

                 if(! _.isString(_password_recovery_uri)){
                    throw new Error(path+"password_recovery_uri is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_oidc_clientUserManagment>{
        return Model_oidc_clientUserManagment.check(target, true, path).then(()=>{
          return new Model_oidc_clientUserManagment(target) ;
        })
      }

   }

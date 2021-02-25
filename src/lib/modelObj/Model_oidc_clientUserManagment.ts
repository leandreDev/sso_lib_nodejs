import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



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
               public "sign_in_uri"?:string ;
              
       
              /**
        url du service de récupération de mot de passe
        */
               public "password_recovery_uri":string ;
              
       


       

   }

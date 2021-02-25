import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



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
              
       


       

   }

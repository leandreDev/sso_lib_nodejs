import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_passport_strategie } from "./Model_passport_strategie"


/**
  Passport strategy for authenticating with Instagram using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-instagram)
*/
export class Model_passport_strategie_instagram extends   Model_passport_strategie   implements Interface.Ipassport_strategie_instagram {

/**
  Passport strategy for authenticating with Instagram using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-instagram)
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["lib"] != undefined){
          
           this["lib"] = obj["lib"].toString() ;
           
        }
        
    
        
        if(obj["strategieName"] != undefined){
          
           this["strategieName"] = obj["strategieName"].toString() ;
           
        }
        
    
        
        if(obj["clientID"] != undefined){
          
           this["clientID"] = obj["clientID"].toString() ;
           
        }
        
    
        
        if(obj["clientSecret"] != undefined){
          
           this["clientSecret"] = obj["clientSecret"].toString() ;
           
        }
        
    
        
        if(obj["callbackURL"] != undefined){
          
           this["callbackURL"] = obj["callbackURL"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "passport_strategie_instagram" ;

        
              /**
        lib
        */
               public "lib":string ="passport-instagram";
              
       
              /**
        la class de stratégie à appeler dans la lib
        */
               public "strategieName":string ="Strategy";
              
       
              /**
        INSTAGRAM_CLIENT_ID
        */
               public "clientID":string ;
              
       
              /**
        INSTAGRAM_CLIENT_SECRET
        */
               public "clientSecret":string ;
              
       
              /**
        url de callback
        */
               public "callbackURL":string ;
              
       


       

   }

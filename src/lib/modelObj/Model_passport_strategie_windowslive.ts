import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandreDev/utils" ;


import {Model_passport_strategie } from "./Model_passport_strategie"


/**
  Passport strategy for authenticating with Microsoft accounts (aka Windows Live) using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-windowslive)
*/
export class Model_passport_strategie_windowslive extends   Model_passport_strategie   implements Interface.Ipassport_strategie_windowslive {

/**
  Passport strategy for authenticating with Microsoft accounts (aka Windows Live) using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-windowslive)
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
        
    
        
        if(obj["scope"] != undefined){
          
           this["scope"] = obj["scope"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "passport_strategie_windowslive" ;

        
              /**
        lib
        */
               public "lib":string ="passport-windowslive";
              
       
              /**
        la class de stratégie à appeler dans la lib
        */
               public "strategieName":string ="Strategy";
              
       
              /**
        WINDOWS_LIVE_CLIENT_ID
        */
               public "clientID":string ;
              
       
              /**
        WINDOWS_LIVE_CLIENT_SECRET
        */
               public "clientSecret":string ;
              
       
              /**
        url de callback
        */
               public "callbackURL":string ;
              
       
              /**
        scope
        */
               public "scope"?:string ;
              
       


       

   }

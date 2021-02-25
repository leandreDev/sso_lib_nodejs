import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_passport_strategie } from "./Model_passport_strategie"


/**
  Passport strategies for authenticating with Google using OAuth 1.0a and OAuth 2.0 (https://github.com/jaredhanson/passport-google-oauth)
*/
export class Model_passport_strategie_google extends   Model_passport_strategie   implements Interface.Ipassport_strategie_google {

/**
  Passport strategies for authenticating with Google using OAuth 1.0a and OAuth 2.0 (https://github.com/jaredhanson/passport-google-oauth)
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
        
    
        
        if(obj["scope"] != undefined && obj["scope"] != null && _.isArray(obj["scope"])){
          
           this["scope"] = obj["scope"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "passport_strategie_google" ;

        
              /**
        lib
        */
               public "lib":string ="passport-google-oauth";
              
       
              /**
        la class de stratégie à appeler dans la lib
        */
               public "strategieName":string ="OAuth2Strategy";
              
       
              /**
        GOOGLE_CLIENT_ID
        */
               public "clientID":string ;
              
       
              /**
        GOOGLE_CLIENT_SECRET
        */
               public "clientSecret":string ;
              
       
              /**
        url de callback
        */
               public "callbackURL":string ;
              
       
              /**
        scope
        */
               public "scope":string[];
              
       


       

   }

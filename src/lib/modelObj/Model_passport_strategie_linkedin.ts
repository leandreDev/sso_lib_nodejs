import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_passport_strategie } from "./Model_passport_strategie"


/**
  Passport strategy for authenticating with LinkedIn using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-linkedin)
*/
export class Model_passport_strategie_linkedin extends   Model_passport_strategie   implements Interface.Ipassport_strategie_linkedin {

/**
  Passport strategy for authenticating with LinkedIn using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-linkedin)
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["lib"] != undefined){
          
           this["lib"] = obj["lib"].toString() ;
           
        }
        
    
        
        if(obj["strategieName"] != undefined){
          
           this["strategieName"] = obj["strategieName"].toString() ;
           
        }
        
    
        
        if(obj["consumerKey"] != undefined){
          
           this["consumerKey"] = obj["consumerKey"].toString() ;
           
        }
        
    
        
        if(obj["consumerSecret"] != undefined){
          
           this["consumerSecret"] = obj["consumerSecret"].toString() ;
           
        }
        
    
        
        if(obj["callbackURL"] != undefined){
          
           this["callbackURL"] = obj["callbackURL"].toString() ;
           
        }
        
    
        
        if(obj["scope"] != undefined && obj["scope"] != null && _.isArray(obj["scope"])){
          
           this["scope"] = obj["scope"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["profileFields"] != undefined && obj["profileFields"] != null && _.isArray(obj["profileFields"])){
          
           this["profileFields"] = obj["profileFields"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "passport_strategie_linkedin" ;

        
              /**
        lib
        */
               public "lib":string ="passport-linkedin";
              
       
              /**
        la class de stratégie à appeler dans la lib
        */
               public "strategieName":string ="Strategy";
              
       
              /**
        LINKEDIN_API_KEY
        */
               public "consumerKey":string ;
              
       
              /**
        LINKEDIN_SECRET_KEY
        */
               public "consumerSecret":string ;
              
       
              /**
        callbackURL
        */
               public "callbackURL":string ;
              
       
              /**
        scope
        */
               public "scope":string[];
              
       
              /**
        The LinkedIn profile is very rich, and may contain a lot of information. The strategy can be configured with a profileFields parameter which specifies a list of fields your application needs. For example, to fetch the user's ID, name, email address, and headline, configure strategy like this.
        */
               public "profileFields"?:string[];
              
       


       

   }

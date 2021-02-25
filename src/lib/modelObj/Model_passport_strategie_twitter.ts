import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandreDev/utils" ;


import {Model_passport_strategie } from "./Model_passport_strategie"


/**
  Passport strategy for authenticating with Twitter using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-twitter)
*/
export class Model_passport_strategie_twitter extends   Model_passport_strategie   implements Interface.Ipassport_strategie_twitter {

/**
  Passport strategy for authenticating with Twitter using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-twitter)
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
        
    
  }
  

    public _class:string  = "passport_strategie_twitter" ;

        
              /**
        lib
        */
               public "lib":string ="passport-twitter";
              
       
              /**
        la class de stratégie à appeler dans la lib
        */
               public "strategieName":string ="Strategy";
              
       
              /**
        TWITTER_CONSUMER_KEY
        */
               public "consumerKey":string ;
              
       
              /**
        TWITTER_CONSUMER_SECRET
        */
               public "consumerSecret":string ;
              
       
              /**
        url de callback
        */
               public "callbackURL":string ;
              
       


       

   }

import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandreDev/utils" ;


import {Model_passport_strategie } from "./Model_passport_strategie"


/**
  Facebook authentication strategy for Passport  (https://github.com/jaredhanson/passport-facebook)
*/
export class Model_passport_strategie_facebook extends   Model_passport_strategie   implements Interface.Ipassport_strategie_facebook {

/**
  Facebook authentication strategy for Passport  (https://github.com/jaredhanson/passport-facebook)
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
        
    
        
        if(obj["profileFields"] != undefined && obj["profileFields"] != null && _.isArray(obj["profileFields"])){
          
           this["profileFields"] = obj["profileFields"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["enableProof"] != undefined){
          
           this["enableProof"] = new Boolean(obj["enableProof"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "passport_strategie_facebook" ;

        
              /**
        lib
        */
               public "lib":string ="passport-facebook";
              
       
              /**
        la class de stratégie à appeler dans la lib
        */
               public "strategieName":string ="Strategy";
              
       
              /**
        FACEBOOK_APP_ID
        */
               public "clientID":string ;
              
       
              /**
        FACEBOOK_APP_SECRET
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
              
       
              /**
        The Facebook profile contains a lot of information about a user. By default, not all the fields in a profile are returned. The fields needed by an application can be indicated by setting the profileFields option.
        */
               public "profileFields"?:string[];
              
       
              /**
        enableProof
        */
               public "enableProof"?:boolean ;
              
       


       

   }

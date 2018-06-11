import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["lib"] == null || target["lib"] == undefined) ){
                  throw new Error(path + "lib is required") ;
              }
              
              if(target["lib"] != null && target["lib"] != undefined ){
              
                let _lib  = target["lib"] ;
                

                 if(! _.isString(_lib)){
                    throw new Error(path+"lib is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["strategieName"] == null || target["strategieName"] == undefined) ){
                  throw new Error(path + "strategieName is required") ;
              }
              
              if(target["strategieName"] != null && target["strategieName"] != undefined ){
              
                let _strategieName  = target["strategieName"] ;
                

                 if(! _.isString(_strategieName)){
                    throw new Error(path+"strategieName is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["clientID"] == null || target["clientID"] == undefined) ){
                  throw new Error(path + "clientID is required") ;
              }
              
              if(target["clientID"] != null && target["clientID"] != undefined ){
              
                let _clientID  = target["clientID"] ;
                

                 if(! _.isString(_clientID)){
                    throw new Error(path+"clientID is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["clientSecret"] == null || target["clientSecret"] == undefined) ){
                  throw new Error(path + "clientSecret is required") ;
              }
              
              if(target["clientSecret"] != null && target["clientSecret"] != undefined ){
              
                let _clientSecret  = target["clientSecret"] ;
                

                 if(! _.isString(_clientSecret)){
                    throw new Error(path+"clientSecret is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["callbackURL"] == null || target["callbackURL"] == undefined) ){
                  throw new Error(path + "callbackURL is required") ;
              }
              
              if(target["callbackURL"] != null && target["callbackURL"] != undefined ){
              
                let _callbackURL  = target["callbackURL"] ;
                

                 if(! _.isString(_callbackURL)){
                    throw new Error(path+"callbackURL is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_passport_strategie_instagram>{
        return Model_passport_strategie_instagram.check(target, true, path).then(()=>{
          return new Model_passport_strategie_instagram(target) ;
        })
      }

   }

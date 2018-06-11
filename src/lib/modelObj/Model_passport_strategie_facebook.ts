import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


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
           
              
              if( isCompleteObj && (target["scope"] == null || target["scope"] == undefined) ){
                  throw new Error(path + "scope is required") ;
              }
              
              if(target["scope"] != null && target["scope"] != undefined ){
              
                target["scope"].forEach((_scope , index:number)=>{
                

                 if(! _.isString(_scope)){
                    throw new Error(path+"scope index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
              
              if(target["profileFields"] != null && target["profileFields"] != undefined ){
              
                target["profileFields"].forEach((_profileFields , index:number)=>{
                

                 if(! _.isString(_profileFields)){
                    throw new Error(path+"profileFields index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
              
              if(target["enableProof"] != null && target["enableProof"] != undefined ){
              
                let _enableProof  = target["enableProof"] ;
                
                  if(! _.isBoolean(_enableProof)){
                    throw new Error(path+"enableProof is not a boolean") ;
                    
                  }
                

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_passport_strategie_facebook>{
        return Model_passport_strategie_facebook.check(target, true, path).then(()=>{
          return new Model_passport_strategie_facebook(target) ;
        })
      }

   }

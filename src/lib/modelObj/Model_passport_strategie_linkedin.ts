import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


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
           
              
              if( isCompleteObj && (target["consumerKey"] == null || target["consumerKey"] == undefined) ){
                  throw new Error(path + "consumerKey is required") ;
              }
              
              if(target["consumerKey"] != null && target["consumerKey"] != undefined ){
              
                let _consumerKey  = target["consumerKey"] ;
                

                 if(! _.isString(_consumerKey)){
                    throw new Error(path+"consumerKey is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["consumerSecret"] == null || target["consumerSecret"] == undefined) ){
                  throw new Error(path + "consumerSecret is required") ;
              }
              
              if(target["consumerSecret"] != null && target["consumerSecret"] != undefined ){
              
                let _consumerSecret  = target["consumerSecret"] ;
                

                 if(! _.isString(_consumerSecret)){
                    throw new Error(path+"consumerSecret is not a string") ;
                    
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
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_passport_strategie_linkedin>{
        return Model_passport_strategie_linkedin.check(target, true, path).then(()=>{
          return new Model_passport_strategie_linkedin(target) ;
        })
      }

   }

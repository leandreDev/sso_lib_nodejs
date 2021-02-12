import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_passport_strategie } from "./Model_passport_strategie"


/**
  Passport strategies for authenticating with local call
*/
export class Model_passport_strategie_local extends   Model_passport_strategie   implements Interface.Ipassport_strategie_local {

/**
  Passport strategies for authenticating with local call
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["lib"] != undefined){
          
           this["lib"] = obj["lib"].toString() ;
           
        }
        
    
        
        if(obj["strategieName"] != undefined){
          
           this["strategieName"] = obj["strategieName"].toString() ;
           
        }
        
    
        
        if(obj["CBLib"] != undefined){
          
           this["CBLib"] = obj["CBLib"].toString() ;
           
        }
        
    
        
        if(obj["cbConf"] != undefined){
          
           this["cbConf"] = obj["cbConf"] ;
          
        }
        
    
        
        if(obj["usernameField"] != undefined){
          
           this["usernameField"] = obj["usernameField"].toString() ;
           
        }
        
    
        
        if(obj["passwordField"] != undefined){
          
           this["passwordField"] = obj["passwordField"].toString() ;
           
        }
        
    
        
        if(obj["session"] != undefined){
          
           this["session"] = new Boolean(obj["session"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "passport_strategie_local" ;

        
              /**
        lib
        */
               public "lib":string ="passport-local";
              
       
              /**
        la class de stratégie à appeler dans la lib
        */
               public "strategieName":string ="Strategy";
              
       
              /**
        nom de la bibliothèque contenant le callback
        */
               public "CBLib":string ;
              
       
              /**
        configuration du callback
        */
               public "cbConf"?:any ;
              
       
              /**
        usernameField
        */
               public "usernameField":string ="email";
              
       
              /**
        passwordField
        */
               public "passwordField":string ="passwd";
              
       
              /**
        session
        */
               public "session"?:boolean =false;
              
       


       

   }

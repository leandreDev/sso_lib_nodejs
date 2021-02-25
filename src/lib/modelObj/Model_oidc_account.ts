import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  compte de l'utilisateur
*/
export class Model_oidc_account extends  Base  implements Interface.Ioidc_account {

/**
  compte de l'utilisateur
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["account_id"] != undefined){
          
           this["account_id"] = obj["account_id"].toString() ;
           
        }
        
    
        
        if(obj["birthdate"] != undefined){
          
            this["birthdate"] = new Date(obj["birthdate"]) ;
          
        }
        
    
        
        if(obj["email"] != undefined){
          
           this["email"] = obj["email"].toString() ;
           
        }
        
    
        
        if(obj["email_verified"] != undefined){
          
           this["email_verified"] = new Boolean(obj["email_verified"]).valueOf() ;
          
        }
        
    
        
        if(obj["family_name"] != undefined){
          
           this["family_name"] = obj["family_name"].toString() ;
           
        }
        
    
        
        if(obj["gender"] != undefined){
          
           this["gender"] = obj["gender"].toString() ;
           
        }
        
    
        
        if(obj["given_name"] != undefined){
          
           this["given_name"] = obj["given_name"].toString() ;
           
        }
        
    
        
        if(obj["locale"] != undefined){
          
           this["locale"] = obj["locale"].toString() ;
           
        }
        
    
        
        if(obj["middle_name"] != undefined){
          
           this["middle_name"] = obj["middle_name"].toString() ;
           
        }
        
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["nickname"] != undefined){
          
           this["nickname"] = obj["nickname"].toString() ;
           
        }
        
    
        
        if(obj["phone_number"] != undefined){
          
           this["phone_number"] = obj["phone_number"].toString() ;
           
        }
        
    
        
        if(obj["phone_number_verified"] != undefined){
          
           this["phone_number_verified"] = new Boolean(obj["phone_number_verified"]).valueOf() ;
          
        }
        
    
        
        if(obj["password"] != undefined){
          
           this["password"] = obj["password"].toString() ;
           
        }
        
    
        
        if(obj["picture"] != undefined){
          
           this["picture"] = obj["picture"].toString() ;
           
        }
        
    
        
        if(obj["connector"] != undefined && obj["connector"] != null && _.isArray(obj["connector"])){
          

            this["connector"] = obj["connector"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["social_data"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["resetPasswordKey"] != undefined){
          
           this["resetPasswordKey"] = obj["resetPasswordKey"].toString() ;
           
        }
        
    
        
        if(obj["resetPasswordEndDate"] != undefined){
          
           this["resetPasswordEndDate"] = obj["resetPasswordEndDate"].toString() ;
           
        }
        
    
        
        if(obj["resetPasswordReturn"] != undefined){
          
           this["resetPasswordReturn"] = obj["resetPasswordReturn"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "oidc_account" ;

        
              /**
        id du compte
        */
               public "account_id":string ;
              
       
              /**
        birthdate
        */
               public "birthdate"?:Date ;
              
       
              /**
        email
        */
               public "email":string ;
              
       
              /**
        email_verified
        */
               public "email_verified"?:boolean ;
              
       
              /**
        family_name
        */
               public "family_name"?:string ;
              
       
              /**
        gender
        */
               public "gender"?:string ;
              
       
              /**
        given_name
        */
               public "given_name"?:string ;
              
       
              /**
        locale
        */
               public "locale"?:string ;
              
       
              /**
        middle_name
        */
               public "middle_name"?:string ;
              
       
              /**
        name
        */
               public "name"?:string ;
              
       
              /**
        nickname
        */
               public "nickname"?:string ;
              
       
              /**
        phone_number
        */
               public "phone_number"?:string ;
              
       
              /**
        phone_number_verified
        */
               public "phone_number_verified"?:boolean ;
              
       
              /**
        l’empreinte du mot de passe
        */
               public "password"?:string ;
              
       
              /**
        url de l'avatar
        */
               public "picture"?:string ;
              
       
              /**
        profile sociaux
        */
               public "connector"?:Interface.Isocial_data[];
              
       
              /**
        clef secrète pour reseter le password
        */
               public "resetPasswordKey"?:string ;
              
       
              /**
        fin de validité de la clef de reset du password
        */
               public "resetPasswordEndDate"?:string ;
              
       
              /**
        call back de la séquece de reset du password
        */
               public "resetPasswordReturn"?:string ;
              
       


       

   }

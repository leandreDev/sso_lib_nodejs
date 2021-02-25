import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;



/**
  description d'un client openId (c'est une application)
*/
export class Entity_oidc_Client extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'oidc_Client' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["client_id"] != undefined){
          
           obj["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           obj["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["grant_types"] != undefined && obj["grant_types"] != null && _.isArray(obj["grant_types"])){
          
           obj["grant_types"] = obj["grant_types"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["redirect_uris"] != undefined && obj["redirect_uris"] != null && _.isArray(obj["redirect_uris"])){
          
           obj["redirect_uris"] = obj["redirect_uris"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["response_types"] != undefined && obj["response_types"] != null && _.isArray(obj["response_types"])){
          
           obj["response_types"] = obj["response_types"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["application_type"] != undefined){
          
           obj["application_type"] = obj["application_type"].toString() ;
           
        }
        
    
        
        if(obj["contacts"] != undefined && obj["contacts"] != null && _.isArray(obj["contacts"])){
          
           obj["contacts"] = obj["contacts"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["client_name"] != undefined){
          
           obj["client_name"] = obj["client_name"].toString() ;
           
        }
        
    
        
        if(obj["logo_uri"] != undefined){
          
           obj["logo_uri"] = obj["logo_uri"].toString() ;
           
        }
        
    
        
        if(obj["client_uri"] != undefined){
          
           obj["client_uri"] = obj["client_uri"].toString() ;
           
        }
        
    
        
        if(obj["policy_uri"] != undefined){
          
           obj["policy_uri"] = obj["policy_uri"].toString() ;
           
        }
        
    
        
        if(obj["tos_uri"] != undefined){
          
           obj["tos_uri"] = obj["tos_uri"].toString() ;
           
        }
        
    
        
        if(obj["jwks_uri"] != undefined){
          
           obj["jwks_uri"] = obj["jwks_uri"].toString() ;
           
        }
        
    
        
        if(obj["jwks"] != undefined){
          
           
              Index.Entity_jwks.cast(obj["jwks"]) ;
              //590af2095d4675afccd76d2e
            
          
        }
        
    
        
        if(obj["sector_identifier_uri"] != undefined){
          
           obj["sector_identifier_uri"] = obj["sector_identifier_uri"].toString() ;
           
        }
        
    
        
        if(obj["subject_type"] != undefined){
          
           obj["subject_type"] = obj["subject_type"].toString() ;
           
        }
        
    
        
        if(obj["id_token_signed_response_alg"] != undefined){
          
           obj["id_token_signed_response_alg"] = obj["id_token_signed_response_alg"].toString() ;
           
        }
        
    
        
        if(obj["id_token_encrypted_response_alg"] != undefined){
          
           obj["id_token_encrypted_response_alg"] = obj["id_token_encrypted_response_alg"].toString() ;
           
        }
        
    
        
        if(obj["id_token_encrypted_response_enc"] != undefined){
          
           obj["id_token_encrypted_response_enc"] = obj["id_token_encrypted_response_enc"].toString() ;
           
        }
        
    
        
        if(obj["userinfo_signed_response_alg"] != undefined){
          
           obj["userinfo_signed_response_alg"] = obj["userinfo_signed_response_alg"].toString() ;
           
        }
        
    
        
        if(obj["userinfo_encrypted_response_alg"] != undefined){
          
           obj["userinfo_encrypted_response_alg"] = obj["userinfo_encrypted_response_alg"].toString() ;
           
        }
        
    
        
        if(obj["userinfo_encrypted_response_enc"] != undefined){
          
           obj["userinfo_encrypted_response_enc"] = obj["userinfo_encrypted_response_enc"].toString() ;
           
        }
        
    
        
        if(obj["request_object_signing_alg"] != undefined){
          
           obj["request_object_signing_alg"] = obj["request_object_signing_alg"].toString() ;
           
        }
        
    
        
        if(obj["request_object_encryption_alg"] != undefined){
          
           obj["request_object_encryption_alg"] = obj["request_object_encryption_alg"].toString() ;
           
        }
        
    
        
        if(obj["request_object_encryption_enc"] != undefined){
          
           obj["request_object_encryption_enc"] = obj["request_object_encryption_enc"].toString() ;
           
        }
        
    
        
        if(obj["token_endpoint_auth_method"] != undefined){
          
           obj["token_endpoint_auth_method"] = obj["token_endpoint_auth_method"].toString() ;
           
        }
        
    
        
        if(obj["token_endpoint_auth_signing_alg"] != undefined){
          
           obj["token_endpoint_auth_signing_alg"] = obj["token_endpoint_auth_signing_alg"].toString() ;
           
        }
        
    
        
        if(obj["default_max_age"] != undefined){
          
           obj["default_max_age"] = new Number(obj["default_max_age"]).valueOf();
          
        }
        
    
        
        if(obj["require_auth_time"] != undefined){
          
           obj["require_auth_time"] = new Boolean(obj["require_auth_time"]).valueOf() ;
          
        }
        
    
        
        if(obj["default_acr_values"] != undefined && obj["default_acr_values"] != null && _.isArray(obj["default_acr_values"])){
          
           obj["default_acr_values"] = obj["default_acr_values"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["initiate_login_uri"] != undefined){
          
           obj["initiate_login_uri"] = obj["initiate_login_uri"].toString() ;
           
        }
        
    
        
        if(obj["request_uris"] != undefined && obj["request_uris"] != null && _.isArray(obj["request_uris"])){
          
           obj["request_uris"] = obj["request_uris"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["post_logout_redirect_uris"] != undefined && obj["post_logout_redirect_uris"] != null && _.isArray(obj["post_logout_redirect_uris"])){
          
           obj["post_logout_redirect_uris"] = obj["post_logout_redirect_uris"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["passportConfig"] != undefined && obj["passportConfig"] != null && _.isArray(obj["passportConfig"])){
          

            obj["passportConfig"].forEach((value)=>{
              
                Index.Entity_passport_strategie.cast(value) ;
                
              
            })
          
        }
        
    
        
        if(obj["userManagment"] != undefined){
          
           
              Index.Entity_oidc_clientUserManagment.cast(obj["userManagment"]) ;
              //597cb8fc2c23fbf6f21bb711
            
          
        }
        
    
        
        if(obj["redirectSso"] != undefined){
          
           obj["redirectSso"] = new Boolean(obj["redirectSso"]).valueOf() ;
          
        }
        
    
  }


 

public static checkclient_id(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkclient_secret(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkgrant_types(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
            let _enum:string[] = ["authorization_code","refresh_token","client_credentials","implicit","password"] ;
            if(_enum.indexOf(val)==-1){
              res.push(`${path} dont match one of authorization_code , refresh_token , client_credentials , implicit , password`) ;
            }
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkredirect_uris(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkresponse_types(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkapplication_type(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkcontacts(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkclient_name(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checklogo_uri(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkclient_uri(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkpolicy_uri(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checktos_uri(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkjwks_uri(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkjwks(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_jwks.check(val , false , path  ) ;
            //590af2095d4675afccd76d2e

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checksector_identifier_uri(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checksubject_type(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkid_token_signed_response_alg(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkid_token_encrypted_response_alg(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkid_token_encrypted_response_enc(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkuserinfo_signed_response_alg(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkuserinfo_encrypted_response_alg(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkuserinfo_encrypted_response_enc(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkrequest_object_signing_alg(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkrequest_object_encryption_alg(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkrequest_object_encryption_enc(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checktoken_endpoint_auth_method(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checktoken_endpoint_auth_signing_alg(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkdefault_max_age(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         
          if( ! _.isNumber(val)){
            res.push(`${path} is not a number`) ; 
          }
        
         
        

        

        

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkrequire_auth_time(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkdefault_acr_values(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkinitiate_login_uri(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkrequest_uris(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkpost_logout_redirect_uris(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkpassportConfig(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_passport_strategie.check(val , false , path  ) ;
            //597cb8277be03c9ee1f04a8a

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkuserManagment(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_oidc_clientUserManagment.check(val , false , path  ) ;
            //597cb8fc2c23fbf6f21bb711

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkredirectSso(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          
          
              

              
              if( isCompleteObj && (target.client_id == null || target.client_id == undefined) ){
                err.push(path + ".client_id is required") ;
              }
              

              if(target.client_id != null && target.client_id != undefined ){
                
                
                res = Entity_oidc_Client.checkclient_id(target.client_id , `${path}.client_id`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.client_secret == null || target.client_secret == undefined) ){
                err.push(path + ".client_secret is required") ;
              }
              

              if(target.client_secret != null && target.client_secret != undefined ){
                
                
                res = Entity_oidc_Client.checkclient_secret(target.client_secret , `${path}.client_secret`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.grant_types == null || target.grant_types == undefined) ){
                err.push(path + ".grant_types is required") ;
              }
              

              if(target.grant_types != null && target.grant_types != undefined ){
                
                
                target.grant_types.forEach((data, index)=>{
                  res = Entity_oidc_Client.checkgrant_types(target.grant_types[index] , `${path}.grant_types.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.redirect_uris == null || target.redirect_uris == undefined) ){
                err.push(path + ".redirect_uris is required") ;
              }
              

              if(target.redirect_uris != null && target.redirect_uris != undefined ){
                
                
                target.redirect_uris.forEach((data, index)=>{
                  res = Entity_oidc_Client.checkredirect_uris(target.redirect_uris[index] , `${path}.redirect_uris.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.response_types != null && target.response_types != undefined ){
                
                
                target.response_types.forEach((data, index)=>{
                  res = Entity_oidc_Client.checkresponse_types(target.response_types[index] , `${path}.response_types.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.application_type != null && target.application_type != undefined ){
                
                
                res = Entity_oidc_Client.checkapplication_type(target.application_type , `${path}.application_type`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.contacts != null && target.contacts != undefined ){
                
                
                target.contacts.forEach((data, index)=>{
                  res = Entity_oidc_Client.checkcontacts(target.contacts[index] , `${path}.contacts.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.client_name != null && target.client_name != undefined ){
                
                
                res = Entity_oidc_Client.checkclient_name(target.client_name , `${path}.client_name`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.logo_uri != null && target.logo_uri != undefined ){
                
                
                res = Entity_oidc_Client.checklogo_uri(target.logo_uri , `${path}.logo_uri`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.client_uri != null && target.client_uri != undefined ){
                
                
                res = Entity_oidc_Client.checkclient_uri(target.client_uri , `${path}.client_uri`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.policy_uri != null && target.policy_uri != undefined ){
                
                
                res = Entity_oidc_Client.checkpolicy_uri(target.policy_uri , `${path}.policy_uri`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.tos_uri != null && target.tos_uri != undefined ){
                
                
                res = Entity_oidc_Client.checktos_uri(target.tos_uri , `${path}.tos_uri`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.jwks_uri != null && target.jwks_uri != undefined ){
                
                
                res = Entity_oidc_Client.checkjwks_uri(target.jwks_uri , `${path}.jwks_uri`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.jwks != null && target.jwks != undefined ){
                
                
                res = Entity_oidc_Client.checkjwks(target.jwks , `${path}.jwks`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.sector_identifier_uri != null && target.sector_identifier_uri != undefined ){
                
                
                res = Entity_oidc_Client.checksector_identifier_uri(target.sector_identifier_uri , `${path}.sector_identifier_uri`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.subject_type != null && target.subject_type != undefined ){
                
                
                res = Entity_oidc_Client.checksubject_type(target.subject_type , `${path}.subject_type`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.id_token_signed_response_alg != null && target.id_token_signed_response_alg != undefined ){
                
                
                res = Entity_oidc_Client.checkid_token_signed_response_alg(target.id_token_signed_response_alg , `${path}.id_token_signed_response_alg`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.id_token_encrypted_response_alg != null && target.id_token_encrypted_response_alg != undefined ){
                
                
                res = Entity_oidc_Client.checkid_token_encrypted_response_alg(target.id_token_encrypted_response_alg , `${path}.id_token_encrypted_response_alg`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.id_token_encrypted_response_enc != null && target.id_token_encrypted_response_enc != undefined ){
                
                
                res = Entity_oidc_Client.checkid_token_encrypted_response_enc(target.id_token_encrypted_response_enc , `${path}.id_token_encrypted_response_enc`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.userinfo_signed_response_alg != null && target.userinfo_signed_response_alg != undefined ){
                
                
                res = Entity_oidc_Client.checkuserinfo_signed_response_alg(target.userinfo_signed_response_alg , `${path}.userinfo_signed_response_alg`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.userinfo_encrypted_response_alg != null && target.userinfo_encrypted_response_alg != undefined ){
                
                
                res = Entity_oidc_Client.checkuserinfo_encrypted_response_alg(target.userinfo_encrypted_response_alg , `${path}.userinfo_encrypted_response_alg`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.userinfo_encrypted_response_enc != null && target.userinfo_encrypted_response_enc != undefined ){
                
                
                res = Entity_oidc_Client.checkuserinfo_encrypted_response_enc(target.userinfo_encrypted_response_enc , `${path}.userinfo_encrypted_response_enc`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.request_object_signing_alg != null && target.request_object_signing_alg != undefined ){
                
                
                res = Entity_oidc_Client.checkrequest_object_signing_alg(target.request_object_signing_alg , `${path}.request_object_signing_alg`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.request_object_encryption_alg != null && target.request_object_encryption_alg != undefined ){
                
                
                res = Entity_oidc_Client.checkrequest_object_encryption_alg(target.request_object_encryption_alg , `${path}.request_object_encryption_alg`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.request_object_encryption_enc != null && target.request_object_encryption_enc != undefined ){
                
                
                res = Entity_oidc_Client.checkrequest_object_encryption_enc(target.request_object_encryption_enc , `${path}.request_object_encryption_enc`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.token_endpoint_auth_method != null && target.token_endpoint_auth_method != undefined ){
                
                
                res = Entity_oidc_Client.checktoken_endpoint_auth_method(target.token_endpoint_auth_method , `${path}.token_endpoint_auth_method`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.token_endpoint_auth_signing_alg != null && target.token_endpoint_auth_signing_alg != undefined ){
                
                
                res = Entity_oidc_Client.checktoken_endpoint_auth_signing_alg(target.token_endpoint_auth_signing_alg , `${path}.token_endpoint_auth_signing_alg`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.default_max_age != null && target.default_max_age != undefined ){
                
                
                res = Entity_oidc_Client.checkdefault_max_age(target.default_max_age , `${path}.default_max_age`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.require_auth_time != null && target.require_auth_time != undefined ){
                
                
                res = Entity_oidc_Client.checkrequire_auth_time(target.require_auth_time , `${path}.require_auth_time`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.default_acr_values != null && target.default_acr_values != undefined ){
                
                
                target.default_acr_values.forEach((data, index)=>{
                  res = Entity_oidc_Client.checkdefault_acr_values(target.default_acr_values[index] , `${path}.default_acr_values.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.initiate_login_uri != null && target.initiate_login_uri != undefined ){
                
                
                res = Entity_oidc_Client.checkinitiate_login_uri(target.initiate_login_uri , `${path}.initiate_login_uri`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.request_uris != null && target.request_uris != undefined ){
                
                
                target.request_uris.forEach((data, index)=>{
                  res = Entity_oidc_Client.checkrequest_uris(target.request_uris[index] , `${path}.request_uris.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.post_logout_redirect_uris != null && target.post_logout_redirect_uris != undefined ){
                
                
                target.post_logout_redirect_uris.forEach((data, index)=>{
                  res = Entity_oidc_Client.checkpost_logout_redirect_uris(target.post_logout_redirect_uris[index] , `${path}.post_logout_redirect_uris.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.passportConfig != null && target.passportConfig != undefined ){
                
                
                target.passportConfig.forEach((data, index)=>{
                  res = Entity_oidc_Client.checkpassportConfig(target.passportConfig[index] , `${path}.passportConfig.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.userManagment != null && target.userManagment != undefined ){
                
                
                res = Entity_oidc_Client.checkuserManagment(target.userManagment , `${path}.userManagment`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.redirectSso != null && target.redirectSso != undefined ){
                
                
                res = Entity_oidc_Client.checkredirectSso(target.redirectSso , `${path}.redirectSso`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
           

        return err ;
      }
   
public static castQueryParam(path: string, value: any): any {
        let key:string = '' ;
        let subPath:string = '' ;

        if(value === null){
          return null ;
        }
        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} ${value}`)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path} ${value}`)
        }
        switch (key) {
          
            case 'client_id':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'client_secret':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'grant_types':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'redirect_uris':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'response_types':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'application_type':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'contacts':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'client_name':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'logo_uri':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'client_uri':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'policy_uri':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'tos_uri':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'jwks_uri':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'jwks':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_jwks.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'sector_identifier_uri':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'subject_type':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'id_token_signed_response_alg':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'id_token_encrypted_response_alg':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'id_token_encrypted_response_enc':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'userinfo_signed_response_alg':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'userinfo_encrypted_response_alg':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'userinfo_encrypted_response_enc':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'request_object_signing_alg':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'request_object_encryption_alg':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'request_object_encryption_enc':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'token_endpoint_auth_method':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'token_endpoint_auth_signing_alg':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'default_max_age':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'require_auth_time':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'default_acr_values':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'initiate_login_uri':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'request_uris':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'post_logout_redirect_uris':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'passportConfig':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_passport_strategie.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'userManagment':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_oidc_clientUserManagment.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'redirectSso':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
         
          default:
            return Entity.castQueryParam(key, value) ;
            break;
        }
      }

public static getClassNameOfProp(path:string):string{
        let key:string = '' ;
        let subPath:string = '' ;

        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} `)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path}`)
        }
        switch (key) {
          
      
      case 'client_id':
       
             return null ;
       
        
       
      
      
      case 'client_secret':
       
             return null ;
       
        
       
      
      
      case 'grant_types':
       
             return null ;
       
        
       
      
      
      case 'redirect_uris':
       
             return null ;
       
        
       
      
      
      case 'response_types':
       
             return null ;
       
        
       
      
      
      case 'application_type':
       
             return null ;
       
        
       
      
      
      case 'contacts':
       
             return null ;
       
        
       
      
      
      case 'client_name':
       
             return null ;
       
        
       
      
      
      case 'logo_uri':
       
             return null ;
       
        
       
      
      
      case 'client_uri':
       
             return null ;
       
        
       
      
      
      case 'policy_uri':
       
             return null ;
       
        
       
      
      
      case 'tos_uri':
       
             return null ;
       
        
       
      
      
      case 'jwks_uri':
       
             return null ;
       
        
       
      
      
      case 'jwks':
       
        
              
             return Index.Entity_jwks.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'sector_identifier_uri':
       
             return null ;
       
        
       
      
      
      case 'subject_type':
       
             return null ;
       
        
       
      
      
      case 'id_token_signed_response_alg':
       
             return null ;
       
        
       
      
      
      case 'id_token_encrypted_response_alg':
       
             return null ;
       
        
       
      
      
      case 'id_token_encrypted_response_enc':
       
             return null ;
       
        
       
      
      
      case 'userinfo_signed_response_alg':
       
             return null ;
       
        
       
      
      
      case 'userinfo_encrypted_response_alg':
       
             return null ;
       
        
       
      
      
      case 'userinfo_encrypted_response_enc':
       
             return null ;
       
        
       
      
      
      case 'request_object_signing_alg':
       
             return null ;
       
        
       
      
      
      case 'request_object_encryption_alg':
       
             return null ;
       
        
       
      
      
      case 'request_object_encryption_enc':
       
             return null ;
       
        
       
      
      
      case 'token_endpoint_auth_method':
       
             return null ;
       
        
       
      
      
      case 'token_endpoint_auth_signing_alg':
       
             return null ;
       
        
       
      
      
      case 'default_max_age':
       
             return null ;
       
        
       
      
      
      case 'require_auth_time':
       
             return null ;
       
        
       
      
      
      case 'default_acr_values':
       
             return null ;
       
        
       
      
      
      case 'initiate_login_uri':
       
             return null ;
       
        
       
      
      
      case 'request_uris':
       
             return null ;
       
        
       
      
      
      case 'post_logout_redirect_uris':
       
             return null ;
       
        
       
      
      
      case 'passportConfig':
       
        
              
             return Index.Entity_passport_strategie.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'userManagment':
       
        
              
             return Index.Entity_oidc_clientUserManagment.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'redirectSso':
       
             return null ;
       
        
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }




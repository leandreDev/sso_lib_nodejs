import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  description d'un client openId (c'est une application)
*/
export class Model_oidc_Client extends  Base  implements Interface.Ioidc_Client {

/**
  description d'un client openId (c'est une application)
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["client_id"] != undefined){
          
           this["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           this["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["grant_types"] != undefined && obj["grant_types"] != null && _.isArray(obj["grant_types"])){
          
           this["grant_types"] = obj["grant_types"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["redirect_uris"] != undefined && obj["redirect_uris"] != null && _.isArray(obj["redirect_uris"])){
          
           this["redirect_uris"] = obj["redirect_uris"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["response_types"] != undefined && obj["response_types"] != null && _.isArray(obj["response_types"])){
          
           this["response_types"] = obj["response_types"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["application_type"] != undefined){
          
           this["application_type"] = obj["application_type"].toString() ;
           
        }
        
    
        
        if(obj["contacts"] != undefined && obj["contacts"] != null && _.isArray(obj["contacts"])){
          
           this["contacts"] = obj["contacts"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["client_name"] != undefined){
          
           this["client_name"] = obj["client_name"].toString() ;
           
        }
        
    
        
        if(obj["logo_uri"] != undefined){
          
           this["logo_uri"] = obj["logo_uri"].toString() ;
           
        }
        
    
        
        if(obj["client_uri"] != undefined){
          
           this["client_uri"] = obj["client_uri"].toString() ;
           
        }
        
    
        
        if(obj["policy_uri"] != undefined){
          
           this["policy_uri"] = obj["policy_uri"].toString() ;
           
        }
        
    
        
        if(obj["tos_uri"] != undefined){
          
           this["tos_uri"] = obj["tos_uri"].toString() ;
           
        }
        
    
        
        if(obj["jwks_uri"] != undefined){
          
           this["jwks_uri"] = obj["jwks_uri"].toString() ;
           
        }
        
    
        
        if(obj["jwks"] != undefined){
          
            if(obj["jwks"]._class){
              this["jwks"] =  new Index[obj["jwks"]._class](obj["jwks"]) ;
            }else{
              this["jwks"] =  new Index["jwks"](obj["jwks"]) ;
            }
          
        }
        
    
        
        if(obj["sector_identifier_uri"] != undefined){
          
           this["sector_identifier_uri"] = obj["sector_identifier_uri"].toString() ;
           
        }
        
    
        
        if(obj["subject_type"] != undefined){
          
           this["subject_type"] = obj["subject_type"].toString() ;
           
        }
        
    
        
        if(obj["id_token_signed_response_alg"] != undefined){
          
           this["id_token_signed_response_alg"] = obj["id_token_signed_response_alg"].toString() ;
           
        }
        
    
        
        if(obj["id_token_encrypted_response_alg"] != undefined){
          
           this["id_token_encrypted_response_alg"] = obj["id_token_encrypted_response_alg"].toString() ;
           
        }
        
    
        
        if(obj["id_token_encrypted_response_enc"] != undefined){
          
           this["id_token_encrypted_response_enc"] = obj["id_token_encrypted_response_enc"].toString() ;
           
        }
        
    
        
        if(obj["userinfo_signed_response_alg"] != undefined){
          
           this["userinfo_signed_response_alg"] = obj["userinfo_signed_response_alg"].toString() ;
           
        }
        
    
        
        if(obj["userinfo_encrypted_response_alg"] != undefined){
          
           this["userinfo_encrypted_response_alg"] = obj["userinfo_encrypted_response_alg"].toString() ;
           
        }
        
    
        
        if(obj["userinfo_encrypted_response_enc"] != undefined){
          
           this["userinfo_encrypted_response_enc"] = obj["userinfo_encrypted_response_enc"].toString() ;
           
        }
        
    
        
        if(obj["request_object_signing_alg"] != undefined){
          
           this["request_object_signing_alg"] = obj["request_object_signing_alg"].toString() ;
           
        }
        
    
        
        if(obj["request_object_encryption_alg"] != undefined){
          
           this["request_object_encryption_alg"] = obj["request_object_encryption_alg"].toString() ;
           
        }
        
    
        
        if(obj["request_object_encryption_enc"] != undefined){
          
           this["request_object_encryption_enc"] = obj["request_object_encryption_enc"].toString() ;
           
        }
        
    
        
        if(obj["token_endpoint_auth_method"] != undefined){
          
           this["token_endpoint_auth_method"] = obj["token_endpoint_auth_method"].toString() ;
           
        }
        
    
        
        if(obj["token_endpoint_auth_signing_alg"] != undefined){
          
           this["token_endpoint_auth_signing_alg"] = obj["token_endpoint_auth_signing_alg"].toString() ;
           
        }
        
    
        
        if(obj["default_max_age"] != undefined){
          
           this["default_max_age"] = new Number(obj["default_max_age"]).valueOf();
          
        }
        
    
        
        if(obj["require_auth_time"] != undefined){
          
           this["require_auth_time"] = new Boolean(obj["require_auth_time"]).valueOf() ;
          
        }
        
    
        
        if(obj["default_acr_values"] != undefined && obj["default_acr_values"] != null && _.isArray(obj["default_acr_values"])){
          
           this["default_acr_values"] = obj["default_acr_values"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["initiate_login_uri"] != undefined){
          
           this["initiate_login_uri"] = obj["initiate_login_uri"].toString() ;
           
        }
        
    
        
        if(obj["request_uris"] != undefined && obj["request_uris"] != null && _.isArray(obj["request_uris"])){
          
           this["request_uris"] = obj["request_uris"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["post_logout_redirect_uris"] != undefined && obj["post_logout_redirect_uris"] != null && _.isArray(obj["post_logout_redirect_uris"])){
          
           this["post_logout_redirect_uris"] = obj["post_logout_redirect_uris"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["passportConfig"] != undefined && obj["passportConfig"] != null && _.isArray(obj["passportConfig"])){
          

            this["passportConfig"] = obj["passportConfig"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["passport_strategie"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["userManagment"] != undefined){
          
            if(obj["userManagment"]._class){
              this["userManagment"] =  new Index[obj["userManagment"]._class](obj["userManagment"]) ;
            }else{
              this["userManagment"] =  new Index["oidc_clientUserManagment"](obj["userManagment"]) ;
            }
          
        }
        
    
        
        if(obj["redirectSso"] != undefined){
          
           this["redirectSso"] = new Boolean(obj["redirectSso"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "oidc_Client" ;

        
              /**
        client_id
        */
               public "client_id":string ;
              
       
              /**
        client_secret est la clef secrète qui permet de sécuriser l’accès depuis un serveur.
        */
               public "client_secret":string ;
              
       
              /**
        grant_types
        */
               public "grant_types":string[];
              
       
              /**
        redirect_uris représente la liste des url de redirection autorisé
        */
               public "redirect_uris":string[];
              
       
              /**
        List de valeur response_type (OAuth 2.0) que le Client déclare et qu'il se restreint à utiliser.
        */
               public "response_types"?:string[];
              
       
              /**
        Type de l'application (Si omit elle est définie comme 'web' )
        */
               public "application_type"?:string ;
              
       
              /**
        List d'E-mails des responsable de l'application
        */
               public "contacts"?:string[];
              
       
              /**
        Nom du Client à présenter à l' End-User
        */
               public "client_name"?:string ;
              
       
              /**
        URl qui référence le Logo de l'application.
        */
               public "logo_uri"?:string ;
              
       
              /**
        URL de la page Home du Client.
        */
               public "client_uri"?:string ;
              
       
              /**
        Url que le Client fourni à l'utilisateur (End-User) pour définir l'étendu de l'utilisation de l'information recueilli.
        */
               public "policy_uri"?:string ;
              
       
              /**
        URL que le Client fourni à l'End-User pour lire les termes du service.
        */
               public "tos_uri"?:string ;
              
       
              /**
        URL pour le document JWK (JSON Web Key Set) du Client
        */
               public "jwks_uri"?:string ;
              
       
              /**
        Client's JSON Web Key Set [JWK] document, passed by value.
        */
               public "jwks"?:Interface.Ijwks;
              
       
              /**
        URl utilisant le schéma https à utilisé pour le calcul d'Identifiant Pseudo-anonyme par l'OP.
        */
               public "sector_identifier_uri"?:string ;
              
       
              /**
        subject_type demandé comme réponse par le Client.
        */
               public "subject_type"?:string ;
              
       
              /**
        JWA algorithm REQUIS pour la signature de l'ID Token émit par le Client ('none' NE DOIT PAS être utilisé) .
        */
               public "id_token_signed_response_alg"?:string ;
              
       
              /**
        JWA algorithm REQUIS pour l'encryption de l'ID Token émit par le Client.
        */
               public "id_token_encrypted_response_alg"?:string ;
              
       
              /**
        JWE enc algorithme [JWA] REQUIS pour le cryptage de l'ID Token émit pars le Client.
        */
               public "id_token_encrypted_response_enc"?:string ;
              
       
              /**
        WS alg algorithme [JWA] REQUIS pour la  réponse de signature UserInfo.
        */
               public "userinfo_signed_response_alg"?:string ;
              
       
              /**
        [JWE] alg algorithm [JWA] REQUIRED for encrypting UserInfo Responses.
        */
               public "userinfo_encrypted_response_alg"?:string ;
              
       
              /**
        JWE enc algorithm [JWA] REQUIRED for encrypting UserInfo Responses.
        */
               public "userinfo_encrypted_response_enc"?:string ;
              
       
              /**
        [JWS] alg algorithm [JWA] that MUST be used for signing Request Objects sent to the OP.
        */
               public "request_object_signing_alg"?:string ;
              
       
              /**
        [JWE] alg algorithm [JWA] the RP is declaring that it may use for encrypting Request Objects sent to the OP.
        */
               public "request_object_encryption_alg"?:string ;
              
       
              /**
        JWE enc algorithm [JWA] the RP is declaring that it may use for encrypting Request Objects sent to the OP.
        */
               public "request_object_encryption_enc"?:string ;
              
       
              /**
        Requested Client Authentication method for the Token Endpoint. 
        */
               public "token_endpoint_auth_method"?:string ;
              
       
              /**
        [JWS] alg algorithm [JWA] that MUST be used for signing the JWT [JWT] used to authenticate the Client at the Token Endpoint for the private_key_jwt and client_secret_jwt authentication methods.
        */
               public "token_endpoint_auth_signing_alg"?:string ;
              
       
              /**
         Default Maximum Authentication Age. (in seconds)
        */
               public "default_max_age"?:number ;
              
       
              /**
        Boolean value specifying whether the auth_time Claim in the ID Token is REQUIRED. 
        */
               public "require_auth_time"?:boolean ;
              
       
              /**
        Default requested Authentication Context Class Reference values. 
        */
               public "default_acr_values"?:string[];
              
       
              /**
        URI using the https scheme that a third party can use to initiate a login by the RP
        */
               public "initiate_login_uri"?:string ;
              
       
              /**
        Array of request_uri values that are pre-registered by the RP for use at the OP. 
        */
               public "request_uris"?:string[];
              
       
              /**
        list des url de redirection pour le logout
        */
               public "post_logout_redirect_uris"?:string[];
              
       
              /**
        configuration des connecteurs sociaux
        */
               public "passportConfig"?:Interface.Ipassport_strategie[];
              
       
              /**
         paramètre de gestion des utilisateurs
        */
               public "userManagment"?:Interface.Ioidc_clientUserManagment;
              
       
              /**
        redirige automatiquement vers la connexion sso
        */
               public "redirectSso"?:boolean ;
              
       


       

   }

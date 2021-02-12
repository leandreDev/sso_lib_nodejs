  import {IBase } from "@hfdev/utils" ;
  interface I{

  }
  
  

  

    /**
    interface de la class oidc_account 
    description compte de l'utilisateur
   */
    export class oidc_account extends  IBase {
        
              /**
               *id du compte 
               */
              
               "account_id":string;
              
       
              /**
               *birthdate 
               */
              
               "birthdate"?:Date;
              
       
              /**
               *email 
               */
              
               "email":string;
              
       
              /**
               *email_verified 
               */
              
               "email_verified"?:boolean;
              
       
              /**
               *family_name 
               */
              
               "family_name"?:string;
              
       
              /**
               *gender 
               */
              
               "gender"?:string;
              
       
              /**
               *given_name 
               */
              
               "given_name"?:string;
              
       
              /**
               *locale 
               */
              
               "locale"?:string;
              
       
              /**
               *middle_name 
               */
              
               "middle_name"?:string;
              
       
              /**
               *name 
               */
              
               "name"?:string;
              
       
              /**
               *nickname 
               */
              
               "nickname"?:string;
              
       
              /**
               *phone_number 
               */
              
               "phone_number"?:string;
              
       
              /**
               *phone_number_verified 
               */
              
               "phone_number_verified"?:boolean;
              
       
              /**
               *l’empreinte du mot de passe 
               */
              
               "password"?:string;
              
       
              /**
               *url de l'avatar 
               */
              
               "picture"?:string;
              
       
              /**
               *profile sociaux 
               */
              
              "connector"?:Isocial_data[];
              
       
              /**
               *clef secrète pour reseter le password 
               */
              
               "resetPasswordKey"?:string;
              
       
              /**
               *fin de validité de la clef de reset du password 
               */
              
               "resetPasswordEndDate"?:string;
              
       
              /**
               *call back de la séquece de reset du password 
               */
              
               "resetPasswordReturn"?:string;
              
       
   }


  

    /**
    interface de la class oidc_Client 
    description description d'un client openId (c'est une application)
   */
    export class oidc_Client extends  IBase {
        
              /**
               *client_id 
               */
              
               "client_id":string;
              
       
              /**
               *client_secret est la clef secrète qui permet de sécuriser l’accès depuis un serveur. 
               */
              
               "client_secret":string;
              
       
              /**
               *grant_types 
               */
              
               "grant_types":string[];
              
       
              /**
               *redirect_uris représente la liste des url de redirection autorisé 
               */
              
               "redirect_uris":string[];
              
       
              /**
               *List de valeur response_type (OAuth 2.0) que le Client déclare et qu'il se restreint à utiliser. 
               */
              
               "response_types"?:string[];
              
       
              /**
               *Type de l'application (Si omit elle est définie comme 'web' ) 
               */
              
               "application_type"?:string;
              
       
              /**
               *List d'E-mails des responsable de l'application 
               */
              
               "contacts"?:string[];
              
       
              /**
               *Nom du Client à présenter à l' End-User 
               */
              
               "client_name"?:string;
              
       
              /**
               *URl qui référence le Logo de l'application. 
               */
              
               "logo_uri"?:string;
              
       
              /**
               *URL de la page Home du Client. 
               */
              
               "client_uri"?:string;
              
       
              /**
               *Url que le Client fourni à l'utilisateur (End-User) pour définir l'étendu de l'utilisation de l'information recueilli. 
               */
              
               "policy_uri"?:string;
              
       
              /**
               *URL que le Client fourni à l'End-User pour lire les termes du service. 
               */
              
               "tos_uri"?:string;
              
       
              /**
               *URL pour le document JWK (JSON Web Key Set) du Client 
               */
              
               "jwks_uri"?:string;
              
       
              /**
               *Client's JSON Web Key Set [JWK] document, passed by value. 
               */
              
              "jwks"?:Ijwks;
              
       
              /**
               *URl utilisant le schéma https à utilisé pour le calcul d'Identifiant Pseudo-anonyme par l'OP. 
               */
              
               "sector_identifier_uri"?:string;
              
       
              /**
               *subject_type demandé comme réponse par le Client. 
               */
              
               "subject_type"?:string;
              
       
              /**
               *JWA algorithm REQUIS pour la signature de l'ID Token émit par le Client ('none' NE DOIT PAS être utilisé) . 
               */
              
               "id_token_signed_response_alg"?:string;
              
       
              /**
               *JWA algorithm REQUIS pour l'encryption de l'ID Token émit par le Client. 
               */
              
               "id_token_encrypted_response_alg"?:string;
              
       
              /**
               *JWE enc algorithme [JWA] REQUIS pour le cryptage de l'ID Token émit pars le Client. 
               */
              
               "id_token_encrypted_response_enc"?:string;
              
       
              /**
               *WS alg algorithme [JWA] REQUIS pour la  réponse de signature UserInfo. 
               */
              
               "userinfo_signed_response_alg"?:string;
              
       
              /**
               *[JWE] alg algorithm [JWA] REQUIRED for encrypting UserInfo Responses. 
               */
              
               "userinfo_encrypted_response_alg"?:string;
              
       
              /**
               *JWE enc algorithm [JWA] REQUIRED for encrypting UserInfo Responses. 
               */
              
               "userinfo_encrypted_response_enc"?:string;
              
       
              /**
               *[JWS] alg algorithm [JWA] that MUST be used for signing Request Objects sent to the OP. 
               */
              
               "request_object_signing_alg"?:string;
              
       
              /**
               *[JWE] alg algorithm [JWA] the RP is declaring that it may use for encrypting Request Objects sent to the OP. 
               */
              
               "request_object_encryption_alg"?:string;
              
       
              /**
               *JWE enc algorithm [JWA] the RP is declaring that it may use for encrypting Request Objects sent to the OP. 
               */
              
               "request_object_encryption_enc"?:string;
              
       
              /**
               *Requested Client Authentication method for the Token Endpoint.  
               */
              
               "token_endpoint_auth_method"?:string;
              
       
              /**
               *[JWS] alg algorithm [JWA] that MUST be used for signing the JWT [JWT] used to authenticate the Client at the Token Endpoint for the private_key_jwt and client_secret_jwt authentication methods. 
               */
              
               "token_endpoint_auth_signing_alg"?:string;
              
       
              /**
               * Default Maximum Authentication Age. (in seconds) 
               */
              
               "default_max_age"?:number;
              
       
              /**
               *Boolean value specifying whether the auth_time Claim in the ID Token is REQUIRED.  
               */
              
               "require_auth_time"?:boolean;
              
       
              /**
               *Default requested Authentication Context Class Reference values.  
               */
              
               "default_acr_values"?:string[];
              
       
              /**
               *URI using the https scheme that a third party can use to initiate a login by the RP 
               */
              
               "initiate_login_uri"?:string;
              
       
              /**
               *Array of request_uri values that are pre-registered by the RP for use at the OP.  
               */
              
               "request_uris"?:string[];
              
       
              /**
               *list des url de redirection pour le logout 
               */
              
               "post_logout_redirect_uris"?:string[];
              
       
              /**
               *configuration des connecteurs sociaux 
               */
              
              "passportConfig"?:Ipassport_strategie[];
              
       
              /**
               * paramètre de gestion des utilisateurs 
               */
              
              "userManagment"?:Ioidc_clientUserManagment;
              
       
              /**
               *redirige automatiquement vers la connexion sso 
               */
              
               "redirectSso"?:boolean;
              
       
   }




  

  



  



  import {IBase } from "../IBase" ;
  export interface I{

  }
  
    /**
    interface de la class boolean 
    description ce champ représente les booléains
   */
    export interface Iboolean extends   Ifield{
        
              
               "default"?:boolean;
              
       
   }

    /**
    interface de la class number 
    description ce champ représente les valeurs numériques
   */
    export interface Inumber extends   Ifield{
        
              
               "default"?:number;
              
       
              
               "min"?:number;
              
       
              
               "max"?:number;
              
       
              
               "step"?:number;
              
       
   }

    /**
    interface de la class date 
    description ce champ représente les dates
   */
    export interface Idate extends   Ifield{
        
              
               "default"?:Date;
              
       
              
               "min"?:Date;
              
       
              
               "max"?:Date;
              
       
   }

    /**
    interface de la class objectid 
    description c'est un champ de base qui permet de référence un document d'une autre base.
   */
    export interface Iobjectid extends   Ifield{
        
              
               "ref":string;
              
       
   }

    /**
    interface de la class modelid 
    description modelid
   */
    export interface Imodelid extends   Ifield{
        
              
               "ref"?:string;
              
       
   }

    /**
    interface de la class string 
    description string est un type de base qui permet de représenter les champ de type string
   */
    export interface Istring extends   Ifield{
        
              
               "default"?:string;
              
       
              
               "lowercase"?:boolean;
              
       
              
               "uppercase"?:boolean;
              
       
              
               "trim"?:boolean;
              
       
              
               "match"?:string;
              
       
              
               "enum"?:string[];
              
       
   }

    /**
    interface de la class protoschema 
    description protoschema est un méta modéle. il permet de créer les autres modèle de la base
   */
    export interface Iprotoschema extends  IBase {
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "isAbstract"?:boolean;
              
       
              
               "isSchema"?:boolean;
              
       
              
               "parentModel"?:string | Iprotoschema;
              
       
              
               "fields"?:Ifield[];
              
       
   }

    /**
    interface de la class texte 
    description champ pour texte long
   */
    export interface Itexte extends   Istring{
        
   }

    /**
    interface de la class subdoc 
    description ce champ permet d'insérer un document dans un autre
   */
    export interface Isubdoc extends   Ifield{
        
              
               "protoSchemaId"?:string;
              
       
   }

    /**
    interface de la class field 
    description ce champ est le champ représente les champs de la base. Il est abstrait, vous devez utiliser ces enfants
   */
    export interface Ifield extends  IBase {
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "isArrayOf"?:boolean;
              
       
              
               "required"?:boolean;
              
       
              
               "unique"?:boolean;
              
       
              
               "index"?:boolean;
              
       
   }

    /**
    interface de la class htmltexte 
    description champ pour le html
   */
    export interface Ihtmltexte extends   Istring{
        
   }

    /**
    interface de la class jwks 
    description JSON Web Key Set (JWK Set)
   */
    export interface Ijwks extends  IBase {
        
              
               "keys"?:Ijwk[];
              
       
   }

    /**
    interface de la class jwk 
    description JSON Web Key 
   */
    export interface Ijwk extends  IBase {
        
              
               "kty"?:string;
              
       
              
               "use"?:string;
              
       
              
               "key_ops"?:string[];
              
       
              
               "alg"?:string;
              
       
              
               "kid"?:string;
              
       
              
               "x5u"?:string;
              
       
              
               "x5c"?:string[];
              
       
              
               "x5t"?:string;
              
       
              
               "x5t#S256"?:string;
              
       
   }

    /**
    interface de la class passport_strategie_google 
    description Passport strategies for authenticating with Google using OAuth 1.0a and OAuth 2.0 (https://github.com/jaredhanson/passport-google-oauth)
   */
    export interface Ipassport_strategie_google extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "clientID":string;
              
       
              
               "clientSecret":string;
              
       
              
               "callbackURL":string;
              
       
              
               "scope":string[];
              
       
   }

    /**
    interface de la class passport_strategie_facebook 
    description Facebook authentication strategy for Passport  (https://github.com/jaredhanson/passport-facebook)
   */
    export interface Ipassport_strategie_facebook extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "clientID":string;
              
       
              
               "clientSecret":string;
              
       
              
               "callbackURL":string;
              
       
              
               "scope":string[];
              
       
              
               "profileFields"?:string[];
              
       
              
               "enableProof"?:boolean;
              
       
   }

    /**
    interface de la class passport_strategie_linkedin 
    description Passport strategy for authenticating with LinkedIn using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-linkedin)
   */
    export interface Ipassport_strategie_linkedin extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "consumerKey":string;
              
       
              
               "consumerSecret":string;
              
       
              
               "callbackURL":string;
              
       
              
               "scope":string[];
              
       
              
               "profileFields"?:string[];
              
       
   }

    /**
    interface de la class passport_strategie 
    description configuration d'une stratégie passport à déployer sur le sso
   */
    export interface Ipassport_strategie extends  IBase {
        
              
               "name":string;
              
       
              
               "autoCreate"?:boolean;
              
       
              
               "autoLoginWMail"?:boolean;
              
       
   }

    /**
    interface de la class passport_strategie_twitter 
    description Passport strategy for authenticating with Twitter using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-twitter)
   */
    export interface Ipassport_strategie_twitter extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "consumerKey":string;
              
       
              
               "consumerSecret":string;
              
       
              
               "callbackURL":string;
              
       
   }

    /**
    interface de la class passport_strategie_instagram 
    description Passport strategy for authenticating with Instagram using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-instagram)
   */
    export interface Ipassport_strategie_instagram extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "clientID":string;
              
       
              
               "clientSecret":string;
              
       
              
               "callbackURL":string;
              
       
   }

    /**
    interface de la class passport_strategie_windowslive 
    description Passport strategy for authenticating with Microsoft accounts (aka Windows Live) using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-windowslive)
   */
    export interface Ipassport_strategie_windowslive extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "clientID":string;
              
       
              
               "clientSecret":string;
              
       
              
               "callbackURL":string;
              
       
              
               "scope"?:string;
              
       
   }

    /**
    interface de la class passport_strategie_dropbox 
    description Passport strategy for authenticating with Dropbox using the OAuth 2.0 API. (https://github.com/florianheinemann/passport-dropbox-oauth2)
   */
    export interface Ipassport_strategie_dropbox extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "clientID":string;
              
       
              
               "clientSecret":string;
              
       
              
               "callbackURL":string;
              
       
              
               "apiVersion"?:number;
              
       
   }

    /**
    interface de la class oidc_Client 
    description description d'un client openId (c'est une application)
   */
    export interface Ioidc_Client extends  IBase {
        
              
               "client_id":string;
              
       
              
               "client_secret":string;
              
       
              
               "grant_types":string[];
              
       
              
               "redirect_uris":string[];
              
       
              
               "response_types"?:string[];
              
       
              
               "application_type"?:string;
              
       
              
               "contacts"?:string[];
              
       
              
               "client_name"?:string;
              
       
              
               "logo_uri"?:string;
              
       
              
               "client_uri"?:string;
              
       
              
               "policy_uri"?:string;
              
       
              
               "tos_uri"?:string;
              
       
              
               "jwks_uri"?:string;
              
       
              
               "jwks"?:Ijwks;
              
       
              
               "sector_identifier_uri"?:string;
              
       
              
               "subject_type"?:string;
              
       
              
               "id_token_signed_response_alg"?:string;
              
       
              
               "id_token_encrypted_response_alg"?:string;
              
       
              
               "id_token_encrypted_response_enc"?:string;
              
       
              
               "userinfo_signed_response_alg"?:string;
              
       
              
               "userinfo_encrypted_response_alg"?:string;
              
       
              
               "userinfo_encrypted_response_enc"?:string;
              
       
              
               "request_object_signing_alg"?:string;
              
       
              
               "request_object_encryption_alg"?:string;
              
       
              
               "request_object_encryption_enc"?:string;
              
       
              
               "token_endpoint_auth_method"?:string;
              
       
              
               "token_endpoint_auth_signing_alg"?:string;
              
       
              
               "default_max_age"?:number;
              
       
              
               "require_auth_time"?:boolean;
              
       
              
               "default_acr_values"?:string[];
              
       
              
               "initiate_login_uri"?:string;
              
       
              
               "request_uris"?:string[];
              
       
              
               "post_logout_redirect_uris"?:string[];
              
       
              
               "passportConfig"?:Ipassport_strategie[];
              
       
              
               "userManagment"?:Ioidc_clientUserManagment;
              
       
   }

    /**
    interface de la class oidc_clientUserManagment 
    description configuration du gestionnaire d'utilisateur
   */
    export interface Ioidc_clientUserManagment extends  IBase {
        
              
               "sign_in_uri":string;
              
       
              
               "password_recovery_uri":string;
              
       
   }

    /**
    interface de la class password 
    description password
   */
    export interface Ipassword extends   Istring{
        
   }

    /**
    interface de la class social_data 
    description donnée des connecteur sociaux
   */
    export interface Isocial_data extends  IBase {
        
   }

    /**
    interface de la class oidc_account 
    description compte de l'utilisateur
   */
    export interface Ioidc_account extends  IBase {
        
              
               "account_id":string;
              
       
              
               "birthdate"?:Date;
              
       
              
               "email":string;
              
       
              
               "email_verified"?:boolean;
              
       
              
               "family_name"?:string;
              
       
              
               "gender"?:string;
              
       
              
               "given_name"?:string;
              
       
              
               "locale"?:string;
              
       
              
               "middle_name"?:string;
              
       
              
               "name"?:string;
              
       
              
               "nickname"?:string;
              
       
              
               "phone_number"?:string;
              
       
              
               "phone_number_verified"?:boolean;
              
       
              
               "password"?:string;
              
       
              
               "picture"?:string;
              
       
              
               "connector"?:Isocial_data[];
              
       
              
               "resetPasswordKey"?:string;
              
       
              
               "resetPasswordEndDate"?:string;
              
       
              
               "resetPasswordReturn"?:string;
              
       
   }

    /**
    interface de la class passport_strategie_saml 
    description strategie saml pour passport (https://github.com/bergie/passport-saml)
   */
    export interface Ipassport_strategie_saml extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "callbackUrl":string;
              
       
              
               "entryPoint"?:string;
              
       
              
               "issuer"?:string;
              
       
              
               "cert"?:string;
              
       
              
               "privateCert"?:string;
              
       
              
               "decryptionPvk"?:string;
              
       
              
               "signatureAlgorithm"?:string;
              
       
              
               "additionalParams"?:string;
              
       
              
               "identifierFormat"?:string;
              
       
              
               "acceptedClockSkewMs"?:number;
              
       
              
               "attributeConsumingServiceIndex"?:string;
              
       
              
               "disableRequestedAuthnContext"?:boolean;
              
       
              
               "authnContext"?:string;
              
       
              
               "forceAuthn"?:boolean;
              
       
              
               "skipRequestCompression"?:boolean;
              
       
              
               "validateInResponseTo"?:string;
              
       
              
               "requestIdExpirationPeriodMs"?:number;
              
       
              
               "passReqToCallback"?:boolean;
              
       
              
               "logoutUrl"?:string;
              
       
              
               "additionalLogoutParams"?:string;
              
       
              
               "logoutCallbackUrl"?:string;
              
       
   }

import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_passport_strategie } from "./Model_passport_strategie"


/**
  strategie saml pour passport (https://github.com/bergie/passport-saml)
*/
export class Model_passport_strategie_saml extends   Model_passport_strategie   implements Interface.Ipassport_strategie_saml {

/**
  strategie saml pour passport (https://github.com/bergie/passport-saml)
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["lib"] != undefined){
          
           this["lib"] = obj["lib"].toString() ;
           
        }
        
    
        
        if(obj["strategieName"] != undefined){
          
           this["strategieName"] = obj["strategieName"].toString() ;
           
        }
        
    
        
        if(obj["callbackUrl"] != undefined){
          
           this["callbackUrl"] = obj["callbackUrl"].toString() ;
           
        }
        
    
        
        if(obj["entryPoint"] != undefined){
          
           this["entryPoint"] = obj["entryPoint"].toString() ;
           
        }
        
    
        
        if(obj["issuer"] != undefined){
          
           this["issuer"] = obj["issuer"].toString() ;
           
        }
        
    
        
        if(obj["cert"] != undefined){
          
           this["cert"] = obj["cert"].toString() ;
           
        }
        
    
        
        if(obj["privateCert"] != undefined){
          
           this["privateCert"] = obj["privateCert"].toString() ;
           
        }
        
    
        
        if(obj["decryptionPvk"] != undefined){
          
           this["decryptionPvk"] = obj["decryptionPvk"].toString() ;
           
        }
        
    
        
        if(obj["signatureAlgorithm"] != undefined){
          
           this["signatureAlgorithm"] = obj["signatureAlgorithm"].toString() ;
           
        }
        
    
        
        if(obj["additionalParams"] != undefined){
          
           this["additionalParams"] = obj["additionalParams"].toString() ;
           
        }
        
    
        
        if(obj["identifierFormat"] != undefined){
          
           this["identifierFormat"] = obj["identifierFormat"].toString() ;
           
        }
        
    
        
        if(obj["acceptedClockSkewMs"] != undefined){
          
           this["acceptedClockSkewMs"] = new Number(obj["acceptedClockSkewMs"]).valueOf();
          
        }
        
    
        
        if(obj["attributeConsumingServiceIndex"] != undefined){
          
           this["attributeConsumingServiceIndex"] = obj["attributeConsumingServiceIndex"].toString() ;
           
        }
        
    
        
        if(obj["disableRequestedAuthnContext"] != undefined){
          
           this["disableRequestedAuthnContext"] = new Boolean(obj["disableRequestedAuthnContext"]).valueOf() ;
          
        }
        
    
        
        if(obj["authnContext"] != undefined){
          
           this["authnContext"] = obj["authnContext"].toString() ;
           
        }
        
    
        
        if(obj["forceAuthn"] != undefined){
          
           this["forceAuthn"] = new Boolean(obj["forceAuthn"]).valueOf() ;
          
        }
        
    
        
        if(obj["skipRequestCompression"] != undefined){
          
           this["skipRequestCompression"] = new Boolean(obj["skipRequestCompression"]).valueOf() ;
          
        }
        
    
        
        if(obj["validateInResponseTo"] != undefined){
          
           this["validateInResponseTo"] = obj["validateInResponseTo"].toString() ;
           
        }
        
    
        
        if(obj["requestIdExpirationPeriodMs"] != undefined){
          
           this["requestIdExpirationPeriodMs"] = new Number(obj["requestIdExpirationPeriodMs"]).valueOf();
          
        }
        
    
        
        if(obj["passReqToCallback"] != undefined){
          
           this["passReqToCallback"] = new Boolean(obj["passReqToCallback"]).valueOf() ;
          
        }
        
    
        
        if(obj["logoutUrl"] != undefined){
          
           this["logoutUrl"] = obj["logoutUrl"].toString() ;
           
        }
        
    
        
        if(obj["additionalLogoutParams"] != undefined){
          
           this["additionalLogoutParams"] = obj["additionalLogoutParams"].toString() ;
           
        }
        
    
        
        if(obj["logoutCallbackUrl"] != undefined){
          
           this["logoutCallbackUrl"] = obj["logoutCallbackUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "passport_strategie_saml" ;

        
              /**
        librairie a appeller
        */
               public "lib":string ="passport-saml";
              
       
              /**
        la class de stratégie à appeler dans la lib
        */
               public "strategieName":string ="Strategy";
              
       
              /**
        full callbackUrl 
        */
               public "callbackUrl":string ;
              
       
              /**
         identity provider entrypoint
        */
               public "entryPoint"?:string ;
              
       
              /**
        issuer string to supply to identity provider
        */
               public "issuer"?:string ;
              
       
              /**
        see 'security and signatures'
        */
               public "cert"?:string ;
              
       
              /**
        see 'security and signatures'
        */
               public "privateCert"?:string ;
              
       
              /**
        optional private key that will be used to attempt to decrypt any encrypted assertions that are received
        */
               public "decryptionPvk"?:string ;
              
       
              /**
         optionally set the signature algorithm for signing requests, valid values are 'sha1' (default), 'sha256', or 'sha512'
        */
               public "signatureAlgorithm"?:string ;
              
       
              /**
         dictionary of additional query params to add to all requests
        */
               public "additionalParams"?:string ;
              
       
              /**
        if truthy, name identifier format to request from identity provider (default: urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress)
        */
               public "identifierFormat"?:string ;
              
       
              /**
        Time in milliseconds of skew that is acceptable between client and server when checking OnBefore and NotOnOrAfter assertion condition validity timestamps. Setting to -1 will disable checking these conditions entirely. Default is 0
        */
               public "acceptedClockSkewMs"?:number ;
              
       
              /**
        optional AttributeConsumingServiceIndex attribute to add to AuthnRequest to instruct the IDP which attribute set to attach to the response (link)
        */
               public "attributeConsumingServiceIndex"?:string ;
              
       
              /**
        if truthy, do not request a specific auth context
        */
               public "disableRequestedAuthnContext"?:boolean ;
              
       
              /**
        if truthy, name identifier format to request auth context (default: urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport)
        */
               public "authnContext"?:string ;
              
       
              /**
        if set to true, the initial SAML request from the service provider specifies that the IdP should force re-authentication of the user, even if they possess a valid session.
        */
               public "forceAuthn"?:boolean ;
              
       
              /**
        if set to true, the SAML request from the service provider won't be compressed. authnRequestBinding: if set to HTTP-POST, will request authentication from IDP via HTTP POST binding, otherwise defaults to HTTP Redirect
        */
               public "skipRequestCompression"?:boolean ;
              
       
              /**
        if truthy, then InResponseTo will be validated from incoming SAML responses
        */
               public "validateInResponseTo"?:string ;
              
       
              /**
        Defines the expiration time when a Request ID generated for a SAML request will not be valid if seen in a SAML response in the InResponseTo field. Default is 8 hours.
        */
               public "requestIdExpirationPeriodMs"?:number ;
              
       
              /**
        if truthy, req will be passed as the first argument to the verify callback (default: false)
        */
               public "passReqToCallback"?:boolean ;
              
       
              /**
        base address to call with logout requests (default: entryPoint)
        */
               public "logoutUrl"?:string ;
              
       
              /**
        dictionary of additional query params to add to 'logout' requests
        */
               public "additionalLogoutParams"?:string ;
              
       
              /**
        The value with which to populate the Location attribute in the SingleLogoutService elements in the generated service provider metadata.
        */
               public "logoutCallbackUrl"?:string ;
              
       


       

   }

import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


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
           
              
              if( isCompleteObj && (target["callbackUrl"] == null || target["callbackUrl"] == undefined) ){
                  throw new Error(path + "callbackUrl is required") ;
              }
              
              if(target["callbackUrl"] != null && target["callbackUrl"] != undefined ){
              
                let _callbackUrl  = target["callbackUrl"] ;
                

                 if(! _.isString(_callbackUrl)){
                    throw new Error(path+"callbackUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["entryPoint"] != null && target["entryPoint"] != undefined ){
              
                let _entryPoint  = target["entryPoint"] ;
                

                 if(! _.isString(_entryPoint)){
                    throw new Error(path+"entryPoint is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["issuer"] != null && target["issuer"] != undefined ){
              
                let _issuer  = target["issuer"] ;
                

                 if(! _.isString(_issuer)){
                    throw new Error(path+"issuer is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["cert"] != null && target["cert"] != undefined ){
              
                let _cert  = target["cert"] ;
                

                 if(! _.isString(_cert)){
                    throw new Error(path+"cert is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["privateCert"] != null && target["privateCert"] != undefined ){
              
                let _privateCert  = target["privateCert"] ;
                

                 if(! _.isString(_privateCert)){
                    throw new Error(path+"privateCert is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["decryptionPvk"] != null && target["decryptionPvk"] != undefined ){
              
                let _decryptionPvk  = target["decryptionPvk"] ;
                

                 if(! _.isString(_decryptionPvk)){
                    throw new Error(path+"decryptionPvk is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["signatureAlgorithm"] != null && target["signatureAlgorithm"] != undefined ){
              
                let _signatureAlgorithm  = target["signatureAlgorithm"] ;
                

                 if(! _.isString(_signatureAlgorithm)){
                    throw new Error(path+"signatureAlgorithm is not a string") ;
                    
                  }
                  
                  
                    let _enum_signatureAlgorithm:string[] = ["sha1","sha256","sha512"] ;
                    if(_enum_signatureAlgorithm.indexOf(_signatureAlgorithm)==-1){
                        throw new Error(path+"signatureAlgorithm dont match one of sha1 , sha256 , sha512" ) ;
                        
                    }
                  
                 
              
              
           }
           
              
              if(target["additionalParams"] != null && target["additionalParams"] != undefined ){
              
                let _additionalParams  = target["additionalParams"] ;
                

                 if(! _.isString(_additionalParams)){
                    throw new Error(path+"additionalParams is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["identifierFormat"] != null && target["identifierFormat"] != undefined ){
              
                let _identifierFormat  = target["identifierFormat"] ;
                

                 if(! _.isString(_identifierFormat)){
                    throw new Error(path+"identifierFormat is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["acceptedClockSkewMs"] != null && target["acceptedClockSkewMs"] != undefined ){
              
                let _acceptedClockSkewMs  = target["acceptedClockSkewMs"] ;
                
                  if(! _.isNumber(_acceptedClockSkewMs)){
                      throw new Error(path+"acceptedClockSkewMs is not a number") ;
                      
                  }
                  
                
                

                
              
              
           }
           
              
              if(target["attributeConsumingServiceIndex"] != null && target["attributeConsumingServiceIndex"] != undefined ){
              
                let _attributeConsumingServiceIndex  = target["attributeConsumingServiceIndex"] ;
                

                 if(! _.isString(_attributeConsumingServiceIndex)){
                    throw new Error(path+"attributeConsumingServiceIndex is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["disableRequestedAuthnContext"] != null && target["disableRequestedAuthnContext"] != undefined ){
              
                let _disableRequestedAuthnContext  = target["disableRequestedAuthnContext"] ;
                
                  if(! _.isBoolean(_disableRequestedAuthnContext)){
                    throw new Error(path+"disableRequestedAuthnContext is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["authnContext"] != null && target["authnContext"] != undefined ){
              
                let _authnContext  = target["authnContext"] ;
                

                 if(! _.isString(_authnContext)){
                    throw new Error(path+"authnContext is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["forceAuthn"] != null && target["forceAuthn"] != undefined ){
              
                let _forceAuthn  = target["forceAuthn"] ;
                
                  if(! _.isBoolean(_forceAuthn)){
                    throw new Error(path+"forceAuthn is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["skipRequestCompression"] != null && target["skipRequestCompression"] != undefined ){
              
                let _skipRequestCompression  = target["skipRequestCompression"] ;
                
                  if(! _.isBoolean(_skipRequestCompression)){
                    throw new Error(path+"skipRequestCompression is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["validateInResponseTo"] != null && target["validateInResponseTo"] != undefined ){
              
                let _validateInResponseTo  = target["validateInResponseTo"] ;
                

                 if(! _.isString(_validateInResponseTo)){
                    throw new Error(path+"validateInResponseTo is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["requestIdExpirationPeriodMs"] != null && target["requestIdExpirationPeriodMs"] != undefined ){
              
                let _requestIdExpirationPeriodMs  = target["requestIdExpirationPeriodMs"] ;
                
                  if(! _.isNumber(_requestIdExpirationPeriodMs)){
                      throw new Error(path+"requestIdExpirationPeriodMs is not a number") ;
                      
                  }
                  
                
                

                
              
              
           }
           
              
              if(target["passReqToCallback"] != null && target["passReqToCallback"] != undefined ){
              
                let _passReqToCallback  = target["passReqToCallback"] ;
                
                  if(! _.isBoolean(_passReqToCallback)){
                    throw new Error(path+"passReqToCallback is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["logoutUrl"] != null && target["logoutUrl"] != undefined ){
              
                let _logoutUrl  = target["logoutUrl"] ;
                

                 if(! _.isString(_logoutUrl)){
                    throw new Error(path+"logoutUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["additionalLogoutParams"] != null && target["additionalLogoutParams"] != undefined ){
              
                let _additionalLogoutParams  = target["additionalLogoutParams"] ;
                

                 if(! _.isString(_additionalLogoutParams)){
                    throw new Error(path+"additionalLogoutParams is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["logoutCallbackUrl"] != null && target["logoutCallbackUrl"] != undefined ){
              
                let _logoutCallbackUrl  = target["logoutCallbackUrl"] ;
                

                 if(! _.isString(_logoutCallbackUrl)){
                    throw new Error(path+"logoutCallbackUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_passport_strategie_saml>{
        return Model_passport_strategie_saml.check(target, true, path).then(()=>{
          return new Model_passport_strategie_saml(target) ;
        })
      }

   }

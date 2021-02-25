import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandreDev/utils" ;



/**
  JSON Web Key 
*/
export class Model_jwk extends  Base  implements Interface.Ijwk {

/**
  JSON Web Key 
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["kty"] != undefined){
          
           this["kty"] = obj["kty"].toString() ;
           
        }
        
    
        
        if(obj["use"] != undefined){
          
           this["use"] = obj["use"].toString() ;
           
        }
        
    
        
        if(obj["key_ops"] != undefined && obj["key_ops"] != null && _.isArray(obj["key_ops"])){
          
           this["key_ops"] = obj["key_ops"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["alg"] != undefined){
          
           this["alg"] = obj["alg"].toString() ;
           
        }
        
    
        
        if(obj["kid"] != undefined){
          
           this["kid"] = obj["kid"].toString() ;
           
        }
        
    
        
        if(obj["x5u"] != undefined){
          
           this["x5u"] = obj["x5u"].toString() ;
           
        }
        
    
        
        if(obj["x5c"] != undefined && obj["x5c"] != null && _.isArray(obj["x5c"])){
          
           this["x5c"] = obj["x5c"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["x5t"] != undefined){
          
           this["x5t"] = obj["x5t"].toString() ;
           
        }
        
    
        
        if(obj["x5t#S256"] != undefined){
          
           this["x5t#S256"] = obj["x5t#S256"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "jwk" ;

        
              /**
        The "kty" (key type) member identifies the cryptographic algorithm    family used with the key, such as "RSA" or "EC".
        */
               public "kty"?:string ;
              
       
              /**
        The "use" (public key use) member identifies the intended use of the    public key. 
        */
               public "use"?:string ;
              
       
              /**
        The "key_ops" (key operations) member identifies the operation(s)    that the key is intended to be used for.
        */
               public "key_ops"?:string[];
              
       
              /**
        The "alg" (algorithm) member identifies the algorithm intended for    use with the key.  
        */
               public "alg"?:string ;
              
       
              /**
        The "kid" (key ID) member is used to match a specific key. 
        */
               public "kid"?:string ;
              
       
              /**
        The "x5u" (X.509 URL) member is a URI [RFC3986] that refers to a    resource for an X.509 public key certificate or certificate chain.
        */
               public "x5u"?:string ;
              
       
              /**
        The "x5c" (X.509 Certificate Chain) member contains a chain of one or    more PKIX certificates
        */
               public "x5c"?:string[];
              
       
              /**
            The "x5t" (X.509 Certificate SHA-1 Thumbprint) member is a base64url    encoded SHA-1 thumbprint (a.k.a. digest) of the DER encoding of anX.509 certificate.
        */
               public "x5t"?:string ;
              
       
              /**
        The "x5t#S256" (X.509 Certificate SHA-256 Thumbprint) member is a    base64url encoded SHA-256 thumbprint (a.k.a. digest) of the DER    encoding of an X.509 certificate
        */
               public "x5t#S256"?:string ;
              
       


       

   }

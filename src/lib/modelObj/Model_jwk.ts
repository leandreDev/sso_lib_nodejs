import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;



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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["kty"] != null && target["kty"] != undefined ){
              
                let _kty  = target["kty"] ;
                

                 if(! _.isString(_kty)){
                    throw new Error(path+"kty is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["use"] != null && target["use"] != undefined ){
              
                let _use  = target["use"] ;
                

                 if(! _.isString(_use)){
                    throw new Error(path+"use is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["key_ops"] != null && target["key_ops"] != undefined ){
              
                target["key_ops"].forEach((_key_ops , index:number)=>{
                

                 if(! _.isString(_key_ops)){
                    throw new Error(path+"key_ops index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
              
              if(target["alg"] != null && target["alg"] != undefined ){
              
                let _alg  = target["alg"] ;
                

                 if(! _.isString(_alg)){
                    throw new Error(path+"alg is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["kid"] != null && target["kid"] != undefined ){
              
                let _kid  = target["kid"] ;
                

                 if(! _.isString(_kid)){
                    throw new Error(path+"kid is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["x5u"] != null && target["x5u"] != undefined ){
              
                let _x5u  = target["x5u"] ;
                

                 if(! _.isString(_x5u)){
                    throw new Error(path+"x5u is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["x5c"] != null && target["x5c"] != undefined ){
              
                target["x5c"].forEach((_x5c , index:number)=>{
                

                 if(! _.isString(_x5c)){
                    throw new Error(path+"x5c index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
              
              if(target["x5t"] != null && target["x5t"] != undefined ){
              
                let _x5t  = target["x5t"] ;
                

                 if(! _.isString(_x5t)){
                    throw new Error(path+"x5t is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["x5t#S256"] != null && target["x5t#S256"] != undefined ){
              
                let _x5tS256  = target["x5t#S256"] ;
                

                 if(! _.isString(_x5tS256)){
                    throw new Error(path+"x5t#S256 is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_jwk>{
        return Model_jwk.check(target, true, path).then(()=>{
          return new Model_jwk(target) ;
        })
      }

   }

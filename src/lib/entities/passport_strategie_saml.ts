import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;


import {Entity_passport_strategie } from "./passport_strategie"


/**
  strategie saml pour passport (https://github.com/bergie/passport-saml)
*/
export class Entity_passport_strategie_saml extends   Entity_passport_strategie    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'passport_strategie_saml' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_passport_strategie.cast(obj , true)
    
    
        
        if(obj["lib"] != undefined){
          
           obj["lib"] = obj["lib"].toString() ;
           
        }
        
    
        
        if(obj["strategieName"] != undefined){
          
           obj["strategieName"] = obj["strategieName"].toString() ;
           
        }
        
    
        
        if(obj["callbackUrl"] != undefined){
          
           obj["callbackUrl"] = obj["callbackUrl"].toString() ;
           
        }
        
    
        
        if(obj["entryPoint"] != undefined){
          
           obj["entryPoint"] = obj["entryPoint"].toString() ;
           
        }
        
    
        
        if(obj["issuer"] != undefined){
          
           obj["issuer"] = obj["issuer"].toString() ;
           
        }
        
    
        
        if(obj["cert"] != undefined){
          
           obj["cert"] = obj["cert"].toString() ;
           
        }
        
    
        
        if(obj["privateCert"] != undefined){
          
           obj["privateCert"] = obj["privateCert"].toString() ;
           
        }
        
    
        
        if(obj["decryptionPvk"] != undefined){
          
           obj["decryptionPvk"] = obj["decryptionPvk"].toString() ;
           
        }
        
    
        
        if(obj["signatureAlgorithm"] != undefined){
          
           obj["signatureAlgorithm"] = obj["signatureAlgorithm"].toString() ;
           
        }
        
    
        
        if(obj["additionalParams"] != undefined){
          
           obj["additionalParams"] = obj["additionalParams"].toString() ;
           
        }
        
    
        
        if(obj["identifierFormat"] != undefined){
          
           obj["identifierFormat"] = obj["identifierFormat"].toString() ;
           
        }
        
    
        
        if(obj["acceptedClockSkewMs"] != undefined){
          
           obj["acceptedClockSkewMs"] = new Number(obj["acceptedClockSkewMs"]).valueOf();
          
        }
        
    
        
        if(obj["attributeConsumingServiceIndex"] != undefined){
          
           obj["attributeConsumingServiceIndex"] = obj["attributeConsumingServiceIndex"].toString() ;
           
        }
        
    
        
        if(obj["disableRequestedAuthnContext"] != undefined){
          
           obj["disableRequestedAuthnContext"] = new Boolean(obj["disableRequestedAuthnContext"]).valueOf() ;
          
        }
        
    
        
        if(obj["authnContext"] != undefined){
          
           obj["authnContext"] = obj["authnContext"].toString() ;
           
        }
        
    
        
        if(obj["forceAuthn"] != undefined){
          
           obj["forceAuthn"] = new Boolean(obj["forceAuthn"]).valueOf() ;
          
        }
        
    
        
        if(obj["skipRequestCompression"] != undefined){
          
           obj["skipRequestCompression"] = new Boolean(obj["skipRequestCompression"]).valueOf() ;
          
        }
        
    
        
        if(obj["validateInResponseTo"] != undefined){
          
           obj["validateInResponseTo"] = obj["validateInResponseTo"].toString() ;
           
        }
        
    
        
        if(obj["requestIdExpirationPeriodMs"] != undefined){
          
           obj["requestIdExpirationPeriodMs"] = new Number(obj["requestIdExpirationPeriodMs"]).valueOf();
          
        }
        
    
        
        if(obj["passReqToCallback"] != undefined){
          
           obj["passReqToCallback"] = new Boolean(obj["passReqToCallback"]).valueOf() ;
          
        }
        
    
        
        if(obj["logoutUrl"] != undefined){
          
           obj["logoutUrl"] = obj["logoutUrl"].toString() ;
           
        }
        
    
        
        if(obj["additionalLogoutParams"] != undefined){
          
           obj["additionalLogoutParams"] = obj["additionalLogoutParams"].toString() ;
           
        }
        
    
        
        if(obj["logoutCallbackUrl"] != undefined){
          
           obj["logoutCallbackUrl"] = obj["logoutCallbackUrl"].toString() ;
           
        }
        
    
  }


 

public static checklib(val:any, path:string =null):string[]{
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


       
 

public static checkstrategieName(val:any, path:string =null):string[]{
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


       
 

public static checkcallbackUrl(val:any, path:string =null):string[]{
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


       
 

public static checkentryPoint(val:any, path:string =null):string[]{
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


       
 

public static checkissuer(val:any, path:string =null):string[]{
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


       
 

public static checkcert(val:any, path:string =null):string[]{
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


       
 

public static checkprivateCert(val:any, path:string =null):string[]{
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


       
 

public static checkdecryptionPvk(val:any, path:string =null):string[]{
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


       
 

public static checksignatureAlgorithm(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
            let _enum:string[] = ["sha1","sha256","sha512"] ;
            if(_enum.indexOf(val)==-1){
              res.push(`${path} dont match one of sha1 , sha256 , sha512`) ;
            }
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkadditionalParams(val:any, path:string =null):string[]{
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


       
 

public static checkidentifierFormat(val:any, path:string =null):string[]{
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


       
 

public static checkacceptedClockSkewMs(val:any, path:string =null):string[]{
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


       
 

public static checkattributeConsumingServiceIndex(val:any, path:string =null):string[]{
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


       
 

public static checkdisableRequestedAuthnContext(val:any, path:string =null):string[]{
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


       
 

public static checkauthnContext(val:any, path:string =null):string[]{
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


       
 

public static checkforceAuthn(val:any, path:string =null):string[]{
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


       
 

public static checkskipRequestCompression(val:any, path:string =null):string[]{
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


       
 

public static checkvalidateInResponseTo(val:any, path:string =null):string[]{
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


       
 

public static checkrequestIdExpirationPeriodMs(val:any, path:string =null):string[]{
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


       
 

public static checkpassReqToCallback(val:any, path:string =null):string[]{
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


       
 

public static checklogoutUrl(val:any, path:string =null):string[]{
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


       
 

public static checkadditionalLogoutParams(val:any, path:string =null):string[]{
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


       
 

public static checklogoutCallbackUrl(val:any, path:string =null):string[]{
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


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          err = Entity_passport_strategie.check(target, isCompleteObj , path) ;
          
              

              
              if( isCompleteObj && (target.lib == null || target.lib == undefined) ){
                err.push(path + ".lib is required") ;
              }
              

              if(target.lib != null && target.lib != undefined ){
                
                
                res = Entity_passport_strategie_saml.checklib(target.lib , `${path}.lib`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.strategieName == null || target.strategieName == undefined) ){
                err.push(path + ".strategieName is required") ;
              }
              

              if(target.strategieName != null && target.strategieName != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkstrategieName(target.strategieName , `${path}.strategieName`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.callbackUrl == null || target.callbackUrl == undefined) ){
                err.push(path + ".callbackUrl is required") ;
              }
              

              if(target.callbackUrl != null && target.callbackUrl != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkcallbackUrl(target.callbackUrl , `${path}.callbackUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.entryPoint != null && target.entryPoint != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkentryPoint(target.entryPoint , `${path}.entryPoint`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.issuer != null && target.issuer != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkissuer(target.issuer , `${path}.issuer`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.cert != null && target.cert != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkcert(target.cert , `${path}.cert`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.privateCert != null && target.privateCert != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkprivateCert(target.privateCert , `${path}.privateCert`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.decryptionPvk != null && target.decryptionPvk != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkdecryptionPvk(target.decryptionPvk , `${path}.decryptionPvk`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.signatureAlgorithm != null && target.signatureAlgorithm != undefined ){
                
                
                res = Entity_passport_strategie_saml.checksignatureAlgorithm(target.signatureAlgorithm , `${path}.signatureAlgorithm`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.additionalParams != null && target.additionalParams != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkadditionalParams(target.additionalParams , `${path}.additionalParams`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.identifierFormat != null && target.identifierFormat != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkidentifierFormat(target.identifierFormat , `${path}.identifierFormat`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.acceptedClockSkewMs != null && target.acceptedClockSkewMs != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkacceptedClockSkewMs(target.acceptedClockSkewMs , `${path}.acceptedClockSkewMs`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.attributeConsumingServiceIndex != null && target.attributeConsumingServiceIndex != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkattributeConsumingServiceIndex(target.attributeConsumingServiceIndex , `${path}.attributeConsumingServiceIndex`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.disableRequestedAuthnContext != null && target.disableRequestedAuthnContext != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkdisableRequestedAuthnContext(target.disableRequestedAuthnContext , `${path}.disableRequestedAuthnContext`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.authnContext != null && target.authnContext != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkauthnContext(target.authnContext , `${path}.authnContext`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.forceAuthn != null && target.forceAuthn != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkforceAuthn(target.forceAuthn , `${path}.forceAuthn`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.skipRequestCompression != null && target.skipRequestCompression != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkskipRequestCompression(target.skipRequestCompression , `${path}.skipRequestCompression`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.validateInResponseTo != null && target.validateInResponseTo != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkvalidateInResponseTo(target.validateInResponseTo , `${path}.validateInResponseTo`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.requestIdExpirationPeriodMs != null && target.requestIdExpirationPeriodMs != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkrequestIdExpirationPeriodMs(target.requestIdExpirationPeriodMs , `${path}.requestIdExpirationPeriodMs`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.passReqToCallback != null && target.passReqToCallback != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkpassReqToCallback(target.passReqToCallback , `${path}.passReqToCallback`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.logoutUrl != null && target.logoutUrl != undefined ){
                
                
                res = Entity_passport_strategie_saml.checklogoutUrl(target.logoutUrl , `${path}.logoutUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.additionalLogoutParams != null && target.additionalLogoutParams != undefined ){
                
                
                res = Entity_passport_strategie_saml.checkadditionalLogoutParams(target.additionalLogoutParams , `${path}.additionalLogoutParams`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.logoutCallbackUrl != null && target.logoutCallbackUrl != undefined ){
                
                
                res = Entity_passport_strategie_saml.checklogoutCallbackUrl(target.logoutCallbackUrl , `${path}.logoutCallbackUrl`) ;
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
          
            case 'lib':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'strategieName':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'callbackUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'entryPoint':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'issuer':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'cert':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'privateCert':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'decryptionPvk':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'signatureAlgorithm':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'additionalParams':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'identifierFormat':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'acceptedClockSkewMs':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'attributeConsumingServiceIndex':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'disableRequestedAuthnContext':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'authnContext':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'forceAuthn':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'skipRequestCompression':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'validateInResponseTo':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'requestIdExpirationPeriodMs':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'passReqToCallback':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'logoutUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'additionalLogoutParams':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'logoutCallbackUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
         
          default:
            return Entity_passport_strategie  .castQueryParam(key, value) ;
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
          
      
      case 'lib':
       
             return null ;
       
        
       
      
      
      case 'strategieName':
       
             return null ;
       
        
       
      
      
      case 'callbackUrl':
       
             return null ;
       
        
       
      
      
      case 'entryPoint':
       
             return null ;
       
        
       
      
      
      case 'issuer':
       
             return null ;
       
        
       
      
      
      case 'cert':
       
             return null ;
       
        
       
      
      
      case 'privateCert':
       
             return null ;
       
        
       
      
      
      case 'decryptionPvk':
       
             return null ;
       
        
       
      
      
      case 'signatureAlgorithm':
       
             return null ;
       
        
       
      
      
      case 'additionalParams':
       
             return null ;
       
        
       
      
      
      case 'identifierFormat':
       
             return null ;
       
        
       
      
      
      case 'acceptedClockSkewMs':
       
             return null ;
       
        
       
      
      
      case 'attributeConsumingServiceIndex':
       
             return null ;
       
        
       
      
      
      case 'disableRequestedAuthnContext':
       
             return null ;
       
        
       
      
      
      case 'authnContext':
       
             return null ;
       
        
       
      
      
      case 'forceAuthn':
       
             return null ;
       
        
       
      
      
      case 'skipRequestCompression':
       
             return null ;
       
        
       
      
      
      case 'validateInResponseTo':
       
             return null ;
       
        
       
      
      
      case 'requestIdExpirationPeriodMs':
       
             return null ;
       
        
       
      
      
      case 'passReqToCallback':
       
             return null ;
       
        
       
      
      
      case 'logoutUrl':
       
             return null ;
       
        
       
      
      
      case 'additionalLogoutParams':
       
             return null ;
       
        
       
      
      
      case 'logoutCallbackUrl':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_passport_strategie  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




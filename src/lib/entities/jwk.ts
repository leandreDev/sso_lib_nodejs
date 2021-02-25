import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;



/**
  JSON Web Key 
*/
export class Entity_jwk extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'jwk' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["kty"] != undefined){
          
           obj["kty"] = obj["kty"].toString() ;
           
        }
        
    
        
        if(obj["use"] != undefined){
          
           obj["use"] = obj["use"].toString() ;
           
        }
        
    
        
        if(obj["key_ops"] != undefined && obj["key_ops"] != null && _.isArray(obj["key_ops"])){
          
           obj["key_ops"] = obj["key_ops"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["alg"] != undefined){
          
           obj["alg"] = obj["alg"].toString() ;
           
        }
        
    
        
        if(obj["kid"] != undefined){
          
           obj["kid"] = obj["kid"].toString() ;
           
        }
        
    
        
        if(obj["x5u"] != undefined){
          
           obj["x5u"] = obj["x5u"].toString() ;
           
        }
        
    
        
        if(obj["x5c"] != undefined && obj["x5c"] != null && _.isArray(obj["x5c"])){
          
           obj["x5c"] = obj["x5c"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["x5t"] != undefined){
          
           obj["x5t"] = obj["x5t"].toString() ;
           
        }
        
    
        
        if(obj["x5t#S256"] != undefined){
          
           obj["x5t#S256"] = obj["x5t#S256"].toString() ;
           
        }
        
    
  }


 

public static checkkty(val:any, path:string =null):string[]{
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


       
 

public static checkuse(val:any, path:string =null):string[]{
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


       
 

public static checkkey_ops(val:any, path:string =null):string[]{
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


       
 

public static checkalg(val:any, path:string =null):string[]{
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


       
 

public static checkkid(val:any, path:string =null):string[]{
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


       
 

public static checkx5u(val:any, path:string =null):string[]{
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


       
 

public static checkx5c(val:any, path:string =null):string[]{
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


       
 

public static checkx5t(val:any, path:string =null):string[]{
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


       
 

public static "checkx5t#S256"(val:any, path:string =null):string[]{
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
        
          
          
              

              

              if(target.kty != null && target.kty != undefined ){
                
                
                res = Entity_jwk.checkkty(target.kty , `${path}.kty`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.use != null && target.use != undefined ){
                
                
                res = Entity_jwk.checkuse(target.use , `${path}.use`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.key_ops != null && target.key_ops != undefined ){
                
                
                target.key_ops.forEach((data, index)=>{
                  res = Entity_jwk.checkkey_ops(target.key_ops[index] , `${path}.key_ops.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.alg != null && target.alg != undefined ){
                
                
                res = Entity_jwk.checkalg(target.alg , `${path}.alg`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.kid != null && target.kid != undefined ){
                
                
                res = Entity_jwk.checkkid(target.kid , `${path}.kid`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.x5u != null && target.x5u != undefined ){
                
                
                res = Entity_jwk.checkx5u(target.x5u , `${path}.x5u`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.x5c != null && target.x5c != undefined ){
                
                
                target.x5c.forEach((data, index)=>{
                  res = Entity_jwk.checkx5c(target.x5c[index] , `${path}.x5c.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.x5t != null && target.x5t != undefined ){
                
                
                res = Entity_jwk.checkx5t(target.x5t , `${path}.x5t`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target["x5t#S256"] != null && target["x5t#S256"] != undefined ){
                
                
                res = Entity_jwk["checkx5t#S256"](target["x5t#S256"] , `${path}.x5t#S256`) ;
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
          
            case 'kty':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'use':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'key_ops':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'alg':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'kid':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'x5u':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'x5c':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'x5t':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'x5t#S256':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
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
          
      
      case 'kty':
       
             return null ;
       
        
       
      
      
      case 'use':
       
             return null ;
       
        
       
      
      
      case 'key_ops':
       
             return null ;
       
        
       
      
      
      case 'alg':
       
             return null ;
       
        
       
      
      
      case 'kid':
       
             return null ;
       
        
       
      
      
      case 'x5u':
       
             return null ;
       
        
       
      
      
      case 'x5c':
       
             return null ;
       
        
       
      
      
      case 'x5t':
       
             return null ;
       
        
       
      
      
      case 'x5t#S256':
       
             return null ;
       
        
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }




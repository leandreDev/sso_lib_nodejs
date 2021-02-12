import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;


import {Entity_passport_strategie } from "./passport_strategie"


/**
  Passport strategies for authenticating with local call
*/
export class Entity_passport_strategie_local extends   Entity_passport_strategie    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'passport_strategie_local' && [].indexOf(obj._class)!==-1){
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
        
    
        
        if(obj["CBLib"] != undefined){
          
           obj["CBLib"] = obj["CBLib"].toString() ;
           
        }
        
    
        
        if(obj["cbConf"] != undefined){
          
           obj["cbConf"] = obj["cbConf"] ;
          
        }
        
    
        
        if(obj["usernameField"] != undefined){
          
           obj["usernameField"] = obj["usernameField"].toString() ;
           
        }
        
    
        
        if(obj["passwordField"] != undefined){
          
           obj["passwordField"] = obj["passwordField"].toString() ;
           
        }
        
    
        
        if(obj["session"] != undefined){
          
           obj["session"] = new Boolean(obj["session"]).valueOf() ;
          
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
         
         
          
          
            let _enum:string[] = ["Strategy"] ;
            if(_enum.indexOf(val)==-1){
              res.push(`${path} dont match one of Strategy`) ;
            }
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkCBLib(val:any, path:string =null):string[]{
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


       
 

public static checkcbConf(val:any, path:string =null):string[]{
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


       
 

public static checkusernameField(val:any, path:string =null):string[]{
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


       
 

public static checkpasswordField(val:any, path:string =null):string[]{
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


       
 

public static checksession(val:any, path:string =null):string[]{
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
        
          err = Entity_passport_strategie.check(target, isCompleteObj , path) ;
          
              

              
              if( isCompleteObj && (target.lib == null || target.lib == undefined) ){
                err.push(path + ".lib is required") ;
              }
              

              if(target.lib != null && target.lib != undefined ){
                
                
                res = Entity_passport_strategie_local.checklib(target.lib , `${path}.lib`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.strategieName == null || target.strategieName == undefined) ){
                err.push(path + ".strategieName is required") ;
              }
              

              if(target.strategieName != null && target.strategieName != undefined ){
                
                
                res = Entity_passport_strategie_local.checkstrategieName(target.strategieName , `${path}.strategieName`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.CBLib == null || target.CBLib == undefined) ){
                err.push(path + ".CBLib is required") ;
              }
              

              if(target.CBLib != null && target.CBLib != undefined ){
                
                
                res = Entity_passport_strategie_local.checkCBLib(target.CBLib , `${path}.CBLib`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.cbConf != null && target.cbConf != undefined ){
                
                
                res = Entity_passport_strategie_local.checkcbConf(target.cbConf , `${path}.cbConf`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.usernameField == null || target.usernameField == undefined) ){
                err.push(path + ".usernameField is required") ;
              }
              

              if(target.usernameField != null && target.usernameField != undefined ){
                
                
                res = Entity_passport_strategie_local.checkusernameField(target.usernameField , `${path}.usernameField`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.passwordField == null || target.passwordField == undefined) ){
                err.push(path + ".passwordField is required") ;
              }
              

              if(target.passwordField != null && target.passwordField != undefined ){
                
                
                res = Entity_passport_strategie_local.checkpasswordField(target.passwordField , `${path}.passwordField`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.session != null && target.session != undefined ){
                
                
                res = Entity_passport_strategie_local.checksession(target.session , `${path}.session`) ;
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
          
            case 'CBLib':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'cbConf':
              //object
              
              
              
              
              
              return value ;
              
              
              
            break;
          
            case 'usernameField':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'passwordField':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'session':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
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
       
        
       
      
      
      case 'CBLib':
       
             return null ;
       
        
       
      
      
      case 'cbConf':
       
             return null ;
       
        
       
      
      
      case 'usernameField':
       
             return null ;
       
        
       
      
      
      case 'passwordField':
       
             return null ;
       
        
       
      
      
      case 'session':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_passport_strategie  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




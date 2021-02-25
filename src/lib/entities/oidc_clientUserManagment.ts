import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandreDev/utils" ;



/**
  configuration du gestionnaire d'utilisateur
*/
export class Entity_oidc_clientUserManagment extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'oidc_clientUserManagment' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["sign_in_uri"] != undefined){
          
           obj["sign_in_uri"] = obj["sign_in_uri"].toString() ;
           
        }
        
    
        
        if(obj["password_recovery_uri"] != undefined){
          
           obj["password_recovery_uri"] = obj["password_recovery_uri"].toString() ;
           
        }
        
    
  }


 

public static checksign_in_uri(val:any, path:string =null):string[]{
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


       
 

public static checkpassword_recovery_uri(val:any, path:string =null):string[]{
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
        
          
          
              

              

              if(target.sign_in_uri != null && target.sign_in_uri != undefined ){
                
                
                res = Entity_oidc_clientUserManagment.checksign_in_uri(target.sign_in_uri , `${path}.sign_in_uri`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.password_recovery_uri == null || target.password_recovery_uri == undefined) ){
                err.push(path + ".password_recovery_uri is required") ;
              }
              

              if(target.password_recovery_uri != null && target.password_recovery_uri != undefined ){
                
                
                res = Entity_oidc_clientUserManagment.checkpassword_recovery_uri(target.password_recovery_uri , `${path}.password_recovery_uri`) ;
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
          
            case 'sign_in_uri':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'password_recovery_uri':
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
          
      
      case 'sign_in_uri':
       
             return null ;
       
        
       
      
      
      case 'password_recovery_uri':
       
             return null ;
       
        
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }




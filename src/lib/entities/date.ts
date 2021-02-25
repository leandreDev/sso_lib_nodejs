import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;


import {Entity_field } from "./field"


/**
  ce champ représente les dates
*/
export class Entity_date extends   Entity_field    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'date' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_field.cast(obj , true)
    
    
        
        if(obj["default"] != undefined){
          
            obj["default"] = new Date(obj["default"]) ;
          
        }
        
    
        
        if(obj["min"] != undefined){
          
            obj["min"] = new Date(obj["min"]) ;
          
        }
        
    
        
        if(obj["max"] != undefined){
          
            obj["max"] = new Date(obj["max"]) ;
          
        }
        
    
  }


 

public static checkdefault(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         
          if( ! _.isDate(val)){
            res.push(`${path}  is not a Date`) ;
          }
          
          
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkmin(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         
          if( ! _.isDate(val)){
            res.push(`${path}  is not a Date`) ;
          }
          
          
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkmax(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         
          if( ! _.isDate(val)){
            res.push(`${path}  is not a Date`) ;
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
        
          err = Entity_field.check(target, isCompleteObj , path) ;
          
              

              

              if(target.default != null && target.default != undefined ){
                
                
                res = Entity_date.checkdefault(target.default , `${path}.default`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.min != null && target.min != undefined ){
                
                
                res = Entity_date.checkmin(target.min , `${path}.min`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.max != null && target.max != undefined ){
                
                
                res = Entity_date.checkmax(target.max , `${path}.max`) ;
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
          
            case 'default':
              //date
              
              
              
              
              return new Date(value) ;
              
              
              
              
            break;
          
            case 'min':
              //date
              
              
              
              
              return new Date(value) ;
              
              
              
              
            break;
          
            case 'max':
              //date
              
              
              
              
              return new Date(value) ;
              
              
              
              
            break;
          
         
          default:
            return Entity_field  .castQueryParam(key, value) ;
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
          
      
      case 'default':
       
             return null ;
       
        
       
      
      
      case 'min':
       
             return null ;
       
        
       
      
      
      case 'max':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_field  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }




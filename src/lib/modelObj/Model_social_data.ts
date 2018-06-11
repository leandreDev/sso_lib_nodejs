import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;



/**
  donnée des connecteur sociaux
*/
export class Model_social_data extends  Base  implements Interface.Isocial_data {

/**
  donnée des connecteur sociaux
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "social_data" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_social_data>{
        return Model_social_data.check(target, true, path).then(()=>{
          return new Model_social_data(target) ;
        })
      }

   }

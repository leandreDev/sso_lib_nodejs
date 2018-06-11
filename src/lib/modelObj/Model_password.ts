import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


import {Model_string } from "./Model_string"


/**
  password
*/
export class Model_password extends   Model_string   implements Interface.Ipassword {

/**
  password
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "password" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_password>{
        return Model_password.check(target, true, path).then(()=>{
          return new Model_password(target) ;
        })
      }

   }

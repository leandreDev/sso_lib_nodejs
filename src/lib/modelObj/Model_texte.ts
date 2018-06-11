import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;


import {Model_string } from "./Model_string"


/**
  champ pour texte long
*/
export class Model_texte extends   Model_string   implements Interface.Itexte {

/**
  champ pour texte long
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "texte" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_texte>{
        return Model_texte.check(target, true, path).then(()=>{
          return new Model_texte(target) ;
        })
      }

   }

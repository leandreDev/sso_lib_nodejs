import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "../Base" ;



/**
  JSON Web Key Set (JWK Set)
*/
export class Model_jwks extends  Base  implements Interface.Ijwks {

/**
  JSON Web Key Set (JWK Set)
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["keys"] != undefined && obj["keys"] != null && _.isArray(obj["keys"])){
          

            this["keys"] = obj["keys"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["jwk"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "jwks" ;

        
              /**
        The value of the "keys" member is an array of JWK values.
        */
               public "keys"?:Interface.Ijwk[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["keys"] != null && target["keys"] != undefined ){
              
                  target["keys"].forEach((_keys , index:number)=>{
                  
                  
                    promArr.push( Index["jwk"].check(_keys, isCompleteObj , path+"keys.")
                      .catch((err)=>{
                        throw new Error(path+"keys index: "+ index +"is not jwk")
                        

                      }) )
                  if(_keys._class != null && _keys._class != undefined){
                    promArr.push( Index[_keys._class].check(_keys, isCompleteObj , path+"keys.")
                      .catch((err)=>{
                        throw new Error(path+"keys index: "+ index +"is not a " + _keys._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_jwks>{
        return Model_jwks.check(target, true, path).then(()=>{
          return new Model_jwks(target) ;
        })
      }

   }

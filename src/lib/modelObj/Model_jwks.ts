import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



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
              
       


       

   }

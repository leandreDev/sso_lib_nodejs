

import {UtilsSecu ,  HttpServiceAdminBase ,HttpServiceBddBase ,HttpServiceBddAdminBase,HttpServiceBddBaseView, mongo , IBase, IHttpResult} from "@leandreDev/utils" ;
import * as Interfaces from "../../lib/modelObj/Interfaces" ;
import * as Index from "../../lib/entities/Index" ;
import * as fs from "fs" ;


import {IPlateforme} from './IPlateforme' ;


export class bdd_collection_plateform  {

	constructor(conf:any ){
	this.url = conf.url ;
	this.secure = conf.secure ;
	

		this.protoschema= new HttpServiceBddBase<Interfaces.Iprotoschema>( {bdd: conf.bdd , collectionName:'protoschemas', entity:Index.Entity_protoschema , debug:conf.debug ,  collections:this }  )  ;
		this.admin_protoschema= new HttpServiceBddAdminBase<Interfaces.Iprotoschema>( {bdd: conf.bdd , collectionName:'protoschemas', entity:Index.Entity_protoschema , debug:conf.debug} )  ;

		
	

		this.oidc_account= new HttpServiceBddBase<Interfaces.Ioidc_account>( {bdd: conf.bdd , collectionName:'oidc_accounts', entity:Index.Entity_oidc_account , debug:conf.debug ,  collections:this }  )  ;
		this.admin_oidc_account= new HttpServiceBddAdminBase<Interfaces.Ioidc_account>( {bdd: conf.bdd , collectionName:'oidc_accounts', entity:Index.Entity_oidc_account , debug:conf.debug} )  ;

		
	

		this.oidc_Client= new HttpServiceBddBase<Interfaces.Ioidc_Client>( {bdd: conf.bdd , collectionName:'oidc_clients', entity:Index.Entity_oidc_Client , debug:conf.debug ,  collections:this }  )  ;
		this.admin_oidc_Client= new HttpServiceBddAdminBase<Interfaces.Ioidc_Client>( {bdd: conf.bdd , collectionName:'oidc_clients', entity:Index.Entity_oidc_Client , debug:conf.debug} )  ;

		
	
	}

  public getHttpService(colName: string): HttpServiceBddBase<IBase>{
      return this[colName] ;
  }

	protected url:string ;
	protected secure: UtilsSecu = null
	
		/**
		 service d'accès à la collection :protoschema
		 desc: protoschema est un méta modéle. il permet de créer les autres modèle de la base
		 

		 
		*/
		public protoschema:HttpServiceBddBase<Interfaces.Iprotoschema> ;
		public admin_protoschema:HttpServiceBddAdminBase<Interfaces.Iprotoschema> ;

		
	
		/**
		 service d'accès à la collection :oidc_account
		 desc: compte de l'utilisateur
		 

		 
		*/
		public oidc_account:HttpServiceBddBase<Interfaces.Ioidc_account> ;
		public admin_oidc_account:HttpServiceBddAdminBase<Interfaces.Ioidc_account> ;

		
	
		/**
		 service d'accès à la collection :oidc_Client
		 desc: description d'un client openId (c'est une application)
		 

		 
		*/
		public oidc_Client:HttpServiceBddBase<Interfaces.Ioidc_Client> ;
		public admin_oidc_Client:HttpServiceBddAdminBase<Interfaces.Ioidc_Client> ;

		
	
	
}




export class bdd_view_plateform {

	constructor( public conf:any , collections:any ){
	
	}

	
	
}


export  class Bdd_plateforme implements IPlateforme {

	constructor(public conf:{url:string, secure:any , debug?:boolean, bdd?:Promise<mongo.Db>, caPath?: string }  ){

    if(!conf.bdd){
      conf.bdd = new Promise((resolve, reject)=>{
        if (conf.caPath) {
          var ca = [fs.readFileSync(conf.caPath)];
          mongo.MongoClient.connect(conf.url,
            {
              sslValidate: true,
              sslCA: ca,
              useNewUrlParser: true
            })
            .then(mongoCLient => {
              resolve(mongoCLient.db());
            })

        } else {
          mongo.MongoClient.connect(conf.url)
            .then(mongoCLient => {
              resolve(mongoCLient.db());
            })
        }
      })
    }
    this.collections = new bdd_collection_plateform(conf ) ;
    this.views = new bdd_view_plateform(conf , this.collections) ;
	}



	/**
		liste des collections de l'api
	*/
	public collections:bdd_collection_plateform ;
	/**
		liste des vues de l'api
	*/
	public views: bdd_view_plateform ; 
} 
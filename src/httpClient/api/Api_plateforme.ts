

import {UtilsSecu , CtxInterpretor ,IHttpResult , IBase ,HttpServiceBase , HttpServiceAdminBase ,HttpAbstractService ,  MiddleWareConfig } from "@hfdev/utils" ;

import * as Interfaces from "../../lib/modelObj/Interfaces" ;
import {IPlateforme} from './IPlateforme' ;


export class api_collection_plateform  {

	constructor(conf:any ){
	this.url = conf.url ;
	this.secure = conf.secure ;
	

		this.protoschema= new HttpServiceBase<Interfaces.Iprotoschema>( {url:conf.url + "collection/protoschema/" , secure:conf.secure} )  ;
		this.admin_protoschema= new HttpServiceAdminBase<Interfaces.Iprotoschema>( {url:conf.url + "admin/protoschema/" , secure:conf.secure} )  ;

		
	

		this.oidc_account= new HttpServiceBase<Interfaces.Ioidc_account>( {url:conf.url + "collection/oidc_account/" , secure:conf.secure} )  ;
		this.admin_oidc_account= new HttpServiceAdminBase<Interfaces.Ioidc_account>( {url:conf.url + "admin/oidc_account/" , secure:conf.secure} )  ;

		
	

		this.oidc_Client= new HttpServiceBase<Interfaces.Ioidc_Client>( {url:conf.url + "collection/oidc_Client/" , secure:conf.secure} )  ;
		this.admin_oidc_Client= new HttpServiceAdminBase<Interfaces.Ioidc_Client>( {url:conf.url + "admin/oidc_Client/" , secure:conf.secure} )  ;

		
	
	}
	protected url:string ;
	protected secure: UtilsSecu = null
	
		/**
		 service d'accès à la collection :protoschema
		 desc: protoschema est un méta modéle. il permet de créer les autres modèle de la base
		 

		 
		*/
		public protoschema:HttpServiceBase<Interfaces.Iprotoschema> ;
		public admin_protoschema:HttpServiceAdminBase<Interfaces.Iprotoschema> ;

		
	
		/**
		 service d'accès à la collection :oidc_account
		 desc: compte de l'utilisateur
		 

		 
		*/
		public oidc_account:HttpServiceBase<Interfaces.Ioidc_account> ;
		public admin_oidc_account:HttpServiceAdminBase<Interfaces.Ioidc_account> ;

		
	
		/**
		 service d'accès à la collection :oidc_Client
		 desc: description d'un client openId (c'est une application)
		 

		 
		*/
		public oidc_Client:HttpServiceBase<Interfaces.Ioidc_Client> ;
		public admin_oidc_Client:HttpServiceAdminBase<Interfaces.Ioidc_Client> ;

		
	
	
}




export class api_view_plateform {

	constructor( public conf:any ){
	
	}

	
	
}


export  class Api_plateforme implements IPlateforme {

	constructor(public conf:any  ){
		this.collections = new api_collection_plateform(conf ) ;
 		this.views = new api_view_plateform(conf) ;
	}



	/**
		liste des collections de l'api
	*/
	public collections:api_collection_plateform ;
	/**
		liste des vues de l'api
	*/
	public views: api_view_plateform ; 
} 
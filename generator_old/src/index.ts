import * as _ from "lodash" ;
import * as request from 'request-promise-native' ;
import * as fs  from 'fs-extra' ;

var interfaceTemplate:string  = fs.readFileSync( __dirname + "/template/interfaceTemplate.tmpl").toString() ;
var packageTemplate:string =  fs.readFileSync(__dirname + "/template/packageTemplate.tmpl").toString() ;

var classTemplate:string =  fs.readFileSync(__dirname + "/template/classTemplate.tmpl").toString() ;

var BddApiTemplate:string = fs.readFileSync(__dirname + "/template/BddApiTemplate.tmpl").toString() ;
var webserviceTemplate:string = fs.readFileSync(__dirname + "/template/webserviceTemplate.tmpl").toString() ;
var AggregaWebServiceTemplate:string = fs.readFileSync(__dirname + "/template/AggregaWebServiceTemplate.tmpl").toString() ;
var serviceIndexTemplate:string = fs.readFileSync(__dirname + "/template/serviceIndexTemplate.tmpl").toString() ;

var idName:any = {} ;
var idObj:any = {} ;
var datas:any[] = [] ;
var collections:any[] = [] ;
var rqInfra:any = {} ;
var views:any[] = [];
var idViewObj:any = {} ;
var services:any[] = [] ;
var idServiceObj:any = {} ;
var aggregaServices:any[] = [] ;
var allServices:any[] = [] ;

fs.removeSync("./src/lib/modelObj");
// fs.removeSync("./src/app/shared/lib/formObj");
fs.removeSync("./src/httpClient/services/");
fs.removeSync("./src/httpClient/api/");
fs.removeSync("./src/httpClient/aggregaServices/");
var bddUrl:string = "https://api.justplug.fr/sso_bdd/" ;

rqInfra.url = `${bddUrl}collection/protoschema/`  ;
// "https://api.justplug.fr/sso_bdd/collection/protoschema/" ;

rqInfra.json = true ;
request(rqInfra).then(valInfra=>{
	if(valInfra.code == 200){
		if(valInfra.response ){
			datas = valInfra.response ;
  		}
	}else{
		throw new Error(valInfra.message) ;
	}
})
.then(()=>{
	datas.forEach((val)=>{
	        idName[val._id] = val.name ;
	        idObj[val._id] = val ;
	        val._child = [] ;
	        val._dep = [] ;
	        if((!val.parentModel) && (!val.isSchema)){
	          collections.push(val) ;
	        }

	        val.fields.forEach((field)=>{
              if(field._class == "subdoc"){
                if(val._dep.indexOf(field.protoSchemaId) == -1){
                  val._dep.push(field.protoSchemaId) ;
                }
              }
            })
	        val._setChild = (child) =>{
	          val._child.push(child) ;
	          if(val.parentModel){
	            idObj[val.parentModel]._setChild(child) ;
	          }
	        }
	      })
	  datas.forEach((val)=>{

	    if(val.parentModel){
	       idObj[val.parentModel]._setChild(val) ;
	    }
	  })
}).then(val=>{
	console.log("generate Interfaces") ;
	return fs.outputFile("./src/lib/modelObj/Interfaces.ts" ,  _.template(interfaceTemplate)({datas:datas , idName:idName}) ) ;
})
.then(()=>{
	console.log("generate Index") ;
	return fs.outputFile("./src/lib/modelObj/Index.ts" ,  _.template(packageTemplate)({datas:datas , idName:idName }) ) ;
})
.then(()=>{
	datas.forEach((val)=>{
		console.log("generate Model_"+ val.name ) ;
		return fs.outputFile("./src/lib/modelObj/Model_"+ val.name +".ts" ,  _.template(classTemplate)({datas:datas , idName:idName , protoSchema:val }) ) ;
	})
}).then(()=>{
  	var rqViews:any = {} ;
	rqViews.url = `${bddUrl}collection/_view/*/output/$pop`  ;
	// "https://api.justplug.fr/daesign_app_bdd/collection/_view/*/output/$pop" ;
	rqViews.json = true ;
	
	return request(rqViews).then(valRq=>{
		if(valRq.code == 200){
			if(valRq.response ){
				views = valRq.response ;
      		}
      		return views ;
	   }else{
	   	return [] ;
	   }
	}).catch((err)=>{
		return [] ;
	})
  
}).then((views)=>{
	views.forEach((view)=>{
		idViewObj[view._id] = view ;
	})
	allServices.push({name:"Api_plateforme" , path:"/api/Api_plateforme"}) ;
	return fs.outputFile("./src/httpClient/api/Api_plateforme.ts" ,  _.template(BddApiTemplate)({datas:collections , idName:idName , views:views }) ) ;
})
.then((views)=>{

	return fs.outputFile("./src/httpClient/serviceIndex.ts" ,  _.template(serviceIndexTemplate)({datas:allServices , idName:idName , views:views , idObj:idObj}) ) ;
	
})
.catch(err =>{
	console.log(err)
})
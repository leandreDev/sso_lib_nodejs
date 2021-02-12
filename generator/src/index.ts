import * as _ from 'lodash' ;
import * as request from 'request-promise-native' ;
import * as fs  from 'fs-extra' ;
import * as pl from 'mongoose-legacy-pluralize' ;
import * as Util from 'util';

const packageJson:any = require('../../package.json') ; 

var interfaceTemplate:string  = fs.readFileSync( __dirname + `/template/interfaceTemplate.tmpl`).toString() ;
var collectionInterfaceTemplate:string  = fs.readFileSync( __dirname + `/template/collectionInterfaceTemplate.tmpl`).toString() ;
var packageTemplate:string =  fs.readFileSync(__dirname + `/template/packageTemplate.tmpl`).toString() ;

var classTemplate:string =  fs.readFileSync(__dirname + `/template/classTemplate.tmpl`).toString() ;

var entitiesTemplate:string =  fs.readFileSync(__dirname + `/template/entitiesTemplate.tmpl`).toString() ;
var entitiespackageTemplate:string =  fs.readFileSync(__dirname + `/template/entitiespackageTemplate.tmpl`).toString() ;



var BddApiTemplate:string = fs.readFileSync(__dirname + `/template/BddApiTemplate.tmpl`).toString() ;
var bdd_plateform:string = fs.readFileSync(__dirname + `/template/Bdd_plateforme.tmpl`).toString() ;
var api_plateformInterface:string = fs.readFileSync(__dirname + `/template/api_plateformInterface.tmpl`).toString() ;
var ApiExpressRouter:string = fs.readFileSync(__dirname + `/template/ApiExpressRouter.tmpl`).toString() ;



var webserviceTemplate:string = fs.readFileSync(__dirname + `/template/webserviceTemplate.tmpl`).toString() ;
var swaggerserviceTemplate:string = fs.readFileSync(__dirname + `/template/swagger.tmpl`).toString() ;

// var AggregaWebServiceTemplate:string = fs.readFileSync(__dirname + `/template/AggregaWebServiceTemplate.tmpl`).toString() ;
var serviceIndexTemplate:string = fs.readFileSync(__dirname + `/template/serviceIndexTemplate.tmpl`).toString() ;

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
var idType:any[] = [] ;
var idInterface:any[] = [] ;

fs.removeSync(`./src/lib/entities`);
fs.removeSync(`./src/lib/modelObj`);
// fs.removeSync(`./src/app/shared/lib/formObj`);
fs.removeSync(`./src/httpClient/services/`);
fs.removeSync(`./src/httpClient/api/`);
fs.removeSync(`./src/httpClient/aggregaServices/`);
fs.ensureDirSync(`./dataTest/Api_plateforme/`) ;
// 5e036fb81ab9942196a17dbf/59228aef4dd0be91939eb4bd le service
// 592144d254b6bb44a9bb234e/5e034f5357abbf75859b0dda configuration de l'admin

// 597781fdc184153c2ede4d9f
// 59c62581c3c9d3a0f9e88616
var bddurl:string = `https://api.justplug.fr/sso_bdd/` ;
Promise.resolve()
.then(data=>{
	var rq:any = {} ;
	rq.url = `${bddurl}collection/protoschema` ;
	rq.json = true ;
	return request(rq).then(valRq=>{
		
		if(valRq.code == 200){
			if(valRq.response ){
				datas = _.unionBy(valRq.response , datas , `_id`) ; 
				// [...datas, ...valRq.response] ;
      		}
	   }else{
	   	throw new Error(valRq.message) ;
	   }
	})
})
.then(()=>{
	datas.forEach((val)=>{
	    idName[val._id] = val.name ;
			idObj[val._id] = val ;
			switch (val.name) {
				case 'number':
					idType[val.id] = 'number';
					idInterface[val.id] = 'number';
					break;
				case 'date':
					idType[val.id] = 'Date';
					idInterface[val.id] = 'Date';
					break;
				case 'string':
				case 'texte':
				case 'htmltexte':
				case 'password':
                case 'objectid':
					idType[val.id] = 'string';
					idInterface[val.id] = 'string';
					break;
				case 'boolean':
					idType[val.id] = 'boolean';
					idInterface[val.id] = 'boolean';
					break;
				case 'object':
					idType[val.id] = 'any';
					idInterface[val.id] = 'any';
					break;
				default:
					idType[val.id] = val.name;
					idInterface[val.id] = `Interface.I${val.name}`;
					break;
			}
	        val._child = [] ;
	        val._dep = [] ;
	        if((!val.parentModel) && (!val.isSchema)){
            collections.push(val) ;
            val.mongoCollectionName = pl(val.name) ;
	        }

	        val.fields.forEach((field)=>{
              if(field._class == `subdoc`){
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
	fs.outputJsonSync(`./bdschema/schema.json`, datas) ;
  console.log(`generate Interfaces`) ;
	return fs.outputFile(`./src/lib/modelObj/Interfaces.ts` ,  _.template(interfaceTemplate)({datas:datas , idName:idName}) ) ;
})

.then(()=>{

  console.log(`generate Index`) ;
	return fs.outputFile(`./src/lib/modelObj/Index.ts` ,  _.template(packageTemplate)({datas:datas }) ) ;
})


.then(()=>{
	datas.forEach((val)=>{
    console.log(`generate Model_`+ val.name ) ;
		return fs.outputFile(`./src/lib/modelObj/Model_`+ val.name +`.ts` ,  _.template(classTemplate)({datas:datas , idName:idName , protoSchema:val }) ) ;
	})
})

.then(()=>{
	console.log(`generate Index entities`) ;
	return fs.outputFile(`./src/lib/entities/Index.ts` ,  _.template(entitiespackageTemplate)({datas:datas , idName:idName }) ) ;
})
.then(()=>{
	datas.forEach((val)=>{
    console.log(`generate entity `+ val.name ) ;
		return fs.outputFile(`./src/lib/entities/`+ val.name +`.ts` ,  _.template(entitiesTemplate)({datas:datas , idName:idName , protoSchema:val }) ) ;
	})
})
.then(()=>{
  	var rqViews:any = {} ;
	rqViews.url = `${bddurl}collection/_view/*/output/$pop` ;
	rqViews.json = true ;
	
	return request(rqViews).then(valRq=>{
		if(valRq.code == 200){
			if(valRq.response ){
				views = valRq.response ;
      		}
      		return views ;
	   }else{
	   	throw new Error(valRq.message) ;
	   }
	}).catch(err=>{
		return [] ;
	})
  
})
.then(()=>{
	views.forEach((view)=>{
    idViewObj[view._id] = view ;
    view.pipeline = remapMongoArrOperator(view.pipeline) ;
	})
	allServices.push({name:`Api_plateforme` , path:`/api/Api_plateforme`}) ;
	return fs.outputFile(`./src/httpClient/api/Api_plateforme.ts` ,  _.template(BddApiTemplate)({datas:collections , idName:idName , views:views, idInterface:idInterface }) ) ;
})
.then(()=>{

	allServices.push({name:`Bdd_plateforme` , path:`/api/Bdd_plateforme`}) ;
	return fs.outputFile(`./src/httpClient/api/Bdd_plateforme.ts` ,  _.template(bdd_plateform)({datas:collections , idName:idName , views:views, idInterface:idInterface }) ) ;
})
.then(()=>{

	allServices.push({name:`IPlateforme` , path:`/api/IPlateforme`}) ;
	return fs.outputFile(`./src/httpClient/api/IPlateforme.ts` ,  _.template(api_plateformInterface)({datas:collections , idName:idName , views:views , idInterface:idInterface }) ) ;
})

.then(()=>{
    // ApiExpressRouter
    allServices.push({name:`ApiExpressRouter` , path:`/api/ApiExpressRouter`}) ;
	return fs.outputFile(`./src/httpClient/api/ApiExpressRouter.ts` ,  _.template(ApiExpressRouter)({datas:collections , idName:idName , views:views , idInterface:idInterface }) ) ;

})

.then(()=>{
// collectionInterface
	return fs.outputFile(`./src/collectionInterface.ts` ,  _.template(collectionInterfaceTemplate)({datas:collections , idName:idName , views:views }) ) ;
})
.then(()=>{
  	var rqServices:any = {} ;
	rqServices.url = `${bddurl}collection/SwaggerApi/` ;
	rqServices.json = true ;
	
	return request(rqServices).then(valRq=>{
		if(valRq.code == 200){
			if(valRq.response ){
				services = valRq.response ;
      		}
      		return views ;
	   }else{
	   	throw new Error(valRq.message) ;
	   }
	})
	.catch(err=>{
		return [] ;
	})
  
})
.then((views)=>{
	fs.outputJsonSync(`./bdschema/SwaggerApi.json`, services) ;
	services.forEach((service)=>{
		idServiceObj[service._id] = service ;
		service.name = service.name.replace(/-/g, '_') ;
		console.log(`generate SwaggerApi `+ service.name ) ;
		fs.ensureDirSync(`./dataTest/services/` + service.name) ;
		allServices.push({name:service.name , path:`/services/` + service.name}) ;
		return fs.outputFile(`./src/httpClient/services/`+ service.name +`.ts` ,  _.template(webserviceTemplate)({datas:service , idName:idName , views:views , idObj:idObj , idInterface:idInterface}) ) ;
	})
})
.then((views)=>{
	// fs.outputJsonSync(`./bdschema/SwaggerApi.json`, services) ;
	services.forEach((service)=>{
		idServiceObj[service._id] = service ;
		service.name = service.name.replace(/-/g, '_') ;
		console.log(`generate SwaggerApi `+ service.name ) ;
		fs.ensureDirSync(`./dataTest/services/` + service.name) ;
		// allServices.push({name:service.name , path:`/services/` + service.name}) ;
		return fs.outputFile(`./src/httpClient/services/`+ service.name +`.json` ,  _.template(swaggerserviceTemplate)({datas:datas , service:service, idName:idName , views:views , idObj:idObj , idInterface:idInterface , packageJson:packageJson}) ) ;
	})
})

.then((views)=>{

	return fs.outputFile(`./src/httpClient/serviceIndex.ts` ,  _.template(serviceIndexTemplate)({datas:allServices , idName:idName , views:views , idObj:idObj}) ) ;
	
})
.catch(err =>{
	console.log(err)
})


var remapMongoArrOperator = function (target:any[]){
  let arr:any[] = [] ;
  target.forEach((value)=>{
    if(Util.isArray(value)){
      arr.push(remapMongoArrOperator(value)) ;
    }else if(Util.isObject(value)){
      arr.push(remapMongoOperator(value)) ; 
    }else{
    arr.push(value) ;
    }
})
return arr ;
}
var remapMongoOperator = function (target){
  let obj = {} ;
  for(let propName in target){
    let attName:string = propName 
    if(propName.indexOf("_$") == 0){
      attName = propName.substr(1) ;
    }else if(propName.indexOf("/")>-1){
            attName = propName.replace(/\//gi , ".") ;
        }
    let value:any = target[propName] ;
    if(Util.isArray(value)){
      obj[attName] = remapMongoArrOperator(value) ;
      
    }else if(Util.isObject(value)){
      obj[attName] = remapMongoOperator(value) ;
    }else{
    obj[attName] = value ;
    }
  }
  return obj
}
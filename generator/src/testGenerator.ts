import * as fs from 'fs-extra';
import * as Interfaces from '../../src/lib/modelObj/Interfaces';
fs.ensureDirSync("./dataTest/api/Api_plateforme/");

var schemas: any[] = fs.readJsonSync("./bdschema/schema.json");
var services: any[] = fs.readJsonSync("./bdschema/services.json");
var idToSchema: any = {};
var nbOk:number = 10 ;
var nbErr:number = 10 ;
var idToObject: any = {};
var classNameToId: any = {};


var genrerator = (proto: Interfaces.Iprotoschema):any => {
    var res: any = {};
    if (proto.parentModel) {
       Object.assign(res, genrerator(idToSchema[<string>proto.parentModel]));
    }
    res._class = proto._class;
    proto.fields.forEach((field: Interfaces.Ifield) => {
        switch (field._class) {
            case "string":
            case "texte":
            case "htmltexte":
            case "password":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateText, field);
                } else {
                    res[field.name] = generateText(field);
                }
                break;
            case "number":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateNumber, field);
                } else {
                    res[field.name] = generateNumber(field);
                }
                break;
            case "date":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateDate, field);
                } else {
                    res[field.name] = generateDate(field);
                }
                break;
            case "boolean":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateBoolean, field);
                } else {
                    res[field.name] = generateBoolean(field);
                }
                break;
            case "object":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateObject, field);
                } else {
                    res[field.name] = generateObject(field);
                }
                break;
            case "subdoc":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateSubDoc, field);
                } else {
                    res[field.name] = generateSubDoc(field);
                }
                break;
            case "objectid":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateObjectId, field);
                } else {
                    res[field.name] = generateObjectId(<Interfaces.Iobjectid >field);
                }
                break;
            default:
                break;
        }
    })
    return res ;
}

var generateObjectId = (field:Interfaces.Iobjectid) => {
    let objArr:any[] = classNameToId[idToSchema[field.ref].name]  ;
    var index = Math.floor(Math.random() * objArr.length) ;
    return objArr[index]._id ;
}

var generateSubDoc = (field:Interfaces.Isubdoc) => {
   return genrerator(idToSchema[<string>field.protoSchemaId] )  ;
}



var  generateObject = (firld:Interfaces.Iobject) => {
    return {}  ;
}


var  generateArrayOf = (fct: Function, field: Interfaces.Istring) => {
    var nb: number;
    nb = Math.random() * 100;
    var res: any[] = [];
    for (let index = 0; index < nb; index++) {
        res.push(fct(field));
    }
    return res;
}

var textType: string[] = ["zearaarerz", "zrzererezrezrezrezrezrezrez", "ezrrezrezrzerze ezrez ez"];
var generateText = (field: Interfaces.Istring) => {

    if (field.enum) {
        return field.enum[Math.floor(Math.random() * field.enum.length)];
    } else {
        return textType[Math.floor(Math.random() * textType.length)];
    }
}

var generateBoolean = (field: Interfaces.Iboolean) => {
    return 0 == Math.floor(Math.random() * 2);
}

var generateNumber = (field: Interfaces.Inumber) => {
    // field.min , field.max  , field.step
    var minValue: number;
    var maxValue: number;
    var step: number;
    if (field.min) {
        minValue = field.min
    } else {
        minValue = -100000000000000000000;
    }
    if (field.max) {
        maxValue = field.max;
    } else {
        maxValue = 100000000000000000000;
    }
    if (field.step) {
        step = field.step;
    } else {
        step = 0.00000000000001;
    }

    var delta: number = (maxValue - minValue) / step
    return minValue + Math.floor(Math.random() * delta) * step;
}

var generateDate = (field: Interfaces.Idate) => {
    // field.max , field.min
    var minDate: Date
    if (field.min) {
        minDate = new Date(field.min);
    } else {
        minDate = new Date(0);
    }
    var maxDate: Date
    if (field.max) {
        maxDate = new Date(field.max);
    } else {
        maxDate = new Date("12-12-2030");
    }
    var calcTime: number = maxDate.getTime() - minDate.getTime();

    return new Date(minDate.getTime() + Math.floor(Math.random() * calcTime));
}


var stringObjectId = (): string => {
      var _increment = Math.floor(Math.random() * 16777216)
      var _pid = Math.floor(Math.random() * 65536)
      var _machine = Math.floor(Math.random() * 16777216)
      var _timestamp = Math.floor(new Date().valueOf() / 1000)
  
      if (_increment > 0xffffff) {
        _increment = 0
      }
      var timestamp = _timestamp.toString(16)
      var machine = _machine.toString(16)
      var pid = _pid.toString(16)
      var increment = _increment.toString(16)
      return (
        '00000000'.substr(0, 8 - timestamp.length) +
        timestamp +
        '000000'.substr(0, 6 - machine.length) +
        machine +
        '0000'.substr(0, 4 - pid.length) +
        pid +
        '000000'.substr(0, 6 - increment.length) +
        increment
      )
    }









schemas.forEach((objSeq: Interfaces.Iprotoschema) => {
    fs.ensureDirSync("./dataTest/api/Api_plateforme/" + objSeq.name + "/ok");
    fs.ensureDirSync("./dataTest/api/Api_plateforme/" + objSeq.name + "/err");
    // il faudrait lire le nombre de fichier dans le dossier pour 
    // n'ajouter que le bon nombre de fichier
    idToSchema[objSeq._id] = objSeq;
    classNameToId[objSeq.name] = [] ;
    for (let index = 0; index < nbOk; index++) {
        let obj:any = {
            _id:stringObjectId(),
            _class : objSeq.name 
        }
        idToObject[obj._id] = obj  ;
        classNameToId[objSeq.name].push(obj) ;
        // fs.outputJsonSync("./dataTest/api/Api_plateforme/" + objSeq.name + "/ok/"+ obj._id + ".json" , obj ) ;
    }
    for (let index = 0; index < nbErr; index++) {
        let obj:any = {
            _id:stringObjectId(),
            _class : objSeq.name 
        }
        fs.outputJsonSync("./dataTest/api/Api_plateforme/" + objSeq.name + "/err/"+ obj._id + ".json" , obj ) ;
    }
})

schemas.forEach((objSeq: Interfaces.Iprotoschema) => {
    classNameToId[objSeq.name].forEach((obj)=>{
        Object.assign(obj , genrerator(objSeq))
            fs.outputJsonSync("./dataTest/api/Api_plateforme/" + objSeq.name + "/ok/"+ obj._id + ".json" , obj ) ;
    })
    
})


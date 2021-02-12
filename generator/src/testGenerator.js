"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
fs.ensureDirSync("./dataTest/api/Api_plateforme/");
var schemas = fs.readJsonSync("./bdschema/schema.json");
var services = fs.readJsonSync("./bdschema/services.json");
var idToSchema = {};
var nbOk = 10;
var nbErr = 10;
var idToObject = {};
var classNameToId = {};


var genrerator = (proto) => {
    var res = {};
    if (proto.parentModel) {
        res = Object.assign(res, genrerator(idToSchema[proto.parentModel]));
    }
    res._class = proto._class;
    proto.fields.forEach((field) => {
        switch (field._class) {
            case "string":
            case "texte":
            case "htmltexte":
            case "password":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateText, field);
                }
                else {
                    res[field.name] = generateText(field);
                }
                break;
            case "number":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateNumber, field);
                }
                else {
                    res[field.name] = generateNumber(field);
                }
                break;
            case "date":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateDate, field);
                }
                else {
                    res[field.name] = generateDate(field);
                }
                break;
            case "boolean":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateBoolean, field);
                }
                else {
                    res[field.name] = generateBoolean(field);
                }
                break;
            case "object":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateObject, field);
                }
                else {
                    res[field.name] = generateObject(field);
                }
                break;
            case "subdoc":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateSubDoc, field);
                }
                else {
                    res[field.name] = generateSubDoc(field);
                }
                break;
            case "objectid":
                if (field.isArrayOf) {
                    res[field.name] = generateArrayOf(generateObjectId, field);
                }
                else {
                    res[field.name] = generateObjectId(field);
                }
                break;
            default:
                break;
        }
    });
};
var generateObjectId = (field) => {
    let objArr = classNameToId[idToSchema[field.ref].name];
    var index ;
    var nbRandom = Math.random()  ;
    var nbLength ;
    try {
       
        nbLength =  objArr.length ;
        index = Math.ceil(nbRandom * nbLength );
        return objArr[index]._id;
    } catch (error) {
        console.log(error ,index , nbRandom , nbLength) ;
        return null ;
    }
    
};
var generateSubDoc = (field) => {
    return genrerator(idToSchema[field.protoSchemaId]);
};
var generateObject = (firld) => {
    return {};
};
var generateArrayOf = (fct, field) => {
    var nb;
    nb = Math.random() * 100;
    var res = [];
    for (let index = 0; index < nb; index++) {
        res.push(fct(field));
    }
    return res;
};
var textType = ["zearaarerz", "zrzererezrezrezrezrezrezrez", "ezrrezrezrzerze ezrez ez"];
var generateText = (field) => {
    if (field.enum) {
        return field.enum[Math.ceil(Math.random() * field.enum.length)];
    }
    else {
        return textType[Math.ceil(Math.random() * textType.length)];
    }
};
var generateBoolean = (field) => {
    return 0 == Math.ceil(Math.random() * 2);
};
var generateNumber = (field) => {
    // field.min , field.max  , field.step
    var minValue;
    var maxValue;
    var step;
    if (field.min) {
        minValue = field.min;
    }
    else {
        minValue = -100000000000000000000;
    }
    if (field.max) {
        maxValue = field.max;
    }
    else {
        maxValue = 100000000000000000000;
    }
    if (field.step) {
        step = field.step;
    }
    else {
        step = 0.00000000000001;
    }
    var delta = (maxValue - minValue) / step;
    return minValue + Math.ceil(Math.random() * delta) * step;
};
var generateDate = (field) => {
    // field.max , field.min
    var minDate;
    if (field.min) {
        minDate = new Date(field.min);
    }
    else {
        minDate = new Date(0);
    }
    var maxDate;
    if (field.max) {
        maxDate = new Date(field.max);
    }
    else {
        maxDate = new Date("12-12-2030");
    }
    var calcTime = maxDate.getTime() - minDate.getTime();
    return new Date(minDate.getTime() + Math.ceil(Math.random() * calcTime));
};
var stringObjectId = () => {
    var _increment = Math.floor(Math.random() * 16777216);
    var _pid = Math.floor(Math.random() * 65536);
    var _machine = Math.floor(Math.random() * 16777216);
    var _timestamp = Math.floor(new Date().valueOf() / 1000);
    if (_increment > 0xffffff) {
        _increment = 0;
    }
    var timestamp = _timestamp.toString(16);
    var machine = _machine.toString(16);
    var pid = _pid.toString(16);
    var increment = _increment.toString(16);
    return ('00000000'.substr(0, 8 - timestamp.length) +
        timestamp +
        '000000'.substr(0, 6 - machine.length) +
        machine +
        '0000'.substr(0, 4 - pid.length) +
        pid +
        '000000'.substr(0, 6 - increment.length) +
        increment);
};



schemas.forEach((objSeq) => {
    fs.ensureDirSync("./dataTest/api/Api_plateforme/" + objSeq.name + "/ok");
    fs.ensureDirSync("./dataTest/api/Api_plateforme/" + objSeq.name + "/err");
    // il faudrait lire le nombre de fichier dans le dossier pour 
    // n'ajouter que le bon nombre de fichier
    idToSchema[objSeq._id] = objSeq;
    classNameToId[objSeq.name] = [];
    for (let index = 0; index < nbOk; index++) {
        let obj = {
            _id: stringObjectId(),
            _class: objSeq.name
        };
        idToObject[obj._id] = obj;
        classNameToId[objSeq.name].push(obj);
        fs.outputJsonSync("./dataTest/api/Api_plateforme/" + objSeq.name + "/ok/" + obj._id + ".json", obj);
    }
    for (let index = 0; index < nbErr; index++) {
        let obj = {
            _id: stringObjectId()
        };
        fs.outputJsonSync("./dataTest/api/Api_plateforme/" + objSeq.name + "/ok/" + obj._id + ".json", obj);
    }
});
schemas.forEach((objSeq) => {
    classNameToId[objSeq.name].forEach((obj) => {
        fs.outputJsonSync("./dataTest/api/Api_plateforme/" + objSeq.name + "/ok/" + obj._id + ".json", Object.assign(obj, genrerator(objSeq)));
    });
});


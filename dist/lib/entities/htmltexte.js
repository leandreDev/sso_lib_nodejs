"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_htmltexte = void 0;
const Index = require("./Index");
const string_1 = require("./string");
/**
  champ pour le html
*/
class Entity_htmltexte extends string_1.Entity_string {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'htmltexte' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        string_1.Entity_string.cast(obj, true);
    }
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = string_1.Entity_string.check(target, isCompleteObj, path);
        return err;
    }
    static castQueryParam(path, value) {
        let key = '';
        let subPath = '';
        if (value === null) {
            return null;
        }
        if (path.indexOf('.') === -1) {
            key = path;
        }
        else {
            let arr = path.split('.');
            key = arr.shift();
            subPath = arr.join('.');
            if (subPath === null || subPath.trim() === '') {
                throw new Error(`subPath is empty for ${path} ${value}`);
            }
        }
        if (key === null || key.trim() === '') {
            throw new Error(`key path is empty for ${path} ${value}`);
        }
        switch (key) {
            default:
                return string_1.Entity_string.castQueryParam(key, value);
                break;
        }
    }
    static getClassNameOfProp(path) {
        let key = '';
        let subPath = '';
        if (path.indexOf('.') === -1) {
            key = path;
        }
        else {
            let arr = path.split('.');
            key = arr.shift();
            subPath = arr.join('.');
            if (subPath === null || subPath.trim() === '') {
                throw new Error(`subPath is empty for ${path} `);
            }
        }
        if (key === null || key.trim() === '') {
            throw new Error(`key path is empty for ${path}`);
        }
        switch (key) {
            default:
                return string_1.Entity_string.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_htmltexte = Entity_htmltexte;
//# sourceMappingURL=htmltexte.js.map
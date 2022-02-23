"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Professor_1 = require("./Professor");
const Student_1 = require("./Student");
class Main {
    start() {
        let school = [];
        let p = new Professor_1.Professor('Alexa', 'Ipsum', 90000);
        school.push(p);
        //console.log(school);
        let p2 = new Student_1.Student('Joshua', 'Lorem');
        school.push(p2);
        //console.log(school);
        for (let i = 0; i < school.length; i++) {
            console.log(school[i].toString());
            console.log(school[i].CLASS_ID);
        }
    }
}
exports.Main = Main;

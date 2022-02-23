"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor() {
        super(...arguments);
        this.CLASS_ID = 'STUDENT_CLASS';
        this.classes = [];
    }
    getId() {
        return `S-${this.id}`;
    }
}
exports.Student = Student;

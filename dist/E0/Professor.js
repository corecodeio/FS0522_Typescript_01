"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const Person_1 = require("./Person");
class Professor extends Person_1.Person {
    constructor(name, lastname, salary) {
        super(name, lastname);
        this.name = name;
        this.lastname = lastname;
        this.salary = salary;
        this.CLASS_ID = 'PROFESSOR_CLASS';
    }
    get income() {
        return this.salary;
    }
    set income(newSalary) {
        this.income = newSalary;
    }
    getId() {
        return `P-${this.id}`;
    }
    toString() {
        return `
      ======================================
      ${this.name} ${this.lastname}
      salary: ${this.salary}
      id: ${this.getId()}
      ======================================
      `;
    }
}
exports.Professor = Professor;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const uuid_1 = require("uuid");
class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        this.fullName = '';
        this.id = (0, uuid_1.v4)();
    }
    toString() {
        return `
      ======================================
      ${this.name} ${this.lastname}
      id: ${this.id}
      ======================================
      `;
    }
}
exports.Person = Person;

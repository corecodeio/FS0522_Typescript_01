"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Box_1 = require("./Box");
class Main {
    start() {
        let stringBox = new Box_1.Box('Hola');
        let numberBox = new Box_1.Box(56);
        let booleanBox = new Box_1.Box(true);
        console.log(typeof stringBox.data);
        console.log(typeof numberBox.data);
        console.log(typeof booleanBox.data);
    }
}
exports.Main = Main;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const LinkedList_1 = require("./LinkedList");
class Main {
    start() {
        // FIFO (FIRST IN, FIRST OUT)
        // GARBAGE COLLECTOR
        let list = new LinkedList_1.LinkedList();
        list.add(40);
        list.add(60);
        list.add(100);
        list.add(900000);
        console.log(list.toString());
        console.log(list.size);
        list.remove();
        console.log(list.toString());
        console.log(list.size);
    }
}
exports.Main = Main;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Node_1 = require("./Node");
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    get size() {
        return this.length;
    }
    add(data) {
        if (this.head === null) {
            this.head = new Node_1.Node(data);
        }
        else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new Node_1.Node(data);
        }
        this.length++;
    }
    remove() {
        if (this.head !== null) {
            this.head = this.head.next;
            this.length--;
        }
    }
    toString() {
        if (this.head === null)
            return `[]`;
        let representation = '';
        let node = this.head;
        while (node.next !== null) {
            representation = `${representation}${JSON.stringify(node.data)},`;
            node = node.next;
        }
        representation = `${representation}${JSON.stringify(node.data)}`;
        representation = `[${representation}]`;
        return representation;
    }
}
exports.LinkedList = LinkedList;

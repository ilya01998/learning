"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("./lib/stack");
var utils_1 = require("./lib/utils");
var data = [1, 2, 3];
var stack = (0, utils_1.arrayToStackAdapter)(data);
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
var a = {
    a: 10,
    b: 20,
};
console.log(a, new stack_1.Stack());

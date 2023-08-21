"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToStackAdapter = void 0;
var stack_1 = require("./stack");
function arrayToStackAdapter(array) {
    return new stack_1.Stack(array);
}
exports.arrayToStackAdapter = arrayToStackAdapter;

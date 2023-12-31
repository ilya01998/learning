import {Stack} from './lib/stack';
import {arrayToStackAdapter} from './lib/utils';

const data = [1, 2, 3];
const stack = arrayToStackAdapter<number>(data);

stack.push(4);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

const a = {
    a: 10,
    b: 20,
};

console.log(a, new Stack<number>());

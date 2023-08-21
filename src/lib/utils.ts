import {Stack} from './stack';

export function arrayToStackAdapter<T>(array) {
    return new Stack<T>(array);
}

import {Stack} from './stack';

export function arrayToStackAdapter<T>(array: T[]) {
    return new Stack<T>(array);
}

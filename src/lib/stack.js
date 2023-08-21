"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(_initialData) {
        if (_initialData === void 0) { _initialData = []; }
        this._initialData = _initialData;
    }
    Object.defineProperty(Stack.prototype, "length", {
        get: function () {
            return this._initialData.length;
        },
        enumerable: false,
        configurable: true
    });
    Stack.prototype.push = function (value) {
        this._initialData.push(value);
    };
    Stack.prototype.pop = function () {
        var _a;
        return (_a = this._initialData.pop()) !== null && _a !== void 0 ? _a : null;
    };
    Stack.prototype[Symbol.iterator] = function () {
        return this._initialData.values();
    };
    return Stack;
}());
exports.Stack = Stack;

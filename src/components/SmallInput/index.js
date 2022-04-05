"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.SmallInput = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
function SmallInput(_a) {
    var rest = __rest(_a, []);
    return (<react_native_1.TextInput style={styles_1.styles.container} keyboardType="numeric" {...rest}/>);
}
exports.SmallInput = SmallInput;

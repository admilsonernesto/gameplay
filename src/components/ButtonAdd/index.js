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
exports.ButtonAdd = void 0;
var react_1 = require("react");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var vector_icons_1 = require("@expo/vector-icons");
var styles_1 = require("./styles");
var theme_1 = require("../../global/styles/theme");
function ButtonAdd(_a) {
    var rest = __rest(_a, []);
    return (<react_native_gesture_handler_1.RectButton style={styles_1.styles.container} {...rest}>
      <vector_icons_1.MaterialCommunityIcons name="plus" color={theme_1.theme.colors.heading} size={24}/>
    </react_native_gesture_handler_1.RectButton>);
}
exports.ButtonAdd = ButtonAdd;

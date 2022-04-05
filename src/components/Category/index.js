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
exports.Category = void 0;
var react_1 = require("react");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var theme_1 = require("../../global/styles/theme");
function Category(_a) {
    var title = _a.title, Icon = _a.icon, _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.hasCheckBox, hasCheckBox = _c === void 0 ? false : _c, rest = __rest(_a, ["title", "icon", "checked", "hasCheckBox"]);
    var _d = theme_1.theme.colors, secondary40 = _d.secondary40, secondary50 = _d.secondary50, secondary70 = _d.secondary70, secondary85 = _d.secondary85;
    return (<react_native_gesture_handler_1.RectButton {...rest}>
      <expo_linear_gradient_1.LinearGradient style={styles_1.styles.container} colors={[secondary50, secondary70]}>
        <expo_linear_gradient_1.LinearGradient style={[styles_1.styles.content, { opacity: checked ? 1 : 0.5 }]} colors={[checked ? secondary85 : secondary50, secondary40]}>
          {hasCheckBox &&
            <react_native_1.View style={checked ? styles_1.styles.checked : styles_1.styles.check}/>}

          <Icon width={48} height={48}/>

          <react_native_1.Text style={styles_1.styles.title}>
            {title}
          </react_native_1.Text>
        </expo_linear_gradient_1.LinearGradient>
      </expo_linear_gradient_1.LinearGradient>
    </react_native_gesture_handler_1.RectButton>);
}
exports.Category = Category;

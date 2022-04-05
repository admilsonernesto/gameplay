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
exports.ButtonIcon = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var discord_png_1 = require("../../assets/discord.png");
var styles_1 = require("./styles");
function ButtonIcon(_a) {
    var title = _a.title, rest = __rest(_a, ["title"]);
    return (<react_native_gesture_handler_1.RectButton style={styles_1.styles.container} {...rest}>
      <react_native_1.View style={styles_1.styles.iconWrapper}>
        <react_native_1.Image source={discord_png_1["default"]} style={styles_1.styles.icon}/>
      </react_native_1.View>

      <react_native_1.Text style={styles_1.styles.title}>
        {title}
      </react_native_1.Text>
    </react_native_gesture_handler_1.RectButton>);
}
exports.ButtonIcon = ButtonIcon;
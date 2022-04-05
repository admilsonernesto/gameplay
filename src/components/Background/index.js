"use strict";
exports.__esModule = true;
exports.Background = void 0;
var react_1 = require("react");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var styles_1 = require("./styles");
var theme_1 = require("../../global/styles/theme");
function Background(_a) {
    var children = _a.children;
    var _b = theme_1.theme.colors, secondary80 = _b.secondary80, secondary100 = _b.secondary100;
    return (<expo_linear_gradient_1.LinearGradient style={styles_1.styles.container} colors={[secondary80, secondary100]}>
      {children}
    </expo_linear_gradient_1.LinearGradient>);
}
exports.Background = Background;

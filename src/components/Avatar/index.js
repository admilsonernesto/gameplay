"use strict";
exports.__esModule = true;
exports.Avatar = void 0;
var react_1 = require("react");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var theme_1 = require("../../global/styles/theme");
function Avatar(_a) {
    var urlImage = _a.urlImage;
    var _b = theme_1.theme.colors, secondary50 = _b.secondary50, secondary70 = _b.secondary70;
    return (<expo_linear_gradient_1.LinearGradient style={styles_1.styles.container} colors={[secondary50, secondary70]}>
      <react_native_1.Image source={{ uri: urlImage }} style={styles_1.styles.avatar}/>
    </expo_linear_gradient_1.LinearGradient>);
}
exports.Avatar = Avatar;

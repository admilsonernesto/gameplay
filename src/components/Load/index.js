"use strict";
exports.__esModule = true;
exports.Load = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var theme_1 = require("../../global/styles/theme");
function Load() {
    return (<react_native_1.View style={styles_1.styles.container}>
      <react_native_1.ActivityIndicator size="large" color={theme_1.theme.colors.primary}/>
    </react_native_1.View>);
}
exports.Load = Load;

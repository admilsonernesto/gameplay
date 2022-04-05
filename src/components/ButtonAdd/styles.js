"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var theme_1 = require("../../global/styles/theme");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        height: 48,
        width: 48,
        backgroundColor: theme_1.theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

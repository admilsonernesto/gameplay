"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var theme_1 = require("../../global/styles/theme");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        width: 62,
        height: 66,
        borderRadius: 8,
        backgroundColor: theme_1.theme.colors.discord,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    image: {
        width: 62,
        height: 66
    }
});

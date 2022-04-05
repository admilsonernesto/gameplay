"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var theme_1 = require("../../global/styles/theme");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: theme_1.theme.colors.secondary40,
        color: theme_1.theme.colors.heading,
        borderRadius: 8,
        fontFamily: theme_1.theme.fonts.text400,
        fontSize: 13,
        marginRight: 4,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: theme_1.theme.colors.secondary50
    }
});

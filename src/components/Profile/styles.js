"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var theme_1 = require("../../global/styles/theme");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row'
    },
    greeting: {
        fontFamily: theme_1.theme.fonts.title500,
        fontSize: 24,
        color: theme_1.theme.colors.heading,
        marginRight: 6
    },
    username: {
        fontFamily: theme_1.theme.fonts.title700,
        fontSize: 24,
        color: theme_1.theme.colors.heading
    },
    message: {
        fontFamily: theme_1.theme.fonts.text400,
        color: theme_1.theme.colors.highlight
    }
});

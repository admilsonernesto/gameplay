"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var theme_1 = require("../../global/styles/theme");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontFamily: theme_1.theme.fonts.title700,
        color: theme_1.theme.colors.heading,
        fontSize: 18
    },
    nameStatus: {
        fontFamily: theme_1.theme.fonts.text400,
        color: theme_1.theme.colors.highlight,
        fontSize: 13
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bulletStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 9
    }
});

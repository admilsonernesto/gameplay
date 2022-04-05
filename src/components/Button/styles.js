"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var theme_1 = require("../../global/styles/theme");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme_1.theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: theme_1.theme.colors.heading,
        fontFamily: theme_1.theme.fonts.text500,
        fontSize: 15,
        textAlign: 'center'
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme_1.theme.colors.line
    },
    icon: {
        width: 24,
        height: 18
    }
});

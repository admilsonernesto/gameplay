"use strict";
exports.__esModule = true;
exports.styles = void 0;
var react_native_1 = require("react-native");
var theme_1 = require("../../global/styles/theme");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: 100,
        height: 116,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    title: {
        fontFamily: theme_1.theme.fonts.title700,
        color: theme_1.theme.colors.heading,
        fontSize: 15,
        marginTop: 15
    },
    check: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 12,
        height: 12,
        backgroundColor: theme_1.theme.colors.secondary100,
        borderColor: theme_1.theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 3
    },
    checked: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 10,
        height: 10,
        backgroundColor: theme_1.theme.colors.primary,
        borderRadius: 3
    }
});
